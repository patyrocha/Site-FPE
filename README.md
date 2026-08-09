# Site — Vitrine Sagrada | Catálogo de Referências

Site estático (HTML, CSS e JavaScript puro), pensado como **catálogo visual de
referências** para clientes escolherem fotografias-modelo de ensaios com IA.
A cliente navega pelo catálogo, seleciona as fotos que mais gostou e envia a
lista de códigos direto pelo WhatsApp.

## Estrutura

```
index.html            → estrutura das seções do site
css/styles.css         → todo o visual (cores, fontes, layout, responsivo)
js/photos-data.js       → CONTEÚDO: categorias, profissões e a lista de fotos
js/app.js                → LÓGICA: filtros, seleção, WhatsApp, lightbox etc.
images/catalogo/          → onde ficam os arquivos de foto reais
```

O catálogo foi dividido em dois arquivos JS de propósito: `photos-data.js`
é só conteúdo (o que você/eu editamos quando o catálogo muda) e `app.js` é o
motor do site (raramente precisa ser tocado). `index.html` carrega
`photos-data.js` antes de `app.js` — essa ordem importa, não inverta.

## Como editar o conteúdo (sem precisar programar)

Abra o arquivo `js/photos-data.js`.

### Adicionar uma fotografia nova

Copie um bloco inteiro dentro de `catalogPhotos` e cole no fim da lista,
editando os valores:

```js
{ code: "VS-031", category: "estudio", professions: ["psicologas"], title: "", tags: [], image: "images/catalogo/VS-031.jpg" },
```

- `code`: o código dessa foto. **Use sempre o próximo número disponível** (se a
  última foto é VS-030, a nova é VS-031). Nunca reaproveite nem mude o código
  de uma foto que já existe — clientes podem citar esse código depois.
- `category`: precisa ser um dos `id` cadastrados em `CATEGORIES` (ver abaixo).
- `professions`: lista de `id` de `PROFESSIONS` a que essa foto serve de
  referência — pode ter mais de uma, ou ficar vazia `[]`.
- `title`: legenda curta e opcional — pode deixar `""` se não quiser legenda.
- `tags`: palavras-chave internas (não aparecem pra cliente); pode deixar `[]`.
- `image`: link (`https://...`) ou caminho de um arquivo dentro de `images/catalogo/`.

Para remover uma foto, apague o bloco correspondente. Reordenar os blocos na
lista muda só a ordem de exibição — o código de cada foto continua o mesmo.

### Criar uma categoria nova

No topo do arquivo, dentro de `CATEGORIES`, adicione uma linha:

```js
{ id: "casamento", label: "Casamento" },
```

- `id`: um identificador simples, sem espaços ou acentos (é o que liga a foto
  à categoria — depois de usado em alguma foto, evite mudá-lo).
- `label`: o texto que aparece no filtro para a cliente — esse pode ser
  alterado a qualquer momento, livremente.

Depois, use esse `id` no campo `category` das fotos que pertencem a ela.
Para remover uma categoria, apague a linha e mude a categoria das fotos que a
usavam.

### Criar uma profissão nova

Mesma lógica, dentro de `PROFESSIONS`:

```js
{ id: "coaches", label: "Coaches" },
```

Depois, inclua esse `id` na lista `professions` de cada foto que sirva de
referência para essa profissão.

### Trocar o número de WhatsApp

Esse não fica em `photos-data.js` — é no topo do `js/app.js`:

```js
const WHATSAPP_NUMBER = "5511999999999";
```

Troque pelo número real, com DDI 55 + DDD, só números (ex: `5511987654321`).

## Como usar suas próprias fotos

1. Salve o arquivo da foto dentro de `images/catalogo/`, nomeado com o
   próprio código, por exemplo: `images/catalogo/VS-031.jpg`. Isso evita erro
   de digitação — o nome do arquivo já corresponde ao código no catálogo.
2. Em `js/photos-data.js`, defina `image: "images/catalogo/VS-031.jpg"` na
   foto correspondente.

Enquanto as fotos reais não estiverem prontas, o site usa imagens de exemplo
(via picsum.photos) só para você visualizar o layout funcionando. Se um link
de imagem quebrar, o site mostra automaticamente um fundo elegante com o
código da foto no lugar do ícone de "imagem quebrada".

## Como a seleção de fotos funciona

- A cliente toca no coração (♡) de cada foto para selecioná-la — vira ♥ e a
  foto ganha um contorno dourado.
- Tocar na própria foto (fora do coração) abre a imagem ampliada.
- As escolhas ficam salvas no navegador da cliente (mesmo se ela fechar e
  voltar depois) até ela mesma limpar a seleção.
- Uma barra flutuante mostra quantas fotos estão selecionadas; tocando nela,
  abre um painel com miniaturas de cada escolha, opção de remover uma por uma,
  "Limpar minhas escolhas" e o botão "Enviar minhas escolhas no WhatsApp",
  que monta a mensagem automaticamente com os códigos das fotos escolhidas.

## Como visualizar localmente

Não precisa de instalação. Duas opções:

- Abra o arquivo `index.html` direto no navegador.
- Ou, para evitar qualquer bloqueio do navegador com imagens locais, rode um
  servidor simples na pasta do projeto:
  ```
  python3 -m http.server 8000
  ```
  e acesse `http://localhost:8000` no navegador.

## Como publicar (hospedar) o site gratuitamente

A forma mais simples é o **GitHub Pages**:

1. Suba este repositório para o GitHub (se ainda não estiver lá).
2. Nas configurações do repositório, vá em **Settings → Pages**.
3. Em "Branch", selecione a branch principal (ex: `main`) e a pasta `/root`.
4. Salve — em alguns minutos o site estará disponível em um link
   `https://seuusuario.github.io/nome-do-repositorio/`.

Outras opções fáceis: [Netlify](https://netlify.com) ou [Vercel](https://vercel.com)
— basta arrastar a pasta do projeto no painel deles.

## Seções do site

- **Início (Hero)**: explicação curta do catálogo e botão para ir direto a ele.
- **Como funciona**: 3 passos rápidos (navegar → selecionar → enviar).
- **Catálogo**: elemento principal do site — filtros por categoria e o grid de
  fotografias com seleção múltipla.
- **Barra/painel de seleção**: mostra as escolhas da cliente e envia pelo WhatsApp.
- **Rodapé**: simples, só com o nome da marca.

Duas seções foram deixadas de fora por enquanto, propositalmente:
- **Resultados reais**: entra depois, quando houver fotos de resultados
  autorizadas por clientes.
- **Depoimentos**: entra depois, com prints/áudios reais — não há depoimentos
  fictícios no código.
