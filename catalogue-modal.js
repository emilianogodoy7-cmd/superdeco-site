/* catalogue-modal.js — hover crossfade + modal gallery for SKU catalogue cards
   Each SKU maps to its OWN isolated image array — no cross-SKU image sharing. */

var SKU_DATA = {

  /* ── INDOOR WALL PANELS ──────────────────────────────────────────────── */

  /* Dark Caramel — LK 3009 */
  'LK 3009': { images: [
    '../images/products/indoor-wall-panels/1.jpg',
    '../images/products/indoor-wall-panels/Imagen-de-WhatsApp-2025-04-03-a-las-10.14.54_9d2c6388.jpg',
    '../images/products/indoor-wall-panels/Imagen-de-WhatsApp-2025-04-03-a-las-10.14.55_2fd893d2.jpg',
    '../images/products/indoor-wall-panels/Imagen-de-WhatsApp-2025-04-03-a-las-10.14.53_ace02f6e.jpg'
  ]},

  /* Dark Oak — LK 1019 */
  'LK 1019': { images: [
    '../images/products/indoor-wall-panels/5.jpg',
    '../images/products/indoor-wall-panels/ppure-black-3.jpg'
  ]},

  /* Ash Wood — LK 1018 */
  'LK 1018': { images: [
    '../images/products/indoor-wall-panels/ash-woos.png',
    '../images/products/indoor-wall-panels/ChatGPT-Image-25-jul-2025-10_25_56-p.m.png',
    '../images/products/indoor-wall-panels/ChatGPT-Image-25-jul-2025-09_43_06-p.m.png',
    '../images/products/indoor-wall-panels/ChatGPT-Image-25-jul-2025-10_30_48-p.m.png'
  ]},

  /* Calacatta White — LK-4005 */
  'LK-4005': { images: [
    '../images/products/indoor-wall-panels/6.jpg',
    '../images/products/indoor-wall-panels/Imagen-de-WhatsApp-2024-06-03-a-las-20.36.24_aee0334e.jpg',
    '../images/products/indoor-wall-panels/WhatsApp-Image-2026-01-14-at-1.01.45-PM.jpeg'
  ]},

  /* Black Gold — LK-4010 */
  'LK-4010': { images: [
    '../images/products/indoor-wall-panels/7.jpg',
    '../images/products/indoor-wall-panels/ChatGPT-Image-25-jul-2025-11_25_18-p.m.png',
    '../images/products/indoor-wall-panels/ChatGPT-Image-25-jul-2025-11_14_43-p.m.png',
    '../images/products/indoor-wall-panels/ChatGPT-Image-25-jul-2025-11_09_20-p.m.png'
  ]},

  /* Costa del Sol — 58956-6 */
  '58956-6': { images: [
    '../images/products/indoor-wall-panels/9.jpg',
    '../images/products/indoor-wall-panels/Imagen-de-WhatsApp-2025-04-03-a-las-10.15.13_4d6a012a.jpg',
    '../images/products/indoor-wall-panels/Imagen-de-WhatsApp-2025-04-03-a-las-10.15.13_69375899.jpg'
  ]},

  /* Gold Premium — PS-D15020 */
  'PS-D15020': { images: [
    '../images/products/indoor-wall-panels/2.jpg',
    '../images/products/indoor-wall-panels/Esquina-Moderna-de-Oficina-Elegante.png',
    '../images/products/indoor-wall-panels/Tienda-de-joyeria-elegante.png',
    '../images/products/indoor-wall-panels/Lobby-elegante-con-detalles-dorados-y-verdes.png',
    '../images/products/indoor-wall-panels/Oficina-moderna-con-detalles-elegantes.png'
  ]},

  /* Innovation Grey — LK 1021 */
  'LK 1021': { images: [
    '../images/products/indoor-wall-panels/10.jpg',
    '../images/products/indoor-wall-panels/ChatGPT-Image-13-jul-2025-05_12_26-p.m.png',
    '../images/products/indoor-wall-panels/ChatGPT-Image-26-jul-2025-11_39_37-a.m.png',
    '../images/products/indoor-wall-panels/ChatGPT-Image-26-jul-2025-11_39_28-a.m.png'
  ]},

  /* Classic Wood — LK 1017 */
  'LK 1017': { images: [
    '../images/products/indoor-wall-panels/madera-clasica.png',
    '../images/products/indoor-wall-panels/2-2.png',
    '../images/products/indoor-wall-panels/1-1.png',
    '../images/products/indoor-wall-panels/para-subir.png'
  ]},

  /* Walnuts — LK-1016 */
  'LK-1016': { images: [
    '../images/products/indoor-wall-panels/walnuts-3.png',
    '../images/products/indoor-wall-panels/Imagen-de-WhatsApp-2025-09-18-a-las-10.32.32_7037e3b1.jpg',
    '../images/products/indoor-wall-panels/Imagen-de-WhatsApp-2025-09-18-a-las-10.32.21_5e2035e4.jpg',
    '../images/products/indoor-wall-panels/walnuts-1.png',
    '../images/products/indoor-wall-panels/65656565.png',
    '../images/products/indoor-wall-panels/walnuts-23.png'
  ]},

  /* White Ash — 0017-46 */
  '0017-46': { images: [
    '../images/products/indoor-wall-panels/3.jpg',
    '../images/products/indoor-wall-panels/descarga-34.jpeg',
    '../images/products/indoor-wall-panels/Imagen-de-WhatsApp-2025-05-15-a-las-14.27.31_bc3c7bc2.jpg',
    '../images/products/indoor-wall-panels/5de8bea447f242a1859ff466497c82a9.jpg',
    '../images/products/indoor-wall-panels/IMG-20250515-WA0010.jpg'
  ]},

  /* Pure Black — LK 8001 */
  'LK 8001': { images: [
    '../images/products/indoor-wall-panels/12.jpg',
    '../images/products/indoor-wall-panels/ppure-black2.jpg',
    '../images/products/indoor-wall-panels/ppure-black.jpg'
  ]},

  /* Nogal — LK8152 (only 1 image on US site, no hover) */
  'LK8152': { images: [
    '../images/products/indoor-wall-panels/nogal-photoshop.png'
  ]},

  /* ── OUTDOOR WALL PANELS ─────────────────────────────────────────────── */

  /* TEKA — K219-26T */
  'K219-26T': { images: [
    '../images/products/outdoor-wall-panels/16.jpg',
    '../images/products/outdoor-wall-panels/teka.jpg',
    '../images/products/outdoor-wall-panels/Arkowood-Paineis-Ripados.jpeg',
    '../images/products/outdoor-wall-panels/Painel-Ripado-Ipe.jpeg',
    '../images/products/outdoor-wall-panels/Painel-Ripado-Freijo.jpeg',
    '../images/products/outdoor-wall-panels/Bardage-1.jpeg'
  ]},

  /* Grey — K219-26G */
  'K219-26G': { images: [
    '../images/products/outdoor-wall-panels/17.jpg',
    '../images/products/outdoor-wall-panels/ChatGPT-Image-17-jul-2025-11_21_06-p.m.png',
    '../images/products/outdoor-wall-panels/ChatGPT-Image-17-jul-2025-10_23_51-p.m.png',
    '../images/products/outdoor-wall-panels/ChatGPT-Image-17-jul-2025-10_20_29-p.m.png',
    '../images/products/outdoor-wall-panels/ChatGPT-Image-17-jul-2025-10_48_41-p.m.png'
  ]},

  /* Dark Brown — K219-26B */
  'K219-26B': { images: [
    '../images/products/outdoor-wall-panels/15.jpg',
    '../images/products/outdoor-wall-panels/Imagen-de-WhatsApp-2025-07-13-a-las-19.19.45_8da8cb16-1.jpg',
    '../images/products/outdoor-wall-panels/Imagen-de-WhatsApp-2025-07-16-a-las-10.04.05_6e0a41c1-1.jpg',
    '../images/products/outdoor-wall-panels/Imagen-de-WhatsApp-2025-07-16-a-las-10.04.05_08dfed5d-1.jpg',
    '../images/products/outdoor-wall-panels/IMG-20250713-WA0018.jpg',
    '../images/products/outdoor-wall-panels/IMG-20250713-WA0015-1.jpg',
    '../images/products/outdoor-wall-panels/IMG-20250713-WA0014.jpg',
    '../images/products/outdoor-wall-panels/Imagen-de-WhatsApp-2025-07-29-a-las-13.25.01_b5797b6d.jpg',
    '../images/products/outdoor-wall-panels/Imagen-de-WhatsApp-2025-07-11-a-las-11.21.47_74c8d6e4.jpg',
    '../images/products/outdoor-wall-panels/Imagen-de-WhatsApp-2025-07-11-a-las-11.21.47_c47404d9.jpg',
    '../images/products/outdoor-wall-panels/Imagen-de-WhatsApp-2025-07-16-a-las-10.30.20_131ab35a.jpg',
    '../images/products/outdoor-wall-panels/Imagen-de-WhatsApp-2025-07-29-a-las-13.25.01_b5797b6d-1.jpg'
  ]},

  /* ── ACOUSTIC PANELS ─────────────────────────────────────────────────── */
  'LK-3008':  { images: [
    '../images/products/acoustic-panels/wall-panels-acoustic-22_02.jpg',
    '../images/products/acoustic-panels/superdecoimport_1753491465075.jpg',
    '../images/products/acoustic-panels/superdecoimport_1753491467169.jpg',
    '../images/products/acoustic-panels/superdecoimport_1753491466804.jpg',
    '../images/products/acoustic-panels/superdecoimport_1753491466372.jpg',
    '../images/products/acoustic-panels/superdecoimport_1753491465932.jpg',
  ] },
  'LK-H1018': { images: [
    '../images/products/acoustic-panels/wall-panels-acoustic_01.jpg',
    '../images/products/acoustic-panels/Imagen-de-WhatsApp-2025-09-13-a-las-13.53.31_1c650a9c.jpg',
    '../images/products/acoustic-panels/akupanel-stone-showcase2-1536x1536-1.jpg',
    '../images/products/acoustic-panels/akupanel-stone-showcase-1536x1536-1.jpg',
    '../images/products/acoustic-panels/Akupanel_Stone_240_3-1536x1536-1.jpg',
  ] },
  'LK-H8152': { images: [
    '../images/products/acoustic-panels/wall-panels-acoustic_03.jpg',
    '../images/products/acoustic-panels/akupanel-clay-showcase2-1536x1536-1.jpg',
    '../images/products/acoustic-panels/akupanel-clay-showcase-1536x1536-1.jpg',
  ] },
  'LK-H8140': { images: [
    '../images/products/acoustic-panels/wall-panels-acoustic_02.jpg',
    '../images/products/acoustic-panels/Akupanel_ClassicOakBlackFelt_240_9.jpg',
    '../images/products/acoustic-panels/akupanel-classic-oak-showcase2.jpg',
    '../images/products/acoustic-panels/classic-grey-300-cgi.jpg',
  ] },

  /* ── MIRROR PVC ───────────────────────────────────────────────────────── */
  'WPC-01': { images: ['../images/products/mirror-pvc/25.jpg', '../images/products/mirror-pvc/classic.png'] },
  'WPC-02': { images: ['../images/products/mirror-pvc/26.jpg', '../images/products/mirror-pvc/steel.jpg'] },
  'WPC-03': { images: ['../images/products/mirror-pvc/27.jpg', '../images/products/mirror-pvc/gold.jpg'] },
  'WPC-04': { images: ['../images/products/mirror-pvc/28.jpg', '../images/products/mirror-pvc/pink.png'] },

  /* ── MARBLE PVC HIGH GLOSS ───────────────────────────────────────────── */
  'KL8233':    { images: ['../images/products/marble-pvc-high-gloss/31.jpg', '../images/products/marble-pvc-high-gloss/negro-marquina.jpg'] },
  'KL8226':    { images: ['../images/products/marble-pvc-high-gloss/32.jpg', '../images/products/marble-pvc-high-gloss/dark-london.jpg'] },
  'LJB0001T':  { images: ['../images/products/marble-pvc-high-gloss/33.jpg', '../images/products/marble-pvc-high-gloss/blanco-gold-carrara.jpg'] },
  'R352':      { images: ['../images/products/marble-pvc-high-gloss/34.jpg', '../images/products/marble-pvc-high-gloss/blanco-calacatta.jpg', '../images/products/marble-pvc-high-gloss/Sala-moderna-con-detalles-elegantes.png'] },
  'LJ24807-2': { images: ['../images/products/marble-pvc-high-gloss/35.jpg', '../images/products/marble-pvc-high-gloss/grey-gold.jpg'] },
  'KL8231':    { images: ['../images/products/marble-pvc-high-gloss/36.jpg', '../images/products/marble-pvc-high-gloss/dark-gold.jpg'] },
  'DY2424':    { images: ['../images/products/marble-pvc-high-gloss/ChatGPT-Image-26-sept-2025-05_37_53-p.m.png', '../images/products/marble-pvc-high-gloss/ChatGPT-Image-1-oct-2025-01_56_18-a.m.png'] },

  /* ── METAL PVC ───────────────────────────────────────────────────────── */
  'MMB-03': { images: [
    '../images/products/metal-pvc/bronce-metal-2.png',
    '../images/products/metal-pvc/ChatGPT-Image-25-jul-2025-07_38_37-p.m.png',
    '../images/products/metal-pvc/ChatGPT-Image-25-jul-2025-07_46_17-p.m.png',
    '../images/products/metal-pvc/ChatGPT-Image-25-jul-2025-07_46_31-p.m.png',
    '../images/products/metal-pvc/ChatGPT-Image-25-jul-2025-07_46_26-p.m.png',
  ] },
  'MMS-04': { images: [
    '../images/products/metal-pvc/silver.png',
    '../images/products/metal-pvc/ChatGPT-Image-25-jul-2025-07_58_33-p.m.png',
    '../images/products/metal-pvc/ChatGPT-Image-25-jul-2025-08_38_30-p.m.png',
    '../images/products/metal-pvc/ChatGPT-Image-25-jul-2025-08_37_09-p.m.png',
    '../images/products/metal-pvc/ChatGPT-Image-25-jul-2025-08_37_05-p.m.png',
  ] },

  /* ── FLAT WALL PANELS ────────────────────────────────────────────────── */
  'FLAT-LK8001':  { images: ['../images/products/flat-wall-panels/pure-black.png',            '../images/products/flat-wall-panels/ChatGPT-Image-21-ago-2025-01_09_33-a.m.png', '../images/products/flat-wall-panels/ChatGPT-Image-21-ago-2025-12_23_59-a.m.png'] },
  'FLAT-LK4016':  { images: ['../images/products/flat-wall-panels/walnut-2.png',              '../images/products/flat-wall-panels/wallnut.png'] },
  'FLAT-58956-6': { images: ['../images/products/flat-wall-panels/24.jpg',                    '../images/products/flat-wall-panels/costa-del-sol.jpg'] },
  'FLAT-4010':    { images: ['../images/products/flat-wall-panels/23.jpg',                    '../images/products/flat-wall-panels/dark-gold.jpg'] },
  'FLAT-LK1018':  { images: ['../images/products/flat-wall-panels/22.jpg',                    '../images/products/flat-wall-panels/ash-wood.jpg'] },
  'FLAT-LK1019':  { images: ['../images/products/flat-wall-panels/21.jpg',                    '../images/products/flat-wall-panels/dark-oak.jpg'] },
  'FLAT-LK1017':  { images: ['../images/products/flat-wall-panels/madera-clasica-flat-2.png', '../images/products/flat-wall-panels/ChatGPT-Image-17-jul-2025-07_42_51-p.m.png'] },
  'FLAT-0017-46': { images: ['../images/products/flat-wall-panels/19.jpg',                    '../images/products/flat-wall-panels/white-ash.jpg'] },
  'FLAT-LK3009':  { images: ['../images/products/flat-wall-panels/18.jpg',                    '../images/products/flat-wall-panels/dark-caramel.jpg'] },

  /* ── WPC FENCE ───────────────────────────────────────────────────────── */
  'WPC-FENCE-001': { images: ['../images/products/wpc-fence/fences.png', '../images/products/wpc-fence/Casa-moderna-con-cerca-elegante.png', '../images/products/wpc-fence/Vivienda-moderna-con-cerca-oscura.png'] },

  /* ── PARTITION DIVIDERS ──────────────────────────────────────────────── */
  'LK-8152': { images: ['../images/products/partition-dividers/nogal-americano.png', '../images/products/partition-dividers/Sala-minimalista-con-vigas-de-PVC.png', '../images/products/partition-dividers/Sala-de-estar-moderna-con-lamas-de-madera.png'] },
  'LK-8140': { images: ['../images/products/partition-dividers/aregue.png',          '../images/products/partition-dividers/Sala-moderna-con-divisores-de-madera-1.png'] },

  /* ── ACCESSORIES ─────────────────────────────────────────────────────── */
  'CORNERS-T': { images: ['../images/products/accessories/esquineros-1.png',          '../images/products/accessories/para-cambiar-volteado.png'] },
  'LTI-LTD':   { images: ['../images/products/accessories/lineas-de-terminacion-1.png','../images/products/accessories/lineas-de-terminacion-2.png'] },
  'SP-002':    { images: ['../images/products/accessories/3-s.png',    '../images/products/accessories/silver-profile-2.png',   '../images/products/accessories/Sala-moderna-con-pantalla-plana-y-plantas.png'] },
  'BP-001':    { images: ['../images/products/accessories/1.jpg',      '../images/products/accessories/gold-profile.png',        '../images/products/accessories/Salon-moderno-con-acentos-dorados.png'] },
  'BPUC-003':  { images: ['../images/products/accessories/2-5.jpg',    '../images/products/accessories/lineas-u-corner_05.png'] },
  'APUC-003':  { images: ['../images/products/accessories/1-6.jpg',    '../images/products/accessories/lineas-u-corner_06.png'] },
  'GPUC-003':  { images: ['../images/products/accessories/3-4.jpg',    '../images/products/accessories/lineas-u-corner_04.png'] },
  'BPC-003':   { images: ['../images/products/accessories/3-2.jpg',    '../images/products/accessories/round-corner_05.png'] },
  'APC-001':   { images: ['../images/products/accessories/1-4.jpg',    '../images/products/accessories/round-corner_04.png'] },
  'GPC-002':   { images: ['../images/products/accessories/2-3.jpg',    '../images/products/accessories/round-corner_06.png'] },
  'BPU-002':   { images: ['../images/products/accessories/2-4.jpg',    '../images/products/accessories/lineas-h_05.png'] },
  'APU-002':   { images: ['../images/products/accessories/1-5.jpg',    '../images/products/accessories/lineas-h_04.png'] },
  'GPU-002':   { images: ['../images/products/accessories/3-3.jpg',    '../images/products/accessories/lineas-h_06.png'] },
  'BPRC-004':  { images: ['../images/products/accessories/3-2.png',    '../images/products/accessories/profile_05.png'] },
  'APRC-004':  { images: ['../images/products/accessories/2-6.jpg',    '../images/products/accessories/profile_06.png'] },
  'GPRC-004':  { images: ['../images/products/accessories/1-7.jpg',    '../images/products/accessories/profile_04.png'] },
  'A-01':      { images: ['../images/products/accessories/14.jpg',     '../images/products/accessories/ChatGPT-Image-26-jul-2025-11_58_49-a.m.png'] },

  /* ── KITCHEN ─────────────────────────────────────────────────────────── */
  'KITCHEN-WS':    { images: [
    '../images/products/kitchen/gabinetes-cocinas-2.png',
    '../images/products/kitchen/Captura-de-pantalla-2025-07-10-205216.png',
    '../images/products/kitchen/Captura-de-pantalla-2025-07-10-205251.png',
    '../images/products/kitchen/Captura-de-pantalla-2025-07-10-205340.png',
  ] },
  'KITCHEN-WHGFP': { images: [
    '../images/products/kitchen/gabinetes-cocinas.png',
    '../images/products/kitchen/Captura-de-pantalla-2025-07-10-205638.png',
  ] },
  'KITCHEN-OS':    { images: [
    '../images/products/kitchen/1.png',
    '../images/products/kitchen/Captura-de-pantalla-2025-07-10-205424.png',
    '../images/products/kitchen/Captura-de-pantalla-2025-07-10-205504.png',
    '../images/products/kitchen/Captura-de-pantalla-2025-07-10-205539.png',
  ] },

  /* ── FIREPLACE ───────────────────────────────────────────────────────── */
  'FP-001': { images: ['../images/products/fireplace/Sin-titulo-1-1.png', '../images/products/fireplace/Sala-moderna-con-pampas-y-chimenea.png', '../images/products/fireplace/ChatGPT-Image-7-oct-2025-12_05_14-a.m.png', '../images/products/fireplace/ChatGPT-Image-7-oct-2025-12_05_11-a.m.png'] },

  /* ── LIGHTS ──────────────────────────────────────────────────────────── */
  'LLP-01':   { images: ['../images/products/lights/led-light-profile.png', '../images/products/lights/2.jpg'] },
  'EWPL-002': { images: ['../images/products/lights/4db34b66b5437dd643265cf9e27b1a43.png', '../images/products/lights/4db34b66b5437dd643265cf9e27b1a43.jpg'] }
};

