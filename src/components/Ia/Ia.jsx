import { Icon } from '../Icon'
import { useLang } from '../../i18n/Lang'
import card from '../Projetos/Projetos.module.css'
import styles from './Ia.module.css'

export default function Ia() {
  const { t } = useLang()
  const c = t.ia

  return (
    <section className={`${card.section} ${styles.section}`} id="ia">
      <div className={card.inner}>
        <header className={card.head}>
          <p className={card.kicker}>{c.kicker}</p>
          <h2 className={card.title}>{c.title}</h2>
          <p className={card.sub}>{c.sub}</p>
        </header>

        <div className={card.list}>
          {c.items.map((p) => (
            <article key={p.num} className={card.card}>
              <div className={card.side}>
                <span className={card.num}>{p.num}</span>
                <h3 className={card.name}>{p.nome}</h3>
                <p className={card.cardKicker}>{p.kicker}</p>
              </div>

              <div className={card.body}>
                <div className={card.block}>
                  <span className={card.label}>{c.labelProblema}</span>
                  <p>{p.problema}</p>
                </div>
                <div className={card.block}>
                  <span className={card.label}>{c.labelSolucao}</span>
                  <p>{p.solucao}</p>
                </div>
                <div className={card.block}>
                  <span className={card.label}>{c.labelDecisoes}</span>
                  <ul className={card.decisoes}>
                    {p.decisoes.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </div>

                <ul className={card.stack}>
                  {p.stack.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>

                {p.links.length > 0 && (
                  <div className={card.links}>
                    {p.links.map((l) => (
                      <a key={l.href} href={l.href} target="_blank" rel="noreferrer">
                        {l.label}
                        <Icon name="external" size={15} />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
