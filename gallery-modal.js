/* gallery-modal.js — hover crossfade + gallery modal for product cards */

/* ─── Category gallery data (paths relative to site root) ─── */
var GALLERY_DATA = {
  'indoor-wall-panels': {
    name: 'Indoor Wall Panels',
    link: 'products/indoor-wall-panels.html',
    hover: 'images/products/indoor-wall-panels/Imagen-de-WhatsApp-2025-04-03-a-las-10.14.54_9d2c6388.jpg',
    images: [
      'images/indoor-wall-panels.png',
      'images/products/indoor-wall-panels/1.jpg',
      'images/products/indoor-wall-panels/2.jpg',
      'images/products/indoor-wall-panels/3.jpg',
      'images/products/indoor-wall-panels/5.jpg',
      'images/products/indoor-wall-panels/6.jpg',
      'images/products/indoor-wall-panels/7.jpg',
      'images/products/indoor-wall-panels/9.jpg',
      'images/products/indoor-wall-panels/10.jpg',
      'images/products/indoor-wall-panels/12.jpg',
      'images/products/indoor-wall-panels/ash-woos.png',
      'images/products/indoor-wall-panels/madera-clasica.png',
      'images/products/indoor-wall-panels/nogal-photoshop.png',
      'images/products/indoor-wall-panels/walnuts-3.png'
    ]
  },
  'outdoor-wall-panels': {
    name: 'Outdoor Wall Panels',
    link: 'products/outdoor-wall-panels.html',
    hover: 'images/products/outdoor-wall-panels/15.jpg',
    images: [
      'images/outdoor-wall-panels.png',
      'images/products/outdoor-wall-panels/15.jpg',
      'images/products/outdoor-wall-panels/16.jpg',
      'images/products/outdoor-wall-panels/17.jpg',
      'images/products/outdoor-wall-panels/teka.jpg'
    ]
  },
  'acoustic-panels': {
    name: 'Acoustic Panels',
    link: 'products/acoustic-panels.html',
    hover: 'images/products/acoustic-panels/wall-panels-acoustic_01.jpg',
    images: [
      'images/acoustic-wall-panels.png',
      'images/products/acoustic-panels/wall-panels-acoustic_01.jpg',
      'images/products/acoustic-panels/wall-panels-acoustic_02.jpg',
      'images/products/acoustic-panels/wall-panels-acoustic_03.jpg',
      'images/products/acoustic-panels/wall-panels-acoustic-22_02.jpg'
    ]
  },
  'mirror-pvc': {
    name: 'Mirror PVC',
    link: 'products/mirror-pvc.html',
    hover: 'images/products/mirror-pvc/steel.jpg',
    images: [
      'images/mirror-pvc.png',
      'images/products/mirror-pvc/25.jpg',
      'images/products/mirror-pvc/26.jpg',
      'images/products/mirror-pvc/27.jpg',
      'images/products/mirror-pvc/28.jpg',
      'images/products/mirror-pvc/classic.png',
      'images/products/mirror-pvc/gold.jpg',
      'images/products/mirror-pvc/pink.png',
      'images/products/mirror-pvc/steel.jpg'
    ]
  },
  'marble-pvc-high-gloss': {
    name: 'Marble PVC High Gloss',
    link: 'products/marble-pvc-high-gloss.html',
    hover: 'images/products/marble-pvc-high-gloss/blanco-calacatta.jpg',
    images: [
      'images/marble-pvc.png',
      'images/products/marble-pvc-high-gloss/31.jpg',
      'images/products/marble-pvc-high-gloss/32.jpg',
      'images/products/marble-pvc-high-gloss/33.jpg',
      'images/products/marble-pvc-high-gloss/34.jpg',
      'images/products/marble-pvc-high-gloss/35.jpg',
      'images/products/marble-pvc-high-gloss/36.jpg',
      'images/products/marble-pvc-high-gloss/blanco-calacatta.jpg',
      'images/products/marble-pvc-high-gloss/blanco-gold-carrara.jpg',
      'images/products/marble-pvc-high-gloss/dark-london.jpg',
      'images/products/marble-pvc-high-gloss/grey-gold.jpg',
      'images/products/marble-pvc-high-gloss/negro-marquina.jpg',
      'images/products/marble-pvc-high-gloss/ChatGPT-Image-26-sept-2025-05_37_53-p.m.png'
    ]
  },
  'metal-pvc': {
    name: 'Metal PVC',
    link: 'products/metal-pvc.html',
    hover: 'images/products/metal-pvc/silver.png',
    images: [
      'images/metal-sheet.png',
      'images/products/metal-pvc/bronce-metal-2.png',
      'images/products/metal-pvc/silver.png'
    ]
  },
  'flat-wall-panels': {
    name: 'Flat Wall Panels',
    link: 'products/flat-wall-panels.html',
    hover: 'images/products/flat-wall-panels/walnut-2.png',
    images: [
      'images/products/flat-wall-panels/18.jpg',
      'images/products/flat-wall-panels/19.jpg',
      'images/products/flat-wall-panels/21.jpg',
      'images/products/flat-wall-panels/22.jpg',
      'images/products/flat-wall-panels/23.jpg',
      'images/products/flat-wall-panels/24.jpg',
      'images/products/flat-wall-panels/ash-wood.jpg',
      'images/products/flat-wall-panels/costa-del-sol.jpg',
      'images/products/flat-wall-panels/dark-caramel.jpg',
      'images/products/flat-wall-panels/dark-gold.jpg',
      'images/products/flat-wall-panels/dark-oak.jpg',
      'images/products/flat-wall-panels/madera-clasica-flat-2.png',
      'images/products/flat-wall-panels/pure-black-flat.png',
      'images/products/flat-wall-panels/walnut-2.png',
      'images/products/flat-wall-panels/white-ash.jpg'
    ]
  },
  'wpc-fence': {
    name: 'WPC Fence',
    link: 'products/wpc-fence.html',
    hover: 'images/products/wpc-fence/Vivienda-moderna-con-cerca-oscura.png',
    images: [
      'images/products/wpc-fence/Casa-moderna-con-cerca-elegante.png',
      'images/products/wpc-fence/Vivienda-moderna-con-cerca-oscura.png',
      'images/products/wpc-fence/fences.png'
    ]
  },
  'partition-dividers': {
    name: 'Partition Dividers',
    link: 'products/partition-dividers.html',
    hover: 'images/products/partition-dividers/Sala-minimalista-con-vigas-de-PVC.png',
    images: [
      'images/products/partition-dividers/Sala-moderna-con-divisores-de-madera-1.png',
      'images/products/partition-dividers/Sala-minimalista-con-vigas-de-PVC.png',
      'images/products/partition-dividers/aregue.png',
      'images/products/partition-dividers/nogal-americano.png'
    ]
  },
  'accessories': {
    name: 'Accessories',
    link: 'products/accessories.html',
    hover: 'images/products/accessories/esquineros-1.png',
    images: [
      'images/gallery-1.png',
      'images/products/accessories/esquineros-1.png',
      'images/products/accessories/lineas-de-terminacion-1.png',
      'images/products/accessories/1-4.jpg',
      'images/products/accessories/1-5.jpg',
      'images/products/accessories/1-6.jpg',
      'images/products/accessories/1-7.jpg',
      'images/products/accessories/2-3.jpg',
      'images/products/accessories/2-4.jpg',
      'images/products/accessories/2-5.jpg',
      'images/products/accessories/2-6.jpg',
      'images/products/accessories/3-2.jpg',
      'images/products/accessories/3-3.jpg',
      'images/products/accessories/3-4.jpg',
      'images/products/accessories/3-s.png',
      'images/products/accessories/14.jpg'
    ]
  },
  'kitchen': {
    name: 'Kitchen Cabinets',
    link: 'products/kitchen.html',
    hover: 'images/products/kitchen/gabinetes-cocinas-2.png',
    images: [
      'images/products/kitchen/1-kitchen.png',
      'images/products/kitchen/gabinetes-cocinas-2.png',
      'images/products/kitchen/gabinetes-cocinas.png'
    ]
  },
  'fireplace': {
    name: 'Fireplace',
    link: 'products/fireplace.html',
    hover: 'images/products/fireplace/Sala-moderna-con-pampas-y-chimenea.png',
    images: [
      'images/products/fireplace/ChatGPT-Image-7-oct-2025-12_05_14-a.m.png',
      'images/products/fireplace/Sala-moderna-con-pampas-y-chimenea.png',
      'images/products/fireplace/ChatGPT-Image-7-oct-2025-12_05_11-a.m.png',
      'images/products/fireplace/Sin-titulo-1-1.png'
    ]
  },
  'lights': {
    name: 'Lights',
    link: 'products/lights.html',
    hover: 'images/products/lights/2-lights.jpg',
    images: [
      'images/products/lights/4db34b66b5437dd643265cf9e27b1a43.png',
      'images/products/lights/2-lights.jpg',
      'images/products/lights/led-light-profile.png'
    ]
  }
};

