/* ============================================================
   CONFIGURAÇÕES — edite aqui para atualizar o site sem programar
   ============================================================ */

// Número de WhatsApp no formato internacional, só números (com DDI 55 + DDD).
const WHATSAPP_NUMBER = "5511999999999";

// Categorias do catálogo, usadas nos filtros. "id" nunca deve mudar depois de
// usado em alguma fotografia (é o que liga a foto à categoria). "label" é o
// texto exibido e pode ser alterado livremente a qualquer momento.
// Para criar uma categoria nova: adicione um objeto igual aos abaixo.
// Para remover: apague o objeto (e mude a categoria das fotos que a usavam).
const CATEGORIES = [
  { id: "profissional", label: "Profissional / Branding" },
  { id: "consultorio", label: "Consultório" },
  { id: "estudio", label: "Estúdio" },
  { id: "lifestyle", label: "Lifestyle" },
  { id: "externo", label: "Externo" },
];

// Fotografias do catálogo.
//
// - code: identificador FIXO da foto (ex: "VS-014"). Nunca reaproveite nem
//   altere o código de uma foto já publicada, mesmo que ela seja movida ou
//   reordenada — clientes podem citar esse código numa conversa futura.
//   Ao adicionar uma foto nova, use o próximo número disponível.
// - category: precisa ser um "id" que exista em CATEGORIES acima.
// - title: legenda curta opcional (pode deixar "").
// - tags: palavras-chave internas, não aparecem para a cliente (uso futuro).
// - image: link (https://...) ou caminho de arquivo local (ex: "images/vs-014.jpg").
const catalogPhotos = [
  { code: "VS-001", category: "profissional", title: "Retrato executivo", tags: ["blazer", "frontal"], image: "https://picsum.photos/seed/vs-001/700/900" },
  { code: "VS-002", category: "profissional", title: "Perfil para LinkedIn", tags: ["linkedin", "sorriso"], image: "https://picsum.photos/seed/vs-002/700/900" },
  { code: "VS-003", category: "profissional", title: "", tags: ["braços cruzados"], image: "https://picsum.photos/seed/vs-003/700/900" },
  { code: "VS-004", category: "consultorio", title: "Atendimento", tags: ["sentada", "notebook", "poltrona"], image: "https://picsum.photos/seed/vs-004/700/900" },
  { code: "VS-005", category: "consultorio", title: "Anotações", tags: ["prancheta"], image: "https://picsum.photos/seed/vs-005/700/900" },
  { code: "VS-006", category: "consultorio", title: "", tags: ["recepção"], image: "https://picsum.photos/seed/vs-006/700/900" },
  { code: "VS-007", category: "estudio", title: "Fundo neutro", tags: ["editorial"], image: "https://picsum.photos/seed/vs-007/700/900" },
  { code: "VS-008", category: "estudio", title: "", tags: ["luz dramática"], image: "https://picsum.photos/seed/vs-008/700/900" },
  { code: "VS-009", category: "estudio", title: "Preto e branco", tags: ["pb", "clássico"], image: "https://picsum.photos/seed/vs-009/700/900" },
  { code: "VS-010", category: "lifestyle", title: "No café", tags: ["casual"], image: "https://picsum.photos/seed/vs-010/700/900" },
  { code: "VS-011", category: "lifestyle", title: "", tags: ["andando"], image: "https://picsum.photos/seed/vs-011/700/900" },
  { code: "VS-012", category: "lifestyle", title: "Sorrindo naturalmente", tags: ["candid"], image: "https://picsum.photos/seed/vs-012/700/900" },
  { code: "VS-013", category: "externo", title: "Luz natural", tags: ["jardim"], image: "https://picsum.photos/seed/vs-013/700/900" },
  { code: "VS-014", category: "externo", title: "", tags: ["urbano"], image: "https://picsum.photos/seed/vs-014/700/900" },
  { code: "VS-015", category: "externo", title: "Golden hour", tags: ["pôr do sol"], image: "https://picsum.photos/seed/vs-015/700/900" },
];

/* ============================================================
   LÓGICA DO SITE — normalmente não precisa mexer daqui pra baixo
   ============================================================ */

