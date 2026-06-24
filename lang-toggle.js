/* ============================================================
   lang-toggle.js — EN / FR language switcher
   Auto-injects an EN | FR toggle into .utility-right on every
   page. Clicking either label navigates to the same page in
   the other language (toggling the /fr/ prefix in the path)
   and remembers the choice in localStorage so first-time
   visitors who previously chose FR land on the FR version.
   ============================================================ */
(function () {
  var STORAGE_KEY = 'sd_lang';

  // Detect current language from URL path
  var path = window.location.pathname;
  var isFR = /\/fr(\/|$)/.test(path);

  // Auto-redirect first paint if a returning visitor has chosen FR
  // (only when landing on an EN page they haven't manually loaded)
  try {
    var stored = localStorage.getItem(STORAGE_KEY);
    var hasManualChoice = sessionStorage.getItem('sd_lang_manual') === '1';
    if (stored === 'fr' && !isFR && !hasManualChoice) {
      var frUrl = toFR(path) + window.location.search + window.location.hash;
      window.location.replace(frUrl);
      return;
    }
  } catch (e) { /* localStorage may be blocked */ }

  function toFR(p) {
    // Already FR? leave alone
    if (/\/fr(\/|$)/.test(p)) return p;
    // Root → /fr/
    if (p === '/' || p === '') return '/fr/';
    // /foo.html → /fr/foo.html
    // /products/foo.html → /fr/products/foo.html
    // /blog/foo.html → /fr/blog/foo.html
    return '/fr' + (p.charAt(0) === '/' ? '' : '/') + p;
  }

  function toEN(p) {
    if (!/\/fr(\/|$)/.test(p)) return p;
    // /fr/ → /
    // /fr/foo.html → /foo.html
    // /fr/products/foo.html → /products/foo.html
    var stripped = p.replace(/\/fr(\/|$)/, '/');
    if (stripped === '') return '/';
    return stripped;
  }

  // Inject CSS once
  var css = '\
.lang-toggle{display:inline-flex;align-items:center;gap:0;font-family:inherit;font-size:.7rem;letter-spacing:.04em;white-space:nowrap;margin-right:6px}\
.lang-toggle a{color:rgba(255,255,255,.45);padding:2px 6px;text-decoration:none;transition:color .15s ease;cursor:pointer;background:none;border:0;font-family:inherit;font-size:inherit;letter-spacing:inherit}\
.lang-toggle a:hover{color:#fff}\
.lang-toggle a.lang-active{color:#fff;font-weight:600}\
.lang-toggle .lang-sep{color:rgba(255,255,255,.25);padding:0 1px}\
@media(max-width:768px){.lang-toggle{font-size:.66rem;margin-right:4px}.lang-toggle a{padding:2px 5px}}\
';
  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-lang-toggle', '');
  styleEl.appendChild(document.createTextNode(css));
  document.head.appendChild(styleEl);

  function inject() {
    var rights = document.querySelectorAll('.utility-right');
    if (!rights.length) return;
    rights.forEach(function (right) {
      if (right.querySelector('.lang-toggle')) return; // idempotent
      var wrap = document.createElement('span');
      wrap.className = 'lang-toggle';
      wrap.setAttribute('aria-label', 'Language switcher');

      var enLink = document.createElement('a');
      enLink.textContent = 'EN';
      enLink.setAttribute('href', toEN(path) + window.location.search + window.location.hash);
      enLink.setAttribute('hreflang', 'en');
      if (!isFR) enLink.className = 'lang-active';

      var sep = document.createElement('span');
      sep.className = 'lang-sep';
      sep.textContent = '|';

      var frLink = document.createElement('a');
      frLink.textContent = 'FR';
      frLink.setAttribute('href', toFR(path) + window.location.search + window.location.hash);
      frLink.setAttribute('hreflang', 'fr');
      if (isFR) frLink.className = 'lang-active';

      enLink.addEventListener('click', function () {
        try { localStorage.setItem(STORAGE_KEY, 'en'); sessionStorage.setItem('sd_lang_manual', '1'); } catch (e) {}
      });
      frLink.addEventListener('click', function () {
        try { localStorage.setItem(STORAGE_KEY, 'fr'); sessionStorage.setItem('sd_lang_manual', '1'); } catch (e) {}
      });

      wrap.appendChild(enLink);
      wrap.appendChild(sep);
      wrap.appendChild(frLink);

      // Insert at the very beginning of utility-right so it sits left of socials
      right.insertBefore(wrap, right.firstChild);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
