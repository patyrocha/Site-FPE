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
  { id: "retratos-profissionais", label: "Retratos Profissionais" },
  { id: "sentada-poltrona", label: "Sentada e Poltrona" },
  { id: "mesa-trabalho", label: "Mesa e Trabalho" },
  { id: "em-pe-movimento", label: "Em Pé e Movimento" },
  { id: "lifestyle-natural", label: "Lifestyle e Natural" },
  { id: "ar-livre", label: "Ar Livre" },
  { id: "close-editorial", label: "Close e Editorial" },
];

// Profissões (navegação "Por profissão"). Mesma regra do "id" das categorias:
// pode renomear o "label" quando quiser, mas evite mudar o "id" depois de
// usado em alguma fotografia.
const PROFESSIONS = [
  { id: "psicologia-psiquiatria", label: "Psicologia e Psiquiatria" },
  { id: "psicopedagoga", label: "Psicopedagoga" },
  { id: "terapeuta-crista", label: "Terapeuta Cristã" },
  { id: "terapia-holistica", label: "Terapia Holística e Integrativa" },
  { id: "esteticista", label: "Esteticista" },
  { id: "palestrante", label: "Palestrante" },
  { id: "pompoarista", label: "Pompoarista" },
];

// Fotografias do catálogo.
//
// - code: identificador FIXO da foto (ex: "VS-014"). Nunca reaproveite nem
//   altere o código de uma foto já publicada, mesmo que ela seja movida ou
//   reordenada — clientes podem citar esse código numa conversa futura.
//   Ao adicionar uma foto nova, use o próximo número disponível (a próxima
//   livre depois deste lote é VS-073).
// - category: precisa ser um "id" que exista em CATEGORIES acima.
// - professions: lista de "id" de PROFESSIONS a que essa foto serve de
//   referência. Uma mesma foto pode pertencer a várias profissões (ou nenhuma
//   ainda, deixando a lista vazia []) sem duplicar o item no catálogo.
// - title: legenda curta opcional (pode deixar "").
// - tags: palavras-chave internas, não aparecem para a cliente (uso futuro).
// - image: link (https://...) ou caminho de arquivo local
//   (ex: "images/catalogo/VS-014.png").
const catalogPhotos = [
  { code: "VS-001", category: "retratos-profissionais", professions: [], title: "", tags: [], image: "images/catalogo/VS-001.png" },
  { code: "VS-002", category: "retratos-profissionais", professions: [], title: "", tags: [], image: "images/catalogo/VS-002.png" },
  { code: "VS-003", category: "retratos-profissionais", professions: [], title: "", tags: [], image: "images/catalogo/VS-003.png" },
  { code: "VS-004", category: "retratos-profissionais", professions: [], title: "", tags: [], image: "images/catalogo/VS-004.png" },
  { code: "VS-005", category: "retratos-profissionais", professions: [], title: "", tags: [], image: "images/catalogo/VS-005.png" },
  { code: "VS-006", category: "retratos-profissionais", professions: [], title: "", tags: [], image: "images/catalogo/VS-006.png" },
  { code: "VS-007", category: "sentada-poltrona", professions: [], title: "", tags: [], image: "images/catalogo/VS-007.png" },
  { code: "VS-008", category: "sentada-poltrona", professions: [], title: "", tags: [], image: "images/catalogo/VS-008.png" },
  { code: "VS-009", category: "sentada-poltrona", professions: [], title: "", tags: [], image: "images/catalogo/VS-009.png" },
  { code: "VS-010", category: "sentada-poltrona", professions: [], title: "", tags: [], image: "images/catalogo/VS-010.png" },
  { code: "VS-011", category: "sentada-poltrona", professions: [], title: "", tags: [], image: "images/catalogo/VS-011.png" },
  { code: "VS-012", category: "sentada-poltrona", professions: [], title: "", tags: [], image: "images/catalogo/VS-012.png" },
  { code: "VS-013", category: "sentada-poltrona", professions: [], title: "", tags: [], image: "images/catalogo/VS-013.png" },
  { code: "VS-014", category: "sentada-poltrona", professions: [], title: "", tags: [], image: "images/catalogo/VS-014.png" },
  { code: "VS-015", category: "sentada-poltrona", professions: [], title: "", tags: [], image: "images/catalogo/VS-015.png" },
  { code: "VS-016", category: "mesa-trabalho", professions: [], title: "", tags: [], image: "images/catalogo/VS-016.png" },
  { code: "VS-017", category: "mesa-trabalho", professions: [], title: "", tags: [], image: "images/catalogo/VS-017.png" },
  { code: "VS-018", category: "mesa-trabalho", professions: [], title: "", tags: [], image: "images/catalogo/VS-018.png" },
  { code: "VS-019", category: "mesa-trabalho", professions: [], title: "", tags: [], image: "images/catalogo/VS-019.png" },
  { code: "VS-020", category: "mesa-trabalho", professions: [], title: "", tags: [], image: "images/catalogo/VS-020.png" },
  { code: "VS-021", category: "mesa-trabalho", professions: [], title: "", tags: [], image: "images/catalogo/VS-021.png" },
  { code: "VS-022", category: "mesa-trabalho", professions: [], title: "", tags: [], image: "images/catalogo/VS-022.png" },
  { code: "VS-023", category: "mesa-trabalho", professions: [], title: "", tags: [], image: "images/catalogo/VS-023.png" },
  { code: "VS-024", category: "mesa-trabalho", professions: [], title: "", tags: [], image: "images/catalogo/VS-024.png" },
  { code: "VS-025", category: "mesa-trabalho", professions: [], title: "", tags: [], image: "images/catalogo/VS-025.png" },
  { code: "VS-026", category: "mesa-trabalho", professions: [], title: "", tags: [], image: "images/catalogo/VS-026.png" },
  { code: "VS-027", category: "mesa-trabalho", professions: ["pompoarista"], title: "", tags: [], image: "images/catalogo/VS-027.png" },
  { code: "VS-028", category: "em-pe-movimento", professions: [], title: "", tags: [], image: "images/catalogo/VS-028.png" },
  { code: "VS-029", category: "em-pe-movimento", professions: [], title: "", tags: [], image: "images/catalogo/VS-029.png" },
  { code: "VS-030", category: "em-pe-movimento", professions: [], title: "", tags: [], image: "images/catalogo/VS-030.png" },
  { code: "VS-031", category: "em-pe-movimento", professions: [], title: "", tags: [], image: "images/catalogo/VS-031.png" },
  { code: "VS-032", category: "em-pe-movimento", professions: [], title: "", tags: [], image: "images/catalogo/VS-032.png" },
  { code: "VS-033", category: "lifestyle-natural", professions: [], title: "", tags: [], image: "images/catalogo/VS-033.png" },
  { code: "VS-034", category: "lifestyle-natural", professions: [], title: "", tags: [], image: "images/catalogo/VS-034.png" },
  { code: "VS-035", category: "lifestyle-natural", professions: [], title: "", tags: [], image: "images/catalogo/VS-035.png" },
  { code: "VS-036", category: "lifestyle-natural", professions: [], title: "", tags: [], image: "images/catalogo/VS-036.png" },
  { code: "VS-037", category: "lifestyle-natural", professions: [], title: "", tags: [], image: "images/catalogo/VS-037.png" },
  { code: "VS-038", category: "lifestyle-natural", professions: [], title: "", tags: [], image: "images/catalogo/VS-038.png" },
  { code: "VS-039", category: "ar-livre", professions: [], title: "", tags: [], image: "images/catalogo/VS-039.png" },
  { code: "VS-040", category: "ar-livre", professions: [], title: "", tags: [], image: "images/catalogo/VS-040.png" },
  { code: "VS-041", category: "close-editorial", professions: [], title: "", tags: [], image: "images/catalogo/VS-041.png" },
  { code: "VS-042", category: "close-editorial", professions: [], title: "", tags: [], image: "images/catalogo/VS-042.png" },
  { code: "VS-043", category: "close-editorial", professions: [], title: "", tags: [], image: "images/catalogo/VS-043.png" },
  { code: "VS-044", category: "close-editorial", professions: [], title: "", tags: [], image: "images/catalogo/VS-044.png" },
  { code: "VS-045", category: "ar-livre", professions: [], title: "", tags: [], image: "images/catalogo/VS-045.png" },
  { code: "VS-046", category: "sentada-poltrona", professions: ["psicologia-psiquiatria"], title: "", tags: [], image: "images/catalogo/VS-046.png" },
  { code: "VS-047", category: "close-editorial", professions: ["psicologia-psiquiatria"], title: "", tags: [], image: "images/catalogo/VS-047.png" },
  { code: "VS-048", category: "mesa-trabalho", professions: ["psicologia-psiquiatria"], title: "", tags: [], image: "images/catalogo/VS-048.png" },
  { code: "VS-049", category: "em-pe-movimento", professions: ["psicopedagoga"], title: "", tags: [], image: "images/catalogo/VS-049.png" },
  { code: "VS-050", category: "sentada-poltrona", professions: ["terapeuta-crista"], title: "", tags: [], image: "images/catalogo/VS-050.png" },
  { code: "VS-051", category: "mesa-trabalho", professions: ["terapeuta-crista"], title: "", tags: [], image: "images/catalogo/VS-051.png" },
  { code: "VS-052", category: "ar-livre", professions: ["terapeuta-crista"], title: "", tags: [], image: "images/catalogo/VS-052.png" },
  { code: "VS-053", category: "close-editorial", professions: ["terapeuta-crista"], title: "", tags: [], image: "images/catalogo/VS-053.png" },
  { code: "VS-054", category: "ar-livre", professions: ["terapia-holistica"], title: "", tags: [], image: "images/catalogo/VS-054.png" },
  { code: "VS-055", category: "mesa-trabalho", professions: ["terapia-holistica"], title: "", tags: [], image: "images/catalogo/VS-055.png" },
  { code: "VS-056", category: "mesa-trabalho", professions: ["terapia-holistica"], title: "", tags: [], image: "images/catalogo/VS-056.png" },
  { code: "VS-057", category: "close-editorial", professions: ["terapia-holistica"], title: "", tags: [], image: "images/catalogo/VS-057.png" },
  { code: "VS-058", category: "ar-livre", professions: ["terapia-holistica"], title: "", tags: [], image: "images/catalogo/VS-058.png" },
  { code: "VS-059", category: "mesa-trabalho", professions: ["terapia-holistica"], title: "", tags: [], image: "images/catalogo/VS-059.png" },
  { code: "VS-060", category: "ar-livre", professions: ["terapia-holistica"], title: "", tags: [], image: "images/catalogo/VS-060.png" },
  { code: "VS-061", category: "em-pe-movimento", professions: ["terapia-holistica"], title: "", tags: [], image: "images/catalogo/VS-061.png" },
  { code: "VS-062", category: "em-pe-movimento", professions: ["esteticista"], title: "", tags: [], image: "images/catalogo/VS-062.png" },
  { code: "VS-063", category: "em-pe-movimento", professions: ["palestrante"], title: "", tags: [], image: "images/catalogo/VS-063.png" },
  { code: "VS-064", category: "mesa-trabalho", professions: ["pompoarista"], title: "", tags: [], image: "images/catalogo/VS-064.png" },
  { code: "VS-065", category: "em-pe-movimento", professions: ["pompoarista"], title: "", tags: [], image: "images/catalogo/VS-065.png" },
  { code: "VS-066", category: "em-pe-movimento", professions: ["terapia-holistica"], title: "", tags: ["reiki", "imposição-de-maos"], image: "images/catalogo/VS-066.png" },
  { code: "VS-067", category: "close-editorial", professions: ["terapia-holistica"], title: "", tags: ["reiki", "maos-sobre-rosto"], image: "images/catalogo/VS-067.png" },
  { code: "VS-068", category: "em-pe-movimento", professions: ["terapia-holistica"], title: "", tags: ["reiki", "jaleco"], image: "images/catalogo/VS-068.png" },
  { code: "VS-069", category: "close-editorial", professions: ["terapia-holistica"], title: "", tags: ["reiki", "testa"], image: "images/catalogo/VS-069.png" },
  { code: "VS-070", category: "sentada-poltrona", professions: ["terapia-holistica"], title: "", tags: ["reiki", "poltrona"], image: "images/catalogo/VS-070.png" },
  { code: "VS-071", category: "mesa-trabalho", professions: ["terapia-holistica"], title: "", tags: ["reiki", "cristais"], image: "images/catalogo/VS-071.png" },
  { code: "VS-072", category: "em-pe-movimento", professions: ["terapia-holistica"], title: "", tags: ["reiki", "pes"], image: "images/catalogo/VS-072.png" },
];