const SELECTION_STORAGE_KEY = "vitrinesagrada:selecoes";
const ALL_FILTER_ID = "todos";

let activeCategory = ALL_FILTER_ID;
let selectedCodes = loadSelection();

function buildWhatsAppLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// Se um link de imagem quebrar (ou não carregar), mostra um fundo elegante no lugar
// em vez do ícone de "imagem quebrada" do navegador.
function placeholderImage(label) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="700" height="900">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#241d14" />
          <stop offset="1" stop-color="#c9a76a" stop-opacity="0.55" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#g)" />
      <text x="50%" y="50%" font-family="Georgia, serif" font-size="32" fill="#f7f2ea"
            text-anchor="middle" dominant-baseline="middle" opacity="0.9">${label}</text>
    </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

window.handleImgError = function (img, label) {
  img.onerror = null;
  img.src = placeholderImage(label);
};

/* ---------- Seleção (localStorage) ---------- */

function loadSelection() {
  try {
    const raw = localStorage.getItem(SELECTION_STORAGE_KEY);
    const codes = raw ? JSON.parse(raw) : [];
    return new Set(Array.isArray(codes) ? codes : []);
  } catch {
    return new Set();
  }
}

function saveSelection() {
  localStorage.setItem(SELECTION_STORAGE_KEY, JSON.stringify(Array.from(selectedCodes)));
}

function getSelectedPhotosOrdered() {
  return catalogPhotos.filter((photo) => selectedCodes.has(photo.code));
}

function formatCodesList(codes) {
  if (codes.length === 1) return codes[0];
  return `${codes.slice(0, -1).join(", ")} e ${codes[codes.length - 1]}`;
}

function buildSelectionMessage() {
  const codes = getSelectedPhotosOrdered().map((photo) => photo.code);
  return `Oi! Escolhi estas referências no catálogo da Vitrine Sagrada:\n${formatCodesList(codes)}.`;
}

function toggleSelection(code) {
  if (selectedCodes.has(code)) {
    selectedCodes.delete(code);
  } else {
    selectedCodes.add(code);
  }
  saveSelection();
  syncTileVisual(code);
  updateSelectionUI();
}

function clearSelection() {
  if (selectedCodes.size === 0) return;
  if (!confirm("Limpar todas as fotos selecionadas?")) return;
  selectedCodes.clear();
  saveSelection();
  document.querySelectorAll(".catalog-tile").forEach((tile) => syncTileVisual(tile.dataset.code));
  updateSelectionUI();
}

/* ---------- Filtros ---------- */

function renderFilters() {
  const wrap = document.getElementById("filters");
  const chips = [{ id: ALL_FILTER_ID, label: "Todos" }, ...CATEGORIES];

  wrap.innerHTML = chips
    .map(
      (chip) => `
        <button class="filter-chip ${chip.id === activeCategory ? "is-active" : ""}" data-category="${chip.id}">
          ${chip.label}
        </button>
      `
    )
    .join("");

  wrap.querySelectorAll(".filter-chip").forEach((btn) => {
    btn.addEventListener("click", () => {
      activeCategory = btn.dataset.category;
      renderFilters();
      renderCatalog();
    });
  });
}

/* ---------- Catálogo ---------- */

function renderCatalog() {
  const grid = document.getElementById("catalogGrid");
  const photos =
    activeCategory === ALL_FILTER_ID
      ? catalogPhotos
      : catalogPhotos.filter((photo) => photo.category === activeCategory);

  grid.innerHTML = photos
    .map((photo) => {
      const selected = selectedCodes.has(photo.code);
      return `
        <article class="catalog-tile ${selected ? "is-selected" : ""}" data-code="${photo.code}">
          <div class="tile-image" data-action="view" data-code="${photo.code}">
            <img src="${photo.image}" alt="Referência ${photo.code}" loading="lazy"
                 onerror="handleImgError(this, '${photo.code}')" />
            <span class="tile-code">${photo.code}</span>
            <button class="tile-select ${selected ? "is-selected" : ""}" data-action="toggle" data-code="${photo.code}"
                    aria-pressed="${selected}"
                    aria-label="${selected ? `Remover seleção da foto ${photo.code}` : `Selecionar a foto ${photo.code}`}">
              ${selected ? "♥" : "♡"}
            </button>
          </div>
          ${photo.title ? `<p class="tile-title">${photo.title}</p>` : ""}
        </article>
      `;
    })
    .join("");

  observeReveal(grid.querySelectorAll(".catalog-tile"));
}

