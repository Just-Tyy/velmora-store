/* VELMORA interaction layer — accessible front-end prototype. */
(() => {
  'use strict';

  const products = {
    'essential-shirt': {
      variants: [{name: 'Dusty Blue', hex: '#8197a7', front: 'assets/assets/essential-shirt-mens-dusty-blue-front.jpeg', back: 'assets/assets/essential-shirt-mens-dusty-blue-black.jpeg'}, {name: 'Chocolate', hex: '#624936', front: 'assets/assets/essential-shirt-mens-chocolate-front.jpeg', back: 'assets/assets/essential-shirt-mens-chocolate-back.jpeg'}, {name: 'Sand', hex: '#cdbb9d', front: 'assets/assets/essential-shirt-womens-sand-front.jpeg', back: 'assets/assets/essential-shirt-women-sand-back.jpeg'}, {name: 'Black', hex: '#1e1c1b', front: 'assets/assets/essential-shirt-womens-black-front.jpeg', back: 'assets/assets/essential-shirt-womens-black-back.jpeg'}],
      name: 'The Essential Shirt', category: 'Tops', color: 'Chocolate',
      image: 'assets/assets/essential-shirt-mens-dusty-blue-front.jpeg', alt: 'Model wearing the VELMORA Essential Shirt in sand',
      gallery: ['assets/assets/essential-shirt-mens-dusty-blue-front.jpeg', 'assets/assets/essential-shirt-mens-dusty-blue-black.jpeg'],
      description: 'A versatile wardrobe staple designed to make everyday dressing feel considered. Style it on its own or layer it with tailored pieces.',
      details: 'A considered button-front silhouette for everyday styling. Confirm final fabric composition, fit, and care instructions before launch.',
      breadcrumb: 'THE ESSENTIAL SHIRT · CONCEPT', colorOptions: ['Dusty Blue', 'Chocolate', 'Sand', 'Black'], colorHex: ['#8197a7', '#624936', '#cdbb9d', '#1e1c1b'], categoryTone: '#cdbb9d'
    },
    'tailored-trouser': {
      variants: [{name: 'Black', hex: '#1e1c1b', front: 'assets/assets/tailored-trouser-mens-black-front.jpeg', back: 'assets/assets/tailored-trouser-mens-black-back.jpeg'}, {name: 'Sand Beige', hex: '#d5c4ab', front: 'assets/assets/tailored-trouser-mens-sand-biege-front.jpeg', back: 'assets/assets/tailored-trouser-mens-sand-biege-back.jpeg'}, {name: 'Oxblood', hex: '#54131b', front: 'assets/assets/tailored-trouser-womens-Oxblood-front.jpeg', back: 'assets/assets/tailored-trouser-womens-Oxblood-back.jpeg'}, {name: 'Chocolate Brown', hex: '#624936', front: 'assets/assets/tailored-trouser-womens-chocolate-brown-front.jpeg', back: 'assets/assets/tailored-trouser-womens-chocolate-brown-back.jpeg'}],
      name: 'The Tailored Trouser', category: 'Bottoms', color: 'Black',
      image: 'assets/assets/tailored-trouser-mens-black-front.jpeg', alt: 'Tailored VELMORA trousers in a refined neutral tone',
      gallery: ['assets/assets/tailored-trouser-mens-black-front.jpeg', 'assets/assets/tailored-trouser-mens-black-back.jpeg'],
      description: 'A clean, modern trouser silhouette designed to pair effortlessly with refined everyday essentials.',
      details: 'A clean tailored silhouette with a versatile neutral palette. Confirm the final fabric, rise, inseam, and care details before launch.',
      breadcrumb: 'THE TAILORED TROUSER · CONCEPT', colorOptions: ['Black', 'Sand Beige', 'Oxblood', 'Chocolate Brown'], colorHex: ['#1e1c1b', '#d5c4ab', '#54131b', '#624936'], categoryTone: '#aa8c70'
    },
    'everyday-layer': {
      variants: [{name: 'Olive Green', hex: '#77784a', front: 'assets/assets/everyday-layer-mens-olive-green-front.jpeg', back: 'assets/assets/everyday-layer-mens-olive-green-back.jpeg'}, {name: 'Oxblood Burgundy', hex: '#54131b', front: 'assets/assets/everyday-layer-mens-oxblood-burgundy-front.jpeg', back: 'assets/assets/everyday-layer-mens-oxblood-burgundy-back.jpeg'}, {name: 'Espresso Brown', hex: '#4a3029', front: 'assets/assets/everyday-layer-womens-espresso-brown-front.jpeg', back: 'assets/assets/everyday-layer-womens-espresso-brown-back.jpeg'}, {name: 'Forest Green', hex: '#355b43', front: 'assets/assets/everyday-layer-womens-forest-green-front.jpeg', back: 'assets/assets/everyday-layer-womens-forest-green-back.jpeg'}],
      name: 'The Everyday Layer', category: 'Layers', color: 'Forest Green',
      image: 'assets/assets/everyday-layer-mens-olive-green-front.jpeg', alt: 'The Everyday Layer in a warm neutral tone',
      gallery: ['assets/assets/everyday-layer-mens-olive-green-front.jpeg', 'assets/assets/everyday-layer-mens-olive-green-back.jpeg'],
      description: 'A versatile outer layer that brings an easy finishing touch to everyday looks.',
      details: 'Designed to layer over everyday essentials. Confirm garment construction, lining, fabric composition, and care details before launch.',
      breadcrumb: 'THE EVERYDAY LAYER · CONCEPT', colorOptions: ['Olive Green', 'Oxblood Burgundy', 'Espresso Brown', 'Forest Green'], colorHex: ['#77784a', '#54131b', '#4a3029', '#355b43'], categoryTone: '#624936'
    },
    'modern-jacket': {
      variants: [{name: 'Deep Moss', hex: '#46513b', front: 'assets/assets/modern-jacket-mens-deep-moss-front.jpeg', back: 'assets/assets/modern-jacket-mens-deep-moss-back.jpeg'}, {name: 'Obsidian Black', hex: '#1e1c1b', front: 'assets/assets/modern-jacket-mens-obsidian-black-front.jpeg', back: 'assets/assets/modern-jacket-mens-obsidian-black-back.jpeg'}, {name: 'Deep Plum', hex: '#542b3b', front: 'assets/assets/modern-jacket-womens-deep-plum-front.jpeg', back: 'assets/assets/modern-jacket-womens-deep-plum-back.jpeg'}, {name: 'Porcelain Cream', hex: '#f1eee7', front: 'assets/assets/modern-jacket-womens-porcelain-cream-front.jpeg', back: 'assets/assets/modern-jacket-womens-porcelain-cream-back.jpeg'}],
      name: 'The Modern Jacket', category: 'Layers', color: 'Deep Moss',
      image: 'assets/assets/modern-jacket-mens-deep-moss-front.jpeg', alt: 'The Modern Jacket in rich cocoa tailoring',
      gallery: ['assets/assets/modern-jacket-mens-deep-moss-front.jpeg', 'assets/assets/modern-jacket-mens-deep-moss-back.jpeg'],
      description: 'An understated layer in a rich neutral tone, designed to bring depth to simple outfits.',
      details: 'A refined jacket concept in a deep neutral shade. Confirm fabric, lining, fit, and care instructions against the final garment before launch.',
      breadcrumb: 'THE MODERN JACKET · CONCEPT', colorOptions: ['Deep Moss', 'Obsidian Black', 'Deep Plum', 'Porcelain Cream'], colorHex: ['#46513b', '#1e1c1b', '#542b3b', '#f1eee7'], categoryTone: '#624936'
    },
    'everyday-tee': {
      variants: [{name: 'Chalk Bone', hex: '#e6dfd2', front: 'assets/assets/everyday-tee-mens-chalk-bone-front.jpeg', back: 'assets/assets/everyday-tee-mens-chalk-bone-back.jpeg'}, {name: 'Ink Black', hex: '#1e1c1b', front: 'assets/assets/everyday-tee-mens-ink-black-front.jpeg', back: 'assets/assets/everyday-tee-mens-ink-black-back.jpeg'}, {name: 'Oxblood Burgundy', hex: '#54131b', front: 'assets/assets/everyday-tee-womens-oxblood-burgundy-front.jpeg', back: 'assets/assets/everyday-tee-womens-oxblood-burgundy-black.jpeg'}, {name: 'Porcelain Cream', hex: '#f1eee7', front: 'assets/assets/everyday-tee-womens-porcelain-cream-front.jpeg', back: 'assets/assets/everyday-tee-womens-porcelain-cream-back.jpeg'}],
      name: 'The Everyday Tee', category: 'Tops', color: 'Chalk Bone',
      image: 'assets/assets/everyday-tee-mens-chalk-bone-front.jpeg', alt: 'The Everyday Tee in ivory',
      gallery: ['assets/assets/everyday-tee-mens-chalk-bone-front.jpeg', 'assets/assets/everyday-tee-mens-chalk-bone-back.jpeg'],
      description: 'A simple, versatile top made to sit comfortably within a considered everyday wardrobe.',
      details: 'A simple everyday tee concept. Confirm fabric weight, neckline, fit, and care instructions before launch.',
      breadcrumb: 'THE EVERYDAY TEE · CONCEPT', colorOptions: ['Chalk Bone', 'Ink Black', 'Oxblood Burgundy', 'Porcelain Cream'], colorHex: ['#e6dfd2', '#1e1c1b', '#54131b', '#f1eee7'], categoryTone: '#f1eee7'
    },
    'everyday-denim': {
      variants: [{name: 'Indigo', hex: '#334c60', front: 'assets/assets/everyday-denim-mens-indigo-denim-front.jpeg', back: 'assets/assets/everyday-denim-mens-indigo-denim-back.jpeg'}, {name: 'Washed Black', hex: '#343434', front: 'assets/assets/everyday-denim-mens-washed-black-front.jpeg', back: 'assets/assets/everyday-denim-mens-washed-black-back.jpeg'}, {name: 'Deep Indigo', hex: '#273e61', front: 'assets/assets/everyday-denim-womens-deep-indigo-front.jpeg', back: 'assets/assets/everyday-denim-womens-deep-indigo-back.jpeg'}, {name: 'Warm Ecru', hex: '#e8dfd1', front: 'assets/assets/everyday-denim-womens-warm-ecru-denim-front.jpeg', back: 'assets/assets/everyday-denim-womens-warm-ecru-back.jpeg'}],
      name: 'The Everyday Denim', category: 'Bottoms', color: 'Indigo',
      image: 'assets/assets/everyday-denim-mens-indigo-denim-front.jpeg', alt: 'The Everyday Denim concept product styling',
      gallery: ['assets/assets/everyday-denim-mens-indigo-denim-front.jpeg', 'assets/assets/everyday-denim-mens-indigo-denim-back.jpeg'],
      description: 'A versatile bottom-half staple designed for everyday movement and easy styling. Denim-specific imagery and garment details must be verified before launch.',
      details: 'Concept listing only. Replace the current illustrative gallery with verified photographs of the actual denim product and confirm wash, rise, inseam, fabric, and care details before launch.',
      breadcrumb: 'THE EVERYDAY DENIM · CONCEPT', colorOptions: ['Indigo', 'Washed Black', 'Deep Indigo', 'Warm Ecru'], colorHex: ['#334c60', '#343434', '#273e61', '#e8dfd1'], categoryTone: '#334c60'
    }
  };

  // Suggested launch prices in USD; adjust after confirming production costs and margins.
  const samplePrices = {'essential-shirt':58,'tailored-trouser':78,'everyday-layer':88,'everyday-tee':32,'modern-jacket':128,'everyday-denim':74};
  const money = value => new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0}).format(value);
  // Each design/color is priced independently. Premium fabric/finish variants carry a modest premium.
  const variantPriceAdjustments = [0, 4, 6, 8];
  function getVariantPrice(itemKey, product, colorName) {
    const base = samplePrices[itemKey] || 0;
    const index = Math.max(0, (product.variants || []).findIndex(v => v.name === colorName));
    return base + (variantPriceAdjustments[index] || 0);
  }
  const storageKey = 'velmora-demo-bag-v2';
  let bag = readBag();
  let selectedSize = '';
  let selectedColor = '';

  function readBag() {
    try {
      const value = JSON.parse(localStorage.getItem(storageKey) || '[]');
      return Array.isArray(value) ? value : [];
    } catch (_) { return []; }
  }
  function saveBag() {
    try { localStorage.setItem(storageKey, JSON.stringify(bag)); } catch (_) { /* storage may be disabled */ }
    updateBagCount();
    renderBag();
  }
  function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  }
  function updateBagCount() {
    const count = bag.reduce((sum, item) => sum + item.quantity, 0);
    document.querySelectorAll('[data-cart-count]').forEach(el => { el.textContent = count; });
    document.querySelectorAll('[data-open-bag]').forEach(el => { el.setAttribute('aria-label', `Open shopping cart, ${count} ${count === 1 ? 'item' : 'items'}`); });
  }

  function createBagDrawer() {
    if (document.querySelector('.bag-overlay')) return;
    const wrapper = document.createElement('div');
    wrapper.innerHTML = `
      <div class="bag-overlay" data-close-bag hidden></div>
      <aside class="bag-drawer" id="bag-drawer" role="dialog" aria-modal="true" aria-labelledby="bag-title" aria-hidden="true" tabindex="-1">
        <div class="bag-head"><div><p class="eyebrow">Your selection</p><h2 id="bag-title" class="serif">Shopping cart <span data-drawer-count>(0)</span></h2></div><button class="icon-button" type="button" data-close-bag aria-label="Close shopping cart">×</button></div>
        <div class="bag-items" data-bag-items></div>
        <div class="bag-foot"><div class="bag-subtotal"><span>Cart subtotal</span><strong data-bag-subtotal>$0</strong></div><p class="bag-note">Sample USD prices are for this design preview only. Checkout is not connected.</p><button type="button" class="btn bag-checkout" data-demo-checkout>Continue to checkout</button><button type="button" class="bag-clear" data-clear-cart>Clear cart</button></div>
      </aside>`;
    document.body.appendChild(wrapper);
  }

  function createSearchPanel() {
    if (document.querySelector('[data-search-overlay]')) return;
    const wrapper = document.createElement('div');
    wrapper.innerHTML = `<div class="search-overlay" data-search-overlay hidden><section class="search-panel" role="dialog" aria-modal="true" aria-labelledby="search-title"><div class="search-panel-head"><div><p class="eyebrow">Find your next favourite</p><h2 class="serif" id="search-title">Search VELMORA</h2></div><button type="button" class="icon-button" data-close-search aria-label="Close search">×</button></div><form class="site-search-form" data-site-search-form role="search"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.5"></circle><path d="m16 16 4.2 4.2"></path></svg><input type="search" data-site-search-input placeholder="Search shirts, trousers, layers…" aria-label="Search products" autocomplete="off"><button type="submit">Search</button></form><p class="search-hint">Try “shirt”, “tops”, “sand” or “jacket”.</p><div class="search-results" data-search-results aria-live="polite"></div></section></div>`;
    document.body.appendChild(wrapper);
  }
  function renderSearchResults(query) {
    const target = document.querySelector('[data-search-results]'); if (!target) return;
    const q = query.trim().toLowerCase();
    if (!q) { target.innerHTML = '<p class="search-empty">Start typing to explore the collection.</p>'; return; }
    const matches = Object.entries(products).filter(([id,p]) => `${id} ${p.name} ${p.category} ${p.color} ${p.description}`.toLowerCase().includes(q));
    target.innerHTML = matches.length ? matches.map(([id,p]) => `<a class="search-result" href="product.html?item=${encodeURIComponent(id)}"><img src="${escapeHTML(p.image)}" alt=""><span><strong>${escapeHTML(p.name)}</strong><small>${escapeHTML(p.category)} · ${escapeHTML(p.color)}</small></span><span class="search-result-arrow" aria-hidden="true">↗</span></a>`).join('') : '<p class="search-empty">No pieces found. Try a different search, like “tops” or “layer”.</p>';
  }
  function openSearch() {
    const overlay = document.querySelector('[data-search-overlay]'); if (!overlay) return;
    overlay.hidden = false; document.body.classList.add('search-is-open');
    const input = overlay.querySelector('[data-site-search-input]'); renderSearchResults(input.value); input.focus();
  }
  function closeSearch() { const overlay=document.querySelector('[data-search-overlay]'); if (!overlay) return; overlay.hidden=true; document.body.classList.remove('search-is-open'); const opener=document.querySelector('[data-open-search]'); if(opener) opener.focus(); }

  function renderBag() {
    const list = document.querySelector('[data-bag-items]');
    if (!list) return;
    const count = bag.reduce((sum, item) => sum + item.quantity, 0);
    const countLabel = document.querySelector('[data-drawer-count]');
    if (countLabel) countLabel.textContent = `(${count})`;
    if (!bag.length) {
      list.innerHTML = '<div class="bag-empty"><p class="serif">Your cart is taking a breather.</p><p>Discover considered pieces for your everyday edit.</p><a class="btn" href="shop.html">Explore the collection</a></div>';
      const clear = document.querySelector('[data-clear-cart]'); if (clear) clear.disabled = true;
      return;
    }
    const clear = document.querySelector('[data-clear-cart]'); if (clear) clear.disabled = false;
    list.innerHTML = bag.map((item, index) => `<article class="bag-item"><img src="${escapeHTML(item.image)}" alt=""><div class="bag-item-copy"><h3>${escapeHTML(item.name)}</h3><p>${escapeHTML(item.color)} · Size ${escapeHTML(item.size)}</p><div class="bag-item-actions"><div class="quantity-control" aria-label="Quantity controls"><button type="button" data-quantity-change="-1" data-item-index="${index}" aria-label="Decrease quantity">−</button><span>${item.quantity}</span><button type="button" data-quantity-change="1" data-item-index="${index}" aria-label="Increase quantity">+</button></div><button type="button" data-remove-item="${index}">Remove</button></div><p class="bag-item-price">${money((item.price || 0)*item.quantity)}</p></div></article>`).join('');
    const subtotal = bag.reduce((sum, item) => sum + (item.price || 0) * item.quantity, 0);
    const totalNode = document.querySelector('[data-bag-subtotal]'); if (totalNode) totalNode.textContent = money(subtotal);
  }
  function openBag() {
    const drawer = document.querySelector('.bag-drawer');
    const overlay = document.querySelector('.bag-overlay');
    if (!drawer || !overlay) return;
    drawer.setAttribute('aria-hidden', 'false'); drawer.classList.add('is-open'); overlay.hidden = false;
    document.body.classList.add('bag-is-open');
    const close = drawer.querySelector('[data-close-bag]'); if (close) close.focus();
  }
  function closeBag() {
    const drawer = document.querySelector('.bag-drawer'); const overlay = document.querySelector('.bag-overlay');
    if (!drawer || !overlay) return;
    drawer.setAttribute('aria-hidden', 'true'); drawer.classList.remove('is-open'); overlay.hidden = true;
    document.body.classList.remove('bag-is-open');
    const opener = document.querySelector('[data-open-bag]'); if (opener) opener.focus();
  }

  // Navigation state: clear active state, mark the current page, and track home-page sections.
  const page = document.body.dataset.page || 'home';
  const navLinks = Array.from(document.querySelectorAll('#primary-links a[data-nav]'));
  const markCurrent = key => {
    navLinks.forEach(link => {
      if (link.dataset.nav === key) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
  };
  if (page === 'shop' || page === 'product') markCurrent('shop');
  else if (page === 'editorial') markCurrent('journal');
  else if (page === 'contact') markCurrent('contact');
  else if (page === 'home') markCurrent('home');
  if (page === 'home') {
    const sections = [
      {id:'story', key:'story'},
      {id:'editorial', key:'journal'},
      {id:'footer-contact', key:'contact'}
    ].map(item => ({...item, el:document.getElementById(item.id)})).filter(item => item.el);
    if ('IntersectionObserver' in window && sections.length) {
      const observer = new IntersectionObserver(entries => {
        const visible = entries.filter(entry => entry.isIntersecting).sort((a,b) => b.intersectionRatio-a.intersectionRatio)[0];
        if (visible) markCurrent(visible.target.id === 'editorial' ? 'journal' : visible.target.id === 'footer-contact' ? 'contact' : 'story');
        else if (window.scrollY < 240 && !window.location.hash) markCurrent('home');
      }, {rootMargin:'-22% 0px -58% 0px', threshold:[0,.15,.35,.6]});
      sections.forEach(section => observer.observe(section.el));
    }
    const syncHashState = () => {
      const hash = window.location.hash;
      if (hash === '#editorial') markCurrent('journal');
      else if (hash === '#footer-contact') markCurrent('contact');
      else if (hash === '#story') markCurrent('story');
      else if (!hash && window.scrollY < 240) markCurrent('home');
    };
    syncHashState();
    window.addEventListener('hashchange', syncHashState);
  }

  // Mobile navigation: closes on selection, Escape, or tapping the toggle again.
  const menuToggle = document.querySelector('.menu-toggle');
  const primaryLinks = document.querySelector('#primary-links');
  if (menuToggle && primaryLinks) {
    const setMenu = open => {
      menuToggle.setAttribute('aria-expanded', String(open));
      menuToggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
      const icon = menuToggle.querySelector('.menu-icon');
      if (icon) icon.textContent = open ? '×' : '☰';
      primaryLinks.classList.toggle('nav-open', open);
    };
    menuToggle.addEventListener('click', () => setMenu(menuToggle.getAttribute('aria-expanded') !== 'true'));
    primaryLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
    document.addEventListener('keydown', event => { if (event.key === 'Escape') setMenu(false); });
    document.addEventListener('click', event => {
      if (!primaryLinks.contains(event.target) && !menuToggle.contains(event.target)) setMenu(false);
    });
  }

  // Demo newsletter: transparent feedback, never pretends to store an email.
  document.querySelectorAll('.newsletter-form').forEach(form => form.addEventListener('submit', event => {
    event.preventDefault();
    const message = form.parentElement.querySelector('.form-message');
    if (message) message.textContent = 'Thanks for your interest. Newsletter sign-up will be activated when the store launches; your email has not been sent.';
    form.reset();
  }));

  // Audience is inferred from the actual variant image filenames. The Unisex edit is a curated mix of men's and women's designs, not a claim that every garment is gender-neutral.
  function variantAudience(variant) {
    const path = `${variant.front || ''} ${variant.back || ''}`.toLowerCase();
    if (/women|womens/.test(path)) return 'women';
    if (/men|mens/.test(path)) return 'men';
    return 'unisex';
  }
  function variantsForAudience(product, audience) {
    const variants = product.variants || [];
    if (audience === 'women' || audience === 'men') return variants.filter(v => variantAudience(v) === audience);
    return variants;
  }

  // Product detail is selected by query string so collection cards open the right product.
  const params = new URLSearchParams(window.location.search);
  const itemKey = params.get('item') || 'essential-shirt';
  const product = products[itemKey] || products['essential-shirt'];
  const audience = ['women','men','unisex'].includes(params.get('audience')) ? params.get('audience') : '';
  const visibleVariants = variantsForAudience(product, audience);
  const selectedVariant = visibleVariants.find(v => v.name === product.color) || visibleVariants[0] || product.variants[0];
  const activeProductColor = selectedVariant.name;
  const productPage = document.querySelector('[data-product-page]');
  if (productPage) {
    const detailLayout = productPage.querySelector('.detail-layout'); if (detailLayout) detailLayout.style.setProperty('--product-tone', product.categoryTone || '#eee7dd');
    document.title = `${product.name} | VELMORA`;
    const name = productPage.querySelector('[data-product-name]'); if (name) name.textContent = product.name;
    const breadcrumb = productPage.querySelector('.breadcrumb'); if (breadcrumb) breadcrumb.innerHTML = '<a href="index.html">HOME</a> / <a href="shop.html">SHOP</a> / ' + escapeHTML(product.breadcrumb || (product.name.toUpperCase() + ' · CONCEPT'));
    const price = productPage.querySelector('[data-product-price]'); if (price) price.textContent = `${money(getVariantPrice(itemKey, product, activeProductColor))}`; 
    const desc = productPage.querySelector('[data-product-description]'); if (desc) desc.textContent = product.description;
    const colorLabel = productPage.querySelector('[data-color-label]'); if (colorLabel) colorLabel.textContent = activeProductColor;
    const details = productPage.querySelector('[data-product-details-copy]'); if (details) details.textContent = product.details;
    const gallery = productPage.querySelector('.gallery');
    if (gallery) {
      gallery.innerHTML = [selectedVariant.front, selectedVariant.back].map((src, index) => `<img ${index === 0 ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async" src="${escapeHTML(src)}" alt="${escapeHTML(product.name + (index === 0 ? ' — front view' : ' — back view'))}">`).join('');
    }
    selectedColor = activeProductColor;
    const swatches = productPage.querySelector('.swatches');
    if (swatches) {
      swatches.innerHTML = visibleVariants.map((variant) => `<button aria-label="${escapeHTML(variant.name)}" aria-pressed="${variant.name === product.color ? 'true' : 'false'}" class="swatch${variant.name === product.color ? ' active' : ''}" data-color="${escapeHTML(variant.name)}" data-front="${escapeHTML(variant.front)}" data-back="${escapeHTML(variant.back)}" data-price="${getVariantPrice(itemKey, product, variant.name)}" title="${escapeHTML(variant.name)}" style="background:${escapeHTML(variant.hex)}" type="button"></button>`).join('');
      swatches.hidden = false; const label = swatches.previousElementSibling; if (label && label.classList.contains('option-label')) label.hidden = false;
    }
    const ogTitle = document.querySelector('meta[property="og:title"]'); if (ogTitle) ogTitle.content = `${product.name} | VELMORA`;
    const ogDescription = document.querySelector('meta[property="og:description"]'); if (ogDescription) ogDescription.content = product.description;
    const ogImage = document.querySelector('meta[property="og:image"]'); if (ogImage) ogImage.content = new URL(product.image, window.location.href).href;
    const productData = document.querySelector('[data-product-jsonld]');
    if (productData) {
      productData.textContent = JSON.stringify({
        '@context': 'https://schema.org', '@type': 'Product', name: product.name,
        description: product.description, brand: {'@type':'Brand', name:'VELMORA'},
        category: `Apparel & Accessories > Clothing > ${product.category}`,
        image: product.gallery.map(src => new URL(src, window.location.href).href)
      });
    }
  }

  document.querySelectorAll('.size-btn').forEach(button => {
    button.setAttribute('aria-pressed', 'false');
    button.addEventListener('click', () => {
      document.querySelectorAll('.size-btn').forEach(other => { other.classList.remove('active'); other.setAttribute('aria-pressed', 'false'); });
      button.classList.add('active'); button.setAttribute('aria-pressed', 'true'); selectedSize = button.textContent.trim();
      const notice = document.querySelector('.notice'); if (notice) notice.textContent = '';
    });
  });
  document.querySelectorAll('.swatch').forEach(button => {
    button.setAttribute('aria-pressed', button.classList.contains('active') ? 'true' : 'false');
    button.addEventListener('click', () => {
      document.querySelectorAll('.swatch').forEach(other => { other.classList.remove('active'); other.setAttribute('aria-pressed', 'false'); });
      button.classList.add('active'); button.setAttribute('aria-pressed', 'true');
      selectedColor = button.dataset.color || activeProductColor;
      const priceEl = document.querySelector('[data-product-price]'); if (priceEl) priceEl.textContent = money(Number(button.dataset.price || getVariantPrice(itemKey, product, selectedColor)));
      const label = document.querySelector('[data-color-label]'); if (label) label.textContent = selectedColor;
      const gallery = document.querySelector('.gallery'); if (gallery && button.dataset.front && button.dataset.back) { gallery.innerHTML = [[button.dataset.front, 'front'], [button.dataset.back, 'back']].map(([src, view], index) => `<img ${index === 0 ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async" src="${escapeHTML(src)}" alt="${escapeHTML(product.name + ' in ' + selectedColor + ' — ' + view + ' view')}">`).join(''); }
    });
  });

  const addButton = document.querySelector('[data-add-cart]');
  if (addButton) addButton.addEventListener('click', () => {
    const notice = document.querySelector('.notice');
    if (!selectedSize) { if (notice) notice.textContent = 'Please select a size before adding this piece to your cart.'; document.querySelector('.sizes')?.scrollIntoView({behavior:'smooth', block:'center'}); document.querySelector('.size-btn')?.focus(); return; }
    const key = `${itemKey}|${selectedColor}|${selectedSize}`;
    const existing = bag.find(entry => entry.key === key);
    if (existing) existing.quantity += 1;
    else bag.push({ key, id: itemKey, name: product.name, image: document.querySelector('.swatch.active')?.dataset.front || selectedVariant.front, color: selectedColor, size: selectedSize, price: getVariantPrice(itemKey, product, selectedColor || product.color), quantity: 1 });
    saveBag();
    if (notice) notice.textContent = `${product.name} (${selectedColor}, ${selectedSize}) added to your preview cart.`;
    openBag();
  });


  // Accessible image viewer: click any product gallery image to inspect and zoom.
  let viewerScale = 1;
  function ensureImageViewer() {
    let viewer = document.querySelector('[data-image-viewer]');
    if (viewer) return viewer;
    viewer = document.createElement('div');
    viewer.className = 'image-viewer';
    viewer.dataset.imageViewer = '';
    viewer.hidden = true;
    viewer.innerHTML = `<div class="image-viewer-backdrop" data-viewer-close></div><section class="image-viewer-panel" role="dialog" aria-modal="true" aria-label="Product image viewer"><button type="button" class="image-viewer-close" data-viewer-close aria-label="Close image viewer">×</button><button type="button" class="image-viewer-control image-viewer-minus" data-viewer-zoom="-1" aria-label="Zoom out">−</button><img alt="" data-viewer-image><button type="button" class="image-viewer-control image-viewer-plus" data-viewer-zoom="1" aria-label="Zoom in">+</button><button type="button" class="image-viewer-reset" data-viewer-reset>Reset zoom</button><p>Use + / − to zoom · Esc to close</p></section>`;
    document.body.appendChild(viewer);
    viewer.addEventListener('click', event => {
      const close = event.target.closest('[data-viewer-close]');
      if (close) { viewer.hidden = true; document.body.classList.remove('viewer-open'); }
      const zoom = event.target.closest('[data-viewer-zoom]');
      const image = viewer.querySelector('[data-viewer-image]');
      if (zoom && image) { viewerScale = Math.max(1, Math.min(3, viewerScale + Number(zoom.dataset.viewerZoom) * .25)); image.style.transform = `scale(${viewerScale})`; }
      if (event.target.closest('[data-viewer-reset]') && image) { viewerScale = 1; image.style.transform = 'scale(1)'; }
    });
    document.addEventListener('keydown', event => {
      if (viewer.hidden) return;
      if (event.key === 'Escape') { viewer.hidden = true; document.body.classList.remove('viewer-open'); }
      if (event.key === '+' || event.key === '=') viewer.querySelector('[data-viewer-zoom="1"]').click();
      if (event.key === '-') viewer.querySelector('[data-viewer-zoom="-1"]').click();
    });
    return viewer;
  }
  document.addEventListener('click', event => {
    const img = event.target.closest('.gallery img, .product-card .product-image img');
    if (!img) return;
    const viewer = ensureImageViewer();
    const viewerImg = viewer.querySelector('[data-viewer-image]');
    viewerScale = 1;
    viewerImg.src = img.currentSrc || img.src;
    viewerImg.alt = img.alt || 'Product image enlarged';
    viewerImg.style.transform = 'scale(1)';
    viewer.hidden = false;
    document.body.classList.add('viewer-open');
    viewer.querySelector('[data-viewer-close]').focus();
  });

  // Collection filtering, sorting, and accessible result count.
  const filter = document.querySelector('[data-filter]');
  const sort = document.querySelector('[data-sort]');
  const grid = document.querySelector('[data-product-grid]');
  if (grid) {
    grid.querySelectorAll('[data-product-card]').forEach(card => {
      const id = card.dataset.productId;
      if (samplePrices[id]) {
        card.dataset.price = String(samplePrices[id]);
        const priceEl = card.querySelector('.price');
        if (priceEl) priceEl.textContent = money(samplePrices[id]);
      }
    });
  }
  const resultCount = document.querySelector('[data-results-count]');
  const collectionAudience = ['women','men','unisex'].includes(new URLSearchParams(window.location.search).get('audience')) ? new URLSearchParams(window.location.search).get('audience') : '';
  const collectionTitle = document.querySelector('.page-hero .page-title');
  const collectionIntro = document.querySelector('.page-hero .container > p');
  if (collectionAudience && collectionTitle && collectionIntro) {
    const copy = {
      women: ['Women’s Edit.', 'Womenswear designs only, with matching images and color options for each piece.'],
      men: ['Men’s Edit.', 'Menswear designs only, with matching images and color options for each piece.'],
      unisex: ['Unisex Essentials.', 'A curated mix of pieces from the women’s and men’s edits. Each product retains its intended design and fit.']
    }[collectionAudience];
    collectionTitle.textContent = copy[0]; collectionIntro.textContent = copy[1];
  }
  function updateCollection() {
    if (!grid) return;
    const cards = [...grid.querySelectorAll('[data-product-card]')];
    const selectedCategory = filter ? filter.value : 'all';
    cards.forEach(card => {
      const product = products[card.dataset.productId];
      const variants = product ? variantsForAudience(product, collectionAudience) : [];
      const chosen = collectionAudience === 'unisex' && variants.length ? variants[(Number(card.dataset.order) - 1) % variants.length] : (variants.find(v => variantAudience(v) === collectionAudience) || variants[0]);
      const hasAudienceMatch = !collectionAudience || variants.length > 0;
      card.hidden = !hasAudienceMatch || !(selectedCategory === 'all' || card.dataset.category === selectedCategory);
      if (hasAudienceMatch && chosen) {
        const image = card.querySelector('.product-image img'); if (image) { image.src = chosen.front; image.alt = `${product.name} in ${chosen.name}`; }
        const meta = card.querySelector('.product-meta p'); if (meta) meta.textContent = `${product.category} · ${chosen.name}${collectionAudience === 'unisex' ? ` · ${variantAudience(chosen) === 'women' ? 'Women’s design' : 'Men’s design'}` : ''}`;
        const price = card.querySelector('.price'); const variantPrice = getVariantPrice(card.dataset.productId, product, chosen.name); card.dataset.price = String(variantPrice); if (price) price.textContent = money(variantPrice);
        card.href = `product.html?item=${encodeURIComponent(card.dataset.productId)}${collectionAudience ? `&audience=${collectionAudience}` : ''}`;
      }
    });
    const visible = cards.filter(card => !card.hidden);
    if (sort) visible.sort((a, b) => {
      const aName = a.querySelector('h3')?.textContent || ''; const bName = b.querySelector('h3')?.textContent || '';
      if (sort.value === 'az') return aName.localeCompare(bName);
      if (sort.value === 'za') return bName.localeCompare(aName);
      if (sort.value === 'price-low') return Number(a.dataset.price) - Number(b.dataset.price);
      if (sort.value === 'price-high') return Number(b.dataset.price) - Number(a.dataset.price);
      return Number(a.dataset.order) - Number(b.dataset.order);
    }).forEach(card => grid.appendChild(card));
    if (resultCount) resultCount.textContent = `Showing ${visible.length} ${visible.length === 1 ? 'piece' : 'pieces'}`;
  }
  if (filter) {
    const requestedCategory = new URLSearchParams(window.location.search).get('category');
    if (['tops','bottoms','layers'].includes(requestedCategory)) filter.value = requestedCategory;
    filter.addEventListener('change', updateCollection);
  }
  if (sort) sort.addEventListener('change', updateCollection);
  const resetFilters = document.querySelector('[data-reset-filters]');
  if (resetFilters) resetFilters.addEventListener('click', () => { if (filter) filter.value = 'all'; if (sort) sort.value = 'featured'; updateCollection(); });

  createBagDrawer();
  createSearchPanel();
  renderSearchResults('');
  updateBagCount();
  renderBag();
  document.addEventListener('click', event => {
    if (event.target.closest('[data-open-bag]')) { event.preventDefault(); openBag(); }
    if (event.target.closest('[data-open-search]')) { event.preventDefault(); openSearch(); }
    if (event.target.closest('[data-close-search]') || event.target.matches('[data-search-overlay]')) closeSearch();
    if (event.target.closest('[data-close-bag]')) closeBag();
    const remove = event.target.closest('[data-remove-item]');
    if (remove) { bag.splice(Number(remove.dataset.removeItem), 1); saveBag(); }
    const quantityButton = event.target.closest('[data-quantity-change]');
    if (quantityButton) { const item = bag[Number(quantityButton.dataset.itemIndex)]; if (item) { item.quantity += Number(quantityButton.dataset.quantityChange); if (item.quantity < 1) bag.splice(Number(quantityButton.dataset.itemIndex),1); saveBag(); } }
    if (event.target.closest('[data-clear-cart]')) { bag = []; saveBag(); }
    if (event.target.closest('[data-demo-checkout]')) {
      const note = document.querySelector('.bag-note'); if (note) note.textContent = 'Checkout is not connected in this preview. No order or payment has been created.';
    }
  });
  document.querySelector('[data-site-search-input]')?.addEventListener('input', event => renderSearchResults(event.target.value));
  document.querySelector('[data-site-search-form]')?.addEventListener('submit', event => { event.preventDefault(); const q=document.querySelector('[data-site-search-input]').value.trim(); if(q) { const first=document.querySelector('[data-search-results] .search-result'); if(first) window.location.href=first.href; else renderSearchResults(q); } });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !document.querySelector('[data-search-overlay]')?.hidden) { closeSearch(); return; }
    const drawer = document.querySelector('.bag-drawer.is-open');
    if (!drawer) return;
    if (event.key === 'Escape') { closeBag(); return; }
    if (event.key === 'Tab') {
      const focusable = [...drawer.querySelectorAll('a[href], button:not(:disabled), input:not(:disabled), select:not(:disabled), [tabindex="0"]')].filter(el => el.offsetParent !== null);
      if (!focusable.length) { event.preventDefault(); drawer.focus(); return; }
      const first = focusable[0], last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
  });
  if (grid) updateCollection();
})();