/* ─── Inject modal HTML (single instance, reused for all cards) ─── */
(function () {
  if (document.getElementById('catModal')) return;
  var el = document.createElement('div');
  el.id = 'catModal';
  el.className = 'gallery-modal';
  el.setAttribute('role', 'dialog');
  el.setAttribute('aria-modal', 'true');
  el.setAttribute('aria-label', 'Product gallery');
  el.innerHTML = [
    '<div class="gm-backdrop"></div>',
    '<div class="gm-inner">',
    '  <div class="gm-header">',
    '    <span class="gm-title" id="catModalTitle"></span>',
    '    <button class="gm-close" id="catModalClose" aria-label="Close gallery">',
    '      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
    '    </button>',
    '  </div>',
    '  <div class="gm-stage">',
    '    <button class="gm-arrow gm-prev" id="catModalPrev" aria-label="Previous image">',
    '      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>',
    '    </button>',
    '    <div class="gm-img-wrap"><img id="catModalImg" src="" alt="Product image" /></div>',
    '    <button class="gm-arrow gm-next" id="catModalNext" aria-label="Next image">',
    '      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>',
    '    </button>',
    '  </div>',
    '  <div class="gm-thumbs" id="catModalThumbs"></div>',
    '  <div class="gm-counter" id="catModalCounter"></div>',
    '</div>'
  ].join('');
  document.body.appendChild(el);
})();

