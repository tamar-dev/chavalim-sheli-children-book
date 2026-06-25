#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const INPUT = path.join(ROOT, 'index.html');
const OUTPUT = path.join(ROOT, 'book.html');

const MIME_BY_EXT = {
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.mjs': 'application/javascript',
  '.jsx': 'text/babel',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf',
};

function isExternalUrl(u) {
  return /^(?:[a-z]+:|\/\/|#|data:)/i.test(u);
}

function getMime(filePath) {
  return MIME_BY_EXT[path.extname(filePath).toLowerCase()] || 'application/octet-stream';
}

function toDataUri(filePath) {
  const buf = fs.readFileSync(filePath);
  const mime = getMime(filePath);
  return `data:${mime};base64,${buf.toString('base64')}`;
}

function inlineCssUrls(cssText, cssFilePath) {
  const baseDir = path.dirname(cssFilePath);
  return cssText.replace(/url\((['"]?)([^'"\)]+)\1\)/g, (m, q, url) => {
    const raw = url.trim();
    if (!raw || isExternalUrl(raw)) return m;
    const clean = raw.split('?')[0].split('#')[0];
    const abs = path.resolve(baseDir, clean);
    if (!fs.existsSync(abs)) {
      return m;
    }
    return `url(${toDataUri(abs)})`;
  });
}

function inlineStyles(html) {
  return html.replace(/<link\b([^>]*?)\brel=(['"])stylesheet\2([^>]*?)\bhref=(['"])([^'"]+)\4([^>]*)>/gi,
    (full, a1, _qRel, a2, _qHref, href, a3) => {
      if (isExternalUrl(href)) return full;
      const filePath = path.resolve(ROOT, href);
      if (!fs.existsSync(filePath)) return full;
      let css = fs.readFileSync(filePath, 'utf8');
      css = inlineCssUrls(css, filePath);
      css = css.replace(/<\/style/gi, '<\\/style');
      return `<style data-inline-from="${href}">\n${css}\n</style>`;
    });
}

function inlineScripts(html) {
  return html.replace(/<script\b([^>]*?)\bsrc=(['"])([^'"]+)\2([^>]*)>\s*<\/script>/gi,
    (full, before, _q, src, after) => {
      if (isExternalUrl(src)) return full;
      const filePath = path.resolve(ROOT, src);
      if (!fs.existsSync(filePath)) return full;
      let code = fs.readFileSync(filePath, 'utf8');
      code = code.replace(/<\/script/gi, '<\\/script');
      const attrs = `${before || ''} ${after || ''}`.replace(/\s+/g, ' ').trim();
      const attrChunk = attrs ? ` ${attrs}` : '';
      return `<script${attrChunk} data-inline-from="${src}">\n${code}\n</script>`;
    });
}

function inlineImgSrc(html) {
  return html.replace(/(<img\b[^>]*?\bsrc=)(['"])([^'"]+)\2/gi, (m, start, q, src) => {
    if (isExternalUrl(src)) return m;
    const abs = path.resolve(ROOT, src.split('?')[0].split('#')[0]);
    if (!fs.existsSync(abs)) return m;
    return `${start}${q}${toDataUri(abs)}${q}`;
  });
}

function main() {
  if (!fs.existsSync(INPUT)) {
    throw new Error(`Missing input file: ${INPUT}`);
  }

  let html = fs.readFileSync(INPUT, 'utf8');
  html = inlineStyles(html);
  html = inlineScripts(html);
  html = inlineImgSrc(html);

  fs.writeFileSync(OUTPUT, html, 'utf8');
  console.log(`Single HTML exported: ${path.relative(ROOT, OUTPUT)}`);
}

main();
