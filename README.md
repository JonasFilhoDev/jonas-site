# Jonas Filho Dev — Portfólio

Portfólio pessoal construído com **React + Vite**, dark mode com roxo `#8a2be2`.

## 🚀 Instalação local

```bash
# 1. Instale as dependências
npm install

# 2. Rode o servidor de desenvolvimento
npm run dev

# 3. Abra no navegador
# http://localhost:5173/Minha-Pagina/
```

## 📦 Build para produção

```bash
npm run build
```

Os arquivos de produção ficam na pasta `dist/`.

## 🌐 Deploy no GitHub Pages

### Opção 1 — Manual (mais simples)

```bash
# 1. Gere o build
npm run build

# 2. Copie o conteúdo de dist/ para a raiz do repositório
#    ou configure o GitHub Pages para servir a pasta dist/
```

### Opção 2 — Automático com gh-pages

```bash
# 1. Instale o pacote
npm install --save-dev gh-pages

# 2. Adicione no package.json, dentro de "scripts":
"deploy": "gh-pages -d dist"

# 3. Para fazer deploy:
npm run build && npm run deploy
```

Depois, no GitHub:
- Acesse **Settings > Pages**
- Em **Source**, selecione a branch `gh-pages`
- Salve — o site estará em `https://jonasfilhodev.github.io/Minha-Pagina/`

## 📁 Estrutura

```
src/
├── main.jsx          # Entry point
├── App.jsx           # Componente raiz
├── index.css         # Variáveis globais CSS
└── components/
    ├── Navbar.jsx / .module.css
    ├── Hero.jsx   / .module.css
    ├── Sobre.jsx  / .module.css
    ├── Skills.jsx / .module.css
    ├── Projetos.jsx / .module.css
    ├── Contato.jsx  / .module.css
    └── Footer.jsx   / .module.css
```

## 🎨 Cores principais

| Variável       | Cor        | Uso                        |
|----------------|------------|----------------------------|
| `--accent`     | `#8a2be2`  | Roxo principal (original)  |
| `--accent-light`| `#a855f7` | Hover do roxo              |
| `--accent2`    | `#ff6b35`  | Laranja (detalhe)          |
| `--bg`         | `#0d0d0f`  | Fundo principal            |
| `--text`       | `#e8e8f0`  | Texto principal            |
