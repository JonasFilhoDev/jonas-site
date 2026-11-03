import { useEffect, useRef, useState } from 'react'
import { Icon } from '../Icon'
import LangSwitcher from '../LangSwitcher/LangSwitcher'
import { useLang } from '../../i18n/Lang'
import { waLink } from '../../data'
import styles from './Nav.module.css'

export default function Nav() {
  const { t } = useLang()
  const [aberto, setAberto] = useState(false)
  const botao = useRef(null)

  useEffect(() => {
    if (!aberto) return

    const aoTeclar = (e) => {
      if (e.key === 'Escape') {
        setAberto(false)
        botao.current?.focus()
      }
    }
    const aoRedimensionar = () => {
      if (window.innerWidth > 860) setAberto(false)
    }

    document.addEventListener('keydown', aoTeclar)
    window.addEventListener('resize', aoRedimensionar)
    return () => {
      document.removeEventListener('keydown', aoTeclar)
      window.removeEventListener('resize', aoRedimensionar)
    }
  }, [aberto])

  return (
    <header className={styles.wrap}>
      <nav className={styles.nav}>
        <a href="#home" className={styles.brand}>
          <img
            className={styles.mark}
            src="/brand/jf-dev.png"
            alt="JF Dev"
            width="164"
            height="153"
          />
          <span className={styles.brandText}>
            {t.nav.brandName}
            <em>{t.nav.brandRole}</em>
          </span>
        </a>

        <ul className={styles.links}>
          {t.nav.links.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>

        <div className={styles.acoes}>
          <div className={styles.langDesktop}>
            <LangSwitcher />
          </div>

          <a
            className={styles.cta}
            href={waLink(t.waMsg)}
            target="_blank"
            rel="noreferrer"
          >
            {t.nav.cta}
            <Icon name="arrow" size={16} />
          </a>

          <button
            ref={botao}
            type="button"
            className={styles.burger}
            aria-expanded={aberto}
            aria-controls="menu-mobile"
            aria-label={aberto ? t.nav.menuClose : t.nav.menuOpen}
            onClick={() => setAberto((v) => !v)}
          >
            <Icon name={aberto ? 'close' : 'menu'} size={22} />
          </button>
        </div>
      </nav>

      <div id="menu-mobile" className={styles.painel} hidden={!aberto}>
        <ul className={styles.painelLinks}>
          {t.nav.links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setAberto(false)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.painelRodape}>
          <LangSwitcher variante="painel" />
          <a
            className={styles.painelCta}
            href={waLink(t.waMsg)}
            target="_blank"
            rel="noreferrer"
            onClick={() => setAberto(false)}
          >
            {t.nav.cta}
            <Icon name="arrow" size={16} />
          </a>
        </div>
      </div>
    </header>
  )
}
