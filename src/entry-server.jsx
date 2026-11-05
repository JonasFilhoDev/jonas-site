import React from 'react'
import { renderToString } from 'react-dom/server'
import App from './App.jsx'
import { LangProvider } from './i18n/Lang.jsx'
import { pt } from './i18n/pt'
import { en } from './i18n/en'
import { es } from './i18n/es'

const DICTS = { pt, en, es }

/** Markup completo de uma língua, sem JavaScript: é o que o robô lê. */
export function render(lang) {
  const codigo = DICTS[lang] ? lang : 'pt'
  return renderToString(
    <LangProvider initialLang={codigo}>
      <App />
    </LangProvider>,
  )
}

export function meta(lang) {
  const codigo = DICTS[lang] ? lang : 'pt'
  const d = DICTS[codigo].meta
  return { lang: codigo, htmlLang: DICTS[codigo].htmlLang, title: d.title, description: d.description }
}