/* ─── Prefix for product pages (../) vs root pages ─── */
(function () {
  var isProductPage = window.location.pathname.indexOf('/products/') !== -1;
  var prefix = isProductPage ? '../' : '';

  if (prefix) {
    Object.keys(GALLERY_DATA).forEach(function (key) {
      var cat = GALLERY_DATA[key];
      cat.hover = prefix + cat.hover;
      cat.link  = prefix + cat.link;
      cat.images = cat.images.map(function (p) { return prefix + p; });
    });
  }
})();

/* ─── Inject hover layers into all product cards ─── */
(function () {
  document.querySelectorAll('.product-card[data-modal]').forEach(function (card) {
    var key  = card.dataset.modal;
    var cat  = GALLERY_DATA[key];
    if (!cat) return;

    var imgWrap = card.querySelector('.product-img');
    if (!imgWrap) return;

    var layer = document.createElement('div');
    layer.className = 'product-img-hover';
    layer.style.backgroundImage = "url('" + cat.hover + "')";
    imgWrap.insertBefore(layer, imgWrap.firstChild.nextSibling);
  });
})();

/* ─── Build and inject modal HTML ─── */
(function () {
  if (document.getElementById('galleryModal')) return;
  var el = document.createElement('div');
  el.id = 'galleryModal';
  el.className = 'gallery-modal';
  el.setAttribute('role', 'dialog');
  el.setAttribute('aria-modal', 'true');
  el.setAttribute('aria-label', 'Product gallery');
  el.innerHTML = [
    '<div class="gm-backdrop"></div>',
    '<div class="gm-inner">',
    '  <div class="gm-header">',
    '    <span class="gm-title" id="gmTitle"></span>',
    '    <div class="gm-header-actions">',
    '      <a class="btn btn-primary btn-sm gm-cta" id="gmCta" href="#">View All Products</a>',
    '      <button class="gm-close" aria-label="Close gallery">',
    '        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
    '      </button>',
    '    </div>',
    '  </div>',
    '  <div class="gm-stage">',
    '    <button class="gm-arrow gm-prev" aria-label="Previous image">',
    '      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>',
    '    </button>',
    '    <div class="gm-img-wrap"><img id="gmMainImg" src="" alt="Product image" /></div>',
    '    <button class="gm-arrow gm-next" aria-label="Next image">',
    '      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>',
    '    </button>',
    '  </div>',
    '  <div class="gm-thumbs" id="gmThumbs"></div>',
    '  <div class="gm-counter" id="gmCounter"></div>',
    '</div>'
  ].join('');
  document.body.appendChild(el);
})();

