import { useLang } from '../../i18n/Lang'
import styles from './Rodape.module.css'

export default function Rodape() {
  const { t } = useLang()
  const c = t.rodape

  return (
    <footer className={styles.foot}>
      <div className={styles.inner}>
        <p className={styles.copy}>
          © {new Date().getFullYear()} {c.copy}
        </p>
        <a className={styles.top} href="#home" aria-label={c.topAria}>
          {c.top}
          <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  )
}
