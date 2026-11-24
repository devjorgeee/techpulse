<div align="center">

<img src="assets/icons/logo-mark.svg" alt="" width="56" height="56">

# TechPulse

**Tecnologia com contexto, sem ruído.**

Portal editorial de notícias, análises e tendências sobre tecnologia,<br>
construído com HTML5 semântico e CSS3 puro.

[**Ver site publicado**](https://devjorgeee.github.io/techpulse/) ·
[Arquitetura](#-arquitetura-da-informação) ·
[Design system](#-design-system) ·
[Executar localmente](#-executar-localmente)

![HTML5](https://img.shields.io/badge/HTML5-semântico-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Grid%20%2B%20Flexbox-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-opcional-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Responsivo](https://img.shields.io/badge/responsivo-360px–1440px-111827?style=flat-square)
![Acessibilidade](https://img.shields.io/badge/contraste-WCAG%20AA-1F7A4D?style=flat-square)
![GitHub Pages](https://img.shields.io/badge/deploy-GitHub%20Pages-222222?style=flat-square&logo=github)

<br>

<img width="1440" height="1000" alt="preview-desktop" src="https://github.com/user-attachments/assets/7922836b-4d81-4864-91b2-76b9ebad0acb" />
alt="Página inicial do TechPulse em tela de desktop: cabeçalho escuro com o logotipo, menu de editorias, manchete principal com ilustração de rede neural e coluna lateral com destaques e mais lidas" width="900">

</div>

---

## Sumário

- [Sobre o projeto](#-sobre-o-projeto)
- [Demonstração](#-demonstração)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias](#-tecnologias)
- [Executar localmente](#-executar-localmente)
- [Estrutura de diretórios](#-estrutura-de-diretórios)
- [Arquitetura da informação](#-arquitetura-da-informação)
- [Design system](#-design-system)
- [Engenharia de front-end](#-engenharia-de-front-end)
- [Acessibilidade](#-acessibilidade)
- [Qualidade e testes](#-qualidade-e-testes)
- [Temas cobertos pelo portal](#-temas-cobertos-pelo-portal)
- [Roadmap](#-roadmap)
- [Créditos](#-créditos)

---

## 📰 Sobre o projeto

O **TechPulse** é um portal de notícias de tecnologia com linguagem visual editorial: manchete dominante, chapéus de categoria, hierarquia tipográfica marcada e grades de conteúdo organizadas por editoria. Esta é a primeira versão funcional da página inicial, acompanhada de um modelo de página de matéria.

| | |
|---|---|
| **Objetivo** | Publicar e organizar notícias, análises e tendências de tecnologia com navegação intuitiva e leitura confortável em qualquer dispositivo. |
| **Público-alvo** | Estudantes, desenvolvedores, profissionais de TI, entusiastas de inovação e leitores interessados no universo digital. |
| **Escopo técnico** | HTML5 e CSS3, sem frameworks, bibliotecas, back-end, banco de dados ou APIs. JavaScript apenas para melhorias progressivas. |
| **Referências** | Padrões editoriais de publicações como The Verge, Wired, Ars Technica, TechCrunch e MIT Technology Review, usados como estudo de hierarquia e organização. A identidade visual é própria. |

> [!NOTE]
> Todas as notícias, pessoas e citações do portal são **fictícias** e existem apenas para demonstrar a interface. O aviso aparece no rodapé de todas as páginas.

---

## 🖥 Demonstração

**Site publicado:** https://devjorgeee.github.io/techpulse/

<table>
  <tr>
    <th>Smartphone (390px)</th>
    <th>Página de matéria (1440px)</th>
  </tr>
  <tr>
    <td valign="top"><img width="780" height="1688" alt="preview-mobile" src="https://github.com/user-attachments/assets/3996c265-e36d-4473-a9d2-b8b91e9a9287" />
</td>
    <td valign="top"><img width="1440" height="1000" alt="preview-materia" src="https://github.com/user-attachments/assets/24738995-7465-4aed-b7df-69aeb8cf0dc2" />
 alt="Página de matéria com trilha de navegação, chapéu de categoria, manchete grande, linha fina e metadados" width="560"></td>
  </tr>
</table>

---

## ✨ Funcionalidades

| Seção | O que entrega |
|---|---|
| **Cabeçalho institucional** | Logotipo, data da edição, menu de editorias com indicador da seção ativa, chamada para as principais notícias e menu recolhível no celular. |
| **Em pauta** | Faixa com os assuntos do dia, rolável lateralmente em telas pequenas. |
| **Hero editorial** | Manchete principal com ilustração, chapéu de categoria, linha fina, autor, horário e tempo de leitura; coluna lateral com destaques e ranking das mais lidas. |
| **Últimas notícias** | Três matérias em grade, a primeira em formato largo, e uma linha do tempo "Agora" com atualizações por horário. |
| **Editorias** | Inteligência Artificial, Desenvolvimento, Cibersegurança e Inovação, cada uma com subcategorias e manchete própria. |
| **Tendências** | Radar com quatro análises numeradas, estágio de maturidade e lista de tecnologias em observação. |
| **Newsletter** | Formulário com validação de e-mail na própria página, mensagens acessíveis e nenhum envio de dados. |
| **Rodapé** | Marca, navegação, editorias, informações institucionais e direitos autorais. |
| **Página de matéria** | Trilha de navegação, texto longo com intertítulos, citação em destaque e leituras relacionadas. |

---

## 🧰 Tecnologias

| Tecnologia | Uso |
|---|---|
| **HTML5** | Estrutura semântica de todas as páginas. |
| **CSS3** | Arquivo externo único com variáveis, Grid, Flexbox, `clamp()`, `aspect-ratio`, contadores e media queries. |
| **JavaScript** | `js/main.js`, opcional: menu móvel e validação demonstrativa da newsletter. Sem ele, o site continua navegável. |
| **SVG** | Ilustrações editoriais e ícones próprios, nítidos em qualquer densidade de tela. |
| **Google Fonts** | Space Grotesk e Inter, com fontes do sistema como alternativa. |
| **GitHub Pages** | Hospedagem estática do site publicado. |

---

## 🚀 Executar localmente

Não há dependências nem etapa de build.

```bash
git clone https://github.com/devjorgeee/techpulse.git
cd techpulse
```

**Opção 1:** abrir `index.html` diretamente no navegador. Todos os caminhos são relativos.

**Opção 2 (recomendada):** servir a pasta com um servidor local:

```bash
python -m http.server 8000
# acesse http://localhost:8000
```

Também funciona com a extensão **Live Server** do VS Code. Sem internet, o site usa as fontes do sistema e mantém o layout.

---

## 📁 Estrutura de diretórios

```
techpulse/
├── index.html                 # Página inicial
├── materia.html               # Modelo de página de matéria
├── css/
│   └── style.css              # Folha de estilos única, organizada em 15 blocos
├── js/
│   └── main.js                # Menu móvel e validação da newsletter
├── assets/
│   ├── images/                # Ilustrações editoriais (SVG, 1600 × 1000)
│   └── icons/                 # Logotipo, favicon e ícones das editorias (SVG)
├── docs/                      # Capturas de tela usadas neste README
└── README.md
```

Convenção de nomes: minúsculas, sem acentos e com hífens (`seguranca-chaves-acesso.svg`), evitando problemas de caminho entre sistemas operacionais.

---

## 🗺 Arquitetura da informação

### Sitemap Visual

O diagrama representa a **arquitetura planejada** do portal.

```
TECHPULSE
│
└── Página Inicial
    │
    ├── Inteligência Artificial
    │   ├── IA Generativa ─────────── Matéria: "Modelos de IA menores…"
    │   ├── Machine Learning
    │   └── Ferramentas e Automação
    │
    ├── Desenvolvimento
    │   ├── Front-End
    │   ├── Back-End
    │   └── Linguagens de Programação
    │
    ├── Cibersegurança
    │   ├── Segurança Digital
    │   ├── Privacidade
    │   └── Proteção de Dados
    │
    ├── Inovação e Tecnologia
    │   ├── Startups
    │   ├── Gadgets
    │   └── Ciência e Futuro
    │
    ├── Tendências
    └── Newsletter
```

| Status | Itens |
|---|---|
| ✅ **Implementado** | Página inicial completa, com editorias, tendências e newsletter como seções acessíveis pelo menu (âncoras como `#ciberseguranca`); página de matéria `materia.html` (IA Generativa). |
| 🗓 **Planejado** | Páginas próprias para cada editoria e subcategoria e páginas individuais para as demais matérias. Até lá, os links secundários apontam para âncoras existentes; nenhum link leva a uma página inexistente. |

### Hierarquia de conteúdo × Taxonomia

| | Hierarquia de conteúdo | Taxonomia |
|---|---|---|
| **Definição** | Organização dos **níveis** de informação: o que é mais importante, o que vem primeiro e o que está contido em quê. | **Classificação e agrupamento** dos conteúdos por assunto, com vocabulário consistente. |
| **Pergunta que responde** | "Em que nível e em que ordem esta informação aparece?" | "Sobre o que é este conteúdo e com quais outros ele se agrupa?" |
| **No TechPulse** | Página inicial → editoria → subcategoria → matéria. Na home: manchete → destaques → últimas notícias → editorias. No código: `h1 → h2 → h3 → h4`. | Quatro editorias e suas subcategorias (ex.: *Cibersegurança → Privacidade*), sinalizadas em cada notícia pelo chapéu de categoria. |

---

## 🎨 Design system

### Cores

| Token | Amostra | Função | Justificativa |
|---|---|---|---|
| `--color-bg` | ![#F5F5F2](https://img.shields.io/badge/-F5F5F2-F5F5F2?style=flat-square) | Fundo principal | Branco quente, próximo ao papel; reduz o cansaço em leituras longas. |
| `--color-surface` | ![#FFFFFF](https://img.shields.io/badge/-FFFFFF-FFFFFF?style=flat-square) | Cartões, faixas, formulário | Cria camadas sobre o fundo sem depender de sombras. |
| `--color-text` | ![#171717](https://img.shields.io/badge/-171717-171717?style=flat-square) | Texto principal | Quase preto: 16,6:1 de contraste, sem a dureza do preto puro. |
| `--color-muted` | ![#666666](https://img.shields.io/badge/-666666-666666?style=flat-square) | Datas, textos de apoio | Ajuste do `#777777` (4,1:1, abaixo do AA) para 5,3:1. |
| `--color-accent` | ![#E94F37](https://img.shields.io/badge/-E94F37-E94F37?style=flat-square) | Marca, barras, numerais, botões | Coral de identidade, aplicado de forma estratégica em categorias, indicadores e chamadas. |
| `--color-accent-strong` | ![#C33A22](https://img.shields.io/badge/-C33A22-C33A22?style=flat-square) | Textos pequenos em destaque | O coral tem 3,7:1 sobre branco; esta variação chega a 5,3:1 e mantém a identidade. |
| `--color-ink` | ![#111827](https://img.shields.io/badge/-111827-111827?style=flat-square) | Cabeçalho, rodapé | Grafite azulado que dá peso institucional à marca. |
| `--color-line` | ![#E5E5E5](https://img.shields.io/badge/-E5E5E5-E5E5E5?style=flat-square) | Divisórias | Separa conteúdo com linhas finas em vez de caixas. |

Nos botões coral o texto é `#111827` (4,7:1) em vez de branco (3,7:1). A linguagem visual evita gradientes, glassmorphism e cantos arredondados genéricos: cantos retos e linhas finas reforçam o caráter editorial.

### Tipografia

| Papel | Fonte | Motivo |
|---|---|---|
| Títulos, logotipo, numerais | **Space Grotesk** 500–700 | Geométrica e técnica, com personalidade para manchetes. |
| Texto, menus, formulários | **Inter** 400–700 | Desenhada para telas, legível em tamanhos pequenos e com números tabulares. |
| Alternativa | `system-ui`, Segoe UI, Roboto | Mantém o layout se as fontes externas não carregarem. |

| Nível | Classe | Tamanho |
|---|---|---|
| Manchete principal | `.lead__title` | `clamp()` de 30px a 52px |
| Título de seção | `.section-head__title` | `clamp()` de 28px a 40px |
| Título de notícia | `.story__title` | 21px (24–32px no formato largo) |
| Corpo de texto | `body` | 16–17px, entrelinha 1.6 |
| Chapéu de categoria | `.kicker` | 12px, caixa alta, espaçamento 0.1em |
| Metadados e legendas | `.meta`, `.caption` | 12–13px |

Manchetes usam entrelinha curta (1.05) e espaçamento negativo entre letras (`-0.035em`), como em publicações impressas. O texto corrido tem largura limitada (60–75 caracteres por linha).

### Espaçamento e Box Model

Escala baseada em 4px, definida em variáveis:

| Token | `--space-1` | `--space-2` | `--space-3` | `--space-4` | `--space-5` | `--space-6` | `--space-7` | `--space-8` |
|---|---|---|---|---|---|---|---|---|
| **Valor** | 4px | 8px | 12px | 16px | 24px | 32px | 48px | 64px |

O espaço entre seções é fluido (`clamp(3rem, 2rem + 4vw, 5.5rem)`, de 48px a 88px) e as margens laterais crescem de 16px (celular) para 24px (tablet) e 32px (desktop).

Todo o projeto usa `box-sizing: border-box`, de modo que `padding` e `border` ficam dentro da largura declarada. Aplicações de destaque:

| Componente | Uso do Box Model |
|---|---|
| Painel da manchete `.lead__body` | `margin-top` negativo sobrepõe o painel à imagem; `padding` afasta o texto; `border-top` coral marca o início da matéria. |
| Formulário `.subscribe` | `padding`, `border` de 2px e sombra sólida deslocada, com aparência de recorte impresso. |
| Grade de editorias `.desks__grid` | `gap: 1px` sobre fundo na cor das linhas: as divisórias surgem do espaço entre as caixas, sem bordas duplicadas. |
| Notícias `.story` | `border` que escurece no `:hover` e no `:focus-within` sem alterar as dimensões. |

---

## ⚙ Engenharia de front-end

### HTML5 semântico

```
body
├── a.skip-link                 Atalho para o conteúdo
├── header#cabecalho            Cabeçalho institucional
│   ├── h1.logo                 Marca (título da página inicial)
│   └── nav                     Navegação principal
├── aside.agenda                Assuntos em pauta
├── main#conteudo
│   ├── section#destaques       Hero: article (manchete) + destaques + ol (mais lidas)
│   ├── section#ultimas         3 × article + linha do tempo
│   ├── section#editorias       4 × section (uma por editoria)
│   ├── section#tendencias      ol de article + ul de tecnologias
│   └── section#newsletter      form com label, input[type=email] e button
└── footer                      Rodapé com duas nav
```

- Um único `<h1>` por página, com títulos em sequência e sem saltos de nível;
- `<article>` para conteúdos independentes e `<section>` para agrupamentos com título;
- `<time datetime>` em todas as datas; `<figure>` e `<figcaption>` em imagens com crédito;
- `<strong>` para importância e `<em>` para ênfase e termos estrangeiros;
- `<div>` restrito a contêineres de layout, onde não há elemento semântico adequado.

### CSS

- **Arquivo externo único**, sem nenhum estilo inline, dividido em 15 blocos documentados (tokens → reset → tags → componentes → seções → media queries);
- **Design tokens** em `:root` para cores, fontes e espaçamentos, sem valores repetidos;
- **Nomenclatura no padrão BEM** (`.story__title`, `.btn--accent`);
- Seletores de **tag** (`body`, `h1–h4`, `a`, `img`), **classe** (`.container`, `.btn`, `.kicker`) e **ID** (`#cabecalho`);
- Cores em **hexadecimal** e **RGBA** (`rgba(17, 24, 39, 0.78)` na legenda sobre a imagem);
- Estados `:hover`, `:focus-visible` e `:focus-within`.

### Responsividade

Abordagem **mobile-first**: as regras base atendem o celular e cada media query (`min-width`) acrescenta colunas.

| Breakpoint | Comportamento |
|---|---|
| **360–479px** | Coluna única, menu recolhível, faixa "Em pauta" com rolagem lateral interna. |
| **480px** | Campo de e-mail e botão lado a lado. |
| **600px** | Chamada "Principais notícias" no cabeçalho; tendências e rodapé em duas colunas. |
| **768px** | Painel da manchete sobre a imagem; notícias em grade 2 × 2; editorias em 2 × 2. |
| **1024px** | Menu horizontal; hero com coluna lateral; linha do tempo ao lado das notícias; introdução de tendências fixa com `sticky`. |
| **1280px+** | Editorias em quatro colunas; conteúdo limitado a 1280px e centralizado. |

Técnicas: Grid para layouts de página e Flexbox para alinhamentos em linha; `clamp()` para tipografia fluida; imagens com `max-width: 100%`, `aspect-ratio` e `object-fit`, além de `width`/`height` no HTML para evitar saltos de layout; `minmax(0, 1fr)` para impedir que textos longos estourem a grade.

---

## ♿ Acessibilidade

- Link **"Pular para o conteúdo principal"**, visível ao receber foco;
- Contorno de foco (`:focus-visible`) de 3px em todos os elementos interativos, com cor adaptada ao fundo;
- Contraste **WCAG AA** em todos os textos;
- Texto alternativo descritivo nas ilustrações e `alt=""` nos ícones decorativos;
- `aria-current="page"` na seção ativa; `aria-label` e `aria-labelledby` nas regiões e navegações;
- Botão de menu com `aria-expanded` e `aria-controls`; **Esc** fecha o menu e devolve o foco;
- Formulário com `<label>`, `autocomplete`, `aria-invalid`, `aria-describedby` e mensagens em `role="status"`;
- Respeito a `prefers-reduced-motion`;
- Áreas de toque de pelo menos 44px nos botões.

---

## ✅ Qualidade e testes

Verificações executadas em navegador Chromium, com o projeto servido localmente e na versão publicada:

| Verificação | Resultado |
|---|---|
| Rolagem horizontal em 360, 390, 768, 1280 e 1440px | Nenhuma |
| Inspeção visual em todas as larguras | Sem cortes ou sobreposições indevidas |
| Carregamento de imagens | 15 de 15 |
| Atributo `alt` em imagens | Presente em todas |
| Links internos (arquivo e âncora de destino) | 88 de 88 válidos, nenhum `href="#"` |
| IDs duplicados | Nenhum |
| Hierarquia de títulos | Um `<h1>` por página, sem saltos |
| CSS inline | Nenhum |
| Menu móvel: abrir, fechar com Esc, retorno de foco | Funcionando |
| Newsletter: vazio, inválido e válido | Mensagens e `aria-invalid` corretos, sem envio |
| Navegação por teclado | Atalho e foco visíveis |

> [!TIP]
> Validação complementar recomendada: [W3C Markup Validator](https://validator.w3.org/) e [W3C CSS Validator](https://jigsaw.w3.org/css-validator/).

---

## 🧭 Temas cobertos pelo portal

| Editoria | Tecnologias e serviços |
|---|---|
| **Inteligência Artificial** | IA generativa, modelos de linguagem abertos, machine learning, agentes, ferramentas de automação |
| **Desenvolvimento** | Front-end (container queries, `:has()`), back-end e APIs, WebAssembly, Rust, Go, Kotlin |
| **Cibersegurança** | Passkeys (FIDO2), autenticação em dois fatores, privacidade, LGPD, proteção de dados |
| **Inovação e Tecnologia** | Startups, gadgets, RISC-V, computação de borda, computação quântica, chips neuromórficos |

---

## 🛣 Roadmap

- [x] Página inicial editorial responsiva
- [x] Modelo de página de matéria
- [x] Publicação no GitHub Pages
- [ ] Páginas de editoria e subcategoria
- [ ] Páginas individuais para todas as matérias
- [ ] Tema escuro com `prefers-color-scheme`
- [ ] Busca de matérias

---

## 👤 Créditos

Desenvolvido por [**devjorgeee**](https://github.com/devjorgeee) como projeto acadêmico de desenvolvimento Front-End do curso de Análise e Desenvolvimento de Sistemas, 2026.

Ilustrações, ícones e identidade visual criados especialmente para o projeto. Conteúdo editorial fictício, de uso educacional.
