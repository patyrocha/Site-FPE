/* ============================================================
   CONFIGURAÇÕES — edite aqui para atualizar o site sem programar
   ============================================================ */

// Número de WhatsApp no formato internacional, só números (com DDI 55 + DDD).
const WHATSAPP_NUMBER = "5511999999999";

// Categorias do catálogo (navegação "Por estilo"). "id" nunca deve mudar
// depois de usado em alguma fotografia (é o que liga a foto à categoria).
// "label" é o texto exibido e pode ser alterado livremente a qualquer momento.
// Para criar uma categoria nova: adicione um objeto igual aos abaixo.
// Para remover: apague o objeto (e mude a categoria das fotos que a usavam).
const CATEGORIES = [
  { id: "profissional", label: "Profissional / Branding" },
  { id: "consultorio", label: "Consultório" },
  { id: "estudio", label: "Estúdio" },
  { id: "lifestyle", label: "Lifestyle" },
  { id: "externo", label: "Externo" },
];

// Profissões (navegação "Por profissão"). Mesma regra do "id" das categorias:
// pode renomear o "label" quando quiser, mas evite mudar o "id" depois de
// usado em alguma fotografia.
const PROFESSIONS = [
  { id: "psicologas", label: "Psicólogas / Psicanalistas" },
  { id: "terapeutas", label: "Terapeutas" },
  { id: "terapeutas-cristas", label: "Terapeutas Cristãs" },
  { id: "nutricionistas", label: "Nutricionistas" },
  { id: "psicopedagogas", label: "Psicopedagogas" },
  { id: "empreendedoras", label: "Empreendedoras" },
];

