# Site — Paty Rocha | Ensaios Fotográficos com IA

Site estático (HTML, CSS e JavaScript puro) para portfólio e catálogo de ensaios
fotográficos criados com Inteligência Artificial.

## Estrutura

```
index.html        → estrutura das seções do site
css/styles.css     → todo o visual (cores, fontes, layout, responsivo)
js/main.js          → conteúdo dinâmico (catálogo, galeria, depoimentos, WhatsApp)
```

## Como editar o conteúdo (sem precisar programar)

Abra o arquivo `js/main.js`. No topo do arquivo há um bloco de **CONFIGURAÇÕES**
com tudo que você provavelmente vai querer mudar:

- `WHATSAPP_NUMBER`: seu número com DDI 55 + DDD, só números (ex: `5511987654321`).
- `INSTAGRAM_URL` e `CONTACT_EMAIL`: links exibidos na seção de contato.
- `catalogCategories`: a lista de estilos do catálogo. Cada item tem:
  - `name`: nome do estilo (ex: "Editorial Fashion")
  - `description`: texto curto de apresentação
  - `image`: link da foto de capa (troque pelo link ou caminho da sua foto real)
  Para adicionar um novo estilo, copie um bloco `{ ... }` inteiro, cole na lista
  e edite os valores. Para remover, apague o bloco correspondente.
- `portfolioImages`: lista de fotos da galeria de portfólio. Basta adicionar ou
  remover links/caminhos de imagem.
- `testimonials`: depoimentos de clientes (nome, estilo escolhido, foto e texto).

## Como usar suas próprias fotos

1. Coloque os arquivos de imagem dentro da pasta `images/` (crie subpastas se
   quiser organizar, ex: `images/catalogo/editorial.jpg`).
2. No `js/main.js`, troque o valor de `image` (ou os itens de `portfolioImages`)
   pelo caminho do arquivo, por exemplo: `"images/catalogo/editorial.jpg"`.

Enquanto você não tiver as fotos reais, o site usa imagens de exemplo (via
picsum.photos) só para você visualizar o layout funcionando.

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

- **Início (Hero)**: apresentação e chamadas para o catálogo e portfólio.
- **Sobre**: quem você é e como funciona o processo do ensaio com IA.
- **Portfólio**: galeria de fotos com efeito de zoom e visualização ampliada.
- **Catálogo**: os estilos de ensaio disponíveis, cada um com botão que leva
  direto para uma conversa no WhatsApp já com o estilo escolhido preenchido.
- **Depoimentos**: avaliações de clientes para gerar confiança.
- **Contato**: WhatsApp, Instagram e e-mail.