/* ─── Modal state ─── */
var _catImages = [];
var _catIndex  = 0;

function catShow(index) {
  var img = document.getElementById('catModalImg');
  img.classList.add('gm-fade');
  var src = _catImages[index];
  var tmp = new Image();
  tmp.onload = tmp.onerror = function () {
    img.src = src;
    img.classList.remove('gm-fade');
  };
  tmp.src = src;
  _catIndex = index;
  document.querySelectorAll('#catModalThumbs .gm-thumb').forEach(function (t, i) {
    t.classList.toggle('active', i === index);
    if (i === index) t.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
  });
  var counter = document.getElementById('catModalCounter');
  if (counter) counter.textContent = (index + 1) + ' / ' + _catImages.length;
}

function openCatModal(title, images) {
  /* Strict reset — clear previous SKU state before loading new one */
  _catImages = images.slice();
  _catIndex  = 0;

  document.getElementById('catModalTitle').textContent = title;

  var thumbsEl = document.getElementById('catModalThumbs');
  thumbsEl.innerHTML = '';
  _catImages.forEach(function (src, i) {
    var t = document.createElement('button');
    t.className = 'gm-thumb' + (i === 0 ? ' active' : '');
    t.setAttribute('aria-label', 'Image ' + (i + 1));
    t.style.backgroundImage = "url('" + src + "')";
    t.addEventListener('click', function () { catShow(i); });
    thumbsEl.appendChild(t);
  });

  var modal = document.getElementById('catModal');
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  catShow(0);
  document.getElementById('catModalClose').focus();
}

