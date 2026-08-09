/* ============================================================
   CONFIGURAÇÕES DO SITE (não relacionadas ao catálogo de fotos —
   essas ficam em js/photos-data.js)
   ============================================================ */

// Número de WhatsApp no formato internacional, só números (com DDI 55 + DDD).
const WHATSAPP_NUMBER = "5562996852824";

/* ============================================================
   LÓGICA DO SITE — normalmente não precisa mexer daqui pra baixo.
   Depende dos dados definidos em js/photos-data.js (CATEGORIES,
   PROFESSIONS, catalogPhotos), carregado antes deste arquivo.
   ============================================================ */

const SELECTION_STORAGE_KEY = "vitrinesagrada:selecoes";
const ALL_FILTER_ID = "todos";

let activeMode = "estilo"; // "estilo" | "profissao"
// null = a cliente ainda não escolheu nenhum filtro nessa aba (mostra a
// mensagem convidando a escolher, em vez do grid completo). Depois que ela
// escolher algo (mesmo "Todos"/"Todas"), o valor fica lembrado por aba.
let activeCategory = null;
let activeProfession = null;
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
          <stop offset="0" stop-color="#f0f0f0" />
          <stop offset="1" stop-color="#e0e0e0" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#g)" />
      <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="32" fill="#9a9a9a"
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
  const justSelected = !selectedCodes.has(code);
  if (justSelected) {
    selectedCodes.add(code);
  } else {
    selectedCodes.delete(code);
  }
  saveSelection();
  syncTileVisual(code, justSelected);
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

/* ---------- Navegação: abas (por estilo / por profissão / minhas escolhas) ---------- */

function renderTabs() {
  const wrap = document.getElementById("catalogTabs");
  wrap.innerHTML = `
    <button class="catalog-tab ${activeMode === "estilo" ? "is-active" : ""}" data-mode="estilo">Por estilo</button>
    <button class="catalog-tab ${activeMode === "profissao" ? "is-active" : ""}" data-mode="profissao">Por profissão</button>
    <button class="catalog-tab" data-mode="escolhas">
      Minhas escolhas <span class="catalog-tab-count" id="tabSelectionCount">${selectedCodes.size}</span>
    </button>
  `;

  wrap.querySelectorAll(".catalog-tab").forEach((btn) => {
    btn.addEventListener("click", () => {
      const mode = btn.dataset.mode;
      if (mode === "escolhas") {
        openSelectionPanel();
        return;
      }
      activeMode = mode;
      renderTabs();
      renderFilters();
      renderCatalog();
    });
  });
}

/* ---------- Filtros ---------- */

function renderFilters() {
  const wrap = document.getElementById("filters");
  const isEstilo = activeMode === "estilo";
  const source = isEstilo ? CATEGORIES : PROFESSIONS;
  const activeId = isEstilo ? activeCategory : activeProfession;
  const chips = [{ id: ALL_FILTER_ID, label: isEstilo ? "Todos" : "Todas" }, ...source];

  wrap.innerHTML = chips
    .map(
      (chip) => `
        <button class="filter-chip ${chip.id === activeId ? "is-active" : ""}" data-id="${chip.id}">
          ${chip.label}
        </button>
      `
    )
    .join("");

  wrap.querySelectorAll(".filter-chip").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (isEstilo) activeCategory = btn.dataset.id;
      else activeProfession = btn.dataset.id;
      renderFilters();
      renderCatalog();
    });
  });
}

/* ---------- Catálogo ---------- */

// Retorna null quando a cliente ainda não escolheu nenhum filtro na aba atual
// (nem "Todos"/"Todas"), para diferenciar de um filtro escolhido que
// simplesmente não tem fotos ainda (array vazio).
function getVisiblePhotos() {
  if (activeMode === "estilo") {
    if (activeCategory === null) return null;
    return activeCategory === ALL_FILTER_ID
      ? catalogPhotos
      : catalogPhotos.filter((photo) => photo.category === activeCategory);
  }
  if (activeProfession === null) return null;
  return activeProfession === ALL_FILTER_ID
    ? catalogPhotos
    : catalogPhotos.filter((photo) => (photo.professions || []).includes(activeProfession));
}

function renderCatalog() {
  const grid = document.getElementById("catalogGrid");
  const photos = getVisiblePhotos();

  if (photos === null) {
    grid.innerHTML = `<p class="catalog-empty">Escolha um estilo ou uma profissão acima para ver as fotografias.</p>`;
    return;
  }

  if (photos.length === 0) {
    grid.innerHTML = `<p class="catalog-empty">Nenhuma fotografia nesse filtro ainda.</p>`;
    return;
  }

  grid.innerHTML = photos
    .map((photo) => {
      const selected = selectedCodes.has(photo.code);
      const captionText = photo.title ? `${photo.code} · ${photo.title}` : photo.code;
      return `
        <article class="catalog-tile ${selected ? "is-selected" : ""}" data-code="${photo.code}">
          <div class="tile-image" data-action="view" data-code="${photo.code}">
            <img src="${photo.image}" alt="Referência ${photo.code}" loading="lazy"
                 onerror="handleImgError(this, '${photo.code}')" />
          </div>
          <div class="tile-caption">
            <span class="tile-caption-text">${captionText}</span>
            <button class="tile-select ${selected ? "is-selected" : ""}" data-action="toggle" data-code="${photo.code}"
                    aria-pressed="${selected}"
                    aria-label="${selected ? `Remover seleção da foto ${photo.code}` : `Selecionar a foto ${photo.code}`}">
              ${selected ? "♥" : "♡"}
            </button>
          </div>
        </article>
      `;
    })
    .join("");

  observeReveal(grid.querySelectorAll(".catalog-tile"));
}

function syncTileVisual(code, justSelected) {
  const tile = document.querySelector(`.catalog-tile[data-code="${code}"]`);
  if (!tile) return;
  const selected = selectedCodes.has(code);
  tile.classList.toggle("is-selected", selected);

  const btn = tile.querySelector(".tile-select");
  btn.classList.toggle("is-selected", selected);
  btn.textContent = selected ? "♥" : "♡";
  btn.setAttribute("aria-pressed", String(selected));
  btn.setAttribute("aria-label", selected ? `Remover seleção da foto ${code}` : `Selecionar a foto ${code}`);

  if (justSelected) {
    btn.classList.remove("pulse");
    void btn.offsetWidth; // reinicia a animação se a cliente clicar rápido várias vezes
    btn.classList.add("pulse");
    setTimeout(() => btn.classList.remove("pulse"), 500);
  }
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
  const tabCount = document.getElementById("tabSelectionCount");
  if (tabCount) tabCount.textContent = String(count);

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
  renderTabs();
  renderFilters();
  renderCatalog();
  observeReveal(); // garante que título/subtítulo apareçam mesmo se o grid começar vazio
  setupCatalogInteractions();
  setupSelectionUI();
  setupLightbox();
  setupHeader();
  updateSelectionUI();
  document.getElementById("year").textContent = new Date().getFullYear();
});
