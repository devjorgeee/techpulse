# TechPulse

> **Tecnologia com contexto, sem ruído.**
> Portal editorial de notícias, análises e tendências sobre tecnologia, desenvolvido com HTML5 e CSS3 como projeto acadêmico de Front-End.

![HTML5](https://img.shields.io/badge/HTML5-semântico-E94F37?style=flat-square)
![CSS3](https://img.shields.io/badge/CSS3-externo-111827?style=flat-square)
![Responsivo](https://img.shields.io/badge/responsivo-360px%20a%201440px-171717?style=flat-square)

---

## Sumário

1. [Apresentação](#1-apresentação)
2. [Objetivo](#2-objetivo)
3. [Público-alvo](#3-público-alvo)
4. [Tecnologias utilizadas](#4-tecnologias-utilizadas)
5. [Estrutura de diretórios](#5-estrutura-de-diretórios)
6. [Especificações técnicas](#6-especificações-técnicas)
7. [Justificativa das cores](#7-justificativa-das-cores)
8. [Justificativa da tipografia](#8-justificativa-da-tipografia)
9. [Espaçamentos e Box Model](#9-espaçamentos-e-box-model)
10. [Organização semântica do HTML5](#10-organização-semântica-do-html5)
11. [Estratégia de responsividade](#11-estratégia-de-responsividade)
12. [Acessibilidade](#12-acessibilidade)
13. [Tecnologias e serviços abordados pelo portal](#13-tecnologias-e-serviços-abordados-pelo-portal)
14. [Sitemap Visual](#14-sitemap-visual)
15. [Testes realizados](#15-testes-realizados)
16. [Como executar localmente](#16-como-executar-localmente)
17. [Publicação no GitHub](#17-publicação-no-github)

---

## 1. Apresentação

O **TechPulse** é a primeira versão funcional da página inicial de um portal de notícias de tecnologia. O projeto busca a aparência e a organização de um produto editorial real: manchete principal com grande destaque, hierarquia tipográfica forte, editorias bem definidas, seção de tendências e newsletter integrada.

A identidade visual é própria. Publicações como The Verge, Wired, Ars Technica, TechCrunch e MIT Technology Review serviram apenas como referência de **padrões editoriais** (hierarquia de manchetes, uso de chapéus de categoria, grades de conteúdo). Nenhuma interface foi copiada.

O projeto tem duas páginas:

| Página | Função |
|---|---|
| `index.html` | Página inicial completa (cabeçalho, destaques, últimas notícias, editorias, tendências, newsletter e rodapé). |
| `materia.html` | Modelo de página de matéria, com o texto completo da manchete principal. Mostra como os mesmos componentes CSS são reutilizados em outro contexto. |

> **Importante:** todas as notícias, nomes de pessoas e citações são **fictícios** e foram escritos para fins educacionais. O portal não apresenta informações inventadas como fatos reais; o aviso aparece no rodapé de todas as páginas.

## 2. Objetivo

Organizar e publicar notícias, análises e conteúdos sobre tecnologia em uma interface:

- com **hierarquia editorial clara**, em que o leitor identifica rapidamente o que é mais importante;
- com **navegação intuitiva** por editorias;
- **consistente** em computadores, tablets e smartphones;
- construída **exclusivamente com HTML5 e CSS3**, com JavaScript mínimo e opcional.

## 3. Público-alvo

- Estudantes de tecnologia e de cursos como Análise e Desenvolvimento de Sistemas;
- Desenvolvedores e profissionais de TI;
- Entusiastas de inovação;
- Pessoas interessadas no universo digital que buscam informação com contexto.

## 4. Tecnologias utilizadas

| Tecnologia | Uso no projeto |
|---|---|
| **HTML5** | Estrutura e semântica de todas as páginas. |
| **CSS3** | Toda a estilização, em arquivo externo (`css/style.css`): variáveis, Flexbox, Grid, `clamp()`, `aspect-ratio`, contadores, media queries. |
| **JavaScript (opcional)** | Apenas duas interações complementares em `js/main.js`: recolher o menu no celular e validar de forma demonstrativa o e-mail da newsletter. O site funciona sem ele. |
| **SVG** | Ilustrações editoriais e ícones próprios, leves e nítidos em qualquer resolução. |
| **Google Fonts** | Fontes Space Grotesk e Inter (com fontes do sistema como alternativa). |

Não há back-end, banco de dados, frameworks, bibliotecas ou APIs.

## 5. Estrutura de diretórios

```
techpulse/
│
├── index.html                  # Página inicial
├── materia.html                # Modelo de página de matéria
│
├── css/
│   └── style.css               # Folha de estilos única, organizada em 15 blocos
│
├── js/
│   └── main.js                 # Menu móvel e validação demonstrativa da newsletter
│
├── assets/
│   ├── images/                 # Ilustrações editoriais (SVG, 1600 × 1000)
│   │   ├── ia-modelos-especializados.svg
│   │   ├── dev-editor-modulos.svg
│   │   ├── seguranca-chaves-acesso.svg
│   │   ├── hardware-chip-aberto.svg
│   │   ├── ciencia-computacao-quantica.svg
│   │   └── inovacao-satelite-agro.svg
│   └── icons/                  # Logotipo, favicon e ícones das editorias (SVG)
│       ├── logo-mark.svg
│       ├── favicon.svg
│       ├── icon-ia.svg
│       ├── icon-codigo.svg
│       ├── icon-escudo.svg
│       └── icon-inovacao.svg
│
└── README.md
```

Os nomes de arquivos usam letras minúsculas, sem acentos e com hífens, o que evita problemas de caminho entre sistemas operacionais e servidores.

## 6. Especificações técnicas

**Documento HTML**

- `<!DOCTYPE html>`, `<html lang="pt-BR">`, `<meta charset="UTF-8">` e `<meta name="viewport" content="width=device-width, initial-scale=1.0">`;
- `<title>` e `<meta name="description">` específicos para cada página;
- CSS externo vinculado com `<link rel="stylesheet" href="css/style.css">`;
- **nenhum CSS inline** (nenhum atributo `style` nem elemento `<style>`).

**Seletores CSS exigidos**

| Tipo | Exemplos no `style.css` |
|---|---|
| Seletor de tag | `body`, `h1, h2, h3, h4`, `a`, `strong`, `time`, `img` |
| Classe reutilizável | `.container`, `.btn`, `.kicker`, `.meta`, `.link-arrow`, `.label-heading`, `.tag-list` |
| ID exclusivo do cabeçalho | `#cabecalho` |
| Cores hexadecimais e RGBA | `#E94F37`, `#111827`, `rgba(17, 24, 39, 0.78)` (legenda sobre a imagem) |
| Estados | `:hover` em links, botões e cartões; `:focus-visible` global e ajustado por contexto |
| Media Queries | 480px, 600px, 768px, 1024px, 1280px, menu (`max-width: 1023.98px`) e `prefers-reduced-motion` |

**Organização do CSS**

O arquivo começa com um sumário e é dividido em blocos numerados: variáveis, reset, seletores de tag, componentes, cada seção da página, página de matéria e media queries. Cores, fontes e espaçamentos são definidos uma única vez como **variáveis CSS** (`:root`), evitando valores repetidos.

As classes seguem uma convenção inspirada em BEM (`bloco__elemento--modificador`), por exemplo `.story__title` ou `.btn--accent`, o que deixa claro a que componente cada regra pertence.

## 7. Justificativa das cores

| Token | Cor | Uso | Por quê |
|---|---|---|---|
| `--color-bg` | `#F5F5F2` | Fundo principal | Branco levemente quente, lembra papel e cansa menos a vista que o branco puro em leituras longas. |
| `--color-surface` | `#FFFFFF` | Cartões, faixas e formulário | Cria camadas sutis sobre o fundo sem precisar de sombras. |
| `--color-text` | `#171717` | Texto principal | Quase preto: contraste de 16,6:1 sobre o fundo, sem a dureza do preto absoluto. |
| `--color-muted` | `#666666` | Textos secundários, datas | **Ajuste do `#777777` sugerido.** O `#777777` sobre `#F5F5F2` tem contraste de cerca de 4,1:1, abaixo do mínimo AA (4,5:1). O `#666666` atinge cerca de 5,3:1. |
| `--color-accent` | `#E94F37` | Barras, numerais, fundo da newsletter e botões | Coral vibrante que dá identidade ao portal. É usado de forma estratégica: indicadores, categorias, ranking e chamadas à ação. |
| `--color-accent-strong` | `#C33A22` | Textos pequenos em destaque (categorias, links "Ler matéria") | O coral original tem contraste de 3,7:1 com o branco, suficiente apenas para textos grandes. A variação mais escura chega a 5,3:1 e mantém a mesma identidade. |
| `--color-ink` | `#111827` | Cabeçalho, rodapé, etiquetas | Azul-grafite que transmite seriedade institucional e destaca o logotipo. |
| `--color-line` | `#E5E5E5` | Linhas divisórias | Separa conteúdos sem poluir; o portal usa **linhas finas em vez de caixas** sempre que possível. |

Nos botões coral, o texto é `#111827` (contraste de 4,7:1) em vez de branco (3,7:1), garantindo legibilidade sem abrir mão da cor da marca.

**Decisões de estilo:** não há gradientes decorativos, glassmorphism nem bordas arredondadas genéricas. Os cantos retos e as linhas finas reforçam a linguagem editorial, de jornal. A única transparência (RGBA) está na legenda sobre a imagem principal, onde garante leitura do texto sobre a ilustração.

## 8. Justificativa da tipografia

| Função | Fonte | Motivo |
|---|---|---|
| Títulos, logotipo, numerais | **Space Grotesk** (500–700) | Sans-serif geométrica com traços técnicos, ligada visualmente ao universo da tecnologia, mas com personalidade suficiente para manchetes. |
| Textos, menus, formulários | **Inter** (400–700) | Projetada para telas, com ótima legibilidade em tamanhos pequenos e números tabulares. |
| Alternativa | `system-ui`, Segoe UI, Roboto | Se as fontes externas não carregarem, o layout continua legível com as fontes do sistema. |

**Hierarquia tipográfica**

| Nível | Elemento | Tamanho |
|---|---|---|
| Manchete principal | `.lead__title` | `clamp(1.875rem, …, 3.25rem)`: de 30px a 52px |
| Título de seção | `.section-head__title` | `clamp(1.75rem, …, 2.5rem)` |
| Título de notícia | `.story__title` | 21px (24–32px na notícia larga) |
| Corpo de texto | `body` | 16–17px, altura de linha 1.6 |
| Chapéu de categoria | `.kicker` | 12px, caixa alta, espaçamento de letras 0.1em |
| Metadados e legendas | `.meta`, `.caption` | 12–13px |

Manchetes usam espaçamento negativo entre letras (`letter-spacing: -0.035em`) e altura de linha curta (1.05), como em publicações impressas. O corpo de texto usa altura de linha generosa (1.6 na home, 1.75 na matéria) e largura máxima limitada (`max-width` em `ch`/`rem`, entre 60 e 75 caracteres por linha), a faixa considerada mais confortável para leitura.

## 9. Espaçamentos e Box Model

**Box Model**

Todo o projeto usa `box-sizing: border-box`. Com isso, `padding` e `border` ficam **dentro** da largura declarada, e os cálculos de layout ficam previsíveis: um elemento com `width: 100%` e `padding: 1.5rem` nunca ultrapassa o contêiner.

Exemplos de aplicação consciente das quatro camadas (conteúdo, `padding`, `border`, `margin`):

| Componente | Aplicação |
|---|---|
| Painel da manchete (`.lead__body`, a partir de 768px) | `margin-top: -5rem` faz o painel **sobrepor** a imagem; `padding` interno afasta o texto; `border-top: 4px` em coral marca o início da matéria. |
| Formulário da newsletter (`.subscribe`) | `padding` interno, `border: 2px` e `box-shadow` sólido deslocado (8px), criando um bloco com aparência de recorte impresso. |
| Editorias (`.desks__grid`) | `gap: 1px` com o fundo da grade na cor das linhas: as "bordas" entre colunas surgem do espaço entre as caixas, sem bordas duplicadas. |
| Notícias (`.story`) | `border: 1px` que escurece no `:hover` e no `:focus-within`, sem alterar o tamanho da caixa. |

**Escala de espaçamento**

Os espaçamentos seguem uma escala baseada em 4px, definida em variáveis:

```
--space-1: 0.25rem  (4px)    --space-5: 1.5rem (24px)
--space-2: 0.5rem   (8px)    --space-6: 2rem   (32px)
--space-3: 0.75rem  (12px)   --space-7: 3rem   (48px)
--space-4: 1rem     (16px)   --space-8: 4rem   (64px)
```

O espaço vertical entre seções é fluido: `--section-gap: clamp(3rem, 2rem + 4vw, 5.5rem)`, ou seja, 48px no celular e até 88px no desktop. As margens laterais (`--gutter`) crescem de 16px (celular) para 24px (tablet) e 32px (desktop).

## 10. Organização semântica do HTML5

```
<body>
├── <a class="skip-link">            Atalho "Pular para o conteúdo"
├── <header id="cabecalho">          Cabeçalho institucional
│   ├── <h1 class="logo">            Logotipo TechPulse (título da página inicial)
│   └── <nav>                        Navegação principal (lista <ul>)
├── <aside class="agenda">           Assuntos "Em pauta" (conteúdo complementar)
├── <main id="conteudo">
│   ├── <section id="destaques">     Hero editorial
│   │   ├── <article>                Manchete principal (<h2>, <figure>, <time>)
│   │   └── <section>                "Também em destaque" e "Mais lidas" (<ol>)
│   ├── <section id="ultimas">       Últimas notícias: 3 <article> + linha do tempo <ol>
│   ├── <section id="editorias">     4 <section> de editoria, cada uma com <article>
│   ├── <section id="tendencias">    Tendências (<ol> de <article>) + lista <ul> de tecnologias
│   └── <section id="newsletter">    Formulário com <label>, <input type="email"> e <button>
└── <footer>                         Rodapé institucional com duas <nav>
```

Princípios adotados:

- **Um único `<h1>` por página.** Na página inicial é o logotipo (identifica o site); na página de matéria, a manchete. A hierarquia segue `h1 → h2 → h3 → h4` sem saltos (verificado automaticamente, ver seção 15).
- **`<article>`** para cada conteúdo independente (notícia, tendência, destaque da editoria); **`<section>`** para agrupamentos temáticos com título.
- **`<time datetime="…">`** em todas as datas, legível por máquinas.
- **`<figure>` e `<figcaption>`** para imagens com crédito.
- **`<strong>` e `<em>`** com função semântica: `<strong>` para trechos importantes, `<em>` para ênfase e termos estrangeiros (*phishing*, *Wasm*).
- **`<div>` apenas onde não há elemento semântico adequado** (contêineres de layout, como `.container` e grades).

## 11. Estratégia de responsividade

O CSS é **mobile-first**: as regras base atendem o celular, e as media queries com `min-width` acrescentam colunas conforme a tela cresce.

| Largura | Comportamento |
|---|---|
| **360px / 390px** (smartphones) | Uma coluna; botão "Menu" recolhe a navegação; "Em pauta" rola lateralmente dentro da própria faixa; formulário com campo e botão empilhados. |
| **480px+** | Campo de e-mail e botão lado a lado; miniaturas maiores. |
| **600px+** | Botão "Principais notícias" e data de atualização aparecem no cabeçalho; tendências e rodapé em duas colunas. |
| **768px** (tablet) | Painel da manchete sobrepõe a imagem; notícias em grade de duas colunas, com a primeira em largura total; editorias em 2 × 2. |
| **1024px+** (notebook) | Menu horizontal completo; hero com coluna lateral; linha do tempo ao lado das notícias; tendências com introdução fixa (`position: sticky`). |
| **1280px / 1440px** (desktop) | Editorias em quatro colunas; largura máxima de conteúdo de 1280px, centralizada. |

Técnicas utilizadas:

- **CSS Grid** para layouts de página (hero, notícias, editorias, tendências, rodapé) e **Flexbox** para alinhamentos em linha (cabeçalho, metadados, rodapés de cartão);
- **Imagens adaptáveis:** `max-width: 100%`, `height: auto`, `aspect-ratio` e `object-fit: cover`, com `width` e `height` no HTML para evitar saltos de layout;
- **Tipografia fluida** com `clamp()`;
- `minmax(0, 1fr)` nas colunas para impedir que palavras longas estourem a grade;
- **Menu adaptado:** abaixo de 1024px, o botão "Menu" (`aria-expanded`) abre a lista em coluna. **Sem JavaScript**, o menu continua acessível como faixa rolável;
- Nenhuma rolagem horizontal da página (verificado, ver seção 15).

## 12. Acessibilidade

- Link **"Pular para o conteúdo principal"**, visível ao receber foco pelo teclado;
- **`:focus-visible`** com contorno de 3px em todos os elementos interativos, com cor ajustada ao fundo (coral no escuro, grafite na faixa coral);
- **Contraste AA** em todos os textos (ver tabela da seção 7);
- **Textos alternativos descritivos** em todas as ilustrações; ícones decorativos usam `alt=""` para não gerar ruído em leitores de tela;
- `aria-current="page"` indica a seção ativa no menu (além do indicador visual coral);
- `aria-label` e `aria-labelledby` identificam as regiões e as navegações (principal, rodapé, trilha de navegação);
- Botão do menu com `aria-expanded` e `aria-controls`; a tecla **Esc** fecha o menu e devolve o foco ao botão;
- Formulário com `<label>` associado, `autocomplete="email"`, `aria-describedby`, `aria-invalid` e mensagem em região `role="status"` (anunciada por leitores de tela);
- `@media (prefers-reduced-motion: reduce)` desativa animações e transições;
- Áreas de toque com pelo menos 44px de altura em botões.

## 13. Tecnologias e serviços abordados pelo portal

O conteúdo editorial do TechPulse cobre, entre outros temas:

- **Inteligência Artificial:** IA generativa, modelos de linguagem abertos, machine learning, agentes e ferramentas de automação;
- **Desenvolvimento:** front-end (CSS moderno, container queries, `:has()`), back-end e APIs, WebAssembly, linguagens como Rust, Go e Kotlin;
- **Cibersegurança:** passkeys (FIDO2), autenticação em dois fatores, privacidade, LGPD e proteção de dados;
- **Inovação e Tecnologia:** startups, gadgets, arquitetura aberta RISC-V, computação de borda, computação quântica e chips neuromórficos.

## 14. Sitemap Visual

O diagrama abaixo representa a **arquitetura planejada** do portal.

```
TECHPULSE
│
└── Página Inicial  (index.html)
    │
    ├── Inteligência Artificial
    │   ├── IA Generativa  ............ └── Matéria: "Modelos de IA menores…" (materia.html)
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
    ├── Tendências  (Radar TechPulse)
    └── Newsletter  (Pulse Diário)
```

**O que já está implementado nesta versão:**

- A **página inicial** completa, com as quatro editorias, tendências e newsletter apresentadas como **seções** da própria página (acessíveis pelo menu por âncoras, como `#ciberseguranca`);
- Uma **página de matéria** (`materia.html`), na subcategoria IA Generativa.

**O que é planejamento (ainda não implementado):** páginas próprias para cada editoria e subcategoria e páginas individuais para as demais matérias. Por isso, nesta versão, os links das notícias secundárias levam à âncora da própria notícia ou da editoria correspondente na página inicial, e nenhum link aponta para páginas inexistentes.

### Hierarquia de conteúdo × Taxonomia

| Conceito | O que é | Como aparece no TechPulse |
|---|---|---|
| **Hierarquia de conteúdo** | A organização dos **níveis de importância e profundidade** da informação: o que vem primeiro, o que está dentro do quê. | Página inicial → editoria → subcategoria → matéria. Na home: manchete principal (maior destaque) → destaques secundários → últimas notícias → editorias. Nos títulos: `h1 → h2 → h3 → h4`. |
| **Taxonomia** | A **classificação e o agrupamento** dos conteúdos por assunto, com um vocabulário consistente. | As quatro editorias e suas subcategorias (por exemplo, *Cibersegurança → Privacidade*). Cada notícia recebe um chapéu de categoria (`.kicker`) dessa classificação. |

Em resumo: a hierarquia responde **"em que nível e em que ordem está esta informação?"**; a taxonomia responde **"sobre o que é este conteúdo e com quais outros ele se agrupa?"**.

## 15. Testes realizados

Os testes abaixo foram **executados** em navegador baseado em Chromium, com o projeto servido localmente (`python -m http.server`):

| Verificação | Resultado |
|---|---|
| Rolagem horizontal (`scrollWidth` = largura da janela) em 360, 390, 768, 1280 e 1440px | Sem rolagem horizontal em todas as larguras |
| Inspeção visual das seções em 360, 390, 768, 1280 e 1440px | Sem elementos cortados ou sobrepostos indevidamente |
| Carregamento de imagens (`index.html` e `materia.html`) | 15 de 15 imagens carregadas |
| Imagens sem atributo `alt` | Nenhuma |
| Links internos (61 na home, 27 na matéria): arquivo e âncora de destino existem | Todos válidos; nenhum `href="#"` vazio |
| IDs duplicados | Nenhum |
| Hierarquia de títulos | Um `<h1>` por página; nenhum salto de nível |
| CSS inline (`style=""` ou `<style>`) | Nenhum |
| Fontes Space Grotesk e Inter | Carregadas |
| Menu móvel: abrir, fechar com Esc, foco devolvido ao botão | Funcionando |
| Newsletter: campo vazio, e-mail inválido e e-mail válido | Mensagens corretas; `aria-invalid` atualizado; nenhum envio |
| Navegação por teclado (Tab) | Atalho de pular conteúdo aparece; contorno de foco visível |

**Não executado:** validação no [W3C Markup Validation Service](https://validator.w3.org/) e no [W3C CSS Validator](https://jigsaw.w3.org/css-validator/). Recomenda-se enviar os arquivos por upload nesses serviços antes da entrega.

## 16. Como executar localmente

**Opção 1: abrir direto no navegador**

Dê dois cliques em `index.html`. Todos os caminhos são relativos, então o site funciona sem servidor.

**Opção 2: servidor local (recomendado)**

Com Python instalado, na pasta do projeto:

```bash
python -m http.server 8000
```

Acesse `http://localhost:8000`.

Também é possível usar a extensão **Live Server** do VS Code (botão direito em `index.html` → *Open with Live Server*).

> As fontes são carregadas do Google Fonts. Sem internet, o site usa as fontes do sistema e continua funcional.

## 17. Publicação no GitHub

**Pelo terminal (Git + GitHub CLI):**

```bash
git init
git add .
git commit -m "Primeira versão do portal TechPulse"
gh auth login
gh repo create techpulse --public --source=. --remote=origin --push
```

**Pelo site do GitHub:**

1. Crie um repositório **público** chamado `techpulse` (sem README, para evitar conflito);
2. No terminal, dentro da pasta do projeto:

```bash
git remote add origin https://github.com/SEU-USUARIO/techpulse.git
git branch -M main
git push -u origin main
```

**Publicar como site (GitHub Pages):** em *Settings → Pages*, escolha *Deploy from a branch*, branch `main`, pasta `/ (root)`. Em alguns minutos o portal fica disponível em `https://SEU-USUARIO.github.io/techpulse/`.

---

Projeto acadêmico de desenvolvimento Front-End · Análise e Desenvolvimento de Sistemas · 2026
Conteúdo editorial fictício, criado para fins educacionais.