// Fotografias do catálogo.
//
// - code: identificador FIXO da foto (ex: "VS-014"). Nunca reaproveite nem
//   altere o código de uma foto já publicada, mesmo que ela seja movida ou
//   reordenada — clientes podem citar esse código numa conversa futura.
//   Ao adicionar uma foto nova, use o próximo número disponível.
// - category: precisa ser um "id" que exista em CATEGORIES acima.
// - professions: lista de "id" de PROFESSIONS a que essa foto serve de
//   referência. Uma mesma foto pode pertencer a várias profissões (ou nenhuma
//   ainda, deixando a lista vazia []) sem duplicar o item no catálogo.
// - title: legenda curta opcional (pode deixar "").
// - tags: palavras-chave internas, não aparecem para a cliente (uso futuro).
// - image: link (https://...) ou caminho de arquivo local (ex: "images/vs-014.jpg").
const catalogPhotos = [
  { code: "VS-001", category: "profissional", professions: ["empreendedoras"], title: "Retrato executivo", tags: ["blazer", "frontal"], image: "https://picsum.photos/seed/vs-001/700/900" },
  { code: "VS-002", category: "profissional", professions: ["empreendedoras", "psicologas"], title: "Perfil para LinkedIn", tags: ["linkedin", "sorriso"], image: "https://picsum.photos/seed/vs-002/700/900" },
  { code: "VS-003", category: "profissional", professions: ["empreendedoras"], title: "", tags: ["braços cruzados"], image: "https://picsum.photos/seed/vs-003/700/900" },
  { code: "VS-004", category: "profissional", professions: ["nutricionistas", "empreendedoras"], title: "", tags: ["sorriso", "confiante"], image: "https://picsum.photos/seed/vs-004/700/900" },
  { code: "VS-005", category: "profissional", professions: ["psicopedagogas"], title: "Frontal simples", tags: ["frontal"], image: "https://picsum.photos/seed/vs-005/700/900" },
  { code: "VS-006", category: "profissional", professions: [], title: "", tags: ["perfil"], image: "https://picsum.photos/seed/vs-006/700/900" },

  { code: "VS-007", category: "consultorio", professions: ["psicologas", "terapeutas"], title: "Atendimento", tags: ["sentada", "notebook", "poltrona"], image: "https://picsum.photos/seed/vs-007/700/900" },
  { code: "VS-008", category: "consultorio", professions: ["terapeutas-cristas"], title: "Anotações", tags: ["prancheta"], image: "https://picsum.photos/seed/vs-008/700/900" },
  { code: "VS-009", category: "consultorio", professions: ["psicopedagogas"], title: "", tags: ["recepção"], image: "https://picsum.photos/seed/vs-009/700/900" },
  { code: "VS-010", category: "consultorio", professions: ["psicologas", "terapeutas-cristas"], title: "Escuta acolhedora", tags: ["poltrona", "acolhedora"], image: "https://picsum.photos/seed/vs-010/700/900" },
  { code: "VS-011", category: "consultorio", professions: ["terapeutas"], title: "", tags: ["sessão"], image: "https://picsum.photos/seed/vs-011/700/900" },
  { code: "VS-012", category: "consultorio", professions: ["psicopedagogas", "psicologas"], title: "", tags: ["material"], image: "https://picsum.photos/seed/vs-012/700/900" },

  { code: "VS-013", category: "estudio", professions: [], title: "Fundo neutro", tags: ["editorial"], image: "https://picsum.photos/seed/vs-013/700/900" },
  { code: "VS-014", category: "estudio", professions: ["empreendedoras"], title: "", tags: ["luz dramática"], image: "https://picsum.photos/seed/vs-014/700/900" },
  { code: "VS-015", category: "estudio", professions: [], title: "Preto e branco", tags: ["pb", "clássico"], image: "https://picsum.photos/seed/vs-015/700/900" },
  { code: "VS-016", category: "estudio", professions: ["psicologas"], title: "", tags: ["fundo claro"], image: "https://picsum.photos/seed/vs-016/700/900" },
  { code: "VS-017", category: "estudio", professions: [], title: "", tags: ["fundo escuro"], image: "https://picsum.photos/seed/vs-017/700/900" },
  { code: "VS-018", category: "estudio", professions: ["empreendedoras"], title: "Editorial", tags: ["moda"], image: "https://picsum.photos/seed/vs-018/700/900" },

  { code: "VS-019", category: "lifestyle", professions: ["nutricionistas"], title: "No café", tags: ["casual"], image: "https://picsum.photos/seed/vs-019/700/900" },
  { code: "VS-020", category: "lifestyle", professions: ["empreendedoras"], title: "", tags: ["andando"], image: "https://picsum.photos/seed/vs-020/700/900" },
  { code: "VS-021", category: "lifestyle", professions: ["psicopedagogas"], title: "Sorrindo naturalmente", tags: ["candid"], image: "https://picsum.photos/seed/vs-021/700/900" },
  { code: "VS-022", category: "lifestyle", professions: ["nutricionistas", "empreendedoras"], title: "", tags: ["cozinha"], image: "https://picsum.photos/seed/vs-022/700/900" },
  { code: "VS-023", category: "lifestyle", professions: [], title: "", tags: ["leitura"], image: "https://picsum.photos/seed/vs-023/700/900" },
  { code: "VS-024", category: "lifestyle", professions: ["empreendedoras"], title: "No notebook", tags: ["trabalho"], image: "https://picsum.photos/seed/vs-024/700/900" },

  { code: "VS-025", category: "externo", professions: ["terapeutas"], title: "Luz natural", tags: ["jardim"], image: "https://picsum.photos/seed/vs-025/700/900" },
  { code: "VS-026", category: "externo", professions: [], title: "", tags: ["urbano"], image: "https://picsum.photos/seed/vs-026/700/900" },
  { code: "VS-027", category: "externo", professions: ["nutricionistas"], title: "Golden hour", tags: ["pôr do sol"], image: "https://picsum.photos/seed/vs-027/700/900" },
  { code: "VS-028", category: "externo", professions: [], title: "", tags: ["parque"], image: "https://picsum.photos/seed/vs-028/700/900" },
  { code: "VS-029", category: "externo", professions: ["terapeutas-cristas"], title: "", tags: ["natureza"], image: "https://picsum.photos/seed/vs-029/700/900" },
  { code: "VS-030", category: "externo", professions: ["empreendedoras"], title: "", tags: ["caminhada"], image: "https://picsum.photos/seed/vs-030/700/900" },
];

/* ============================================================
   LÓGICA DO SITE — normalmente não precisa mexer daqui pra baixo
   ============================================================ */

const SELECTION_STORAGE_KEY = "vitrinesagrada:selecoes";
const ALL_FILTER_ID = "todos";

let activeMode = "estilo"; // "estilo" | "profissao"
let activeCategory = ALL_FILTER_ID;
let activeProfession = ALL_FILTER_ID;
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

function getVisiblePhotos() {
  if (activeMode === "estilo") {
    return activeCategory === ALL_FILTER_ID
      ? catalogPhotos
      : catalogPhotos.filter((photo) => photo.category === activeCategory);
  }
  return activeProfession === ALL_FILTER_ID
    ? catalogPhotos
    : catalogPhotos.filter((photo) => (photo.professions || []).includes(activeProfession));
}

function renderCatalog() {
  const grid = document.getElementById("catalogGrid");
  const photos = getVisiblePhotos();

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
            ${photo.title ? `<span class="tile-title-overlay">${photo.title}</span>` : ""}
          </div>
        </article>
      `;
    })
    .join("");

  if (photos.length === 0) {
    grid.innerHTML = `<p class="catalog-empty">Nenhuma fotografia nesse filtro ainda.</p>`;
  }

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
  setupCatalogInteractions();
  setupSelectionUI();
  setupLightbox();
  setupHeader();
  updateSelectionUI();
  document.getElementById("year").textContent = new Date().getFullYear();
});
