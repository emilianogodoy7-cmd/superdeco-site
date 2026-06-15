/* quote-prefill.js
   Captures product context from any "Request Quote" link click, decorates the
   contact-us URL with ?sku=&name=, and on the contact page reads those params
   to prefill the message + a hidden product_interest field, then smooth-scrolls
   to the quote form. Loaded on all pages that link to or host the form. */
(function () {
  'use strict';

  function readProductContext(linkEl) {
    var bs = linkEl.closest('.bestseller-card');
    if (bs) {
      var bsImg   = bs.querySelector('[data-sku]');
      var bsTitle = bs.querySelector('.bestseller-title');
      return {
        sku:  bsImg   ? (bsImg.getAttribute('data-sku') || '').trim() : '',
        name: bsTitle ? bsTitle.textContent.trim()                    : ''
      };
    }

    var cc = linkEl.closest('.catalogue-card');
    if (cc) {
      var ccSku = cc.querySelector('.catalogue-sku');
      var ccH3  = cc.querySelector('h3');
      return {
        sku:  ccSku ? ccSku.textContent.trim().replace(/^SKU:\s*/i, '') : '',
        name: ccH3  ? ccH3.textContent.trim() : ''
      };
    }

    /* Product subpage hero CTA — whole-collection quote, no specific SKU. */
    if (linkEl.closest('.pd-cta-row')) {
      var h1 = document.querySelector('.pd-info h1') || document.querySelector('h1');
      return { sku: '', name: h1 ? h1.textContent.trim() : '' };
    }

    return null;
  }

  function applyParams(linkEl, ctx) {
    if (!ctx || (!ctx.sku && !ctx.name)) return;
    var href = linkEl.getAttribute('href') || '';
    var hashIdx = href.indexOf('#');
    var hash    = hashIdx >= 0 ? href.slice(hashIdx) : '';
    if (hashIdx >= 0) href = href.slice(0, hashIdx);
    var qIdx = href.indexOf('?');
    var base = qIdx >= 0 ? href.slice(0, qIdx)     : href;
    var qs   = qIdx >= 0 ? href.slice(qIdx + 1)    : '';
    var params;
    try { params = new URLSearchParams(qs); }
    catch (e) { params = new URLSearchParams(); }
    if (ctx.sku  && !params.get('sku'))  params.set('sku',  ctx.sku);
    if (ctx.name && !params.get('name')) params.set('name', ctx.name);
    linkEl.setAttribute('href', base + '?' + params.toString() + hash);
  }

  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href*="contact-us.html"]');
    if (!a) return;
    applyParams(a, readProductContext(a));
  }, true);

  /* ── Contact page: read params, prefill, scroll ─────────────────── */

  function buildMessage(name, sku) {
    var label;
    if (name && sku) label = name + ' (SKU: ' + sku + ')';
    else if (name)   label = name;
    else             label = 'SKU ' + sku;
    return 'Hi, I would like a quote for the following product: ' + label;
  }

  function ensureProductField(form, value) {
    var existing = form.querySelector('input[name="product_interest"]');
    if (existing) { existing.value = value; return; }
    var hidden = document.createElement('input');
    hidden.type  = 'hidden';
    hidden.name  = 'product_interest';
    hidden.value = value;
    form.appendChild(hidden);
  }

  function smoothScrollTo(el) {
    if (!el) return;
    requestAnimationFrame(function () {
      var rect    = el.getBoundingClientRect();
      var headerH = (document.getElementById('header') || {}).offsetHeight || 0;
      window.scrollTo({
        top: window.scrollY + rect.top - headerH - 16,
        behavior: 'smooth'
      });
    });
  }

  function prefillContactPage() {
    var form = document.getElementById('contactForm');
    if (!form) return;

    var params = new URLSearchParams(location.search);
    var sku    = (params.get('sku')  || '').trim();
    var name   = (params.get('name') || '').trim();
    if (!sku && !name) return;

    var label = (name && sku) ? (name + ' (SKU: ' + sku + ')') : (name || sku);
    ensureProductField(form, label);

    var msg = form.querySelector('textarea[name="message"]');
    if (msg && !msg.value.trim()) {
      msg.value = buildMessage(name, sku);
    }

    smoothScrollTo(document.querySelector('.quote-form-card') || form);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', prefillContactPage);
  } else {
    prefillContactPage();
  }
})();
