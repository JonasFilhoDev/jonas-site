import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { LangProvider, resolverIdioma } from './i18n/Lang.jsx'
import './index.css'

const raiz = document.getElementById('root')
const arvore = (lang) => (
  <React.StrictMode>
    <LangProvider initialLang={lang}>
      <App />
    </LangProvider>
  </React.StrictMode>
)

/* O HTML vem pré-renderizado no idioma da rota. Quando o idioma resolvido no
   cliente é o mesmo, hidrata; quando é outro (preferência salva ou navegador),
   limpa e renderiza, para não sobrar conteúdo duplicado. */
const idiomaDoHtml = raiz.dataset.lang
const idioma = resolverIdioma()

if (raiz.hasChildNodes() && idiomaDoHtml === idioma) {
  ReactDOM.hydrateRoot(raiz, arvore(idioma))
} else {
  raiz.replaceChildren()
  ReactDOM.createRoot(raiz).render(arvore(idioma))
}
