function styleNode(id, css) {
  let el = document.getElementById(id);
  if (!el && css) {
    el = document.createElement('style');
    el.id = id;
    el.innerHTML = css;
    document.head.appendChild(el);
  } else if (el && !css) {
    el.remove();
  }
}

export function applyFeature(key, on) {
  switch (key) {
    case 'contrast':
      styleNode('contrast', on ? `html { filter: contrast(1.2) !important; }` : '');
      break;

    case 'highlightLinks':
      styleNode('highlightLinks', on
        ? `a { border-bottom: 2px solid #FF0000 !important; color: #1976d2 !important; font-weight: 600; background: #fffacf !important; }`
        : '');
      break;

    case 'bigText':
      styleNode('bigText', on ? `html { font-size: 120% !important; }` : '');
      break;

    case 'textSize':
      document.documentElement.style.fontSize = on ? `${on}%` : '';
      break;

    case 'textSpacing':
      styleNode('textSpacing', on
        ? `body, input, textarea { letter-spacing: 0.07em !important; line-height: 1.7 !important; }`
        : '');
      break;

    case 'pauseAnimations':
      styleNode('pauseAnimations', on
        ? `*, *::before, *::after {
             animation-delay: -1ms !important;
             animation-duration: 1ms !important;
             animation-iteration-count: 1 !important;
             transition-duration: 0.001ms !important;
             scroll-behavior: auto !important;
           }`
        : '');
      break;

    case 'hideImages':
      styleNode('hideImages', on
        ? `img, picture, video, svg, figure { visibility: hidden !important; }`
        : '');
      break;

    case 'dyslexiaFont':
      if (on) {
        if (!document.getElementById('opendyslexic-font')) {
          const font = document.createElement('link');
          font.id = 'opendyslexic-font';
          font.rel = 'stylesheet';
          font.href = 'https://cdn.jsdelivr.net/npm/opendyslexic@latest/opendyslexic.css';
          document.head.appendChild(font);
        }
        styleNode('dyslexiaFont', `html { font-family: "OpenDyslexic", Arial, sans-serif !important; }`);
      } else {
        styleNode('dyslexiaFont', '');
        const font = document.getElementById('opendyslexic-font');
        if (font) font.remove();
      }
      break;

    case 'bigCursor':
  styleNode('bigCursor', on
    // .cur files render correctly, png/jpg often ignored for cursors
    ? `html, body, * { cursor: url("https://cur.cursors-4u.net/cursors/cur-2/cur143.cur"), pointer !important; }`
    : '');
  break;

    case 'showTooltips':
      if (on) {
        document.querySelectorAll('img[alt], a[title]').forEach(el => {
          if (!el.getAttribute('data-access-widget-tip')) {
            const tip = document.createElement('span');
            tip.textContent = el.getAttribute('alt') || el.getAttribute('title');
            tip.className = 'access-widget-tooltip';
            tip.style =
              'margin-left:6px;background:#fffce9;color:#444;border:1px solid #e7de7a;font-size:0.97em;padding:2px 6px;border-radius:6px;';
            el.after(tip);
            el.setAttribute('data-access-widget-tip', 'yes');
          }
        });
      } else {
        document.querySelectorAll('.access-widget-tooltip').forEach(el => el.remove());
        document.querySelectorAll('img[alt], a[title]').forEach(el =>
          el.removeAttribute('data-access-widget-tip')
        );
      }
      break;

    case 'outlineHeadings':
      styleNode('outlineHeadings', on
        ? `h1,h2,h3,h4,h5,h6 {
             outline: 3px solid #6661ff;
             outline-offset: 1px;
             background:#ebedff !important;
             box-shadow: 0 0 6px #bdbdfa55;
           }`
        : '');
      break;

    default:
      break;
  }
}
