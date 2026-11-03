import { Icon } from '../Icon'
import { useLang } from '../../i18n/Lang'
import { waLink } from '../../data'
import styles from './Hero.module.css'

export default function Hero() {
  const { t } = useLang()

  const sociais = [
    { icon: 'github', label: 'GitHub', href: 'https://github.com/JonasFilhoDev' },
    {
      icon: 'linkedin',
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/jonasfilhodev/',
    },
    { icon: 'mail', label: 'Email', href: 'mailto:jonasfilho1985@gmail.com' },
    {
      icon: 'whatsapp',
      label: 'WhatsApp',
      href: waLink(t.waMsg),
    },
  ]

  return (
    <section className={styles.hero} id="home">
      <div className={styles.inner}>
        <p className={styles.status}>
          <span className={styles.dot} aria-hidden="true" />
          {t.hero.status}
        </p>

        <h1 className={styles.title}>
          {t.hero.titleLine1}
          <br />
          <span className={styles.mark}>{t.hero.titleMark}</span>:<br />
          {t.hero.titleLine3}
        </h1>

        <p className={styles.lead}>
          {t.hero.leadBefore}
          <a href="#projetos">{t.hero.leadLink}</a>
          {t.hero.leadAfter}
        </p>

        <div className={styles.actions}>
          <a href="#projetos" className={styles.primary}>
            {t.hero.ctaPrimary}
            <Icon name="arrow" size={17} />
          </a>

          <a
            href={waLink(t.waMsg)}
            target="_blank"
            rel="noreferrer"
            className={styles.secondary}
          >
            {t.hero.ctaSecondary}
          </a>
        </div>

        <ul className={styles.socials}>
          {sociais.map((s) => (
            <li key={s.label}>
              <a href={s.href} target="_blank" rel="noreferrer" title={s.label}>
                <Icon name={s.icon} size={18} />
                <span className={styles.srOnly}>{s.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
