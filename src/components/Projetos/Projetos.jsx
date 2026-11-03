import { Icon } from '../Icon'
import { useLang } from '../../i18n/Lang'
import styles from './Projetos.module.css'

export default function Projetos() {
  const { t } = useLang()
  const c = t.projetos

  return (
    <section className={styles.section} id="projetos">
      <div className={styles.inner}>
        <header className={styles.head}>
          <p className={styles.kicker}>{c.kicker}</p>
          <h2 className={styles.title}>{c.title}</h2>
          <p className={styles.sub}>{c.sub}</p>
        </header>

        <div className={styles.list}>
          {c.items.map((p) => (
            <article
              key={p.num}
              className={`${styles.card} ${p.destaque ? styles.cardDestaque : ''}`}
            >
              <div className={styles.side}>
                <span className={styles.num}>{p.num}</span>
                <h3 className={styles.name}>{p.nome}</h3>
                <p className={styles.cardKicker}>{p.kicker}</p>
              </div>

              <div className={styles.body}>
                <div className={styles.block}>
                  <span className={styles.label}>{c.labelProblema}</span>
                  <p>{p.problema}</p>
                </div>
                <div className={styles.block}>
                  <span className={styles.label}>{c.labelSolucao}</span>
                  <p>{p.solucao}</p>
                </div>
                <div className={styles.block}>
                  <span className={styles.label}>{c.labelDecisoes}</span>
                  <ul className={styles.decisoes}>
                    {p.decisoes.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </div>

                <ul className={styles.stack}>
                  {p.stack.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>

                {p.links.length > 0 && (
                  <div className={styles.links}>
                    {p.links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {l.label}
                        <Icon name="external" size={15} />
                      </a>
                    ))}
                  </div>
                )}

                {p.nota && <p className={styles.nota}>{p.nota}</p>}
              </div>
            </article>
          ))}
        </div>

        <a
          className={styles.more}
          href="https://github.com/JonasFilhoDev"
          target="_blank"
          rel="noreferrer"
        >
          <span>
            <em>{c.moreEm}</em>
            {c.moreText}
          </span>
          <Icon name="arrow" size={18} />
        </a>
      </div>
    </section>
  )
}