/* ─── Modal state & logic ─── */
var _currentImages = [];
var _currentIndex  = 0;

function gmShow(index) {
  var img = document.getElementById('gmMainImg');
  img.classList.add('gm-fade');
  var src = _currentImages[index];
  var tmp = new Image();
  tmp.onload = function () {
    img.src = src;
    img.classList.remove('gm-fade');
  };
  tmp.onerror = function () {
    img.src = src;
    img.classList.remove('gm-fade');
  };
  tmp.src = src;

  _currentIndex = index;
  document.querySelectorAll('.gm-thumb').forEach(function (t, i) {
    t.classList.toggle('active', i === index);
    if (i === index) t.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
  });
  var counter = document.getElementById('gmCounter');
  if (counter) counter.textContent = (index + 1) + ' / ' + _currentImages.length;
}

function openGallery(key, startIndex) {
  var cat = GALLERY_DATA[key];
  if (!cat) return;

  _currentImages = cat.images;
  _currentIndex  = startIndex || 0;

  document.getElementById('gmTitle').textContent = cat.name;
  var cta = document.getElementById('gmCta');
  if (cta) cta.href = cat.link;

  var thumbsEl = document.getElementById('gmThumbs');
  thumbsEl.innerHTML = '';
  cat.images.forEach(function (src, i) {
    var t = document.createElement('button');
    t.className = 'gm-thumb' + (i === 0 ? ' active' : '');
    t.setAttribute('aria-label', 'Image ' + (i + 1));
    t.style.backgroundImage = "url('" + src + "')";
    t.addEventListener('click', function () { gmShow(i); });
    thumbsEl.appendChild(t);
  });

  var modal = document.getElementById('galleryModal');
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  gmShow(_currentIndex);
  modal.querySelector('.gm-close').focus();
}

function closeGallery() {
  var modal = document.getElementById('galleryModal');
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

/* ─── Wire up card clicks ─── */
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.product-card[data-modal]').forEach(function (card) {
    card.addEventListener('click', function (e) {
      /* allow "View Details" overlay button to navigate normally */
      if (e.target.closest('.gm-navigate')) return;
      e.preventDefault();
      openGallery(card.dataset.modal, 0);
    });
  });

  /* Modal controls */
  var modal = document.getElementById('galleryModal');
  if (!modal) return;

  modal.querySelector('.gm-backdrop').addEventListener('click', closeGallery);
  modal.querySelector('.gm-close').addEventListener('click', closeGallery);

  modal.querySelector('.gm-prev').addEventListener('click', function () {
    gmShow((_currentIndex - 1 + _currentImages.length) % _currentImages.length);
  });
  modal.querySelector('.gm-next').addEventListener('click', function () {
    gmShow((_currentIndex + 1) % _currentImages.length);
  });

  document.addEventListener('keydown', function (e) {
    if (!modal.classList.contains('open')) return;
    if (e.key === 'Escape')     closeGallery();
    if (e.key === 'ArrowLeft')  gmShow((_currentIndex - 1 + _currentImages.length) % _currentImages.length);
    if (e.key === 'ArrowRight') gmShow((_currentIndex + 1) % _currentImages.length);
  });
});
