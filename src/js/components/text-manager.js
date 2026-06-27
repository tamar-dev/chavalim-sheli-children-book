/**
 * text-manager.js
 * Manages page text content editing and persistence
 * Stores user edits in localStorage under 'book-page-texts'
 */

const TEXT_STORAGE_KEY = 'book-page-texts';
let INLINE_EDIT_MODE = false;
const EDITABLE_ELEMENTS = new Set();

/**
 * Initialize text manager on page load
 * Restores saved text from localStorage
 */
function initTextManager() {
  const savedTexts = getStoredTexts();
  
  if (Object.keys(savedTexts).length > 0) {
    applyStoredTexts(savedTexts);
  }
  
  // Listen for text update messages from tweaks panel
  window.addEventListener('message', (e) => {
    if (e.data?.type === '__update_page_text') {
      const { elementId, text } = e.data;
      updatePageText(elementId, text);
    }
  });
}

/**
 * Get all stored texts from localStorage
 */
function getStoredTexts() {
  try {
    const data = localStorage.getItem(TEXT_STORAGE_KEY);
    return data ? JSON.parse(data) : {};
  } catch (e) {
    console.error('Failed to load stored texts:', e);
    return {};
  }
}

/**
 * Save text to localStorage
 * @param {string} elementId - ID of element being edited
 * @param {string} text - New text content
 */
function saveText(elementId, text) {
  try {
    const texts = getStoredTexts();
    texts[elementId] = text;
    localStorage.setItem(TEXT_STORAGE_KEY, JSON.stringify(texts));
    return true;
  } catch (e) {
    console.error('Failed to save text:', e);
    return false;
  }
}

/**
 * Apply stored texts to page elements
 * @param {object} texts - Object mapping elementId to text content
 */
function applyStoredTexts(texts) {
  Object.entries(texts).forEach(([elementId, text]) => {
    updatePageText(elementId, text);
  });
}

/**
 * Update a page element with new text
 * @param {string} elementId - ID of element to update
 * @param {string} text - New text content
 */
function updatePageText(elementId, text) {
  const element = document.getElementById(elementId);
  if (!element) {
    console.warn(`Element with ID "${elementId}" not found`);
    return false;
  }
  
  // Preserve innerHTML for elements with markup, otherwise set textContent
  if (element.dataset.preserveMarkup === 'true') {
    element.innerHTML = text;
  } else {
    element.textContent = text;
  }
  
  // Save to localStorage
  saveText(elementId, text);
  
  return true;
}

/**
 * Get current text from an element
 * @param {string} elementId - ID of element
 */
function getPageText(elementId) {
  const element = document.getElementById(elementId);
  if (!element) return '';
  return element.dataset.preserveMarkup === 'true' ? element.innerHTML : element.textContent;
}

/**
 * Clear all stored texts
 */
function clearAllTexts() {
  try {
    localStorage.removeItem(TEXT_STORAGE_KEY);
    return true;
  } catch (e) {
    console.error('Failed to clear texts:', e);
    return false;
  }
}

/**
 * Export texts for backup
 */
function exportTexts() {
  return getStoredTexts();
}

/**
 * Import texts from backup
 */
function importTexts(textsData) {
  try {
    localStorage.setItem(TEXT_STORAGE_KEY, JSON.stringify(textsData));
    applyStoredTexts(textsData);
    return true;
  } catch (e) {
    console.error('Failed to import texts:', e);
    return false;
  }
}

/**
 * Enable/disable inline edit mode for page elements
 * @param {boolean} enabled - Whether to enable inline editing
 */
function setInlineEditMode(enabled) {
  INLINE_EDIT_MODE = enabled;
  
  document.querySelectorAll('[data-editable]').forEach(el => {
    if (enabled) {
      el.style.cursor = 'text';
      el.style.outline = '2px dashed rgba(232, 138, 141, 0.3)';
      el.style.outlineOffset = '2px';
      el.style.borderRadius = '4px';
      el.style.padding = '4px';
      el.addEventListener('click', handleInlineEdit);
    } else {
      el.style.cursor = '';
      el.style.outline = '';
      el.style.outlineOffset = '';
      el.style.padding = '';
      el.removeEventListener('click', handleInlineEdit);
    }
  });
}

/**
 * Handle inline text editing
 */
function handleInlineEdit(e) {
  if (!INLINE_EDIT_MODE) return;
  
  const element = e.currentTarget;
  const elementId = element.id;
  if (!elementId) return;
  
  const currentText = getPageText(elementId);
  const newText = prompt('עדכן את הטקסט:', currentText);
  
  if (newText !== null && newText !== currentText) {
    updatePageText(elementId, newText);
    // Dispatch custom event for UI update
    window.dispatchEvent(new CustomEvent('text-updated', { 
      detail: { elementId, text: newText } 
    }));
  }
}

/**
 * Get inline edit mode status
 */
function isInlineEditMode() {
  return INLINE_EDIT_MODE;
}

/**
 * Register element as editable
 */
function registerEditableElement(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.setAttribute('data-editable', 'true');
    EDITABLE_ELEMENTS.add(elementId);
  }
}

// Initialize on DOMContentLoaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTextManager);
} else {
  initTextManager();
}

// Expose globally for tweaks panel
window.textManager = {
  getStoredTexts,
  saveText,
  getPageText,
  updatePageText,
  applyStoredTexts,
  clearAllTexts,
  exportTexts,
  importTexts,
  setInlineEditMode,
  isInlineEditMode,
  registerEditableElement
};
