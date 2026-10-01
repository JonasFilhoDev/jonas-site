# Jonas Filho Dev — portfólio

Site pessoal de **Jonas Francisco de Lima Filho**, desenvolvedor FullStack. Está no ar em
[jonasfilho.dev.br](https://jonasfilho.dev.br/), servido pela Vercel a partir deste
repositório.

Uma página, sete seções: hero, projetos, como eu trabalho, sobre, contato e rodapé. O
objetivo do conteúdo é o mesmo do site: mostrar sistemas que rodam de verdade, com o
problema e as decisões técnicas antes da lista de tecnologias.

---

## Stack

| Camada        | Escolha                                                        |
|---------------|----------------------------------------------------------------|
| Framework     | React 18                                                        |
| Build         | Vite 5                                                          |
| Estilo        | CSS puro com **CSS Modules** (`*.module.css` por componente)    |
| Ícones        | SVG inline em `src/components/Icon.jsx`, sem biblioteca        |
| Fonte         | Bricolage Grotesque, Instrument Sans e JetBrains Mono (Google Fonts) |
| Hospedagem    | Vercel, com build automático a cada push na `master`            |

Não há biblioteca de interface, CSS framework nem step de configuração. O site inteiro
são ~1.575 linhas entre JSX, JS e CSS, e `npm run build` produz a pasta `dist/`.

## Rodando localmente

```bash
npm install
npm run dev       # http://localhost:5173
```

```bash
npm run build     # gera dist/
npm run preview   # serve dist/ localmente, como a Vercel faz
```

`vite.config.js` deixa `host` e `allowedHosts` abertos para o servidor de desenvolvimento
ser acessível de outros dispositivos da rede.

## Estrutura

```
index.html              metadados, Open Graph, JSON-LD (Person) e as fontes
src/
├── main.jsx            ponto de entrada
├── App.jsx             monta a ordem das seções
├── data.js             número do WhatsApp, links do menu e função waLink()
├── index.css           variáveis de cor, tipografia base e reset
└── components/
    ├── Icon.jsx        ícones SVG por nome
    ├── Nav/            cabeçalho fixo com marca, menu e CTA
    ├── Hero/           nome, disponibilidade, Botões e redes sociais
    ├── Projetos/       cards de problema, solução, decisões e stack
    ├── Processo/       as três decisões de trabalho que se repetem
    ├── Sobre/          texto, foto e a lista de fatos (formação, stack, curso)
    ├── Contato/        canais com link direto
    └── Rodape/         crédito e volta ao topo
public/
├── brand/jf-dev.png    logo com fundo transparente (gerado por script)
├── assets/logo.png     logo original
├── img/jonas.jpg       foto de capa
├── og.png              imagem 1200x630 para compartilhamento
└── favicon.svg
scripts/                scripts Python que préparam as imagens do site
```

Cada componente tem seu próprio arquivo `.jsx` e seu `.module.css`. O CSS global só
carrega variáveis, tipografia e reset; todo o resto é escopado pelo nome do módulo.

## Identidade visual

A paleta é marinho e terracota sobre papel quente, e não a paleta roxa da primeira versão
do portfólio. Tudo está em variáveis no `src/index.css`:

| Variável         | Valor                      | Uso                              |
|------------------|----------------------------|----------------------------------|
| `--ink`          | `#0c223b`                  | marinho da marca, títulos        |
| `--paper`        | `#f4f2ec`                  | fundo, um papel quente           |
| `--card`         | `#fbfaf6`                  | superfície dos cards              |
| `--accent`       | `#c2503c`                  | terracota, único acento          |
| `--text`         | `#14202e`                  | corpo de texto                    |
| `--muted`        | `#5d6b78`                  | texto secundário                 |
| `--line`         | `#d9d3c6`                  | bordas                            |
| `--maxw`         | `1120px`                   | largura máxima do conteúdo        |

O `index.css` também trata `prefers-reduced-motion`, e o corpo usa
`-webkit-font-smoothing: antialiased`.

## SEO

O `index.html` carrega o que o site precisa para ser indexado e compartilhado: `title` e
`description` com os termos que a busca usa, `canonical`, Open Graph completo
(imagem 1200x630 em `og.png`), `twitter:card` e um bloco JSON-LD do tipo `Person` com
`alumniOf`, `knowsAbout` e os perfis `sameAs`.

## Imagens e capturas

Os PNGs de `public/` e as capturas de revisão são gerados por script, não desenhados à
mão:

| Script                  | O que faz                                                              |
|-------------------------|------------------------------------------------------------------------|
| `scripts/preparar_marca.py` | Tira o branco do interior do logo e deixa `brand/jf-dev.png` com transparência |
| `scripts/gerar_og.py`   | Monta o `og.png` (1200x630) em HTML/CSS e renderiza no Chromium headless |
| `scripts/capturar_telas.py` | Captura a página em desktop e mobile para comparação                 |
| `scripts/recortar_telas.py` | Corta a página inteira em uma imagem por seção, pelas posições medidas no DOM |
| `scripts/recortar_header.py` | Recorta o cabeçalho e seções escolhidas                            |

Os scripts usam o Chromium headless em `~/.hermes/tools/chromium-1208/` e o Pillow, e
esperam rodar neste host. O caminho da pasta do projeto é resolvido a partir do próprio
script, então mover o repositório não quebra nada. `recortar_telas.py` usa
`http://localhost:4173/` por padrão e aceita uma URL como quinto argumento. As capturas de
`preview/` são locais e estão no `.gitignore`.

## Publicação

O domínio está ligado à Vercel: cada push na `master` dispara o build e o site sai no ar
com o hash do asset no nome do arquivo, o que resolve cache sem configuração. Não há
`vercel.json` — a configuração do projeto é o padrão do Vite.

---

**Jonas Francisco de Lima Filho** — [jonasfilho.dev.br](https://jonasfilho.dev.br) ·
[GitHub](https://github.com/JonasFilhoDev) ·
[LinkedIn](https://www.linkedin.com/in/jonasfilhodev) ·
[Instagram](https://www.instagram.com/jonasfilhodev)