function syncTileVisual(code) {
  const tile = document.querySelector(`.catalog-tile[data-code="${code}"]`);
  if (!tile) return;
  const selected = selectedCodes.has(code);
  tile.classList.toggle("is-selected", selected);

  const btn = tile.querySelector(".tile-select");
  btn.classList.toggle("is-selected", selected);
  btn.textContent = selected ? "♥" : "♡";
  btn.setAttribute("aria-pressed", String(selected));
  btn.setAttribute("aria-label", selected ? `Remover seleção da foto ${code}` : `Selecionar a foto ${code}`);
}

function setupCatalogInteractions() {
  const grid = document.getElementById("catalogGrid");
  grid.addEventListener("click", (e) => {
    const toggleBtn = e.target.closest('[data-action="toggle"]');
    if (toggleBtn) {
      toggleSelection(toggleBtn.dataset.code);
      return;
    }
    const viewArea = e.target.closest('[data-action="view"]');
    if (viewArea) {
      const photo = catalogPhotos.find((p) => p.code === viewArea.dataset.code);
      if (photo) openLightbox(photo.image);
    }
  });
}

/* ---------- Barra e painel de seleção ---------- */

function updateSelectionUI() {
  const count = selectedCodes.size;

  document.getElementById("selectionCount").textContent = String(count);
  document.getElementById("selectionBar").classList.toggle("is-visible", count > 0);

  const list = document.getElementById("selectionPanelList");
  const photos = getSelectedPhotosOrdered();

  list.innerHTML = photos.length
    ? photos
        .map(
          (photo) => `
            <div class="selection-panel-item">
              <img src="${photo.image}" alt="${photo.code}" onerror="handleImgError(this, '${photo.code}')" />
              <span>${photo.code}</span>
              <button data-action="remove" data-code="${photo.code}" aria-label="Remover ${photo.code} da seleção">✕</button>
            </div>
          `
        )
        .join("")
    : `<p class="selection-panel-empty">Nenhuma foto selecionada ainda.</p>`;

  const sendBtn = document.getElementById("sendSelectionBtn");
  if (count > 0) {
    sendBtn.href = buildWhatsAppLink(buildSelectionMessage());
    sendBtn.removeAttribute("aria-disabled");
  } else {
    sendBtn.href = "#";
    sendBtn.setAttribute("aria-disabled", "true");
  }
}

function openSelectionPanel() {
  const panel = document.getElementById("selectionPanel");
  panel.classList.add("is-open");
  panel.setAttribute("aria-hidden", "false");
}

function closeSelectionPanel() {
  const panel = document.getElementById("selectionPanel");
  panel.classList.remove("is-open");
  panel.setAttribute("aria-hidden", "true");
}

function setupSelectionUI() {
  document.getElementById("selectionBarTrigger").addEventListener("click", openSelectionPanel);
  document.getElementById("selectionPanelClose").addEventListener("click", closeSelectionPanel);
  document.getElementById("selectionPanelBackdrop").addEventListener("click", closeSelectionPanel);
  document.getElementById("clearSelectionBtn").addEventListener("click", clearSelection);

  document.getElementById("selectionPanelList").addEventListener("click", (e) => {
    const removeBtn = e.target.closest('[data-action="remove"]');
    if (removeBtn) toggleSelection(removeBtn.dataset.code);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeSelectionPanel();
  });
}

/* ---------- Lightbox ---------- */

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

/* ---------- Header / animações ---------- */

function setupHeader() {
  const header = document.getElementById("header");
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 40);
  onScroll();
  window.addEventListener("scroll", onScroll);
}

function observeReveal(extraTargets) {
  const targets = [...document.querySelectorAll(".reveal"), ...(extraTargets || [])];
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
  renderFilters();
  renderCatalog();
  setupCatalogInteractions();
  setupSelectionUI();
  setupLightbox();
  setupHeader();
  updateSelectionUI();
  document.getElementById("year").textContent = new Date().getFullYear();
});
