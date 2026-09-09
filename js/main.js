/* Maison Anza Parfums — interacción del sitio */
(function () {
  "use strict";

  const WHATSAPP_NUMBER = "51989852070";
  const CART_KEY = "maisonanza_cart";
  const LANG_KEY = "maisonanza_lang";

  /* ============ i18n ============ */
  const STRINGS = {
    es: {
      nav_home: "Inicio", nav_catalog: "Catálogo", nav_about: "Nosotros", nav_guide: "Guía",
      nav_shipping: "Envíos", nav_faq: "Preguntas", nav_contact: "Contacto",
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
      guide_kicker: "Guía de fragancias", guide_title: "El mundo de los perfumes, en simple",
      guide_sub: "Antes de elegir tu decant, conoce cómo se construye una fragancia y qué familia se ajusta a tu gusto.",
      guide_top_text: "Las primeras notas que percibes al aplicar el perfume. Duran entre 5 y 15 minutos y suelen ser cítricas, frescas o especiadas.",
      guide_heart_text: "El alma de la fragancia. Aparece cuando la salida se disipa y define su carácter principal: florales, frutales o especias más profundas.",
      guide_base_text: "Las notas más duraderas, las que quedan en la piel horas después. Suelen ser amaderadas, ambaradas, almizcladas o dulces.",
      guide_families_title: "Familias olfativas",
      guide_family1_title: "Cítrica", guide_family1_text: "Frescas y vibrantes: bergamota, limón, naranja. Ideales para el día.",
      guide_family2_title: "Floral", guide_family2_text: "Elegantes y románticas: jazmín, rosa, flor de azahar.",
      guide_family3_title: "Amaderada", guide_family3_text: "Cálidas y envolventes: sándalo, cedro, vetiver.",
      guide_family4_title: "Oriental / Ambarada", guide_family4_text: "Intensas y sensuales: vainilla, ámbar, especias.",
      guide_family5_title: "Gourmand", guide_family5_text: "Dulces y adictivas: café, miel, praliné, tofe.",
      guide_family6_title: "Acuática", guide_family6_text: "Limpias y ligeras: notas marinas, algas, brisa.",
      shipping_kicker: "Envíos y pagos", shipping_title: "Te lo llevamos a donde estés en Lima",
      shipping_1_title: "Cobertura",
      shipping_1_text: "Realizamos envíos a todos los distritos de Lima mediante delivery, coordinando el punto y horario de entrega directamente por WhatsApp.",
      shipping_2_title: "Tiempos",
      shipping_2_text: "Los pedidos se despachan en 24-48 horas útiles según disponibilidad y zona de entrega.",
      shipping_3_title: "Formas de pago",
      shipping_3_text: "Yape, Plin, transferencia o efectivo contra entrega. Coordinamos el detalle al confirmar tu pedido por WhatsApp.",
      faq_kicker: "Preguntas frecuentes", faq_title: "Todo lo que quieras saber",
      faq_q1: "¿Qué es exactamente un decant?",
      faq_a1: "Es una fracción de 5ml de una fragancia, extraída directamente del frasco original y envasada en un atomizador de calidad. Te permite probar, viajar o disfrutar un perfume de lujo sin pagar por el frasco completo.",
      faq_q2: "¿Los decants son 100% originales?",
      faq_a2: "Sí. Cada decant se extrae directamente del frasco original de la marca, sin diluir ni mezclar. No trabajamos con clones ni imitaciones.",
      faq_q3: "¿A qué zonas hacen envíos?",
      faq_a3: "Por ahora hacemos delivery a todos los distritos de Lima. Escríbenos por WhatsApp para coordinar el punto y horario de entrega.",
      faq_q4: "¿Cómo elijo el decant correcto para mí?",
      faq_a4: "Cada ficha de producto incluye sus notas de salida, corazón y fondo, además de para qué ocasión es ideal. Si aún tienes dudas, escríbenos por WhatsApp y te asesoramos según tus gustos.",
      faq_q5: "¿Puedo comprar el frasco completo?",
      faq_a5: "En algunos casos sí tenemos disponibilidad de frasco completo. Consúltanos por WhatsApp o Instagram con el nombre de la fragancia que te interesa.",
      faq_q6: "¿Cómo hago mi pedido?",
      faq_a6: "Agrega tus decants favoritos al carrito y presiona \"Pedir por WhatsApp\": se genera automáticamente un mensaje con tu pedido y el total, listo para enviarnos.",
      footer_cta_title: "¿Lista tu fragancia ideal?",
      footer_cta_sub: "Escríbenos por WhatsApp o Instagram para separar tu decant o consultar disponibilidad de frasco completo.",
      footer_cta_btn: "Pedir por WhatsApp",
      footer_tagline: "Perfumería árabe, de diseñador y de nicho en decants de 5ml.",
      footer_follow: "Síguenos", footer_info_title: "Información",
      footer_info_1: "Envíos a todo Lima", footer_info_2: "Atención de lunes a domingo",
      footer_rights: "Todos los derechos reservados.",
      note_top: "Salida", note_heart: "Corazón", note_base: "Fondo",
      ideal_for: "Ideal para:", decant_5ml: "Decant 5ml", add_to_cart: "Agregar al carrito",
      out_of_stock: "Agotado",
      cart_title: "Tu carrito",
      cart_empty: "Tu carrito está vacío. Explora el catálogo y agrega tus decants favoritos.",
      cart_total: "Total", cart_note: "El envío se coordina por WhatsApp según tu distrito en Lima.",
      cart_whatsapp_btn: "Pedir por WhatsApp", cart_clear_btn: "Vaciar carrito",
      added_toast: "Agregado al carrito",
      collection_arabe: "Colección Árabe", collection_disenador: "Colección Diseñador", collection_nicho: "Colección Nicho",
      gender_masculino: "Masculino", gender_unisex: "Unisex",
      view_detail: "Ver detalle", add_short: "Agregar",
      wa_fab_label: "Escríbenos por WhatsApp",
      wa_greeting: "Hola Maison Anza Parfums, quisiera consultar por sus decants.",
      wa_order_intro: "Hola, quiero hacer este pedido:",
      wa_order_total: "Total",
      wa_order_closing: "¿Me ayudas a coordinar el envío en Lima? Gracias."
    },
    en: {
      nav_home: "Home", nav_catalog: "Catalog", nav_about: "About", nav_guide: "Guide",
      nav_shipping: "Shipping", nav_faq: "FAQ", nav_contact: "Contact",
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
      guide_kicker: "Fragrance guide", guide_title: "The world of perfume, made simple",
      guide_sub: "Before choosing your decant, learn how a fragrance is built and which family fits your taste.",
      guide_top_text: "The first notes you smell right after applying the perfume. They last 5 to 15 minutes and are usually citrusy, fresh or spiced.",
      guide_heart_text: "The soul of the fragrance. It emerges as the top notes fade and defines its main character — floral, fruity, or deeper spices.",
      guide_base_text: "The longest-lasting notes, the ones still on your skin hours later. Usually woody, amber, musky or sweet.",
      guide_families_title: "Fragrance families",
      guide_family1_title: "Citrus", guide_family1_text: "Fresh and vibrant: bergamot, lemon, orange. Perfect for daytime.",
      guide_family2_title: "Floral", guide_family2_text: "Elegant and romantic: jasmine, rose, orange blossom.",
      guide_family3_title: "Woody", guide_family3_text: "Warm and enveloping: sandalwood, cedar, vetiver.",
      guide_family4_title: "Oriental / Amber", guide_family4_text: "Intense and sensual: vanilla, amber, spices.",
      guide_family5_title: "Gourmand", guide_family5_text: "Sweet and addictive: coffee, honey, praline, toffee.",
      guide_family6_title: "Aquatic", guide_family6_text: "Clean and light: marine notes, seaweed, breeze.",
      shipping_kicker: "Shipping & payments", shipping_title: "We bring it to you, anywhere in Lima",
      shipping_1_title: "Coverage",
      shipping_1_text: "We deliver to every district in Lima, coordinating the drop-off point and time directly over WhatsApp.",
      shipping_2_title: "Timing",
      shipping_2_text: "Orders are dispatched within 24-48 business hours depending on availability and delivery area.",
      shipping_3_title: "Payment methods",
      shipping_3_text: "Yape, Plin, bank transfer or cash on delivery. We confirm the details with you over WhatsApp.",
      faq_kicker: "Frequently asked questions", faq_title: "Everything you want to know",
      faq_q1: "What exactly is a decant?",
      faq_a1: "It's a 5ml portion of a fragrance, drawn directly from the original bottle and filled into a quality atomizer. It lets you try, travel with, or enjoy a luxury perfume without paying for the full bottle.",
      faq_q2: "Are the decants 100% original?",
      faq_a2: "Yes. Every decant is drawn directly from the brand's original bottle, never diluted or mixed. We don't work with clones or imitations.",
      faq_q3: "What areas do you deliver to?",
      faq_a3: "Right now we deliver to every district in Lima. Message us on WhatsApp to coordinate the drop-off point and time.",
      faq_q4: "How do I choose the right decant for me?",
      faq_a4: "Every product card includes its top, heart and base notes, plus what occasion it's best for. Still unsure? Message us on WhatsApp and we'll help you find the right one.",
      faq_q5: "Can I buy the full bottle?",
      faq_a5: "In some cases we do have full bottles available. Ask us on WhatsApp or Instagram with the fragrance name you're interested in.",
      faq_q6: "How do I place an order?",
      faq_a6: "Add your favorite decants to the cart and tap \"Order via WhatsApp\": a message with your order and total is generated automatically, ready to send us.",
      footer_cta_title: "Found your next signature scent?",
      footer_cta_sub: "Message us on WhatsApp or Instagram to reserve your decant or ask about full-bottle availability.",
      footer_cta_btn: "Order via WhatsApp",
      footer_tagline: "Arabian, designer and niche perfumery in 5ml decants.",
      footer_follow: "Follow us", footer_info_title: "Information",
      footer_info_1: "Delivery all over Lima", footer_info_2: "Open every day of the week",
      footer_rights: "All rights reserved.",
      note_top: "Top notes", note_heart: "Heart notes", note_base: "Base notes",
      ideal_for: "Best for:", decant_5ml: "5ml decant", add_to_cart: "Add to cart",
      out_of_stock: "Sold out",
      cart_title: "Your cart",
      cart_empty: "Your cart is empty. Browse the catalog and add your favorite decants.",
      cart_total: "Total", cart_note: "Shipping is arranged over WhatsApp based on your district in Lima.",
      cart_whatsapp_btn: "Order via WhatsApp", cart_clear_btn: "Clear cart",
      added_toast: "Added to cart",
      collection_arabe: "Arabian Collection", collection_disenador: "Designer Collection", collection_nicho: "Niche Collection",
      gender_masculino: "Men's", gender_unisex: "Unisex",
      view_detail: "View detail", add_short: "Add",
      wa_fab_label: "Message us on WhatsApp",
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
    document.querySelectorAll("[data-i18n-title]").forEach((el) => {
      const label = t(el.getAttribute("data-i18n-title"));
      el.setAttribute("title", label);
      el.setAttribute("aria-label", label);
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
      const inStock = p.stock !== false;
      return `
      <article class="product-card${inStock ? "" : " out-of-stock"}" data-id="${p.id}">
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
          ${inStock ? "" : `<span class="tag tag-stock">${t("out_of_stock")}</span>`}
        </div>
        <div class="card-bottom">
          <div class="card-price">${priceLabel(p.price)}<span>${t("decant_5ml")}</span></div>
          <div class="card-actions">
            <button type="button" class="icon-round" data-action="detail" data-id="${p.id}" aria-label="${t('view_detail')}" title="${t('view_detail')}">${iconEye()}</button>
            <button type="button" class="icon-round" data-action="quick-add" data-id="${p.id}" aria-label="${t('add_short')}" title="${t('add_short')}" ${inStock ? "" : "disabled"}>${iconCart()}</button>
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
      } else if (btn.dataset.action === "quick-add" && !btn.disabled) {
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
    const inStock = p.stock !== false;
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

    const addBtn = document.getElementById("modalAddCart");
    addBtn.disabled = !inStock;
    addBtn.textContent = inStock ? t("add_to_cart") : t("out_of_stock");
    document.getElementById("modalQtyMinus").disabled = !inStock;
    document.getElementById("modalQtyPlus").disabled = !inStock;
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
    if (!modalProduct || modalProduct.stock === false) return;
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

  function openWhatsappWithCartOrGreeting(e) {
    e.preventDefault();
    const message = cart.length ? buildOrderMessage() : t("wa_greeting");
    window.open(whatsappLink(message), "_blank", "noopener");
  }
  document.getElementById("heroWhatsapp").addEventListener("click", openWhatsappWithCartOrGreeting);
  document.getElementById("footerWhatsapp").addEventListener("click", openWhatsappWithCartOrGreeting);
  document.getElementById("whatsappFab").addEventListener("click", openWhatsappWithCartOrGreeting);

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

  /* ============ FAQ accordion ============ */
  document.querySelectorAll(".faq-question").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".faq-item");
      const answer = item.querySelector(".faq-answer");
      const isOpen = item.classList.contains("open");

      document.querySelectorAll(".faq-item.open").forEach((openItem) => {
        if (openItem !== item) {
          openItem.classList.remove("open");
          openItem.querySelector(".faq-question").setAttribute("aria-expanded", "false");
          openItem.querySelector(".faq-answer").style.maxHeight = "";
        }
      });

      item.classList.toggle("open", !isOpen);
      btn.setAttribute("aria-expanded", String(!isOpen));
      answer.style.maxHeight = isOpen ? "" : answer.scrollHeight + "px";
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
