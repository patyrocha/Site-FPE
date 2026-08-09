/* ============================================================
   CONFIGURAÇÕES — edite aqui para atualizar o site sem programar
   ============================================================ */

// Número de WhatsApp no formato internacional, só números (com DDI 55 + DDD).
const WHATSAPP_NUMBER = "5511999999999";

// Instagram e e-mail exibidos no rodapé/contato.
const INSTAGRAM_URL = "https://instagram.com/seuusuario";
const CONTACT_EMAIL = "contato@seudominio.com";

// Categorias do catálogo. Para adicionar/remover um estilo, edite esta lista.
// "image" pode ser um link (https://...) ou um arquivo local (ex: "images/editorial.jpg").
const catalogCategories = [
  {
    name: "Editorial Fashion",
    description: "Poses e iluminação de capa de revista, com cenários sofisticados criados por IA.",
    image: "https://picsum.photos/seed/editorial-fashion/700/900",
  },
  {
    name: "Praia & Verão",
    description: "Luz dourada, água cristalina e clima leve para um ensaio de dar vontade de viajar.",
    image: "https://picsum.photos/seed/praia-verao/700/900",
  },
  {
    name: "Fantasia & Conto de Fadas",
    description: "Cenários mágicos, vestidos etéreos e uma pitada de sonho em cada foto.",
    image: "https://picsum.photos/seed/fantasia-contodefadas/700/900",
  },
  {
    name: "Executiva & Corporativo",
    description: "Fotos profissionais para LinkedIn e redes sociais, com ambientação de escritório premium.",
    image: "https://picsum.photos/seed/executiva-corporativo/700/900",
  },
  {
    name: "Boho & Natureza",
    description: "Composições orgânicas em meio a jardins e paisagens naturais, estilo livre e autêntico.",
    image: "https://picsum.photos/seed/boho-natureza/700/900",
  },
  {
    name: "Vintage Anos 90",
    description: "Estética retrô, cores saturadas e clima nostálgico direto dos anos 90.",
    image: "https://picsum.photos/seed/vintage-anos90/700/900",
  },
  {
    name: "Glamour Noturno",
    description: "Luzes da cidade, elegância e drama para um ensaio noturno cheio de personalidade.",
    image: "https://picsum.photos/seed/glamour-noturno/700/900",
  },
  {
    name: "Maternidade Dourada",
    description: "Um registro delicado e luminoso para celebrar essa fase única.",
    image: "https://picsum.photos/seed/maternidade-dourada/700/900",
  },
];

// Fotos do portfólio (galeria). Adicione ou remova itens livremente.
const portfolioImages = [
  "https://picsum.photos/seed/portfolio-1/600/800",
  "https://picsum.photos/seed/portfolio-2/600/750",
  "https://picsum.photos/seed/portfolio-3/600/900",
  "https://picsum.photos/seed/portfolio-4/600/700",
  "https://picsum.photos/seed/portfolio-5/600/820",
  "https://picsum.photos/seed/portfolio-6/600/760",
  "https://picsum.photos/seed/portfolio-7/600/880",
  "https://picsum.photos/seed/portfolio-8/600/720",
  "https://picsum.photos/seed/portfolio-9/600/840",
];

// Depoimentos de clientes.
const testimonials = [
  {
    quote: "Simplesmente incrível! Não sair de casa e ainda ter fotos profissionais lindas assim.",
    name: "Camila S.",
    style: "Editorial Fashion",
    avatar: "https://picsum.photos/seed/avatar-1/100/100",
  },
  {
    quote: "Achei que fosse complicado, mas foi super rápido e o resultado ficou melhor do que eu esperava.",
    name: "Juliana M.",
    style: "Praia & Verão",
    avatar: "https://picsum.photos/seed/avatar-2/100/100",
  },
  {
    quote: "Usei as fotos no LinkedIn e recebi vários elogios. Recomendo demais!",
    name: "Renata A.",
    style: "Executiva & Corporativo",
    avatar: "https://picsum.photos/seed/avatar-3/100/100",
  },
];

/* ============================================================
   LÓGICA DO SITE — normalmente não precisa mexer daqui pra baixo
   ============================================================ */

function buildWhatsAppLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function renderCatalog() {
  const grid = document.getElementById("catalogGrid");
  grid.innerHTML = catalogCategories
    .map((item) => {
      const message = `Olá! Vi o catálogo do site e me interessei pelo estilo "${item.name}". Gostaria de saber mais sobre esse ensaio fotográfico com IA! 📸`;
      return `
        <article class="catalog-card">
          <div class="catalog-card-img">
            <img src="${item.image}" alt="Exemplo do estilo ${item.name}" loading="lazy" />
          </div>
          <div class="catalog-card-body">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <a class="btn btn-primary" href="${buildWhatsAppLink(message)}" target="_blank" rel="noopener">
              Quero esse estilo
            </a>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderGallery() {
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = portfolioImages
    .map(
      (src, i) => `
        <figure class="gallery-item" data-src="${src}">
          <img src="${src}" alt="Ensaio fotográfico com IA ${i + 1}" loading="lazy" />
        </figure>
      `
    )
    .join("");

  gallery.querySelectorAll(".gallery-item").forEach((item) => {
    item.addEventListener("click", () => openLightbox(item.dataset.src));
  });
}

function renderTestimonials() {
  const wrap = document.getElementById("testimonials");
  wrap.innerHTML = testimonials
    .map(
      (t) => `
        <div class="testimonial-card">
          <div class="stars">★★★★★</div>
          <p class="quote">"${t.quote}"</p>
          <div class="author">
            <img src="${t.avatar}" alt="${t.name}" loading="lazy" />
            <div>
              <strong>${t.name}</strong>
              <span>${t.style}</span>
            </div>
          </div>
        </div>
      `
    )
    .join("");
}

function setupContactLinks() {
  const generalMessage = "Olá! Vi o site e gostaria de saber mais sobre os ensaios fotográficos com IA.";
  document.getElementById("ctaWhatsapp").href = buildWhatsAppLink(generalMessage);
  document.getElementById("ctaInstagram").href = INSTAGRAM_URL;
  document.getElementById("ctaInstagram").textContent = "Instagram";
  const emailLink = document.getElementById("ctaEmail");
  emailLink.href = `mailto:${CONTACT_EMAIL}`;
  emailLink.textContent = CONTACT_EMAIL;
}

function setupHeader() {
  const header = document.getElementById("header");
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 40);
  onScroll();
  window.addEventListener("scroll", onScroll);
}

function setupMobileMenu() {
  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("nav");

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) =>
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    })
  );
}

function setupLightbox() {
  const lightbox = document.getElementById("lightbox");
  const closeBtn = document.getElementById("lightboxClose");

  closeBtn.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });
}

function openLightbox(src) {
  const lightbox = document.getElementById("lightbox");
  document.getElementById("lightboxImg").src = src;
  lightbox.classList.add("is-open");
}

function closeLightbox() {
  document.getElementById("lightbox").classList.remove("is-open");
}

function setupReveal() {
  const targets = document.querySelectorAll(".reveal, .catalog-card");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  targets.forEach((el) => observer.observe(el));
}

document.addEventListener("DOMContentLoaded", () => {
  renderCatalog();
  renderGallery();
  renderTestimonials();
  setupContactLinks();
  setupHeader();
  setupMobileMenu();
  setupLightbox();
  setupReveal();
  document.getElementById("year").textContent = new Date().getFullYear();
});
