# Family Book Source (Recovered)

This project was reconstructed from a single bundled export file.

## Run

1. Open this folder in VS Code.
2. Start a local static server from this folder.
   - Example with Node: `npx serve .`
   - Example with Python: `python -m http.server 8080`
3. Open `index.html` through the local server URL.

## Structure

- `index.html`: Main page markup.
- `src/css/main.css`: All extracted styles from the original inline style block.
- `src/js/components/deck-stage.js`: Deck/slide runtime web component.
- `src/js/components/image-slot.js`: Image placeholder web component with persistence.
- `src/js/app/tweaks-panel.jsx`: Reusable edit/tweaks panel UI and tweak utilities.
- `src/js/app/book-customization.jsx`: Book-specific tweak wiring and behavior.
- `vendor/react/*`: External React and ReactDOM runtime.
- `vendor/babel/babel-standalone.min.js`: External Babel runtime for in-browser JSX.
- `assets/fonts/*`: Font assets renamed from bundle IDs.
- `assets/images/bundle-preview.jpg`: Original bundle preview image (not required at runtime).
- `docs/recovery-notes.md`: Recovery assumptions and unresolved certainty notes.

## Caution Areas

- JSX is executed in-browser via Babel Standalone. This preserves behavior but is not optimized for production.
- The original bundle wrapper runtime was removed intentionally; this clean source keeps only the actual app page and dependencies.
- Local image-slot persistence uses a host integration pattern when available. Outside that host, writing sidecar state can be limited.
