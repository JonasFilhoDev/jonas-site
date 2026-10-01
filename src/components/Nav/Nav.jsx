import { links } from '../../data'
import { Icon } from '../Icon'
import styles from './Nav.module.css'

export default function Nav() {
  return (
    <header className={styles.wrap}>
      <nav className={styles.nav}>
        <a href="#home" className={styles.brand}>
          <span className={styles.mark}>JF</span>
          <span className={styles.brandText}>
            Jonas Filho
            <em>Desenvolvedor FullStack</em>
          </span>
        </a>

        <ul className={styles.links}>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>

        <a
          className={styles.cta}
          href="https://wa.me/5533999367207?text=Ol%C3%A1%20Jonas%2C%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20uma%20oportunidade."
          target="_blank"
          rel="noreferrer"
        >
          Falar comigo
          <Icon name="arrow" size={16} />
        </a>
      </nav>
    </header>
  )
}