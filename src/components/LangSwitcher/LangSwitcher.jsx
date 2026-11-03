import { useEffect, useRef, useState } from 'react'
import { useLang } from '../../i18n/Lang'
import styles from './LangSwitcher.module.css'

export default function LangSwitcher() {
  const { lang, setLang, t, ordem, dicts } = useLang()
  const [aberto, setAberto] = useState(false)
  const wrap = useRef(null)
  const botao = useRef(null)

  useEffect(() => {
    if (!aberto) return

    const foraDoMenu = (e) => {
      if (wrap.current && !wrap.current.contains(e.target)) setAberto(false)
    }
    const aoTeclar = (e) => {
      if (e.key === 'Escape') {
        setAberto(false)
        botao.current?.focus()
      }
    }

    document.addEventListener('mousedown', foraDoMenu)
    document.addEventListener('touchstart', foraDoMenu)
    document.addEventListener('keydown', aoTeclar)
    return () => {
      document.removeEventListener('mousedown', foraDoMenu)
      document.removeEventListener('touchstart', foraDoMenu)
      document.removeEventListener('keydown', aoTeclar)
    }
  }, [aberto])

  function escolher(codigo) {
    setLang(codigo)
    setAberto(false)
    botao.current?.focus()
  }

  return (
    <div className={styles.wrap} ref={wrap}>
      <button
        ref={botao}
        type="button"
        className={styles.botao}
        aria-haspopup="menu"
        aria-expanded={aberto}
        aria-label={`${t.nav.language}: ${dicts[lang].label}`}
        onClick={() => setAberto((v) => !v)}
      >
        <span className={styles.codigo}>{dicts[lang].short}</span>
        <span className={styles.seta} aria-hidden="true">
          ▾
        </span>
      </button>

      <div
        className={styles.lista}
        role="menu"
        aria-label={t.nav.language}
        hidden={!aberto}
      >
        {ordem.map((codigo) => (
          <button
            key={codigo}
            type="button"
            role="menuitemradio"
            aria-checked={codigo === lang}
            lang={dicts[codigo].htmlLang}
            className={styles.opcao}
            onClick={() => escolher(codigo)}
          >
            <span className={styles.marca} aria-hidden="true">
              {codigo === lang ? '✓' : ''}
            </span>
            {dicts[codigo].label}
          </button>
        ))}
      </div>
    </div>
  )
}
