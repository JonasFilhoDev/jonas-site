import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { pt } from './pt'
import { en } from './en'
import { es } from './es'

const DICTS = { pt, en, es }
const ORDEM = ['pt', 'en', 'es']
const CHAVE = 'jf-lang'

/** Idioma declarado no caminho: /en/ e /es/ têm HTML próprio, / é português. */
export function idiomaDaRota() {
  if (typeof window === 'undefined') return null
  const segmento = window.location.pathname.split('/').filter(Boolean)[0]
  return segmento === 'en' || segmento === 'es' ? segmento : null
}

/** Mesma ordem no servidor e no cliente: rota, query, preferência salva, navegador. */
export function resolverIdioma(forcado) {
  if (forcado && DICTS[forcado]) return forcado
  if (typeof window === 'undefined') return 'pt'

  const naRota = idiomaDaRota()
  if (naRota) return naRota

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

export function LangProvider({ children, initialLang }) {
  const [lang, setLang] = useState(() => resolverIdioma(initialLang))

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

  /* Trocar de idioma troca a URL, para o link ficar compartilhável e indexável. */
  const trocarIdioma = useCallback((codigo) => {
    setLang(codigo)
    if (typeof window === 'undefined' || !DICTS[codigo]) return

    const alvo = codigo === 'pt' ? '/' : `/${codigo}/`
    const params = new URLSearchParams(window.location.search)
    params.delete('lang')
    const busca = params.toString()
    const destino = alvo + (busca ? `?${busca}` : '') + window.location.hash

    if (window.location.pathname + window.location.search + window.location.hash !== destino) {
      window.history.replaceState({}, '', destino)
    }
  }, [])

  const valor = useMemo(
    () => ({ lang, setLang: trocarIdioma, t, ordem: ORDEM, dicts: DICTS }),
    [lang, trocarIdioma, t],
  )

  return <LangContext.Provider value={valor}>{children}</LangContext.Provider>
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang precisa estar dentro de LangProvider')
  return ctx
}

export { DICTS }
