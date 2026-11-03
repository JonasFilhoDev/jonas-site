import { useLang } from '../../i18n/Lang'
import styles from './LangSwitcher.module.css'

export default function LangSwitcher({ variante = 'header' }) {
  const { lang, setLang, t, ordem, dicts } = useLang()

  return (
    <div
      className={`${styles.wrap} ${variante === 'painel' ? styles.noPainel : ''}`}
      role="group"
      aria-label={t.nav.language}
    >
      {ordem.map((codigo) => (
        <button
          key={codigo}
          type="button"
          className={styles.opcao}
          onClick={() => setLang(codigo)}
          aria-pressed={codigo === lang}
          lang={dicts[codigo].htmlLang}
          title={dicts[codigo].label}
        >
          {dicts[codigo].short}
        </button>
      ))}
    </div>
  )
}
