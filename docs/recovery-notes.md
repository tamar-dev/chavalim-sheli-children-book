# Recovery Notes

- Source origin was a single-file distribution bundle with manifest/template wrappers.
- Recovered app content consists of one page (no multi-page router was active in template payload).
- No runtime iframe/srcdoc payload existed in the recovered page content.
- Outer wrapper had optional iframe-based rendering code for multi-page templates, but this project used the single-page execution path.
- Third-party libraries identified and separated:
  - React development build
  - ReactDOM development build
  - Babel Standalone
- Remaining code in src/js is project/runtime logic from the bundled app.
