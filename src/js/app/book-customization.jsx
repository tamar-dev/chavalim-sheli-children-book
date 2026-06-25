/* global React, ReactDOM, TweaksPanel, TweakSection, TweakText, TweakColor, TweakSlider, useTweaks */

// ── Standalone "edit" button ─────────────────────────────────────────────
// When this file is opened outside the design platform (e.g. shared via
// standalone HTML download), there's no host-provided toolbar. This little
// floating button opens the same Tweaks panel by posting the activate
// message into our own window — the panel's listener picks it up.
function StandaloneEditButton() {
  // Hide button while panel is open
  const [hidden, setHidden] = React.useState(false);
  React.useEffect(() => {
    const syncFromDom = () => setHidden(!!document.querySelector('.twk-panel'));
    const onMsg = (e) => {
      const ty = e?.data?.type;
      if (ty === '__activate_edit_mode') setHidden(true);
      else if (ty === '__deactivate_edit_mode' || ty === '__edit_mode_dismissed') setHidden(false);
      else syncFromDom();
    };
    const mo = new MutationObserver(syncFromDom);
    mo.observe(document.body || document.documentElement, { childList: true, subtree: true });
    syncFromDom();
    window.addEventListener('message', onMsg);
    return () => {
      window.removeEventListener('message', onMsg);
      mo.disconnect();
    };
  }, []);
  const open = () => window.postMessage({ type: '__activate_edit_mode' }, '*');
  if (hidden) return null;
  return (
    <button
      type="button"
      className="standalone-edit-btn"
      onClick={open}
      title="התאמה אישית של הספרון"
      style={{
        position: 'fixed', top: 16, right: 16, zIndex: 9999,
        minWidth: 136,
        background: 'rgba(255, 255, 255, 0.75)',
        color: '#6e5a45',
        border: '1px solid rgba(232, 138, 141, 0.45)',
        borderRadius: 999, padding: '7px 14px 7px 12px',
        fontFamily: '"Varela Round", "Heebo", sans-serif',
        fontSize: 14, fontWeight: 700,
        cursor: 'pointer', direction: 'rtl',
        boxShadow: '0 4px 14px rgba(74,55,37,0.10)',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', gap: 6,
        transition: 'transform .15s ease, box-shadow .15s ease, background .15s ease',
      }}
      onMouseEnter={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
      onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.75)'; e.currentTarget.style.transform = 'translateY(0)'; }}
    >
      <span style={{ fontSize: 14, color: '#e88a8d' }}>✎</span>
      <span>התאמה אישית</span>
    </button>
  );
}

function StandalonePrintButton() {
  const [hidden, setHidden] = React.useState(false);

  React.useEffect(() => {
    const syncFromDom = () => setHidden(!!document.querySelector('.twk-panel'));
    const onMsg = (e) => {
      const ty = e?.data?.type;
      if (ty === '__activate_edit_mode') setHidden(true);
      else if (ty === '__deactivate_edit_mode' || ty === '__edit_mode_dismissed') setHidden(false);
      else syncFromDom();
    };
    const mo = new MutationObserver(syncFromDom);
    mo.observe(document.body || document.documentElement, { childList: true, subtree: true });
    syncFromDom();
    window.addEventListener('message', onMsg);
    return () => {
      window.removeEventListener('message', onMsg);
      mo.disconnect();
    };
  }, []);

  if (hidden) return null;

  return (
    <button
      type="button"
      className="standalone-print-btn"
      onClick={() => window.print()}
      title="הדפסת הספרון"
      style={{
        position: 'fixed', top: 60, right: 16, zIndex: 9999,
        minWidth: 136,
        background: 'rgba(255, 255, 255, 0.75)',
        color: '#6e5a45',
        border: '1px solid rgba(232, 138, 141, 0.45)',
        borderRadius: 999, padding: '7px 14px 7px 12px',
        fontFamily: '"Varela Round", "Heebo", sans-serif',
        fontSize: 14, fontWeight: 700,
        cursor: 'pointer', direction: 'rtl',
        boxShadow: '0 4px 14px rgba(74,55,37,0.10)',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', gap: 6,
        transition: 'transform .15s ease, box-shadow .15s ease, background .15s ease',
      }}
      onMouseEnter={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
      onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.75)'; e.currentTarget.style.transform = 'translateY(0)'; }}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#e88a8d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M6 9V3h12v6"></path>
        <rect x="6" y="14" width="12" height="7" rx="1"></rect>
        <rect x="3" y="9" width="18" height="8" rx="2"></rect>
        <circle cx="17" cy="13" r="1"></circle>
      </svg>
      <span>הדפסה</span>
    </button>
  );
}

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "familyName": "",
  "numChildren": 4,
  "child1": "",
  "child2": "",
  "child3": "",
  "child4": "",
  "child5": "",
  "child6": "",
  "child7": "",
  "child8": "",
  "child9": "",
  "child10": "",
  "kidsCollective": "",
  "helper": "",
  "date1": "(בערך ב____)",
  "date2": "(בערך ב____)",
  "palette": ["#f7c6c7", "#c7e0c0", "#c7dff0", "#fce5a5"]
}/*EDITMODE-END*/;

