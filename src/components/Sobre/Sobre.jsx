import { Icon } from '../Icon'
import { useLang } from '../../i18n/Lang'
import styles from './Sobre.module.css'

export default function Sobre() {
  const { t } = useLang()
  const c = t.sobre

  return (
    <section className={styles.section} id="sobre">
      <div className={styles.inner}>
        <div className={styles.photoCol}>
          <div className={styles.photo}>
            <img src="/img/jonas.jpg" alt="Jonas Filho" width="1080" height="1080" />
          </div>
        </div>

        <div className={styles.text}>
          <p className={styles.kicker}>{c.kicker}</p>
          <h2 className={styles.title}>{c.title}</h2>
          <div className={styles.prose}>
            <p>{c.paragraph}</p>
          </div>

          <dl className={styles.facts}>
            {c.facts.map((f) => (
              <div key={f.k} className={styles.fact}>
                <dt>{f.k}</dt>
                <dd>
                  {f.href ? (
                    <a
                      className={styles.factLink}
                      href={f.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {f.v}
                      <Icon name="external" size={13} />
                    </a>
                  ) : (
                    f.v
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
