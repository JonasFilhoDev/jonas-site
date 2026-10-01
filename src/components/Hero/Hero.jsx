import { Icon } from '../Icon'
import { waLink } from '../../data'
import styles from './Hero.module.css'

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
    href: waLink(
      'Olá Jonas, vi seu portfólio e gostaria de conversar sobre uma oportunidade.',
    ),
  },
]

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.inner}>
        <p className={styles.status}>
          <span className={styles.dot} aria-hidden="true" />
          disponível para oportunidades e freelas
        </p>

        <h1 className={styles.title}>
          Construo sistemas web que
          <br />
          <span className={styles.mark}>saem do seu ambiente local</span>:
          <br />
          API, interface, banco e deploy.
        </h1>

        <p className={styles.lead}>
          Sou Jonas Filho, desenvolvedor FullStack. Meu trabalho está em{' '}
          <a href="#projetos">projetos que rodam no ar</a> — com banco de dados,
          autenticação e publicação automatizada — e não em exercícios de
          curso. Escolhi Node, React e PostgreSQL porque é o que aparece quando
          a feature precisa funcionar fora do meu computador.
        </p>

        <div className={styles.actions}>
          <a href="#projetos" className={styles.primary}>
            Ver os projetos
            <Icon name="arrow" size={17} />
          </a>

          <a
            href={waLink(
              'Olá Jonas, vi seu portfólio e gostaria de conversar sobre uma oportunidade.',
            )}
            target="_blank"
            rel="noreferrer"
            className={styles.secondary}
          >
            Falar comigo
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