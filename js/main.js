/* Maison Anza Parfums — interacción del sitio */
(function () {
  "use strict";

  const WHATSAPP_NUMBER = "51989852070";
  const CART_KEY = "maisonanza_cart";
  const LANG_KEY = "maisonanza_lang";

  /* ============ i18n ============ */
  const STRINGS = {
    es: {
      nav_home: "Inicio", nav_catalog: "Catálogo", nav_about: "Nosotros",
      nav_shipping: "Envíos", nav_contact: "Contacto",
      hero_kicker: "Colección exclusiva · Decants 5ml",
      hero_title: "Exclusividad que se huele,<br>no que se paga",
      hero_sub: "Fragmentos originales de las casas árabes, de diseñador y de nicho más deseadas — en formato decant de 5ml, a un precio real.",
      hero_cta_catalog: "Ver catálogo",
      hero_cta_whatsapp: "Escríbenos por WhatsApp",
      trust_1: "Decants 100% originales", trust_2: "Envíos a todo Lima",
      trust_3: "Pedidos por WhatsApp", trust_4: "Fraccionado con cuidado",
      catalog_kicker: "Catálogo", catalog_title: "Todas las fragancias",
      catalog_sub: "15 fragancias seleccionadas, disponibles en decant de 5ml.",
      filter_all: "Todos", filter_arabe: "Colección Árabe",
      filter_disenador: "Colección Diseñador", filter_nicho: "Colección Nicho",
      search_placeholder: "Buscar por nombre o marca...",
      about_kicker: "Nosotros", about_title: "Maison Anza Parfums",
      about_p1: "No buscamos solo vender un perfume: queremos mostrarte la historia detrás de la perfumería y que puedas apreciar el mundo de los perfumes. Cada fragancia que ofrecemos tiene una historia, un origen y un carácter propio — y nuestra misión es que la descubras, la entiendas y la disfrutes antes de hacerla tuya.",
      about_p2: "Por eso fraccionamos con cuidado fragancias árabes, de diseñador y de nicho en decants de 5ml — el tamaño perfecto para explorar y coleccionar sin comprar el frasco completo. Cada decant se extrae directamente del original, se envasa en atomizadores de calidad y se etiqueta con el nombre exacto de la fragancia. Nada de clones ni imitaciones: solo perfumería original.",
      about_stat1: "fragancias en catálogo", about_stat2: "formato decant original", about_stat3: "colecciones curadas",
      shipping_kicker: "Envíos y pagos", shipping_title: "Te lo llevamos a donde estés en Lima",
      shipping_1_title: "Cobertura",
      shipping_1_text: "Realizamos envíos a todos los distritos de Lima mediante delivery, coordinando el punto y horario de entrega directamente por WhatsApp.",
      shipping_2_title: "Tiempos",
      shipping_2_text: "Los pedidos se despachan en 24-48 horas útiles según disponibilidad y zona de entrega.",
      shipping_3_title: "Formas de pago",
      shipping_3_text: "Yape, Plin, transferencia o efectivo contra entrega. Coordinamos el detalle al confirmar tu pedido por WhatsApp.",
      footer_cta_title: "¿Lista tu fragancia ideal?",
      footer_cta_sub: "Escríbenos por WhatsApp o Instagram para separar tu decant o consultar disponibilidad de frasco completo.",
      footer_cta_btn: "Pedir por WhatsApp",
      footer_tagline: "Perfumería árabe, de diseñador y de nicho en decants de 5ml.",
      footer_follow: "Síguenos", footer_info_title: "Información",
      footer_info_1: "Envíos a todo Lima", footer_info_2: "Atención de lunes a domingo",
      footer_rights: "Todos los derechos reservados.",
      note_top: "Salida", note_heart: "Corazón", note_base: "Fondo",
      ideal_for: "Ideal para:", decant_5ml: "Decant 5ml", add_to_cart: "Agregar al carrito",
      cart_title: "Tu carrito",
      cart_empty: "Tu carrito está vacío. Explora el catálogo y agrega tus decants favoritos.",
      cart_total: "Total", cart_note: "El envío se coordina por WhatsApp según tu distrito en Lima.",
      cart_whatsapp_btn: "Pedir por WhatsApp", cart_clear_btn: "Vaciar carrito",
      added_toast: "Agregado al carrito",
      collection_arabe: "Colección Árabe", collection_disenador: "Colección Diseñador", collection_nicho: "Colección Nicho",
      gender_masculino: "Masculino", gender_unisex: "Unisex",
      view_detail: "Ver detalle", add_short: "Agregar",
      wa_greeting: "Hola Maison Anza Parfums, quisiera consultar por sus decants.",
      wa_order_intro: "Hola, quiero hacer este pedido:",
      wa_order_total: "Total",
      wa_order_closing: "¿Me ayudas a coordinar el envío en Lima? Gracias."
    },
    en: {
      nav_home: "Home", nav_catalog: "Catalog", nav_about: "About",
      nav_shipping: "Shipping", nav_contact: "Contact",
      hero_kicker: "Exclusive collection · 5ml decants",
      hero_title: "Exclusivity you can smell,<br>not one you overpay for",
      hero_sub: "Original fragments from the most sought-after Arabian, designer and niche houses — in 5ml decant format, at a real price.",
      hero_cta_catalog: "View catalog",
      hero_cta_whatsapp: "Message us on WhatsApp",
      trust_1: "100% original decants", trust_2: "Delivery all over Lima",
      trust_3: "Orders via WhatsApp", trust_4: "Carefully hand-poured",
      catalog_kicker: "Catalog", catalog_title: "All fragrances",
      catalog_sub: "15 selected fragrances, available as 5ml decants.",
      filter_all: "All", filter_arabe: "Arabian Collection",
      filter_disenador: "Designer Collection", filter_nicho: "Niche Collection",
      search_placeholder: "Search by name or brand...",
      about_kicker: "About us", about_title: "Maison Anza Parfums",
      about_p1: "We're not just here to sell you a perfume: we want to show you the story behind perfumery so you can truly appreciate the world of fragrance. Every scent we offer carries a story, an origin and a character of its own — and our mission is for you to discover, understand and enjoy it before making it yours.",
      about_p2: "That's why we carefully decant Arabian, designer and niche fragrances into 5ml portions — the perfect size to explore and collect without buying the full bottle. Every decant is drawn directly from the original, filled into quality atomizers and labeled with the exact fragrance name. No clones, no imitations — only original perfumery.",
      about_stat1: "fragrances in catalog", about_stat2: "original decant format", about_stat3: "curated collections",
      shipping_kicker: "Shipping & payments", shipping_title: "We bring it to you, anywhere in Lima",
      shipping_1_title: "Coverage",
      shipping_1_text: "We deliver to every district in Lima, coordinating the drop-off point and time directly over WhatsApp.",
      shipping_2_title: "Timing",
      shipping_2_text: "Orders are dispatched within 24-48 business hours depending on availability and delivery area.",
      shipping_3_title: "Payment methods",
      shipping_3_text: "Yape, Plin, bank transfer or cash on delivery. We confirm the details with you over WhatsApp.",
      footer_cta_title: "Found your next signature scent?",
      footer_cta_sub: "Message us on WhatsApp or Instagram to reserve your decant or ask about full-bottle availability.",
      footer_cta_btn: "Order via WhatsApp",
      footer_tagline: "Arabian, designer and niche perfumery in 5ml decants.",
      footer_follow: "Follow us", footer_info_title: "Information",
      footer_info_1: "Delivery all over Lima", footer_info_2: "Open every day of the week",
      footer_rights: "All rights reserved.",
      note_top: "Top notes", note_heart: "Heart notes", note_base: "Base notes",
      ideal_for: "Best for:", decant_5ml: "5ml decant", add_to_cart: "Add to cart",
      cart_title: "Your cart",
      cart_empty: "Your cart is empty. Browse the catalog and add your favorite decants.",
      cart_total: "Total", cart_note: "Shipping is arranged over WhatsApp based on your district in Lima.",
      cart_whatsapp_btn: "Order via WhatsApp", cart_clear_btn: "Clear cart",
      added_toast: "Added to cart",
      collection_arabe: "Arabian Collection", collection_disenador: "Designer Collection", collection_nicho: "Niche Collection",
      gender_masculino: "Men's", gender_unisex: "Unisex",
      view_detail: "View detail", add_short: "Add",
      wa_greeting: "Hi Maison Anza Parfums, I'd like to ask about your decants.",
      wa_order_intro: "Hi, I'd like to place this order:",
      wa_order_total: "Total",
      wa_order_closing: "Could you help me arrange delivery in Lima? Thank you."
    }
  };

  let currentLang = localStorage.getItem(LANG_KEY) || "es";

  function t(key) {
    return (STRINGS[currentLang] && STRINGS[currentLang][key]) || STRINGS.es[key] || key;
  }

  function applyI18n() {
    document.documentElement.lang = currentLang;
    document.body.dataset.lang = currentLang;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      el.innerHTML = t(el.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      el.setAttribute("placeholder", t(el.getAttribute("data-i18n-placeholder")));
    });
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.langBtn === currentLang);
    });
    renderProducts();
    renderCart();
  }

  /* ============ Product data helpers ============ */
  function pd(product) {
    return product[currentLang] || product.es;
  }
  function collectionLabel(collection) {
    return t("collection_" + collection);
  }
  function genderLabel(gender) {
    return t("gender_" + gender);
  }
  function priceLabel(price) {
    return "S/ " + price;
  }

  /* ============ State ============ */
  let activeFilter = "todos";
  let searchTerm = "";
  let cart = loadCart();
  let modalProduct = null;
  let modalQty = 1;

  function loadCart() {
    try {
      return JSON.parse(localStorage.getItem(CART_KEY)) || [];
    } catch (e) {
      return [];
    }
  }
  function saveCart() {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }

  /* ============ Render products ============ */
  const grid = document.getElementById("productGrid");

  function iconEye() {
    return '<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M1.5 12S5 5 12 5s10.5 7 10.5 7-3.5 7-10.5 7S1.5 12 1.5 12z"/><circle cx="12" cy="12" r="3"/></svg>';
  }
  function iconCart() {
    return '<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="9" cy="21" r="1.4"/><circle cx="18" cy="21" r="1.4"/><path d="M2.5 3h2l2.2 12.2a2 2 0 0 0 2 1.6h8.6a2 2 0 0 0 2-1.6L21 7H6"/></svg>';
  }

  function renderProducts() {
    const term = searchTerm.trim().toLowerCase();
    const filtered = PRODUCTS.filter((p) => {
      const matchesFilter = activeFilter === "todos" || p.collection === activeFilter;
      const matchesSearch = !term || p.name.toLowerCase().includes(term) || p.brand.toLowerCase().includes(term);
      return matchesFilter && matchesSearch;
    });

    if (!filtered.length) {
      grid.innerHTML = `<p class="no-results">${currentLang === "es" ? "No encontramos fragancias con ese filtro." : "No fragrances match that filter."}</p>`;
      return;
    }

    grid.innerHTML = filtered.map((p) => {
      const d = pd(p);
      return `
      <article class="product-card" data-id="${p.id}">
        <div class="card-top">
          <span class="card-collection">${collectionLabel(p.collection)}</span>
          <span class="card-num">N.${p.num}</span>
        </div>
        <div>
          <p class="card-brand">${p.brand}</p>
          <h3 class="card-name">${p.name}</h3>
        </div>
        <p class="card-desc">${d.desc}</p>
        <div class="card-tags">
          <span class="tag">${genderLabel(p.gender)}</span>
          <span class="tag">${t("decant_5ml")}</span>
        </div>
        <div class="card-bottom">
          <div class="card-price">${priceLabel(p.price)}<span>${t("decant_5ml")}</span></div>
          <div class="card-actions">
            <button type="button" class="icon-round" data-action="detail" data-id="${p.id}" aria-label="${t('view_detail')}" title="${t('view_detail')}">${iconEye()}</button>
            <button type="button" class="icon-round" data-action="quick-add" data-id="${p.id}" aria-label="${t('add_short')}" title="${t('add_short')}">${iconCart()}</button>
          </div>
        </div>
      </article>`;
    }).join("");
  }

  grid.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-action]");
    const card = e.target.closest(".product-card");
    if (btn) {
      const id = btn.dataset.id;
      if (btn.dataset.action === "detail") {
        openModal(id);
      } else if (btn.dataset.action === "quick-add") {
        addToCart(id, 1);
        showToast(t("added_toast"));
      }
      return;
    }
    if (card) openModal(card.dataset.id);
  });

  /* ============ Filters & search ============ */
  const filterGroup = document.getElementById("filterGroup");
  filterGroup.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    activeFilter = btn.dataset.filter;
    filterGroup.querySelectorAll(".filter-btn").forEach((b) => b.classList.toggle("active", b === btn));
    renderProducts();
  });

  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("input", (e) => {
    searchTerm = e.target.value;
    renderProducts();
  });

  /* ============ Modal ============ */
  const modalOverlay = document.getElementById("modalOverlay");
  const modalQtyEl = document.getElementById("modalQty");

  function openModal(id) {
    const product = PRODUCTS.find((p) => p.id === id);
    if (!product) return;
    modalProduct = product;
    modalQty = 1;
    fillModal();
    modalOverlay.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function fillModal() {
    const p = modalProduct;
    const d = pd(p);
    document.getElementById("modalCollection").textContent = collectionLabel(p.collection) + " · " + genderLabel(p.gender);
    document.getElementById("modalNum").textContent = "N." + p.num;
    document.getElementById("modalTitle").textContent = p.name;
    document.getElementById("modalBrand").textContent = p.brand;
    document.getElementById("modalDesc").textContent = d.desc;
    document.getElementById("modalSalida").textContent = d.salida;
    document.getElementById("modalCorazon").textContent = d.corazon;
    document.getElementById("modalFondo").textContent = d.fondo;
    document.getElementById("modalIdeal").textContent = d.idealPara;
    document.getElementById("modalPrice").textContent = priceLabel(p.price);
    modalQtyEl.textContent = modalQty;
  }

  function closeModal() {
    modalOverlay.classList.remove("open");
    document.body.style.overflow = "";
  }

  document.getElementById("modalClose").addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", (e) => { if (e.target === modalOverlay) closeModal(); });

  document.getElementById("modalQtyMinus").addEventListener("click", () => {
    modalQty = Math.max(1, modalQty - 1);
    modalQtyEl.textContent = modalQty;
  });
  document.getElementById("modalQtyPlus").addEventListener("click", () => {
    modalQty = Math.min(20, modalQty + 1);
    modalQtyEl.textContent = modalQty;
  });
  document.getElementById("modalAddCart").addEventListener("click", () => {
    if (!modalProduct) return;
    addToCart(modalProduct.id, modalQty);
    showToast(t("added_toast"));
    closeModal();
  });

  /* ============ Cart ============ */
  function addToCart(id, qty) {
    const existing = cart.find((item) => item.id === id);
    if (existing) {
      existing.qty += qty;
    } else {
      cart.push({ id, qty });
    }
    saveCart();
    renderCart();
    openCart();
  }

  function updateQty(id, qty) {
    const item = cart.find((i) => i.id === id);
    if (!item) return;
    item.qty = qty;
    if (item.qty <= 0) cart = cart.filter((i) => i.id !== id);
    saveCart();
    renderCart();
  }

  function removeFromCart(id) {
    cart = cart.filter((i) => i.id !== id);
    saveCart();
    renderCart();
  }

  function cartTotal() {
    return cart.reduce((sum, item) => {
      const product = PRODUCTS.find((p) => p.id === item.id);
      return sum + (product ? product.price * item.qty : 0);
    }, 0);
  }

  const cartItemsEl = document.getElementById("cartItems");
  const cartCountEl = document.getElementById("cartCount");
  const cartTotalEl = document.getElementById("cartTotal");

  function renderCart() {
    const totalQty = cart.reduce((s, i) => s + i.qty, 0);
    cartCountEl.textContent = totalQty;
    cartCountEl.style.display = totalQty ? "flex" : "none";

    if (!cart.length) {
      cartItemsEl.innerHTML = `<p class="cart-empty">${t("cart_empty")}</p>`;
    } else {
      cartItemsEl.innerHTML = cart.map((item) => {
        const product = PRODUCTS.find((p) => p.id === item.id);
        if (!product) return "";
        return `
        <div class="cart-item" data-id="${product.id}">
          <div class="cart-item-info">
            <p class="cart-item-name">${product.name}</p>
            <p class="cart-item-brand">${product.brand} · ${t("decant_5ml")}</p>
            <div class="cart-item-row">
              <div class="cart-item-qty">
                <button type="button" data-qty="minus">−</button>
                <span>${item.qty}</span>
                <button type="button" data-qty="plus">+</button>
              </div>
              <span class="cart-item-price">${priceLabel(product.price * item.qty)}</span>
            </div>
            <button type="button" class="cart-item-remove" data-remove>${currentLang === "es" ? "Eliminar" : "Remove"}</button>
          </div>
        </div>`;
      }).join("");
    }
    cartTotalEl.textContent = priceLabel(cartTotal());
  }

  cartItemsEl.addEventListener("click", (e) => {
    const itemEl = e.target.closest(".cart-item");
    if (!itemEl) return;
    const id = itemEl.dataset.id;
    const item = cart.find((i) => i.id === id);
    if (!item) return;

    if (e.target.closest("[data-qty='plus']")) updateQty(id, item.qty + 1);
    if (e.target.closest("[data-qty='minus']")) updateQty(id, item.qty - 1);
    if (e.target.closest("[data-remove]")) removeFromCart(id);
  });

  const cartDrawer = document.getElementById("cartDrawer");
  const cartOverlay = document.getElementById("cartOverlay");

  function openCart() {
    cartDrawer.classList.add("open");
    cartOverlay.classList.add("open");
    document.body.style.overflow = "hidden";
  }
  function closeCart() {
    cartDrawer.classList.remove("open");
    cartOverlay.classList.remove("open");
    document.body.style.overflow = "";
  }
  document.getElementById("cartToggle").addEventListener("click", openCart);
  document.getElementById("cartClose").addEventListener("click", closeCart);
  cartOverlay.addEventListener("click", closeCart);

  document.getElementById("cartClearBtn").addEventListener("click", () => {
    cart = [];
    saveCart();
    renderCart();
  });

  /* ============ WhatsApp ============ */
  function buildOrderMessage() {
    const lines = [t("wa_order_intro"), ""];
    cart.forEach((item) => {
      const product = PRODUCTS.find((p) => p.id === item.id);
      if (!product) return;
      lines.push(`• ${product.name} (${product.brand}) x${item.qty} — ${priceLabel(product.price * item.qty)}`);
    });
    lines.push("");
    lines.push(`${t("wa_order_total")}: ${priceLabel(cartTotal())}`);
    lines.push("");
    lines.push(t("wa_order_closing"));
    return lines.join("\n");
  }

  function whatsappLink(message) {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  }

  document.getElementById("cartWhatsappBtn").addEventListener("click", () => {
    const message = cart.length ? buildOrderMessage() : t("wa_greeting");
    window.open(whatsappLink(message), "_blank", "noopener");
  });

  document.getElementById("heroWhatsapp").addEventListener("click", (e) => {
    e.preventDefault();
    window.open(whatsappLink(t("wa_greeting")), "_blank", "noopener");
  });
  document.getElementById("footerWhatsapp").addEventListener("click", (e) => {
    e.preventDefault();
    const message = cart.length ? buildOrderMessage() : t("wa_greeting");
    window.open(whatsappLink(message), "_blank", "noopener");
  });

  /* ============ Toast ============ */
  const toastEl = document.getElementById("toast");
  let toastTimer = null;
  function showToast(message) {
    toastEl.textContent = message;
    toastEl.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove("show"), 2200);
  }

  /* ============ Language toggle ============ */
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      currentLang = btn.dataset.langBtn;
      localStorage.setItem(LANG_KEY, currentLang);
      applyI18n();
    });
  });

  /* ============ Header scroll state ============ */
  const header = document.getElementById("siteHeader");
  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 12);
  }, { passive: true });

  /* ============ Mobile menu ============ */
  const mainNav = document.getElementById("mainNav");
  const menuToggle = document.getElementById("menuToggle");
  menuToggle.addEventListener("click", () => mainNav.classList.toggle("open"));
  mainNav.addEventListener("click", (e) => {
    if (e.target.tagName === "A") mainNav.classList.remove("open");
  });

  /* ============ Escape key closes overlays ============ */
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
      closeCart();
    }
  });

  /* ============ Footer year ============ */
  document.getElementById("year").textContent = new Date().getFullYear();

  /* ============ Init ============ */
  applyI18n();
})();
