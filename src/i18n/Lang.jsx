import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { pt } from './pt'
import { en } from './en'
import { es } from './es'

const DICTS = { pt, en, es }
const ORDEM = ['pt', 'en', 'es']
const CHAVE = 'jf-lang'

function idiomaInicial() {
  if (typeof window === 'undefined') return 'pt'

  const naUrl = new URLSearchParams(window.location.search).get('lang')
  if (naUrl && DICTS[naUrl]) return naUrl

  try {
    const salvo = window.localStorage.getItem(CHAVE)
    if (salvo && DICTS[salvo]) return salvo
  } catch {
    /* localStorage bloqueado: segue para o idioma do navegador */
  }

  const nav = (navigator.language || 'pt').slice(0, 2).toLowerCase()
  if (nav === 'es') return 'es'
  if (nav === 'en') return 'en'
  return 'pt'
}

const LangContext = createContext(null)

export function LangProvider({ children }) {
  const [lang, setLang] = useState(idiomaInicial)

  const t = DICTS[lang]

  useEffect(() => {
    document.documentElement.lang = t.htmlLang
    document.title = t.meta.title

    const desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute('content', t.meta.description)

    try {
      window.localStorage.setItem(CHAVE, lang)
    } catch {
      /* sem persistência: a escolha vale só nesta sessão */
    }
  }, [lang, t])

  const valor = useMemo(
    () => ({ lang, setLang, t, ordem: ORDEM, dicts: DICTS }),
    [lang, t],
  )

  return <LangContext.Provider value={valor}>{children}</LangContext.Provider>
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang precisa estar dentro de LangProvider')
  return ctx
}
