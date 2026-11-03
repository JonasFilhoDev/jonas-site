import { useLang } from '../../i18n/Lang'
import styles from './Processo.module.css'

export default function Processo() {
  const { t } = useLang()
  const c = t.processo

  return (
    <section className={styles.section} id="processo">
      <div className={styles.inner}>
        <div className={styles.head}>
          <p className={styles.kicker}>{c.kicker}</p>
          <h2 className={styles.title}>{c.title}</h2>
        </div>

        <ol className={styles.steps}>
          {c.steps.map((e) => (
            <li key={e.n} className={styles.step}>
              <span className={styles.n}>{e.n}</span>
              <h3 className={styles.stepTitle}>{e.t}</h3>
              <p className={styles.stepText}>{e.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
