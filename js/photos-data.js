/* ============================================================
   DADOS DO CATÁLOGO — categorias, profissões e fotografias.

   Este arquivo é só conteúdo (sem lógica de site). É aqui que você
   adiciona, remove ou altera fotos, categorias e profissões.
   A lógica de exibição/filtro/seleção vive em js/app.js e normalmente
   não precisa ser tocada quando você só está atualizando o catálogo.
   ============================================================ */

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
// - image: link (https://...) ou caminho de arquivo local
//   (ex: "images/catalogo/VS-014.jpg").
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