function closeCatModal() {
  document.getElementById('catModal').classList.remove('open');
  document.body.style.overflow = '';
}

/* ─── Wire up cards on DOMContentLoaded ─── */
document.addEventListener('DOMContentLoaded', function () {

  document.querySelectorAll('.catalogue-card').forEach(function (card) {
    var skuEl   = card.querySelector('.catalogue-sku');
    var thumbEl = card.querySelector('.catalogue-thumb');
    if (!skuEl || !thumbEl) return;

    var skuCode = skuEl.textContent.trim().replace(/^SKU:\s*/i, '');
    var data    = SKU_DATA[skuCode];
    if (!data || !data.images || !data.images.length) return;

    var images = data.images;

    /* Hover layer — only when SKU has at least 2 images */
    if (images.length > 1) {
      var layer = document.createElement('div');
      layer.className = 'ct-hover-layer';
      layer.style.backgroundImage = "url('" + images[1] + "')";
      thumbEl.appendChild(layer);
    }

    /* Click → open modal with THIS SKU's isolated image set */
    card.style.cursor = 'pointer';
    card.addEventListener('click', function (e) {
      if (e.target.closest('a')) return;
      var name = (card.querySelector('h3') || {}).textContent || skuCode;
      openCatModal(name + ' — ' + skuCode, images);
    });
  });

  /* Modal controls */
  var modal = document.getElementById('catModal');
  if (!modal) return;

  modal.querySelector('.gm-backdrop').addEventListener('click', closeCatModal);
  document.getElementById('catModalClose').addEventListener('click', closeCatModal);
  document.getElementById('catModalPrev').addEventListener('click', function () {
    catShow((_catIndex - 1 + _catImages.length) % _catImages.length);
  });
  document.getElementById('catModalNext').addEventListener('click', function () {
    catShow((_catIndex + 1) % _catImages.length);
  });

  document.addEventListener('keydown', function (e) {
    if (!modal.classList.contains('open')) return;
    if (e.key === 'Escape')     closeCatModal();
    if (e.key === 'ArrowLeft')  catShow((_catIndex - 1 + _catImages.length) % _catImages.length);
    if (e.key === 'ArrowRight') catShow((_catIndex + 1) % _catImages.length);
  });
});