const PALETTES = [
  ["#f7c6c7", "#c7e0c0", "#c7dff0", "#fce5a5"], // soft pastels (default)
  ["#ffd6a5", "#ffadad", "#caffbf", "#9bf6ff"], // bright candy
  ["#e9d5da", "#c5dca0", "#a7c4e0", "#f4d491"], // muted earthy
  ["#fcd5ce", "#cdb4db", "#bde0fe", "#ffc8dd"], // dreamy lilac/pink
];

const CHILD_COLORS = ['sage', 'sky', 'butter', 'lilac', 'peach', 'rose2', 'mint', 'coral', 'indigo', 'olive'];
const STORAGE_KEY = 'hg-storybook-tweaks-v1';

// ── Persistence: load any saved values from localStorage (for shared copies) ──
function loadInitial() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return { ...TWEAK_DEFAULTS, ...JSON.parse(raw) };
  } catch (_) {}
  return TWEAK_DEFAULTS;
}

const TweaksApp = () => {
  const [t, setTweak] = useTweaks(loadInitial());

  // Persist every change to localStorage so other viewers of a shared file
  // keep their edits across reloads.
  React.useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(t)); } catch (_) {}
  }, [t]);

  // ── 1) Family / kids-collective / helper placeholders ──
  React.useEffect(() => {
    document.querySelectorAll('.placeholder-name').forEach(el => {
      if (!el.dataset.origText) el.dataset.origText = el.textContent;
    });
    const skipSel = CHILD_COLORS.map(c => `:not(.${c})`).join('');
    document.querySelectorAll(`.placeholder-name${skipSel}`).forEach(el => {
      const orig = el.dataset.origText;
      if (el.dataset.fixed === 'helper') {
        if (t.helper) { el.textContent = t.helper; el.style.borderStyle = 'solid'; }
        else { el.textContent = orig; el.style.borderStyle = ''; }
      } else if (orig === 'שם המשפחה' && t.familyName) {
        el.textContent = t.familyName;
        el.style.borderStyle = 'solid';
      } else if (orig === 'שמות הילדים' && t.kidsCollective) {
        el.textContent = t.kidsCollective;
        el.style.borderStyle = 'solid';
      } else if (orig !== 'שם המשפחה' && orig !== 'שמות הילדים') {
        // leave (helper handled above)
      } else {
        el.textContent = orig;
        el.style.borderStyle = '';
      }
    });
  }, [t.familyName, t.kidsCollective, t.helper]);

  // ── 2) Dynamic kids list on page 2 ──
  React.useEffect(() => {
    const host = document.getElementById('kids-list');
    if (!host) return;
    const n = Math.max(1, Math.min(CHILD_COLORS.length, t.numChildren | 0));
    const names = Array.from({ length: CHILD_COLORS.length }, (_, i) => t[`child${i + 1}`]);
    host.innerHTML = '';
    for (let i = 0; i < n; i++) {
      const span = document.createElement('span');
      span.className = `placeholder-name ${CHILD_COLORS[i]}`;
      const val = names[i];
      if (val) {
        span.textContent = val;
        span.style.borderStyle = 'solid';
      } else {
        span.textContent = 'שם';
      }
      if (i > 0) {
        const sep = document.createTextNode(i === n - 1 ? ' ו־' : ', ');
        host.appendChild(sep);
      }
      host.appendChild(span);
    }
  }, [t.numChildren, t.child1, t.child2, t.child3, t.child4, t.child5, t.child6, t.child7, t.child8, t.child9, t.child10]);

  // ── 3) Editable timeline dates ──
  React.useEffect(() => {
    const map = { date1: t.date1, date2: t.date2 };
    Object.entries(map).forEach(([key, val]) => {
      const el = document.querySelector(`[data-tweak="${key}"]`);
      if (el && typeof val === 'string' && val.trim()) el.textContent = val;
    });
  }, [t.date1, t.date2]);

  // ── 4) Palette ──
  React.useEffect(() => {
    const root = document.documentElement;
    if (Array.isArray(t.palette) && t.palette.length >= 4) {
      root.style.setProperty('--rose', t.palette[0]);
      root.style.setProperty('--sage', t.palette[1]);
      root.style.setProperty('--sky',  t.palette[2]);
      root.style.setProperty('--butter', t.palette[3]);
    }
  }, [t.palette]);

  const n = Math.max(1, Math.min(CHILD_COLORS.length, t.numChildren | 0));
  const colorLabels = ['ירוק', 'כחול', 'צהוב', 'סגול', 'כתום', 'ורוד', 'מנטה', 'אלמוג', 'אינדיגו', 'זית'];

  return (
    <TweaksPanel title="התאמה אישית">
      <TweakSection label="שם המשפחה">
        <TweakText label="שם המשפחה" value={t.familyName} onChange={v => setTweak('familyName', v)} placeholder="כהן" />
      </TweakSection>

      <TweakSection label="הילדים">
        <TweakSlider label="כמה ילדים?" value={n} min={1} max={10} step={1} onChange={v => setTweak('numChildren', v)} />
        {Array.from({ length: n }).map((_, i) => (
          <TweakText
            key={i}
            label={`ילד/ה ${i + 1} (${colorLabels[i]})`}
            value={t[`child${i + 1}`] || ''}
            onChange={v => setTweak(`child${i + 1}`, v)}
            placeholder="שם"
          />
        ))}
        <TweakText
          label="שמות הילדים יחד"
          value={t.kidsCollective}
          onChange={v => setTweak('kidsCollective', v)}
          placeholder="לילדים שלה"
        />
      </TweakSection>

      <TweakSection label="עזרה (עמוד 5)">
        <TweakText label="מי עוזר?" value={t.helper} onChange={v => setTweak('helper', v)} placeholder="סבתא / דודה..." />
      </TweakSection>

      <TweakSection label="תאריכים (עמוד 10)">
        <TweakText label="בעוד תקופה…" value={t.date1} onChange={v => setTweak('date1', v)} placeholder="(בערך ב____)" />
        <TweakText label="ועוד כמה חודשים…" value={t.date2} onChange={v => setTweak('date2', v)} placeholder="(בערך ב____)" />
      </TweakSection>

      <TweakSection label="פלטת צבעים">
        <TweakColor label="ערכת צבעים" value={t.palette} onChange={v => setTweak('palette', v)} options={PALETTES} />
      </TweakSection>
    </TweaksPanel>
  );
};

const root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.createRoot(root).render(
  <React.Fragment>
    <StandaloneEditButton />
    <StandalonePrintButton />
    <TweaksApp />
  </React.Fragment>
);
