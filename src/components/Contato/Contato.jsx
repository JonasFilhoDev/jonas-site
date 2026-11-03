import { Icon } from '../Icon'
import { useLang } from '../../i18n/Lang'
import { waLink } from '../../data'
import styles from './Contato.module.css'

export default function Contato() {
  const { t } = useLang()
  const c = t.contato

  const canais = c.channels.map((ch) => ({
    ...ch,
    href: ch.href === 'WA' ? waLink(t.waMsg) : ch.href,
  }))

  return (
    <section className={styles.section} id="contato">
      <div className={styles.inner}>
        <p className={styles.kicker}>{c.kicker}</p>
        <h2 className={styles.title}>{c.title}</h2>
        <p className={styles.sub}>{c.sub}</p>

        <ul className={styles.channels}>
          {canais.map((ch) => (
            <li key={ch.nome}>
              <a
                href={ch.href}
                target={ch.externo ? '_blank' : undefined}
                rel="noreferrer"
                download={ch.download}
              >
                <span className={styles.chIcon}>
                  <Icon name={ch.icon} size={19} />
                </span>
                <span className={styles.chText}>
                  <strong>{ch.nome}</strong>
                  <em>{ch.valor}</em>
                </span>
                {ch.externo && <Icon name="external" size={16} />}
              </a>
              {ch.notaIdioma && <p className={styles.notaIdioma}>{ch.notaIdioma}</p>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
