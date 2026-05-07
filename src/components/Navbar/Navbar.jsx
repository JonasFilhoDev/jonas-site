import styles from './Navbar.module.css'

const links = [
  { label: 'Home', id: 'home' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projetos', id: 'projetos' },
  { label: 'Contato', id: 'contato' },
]

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <img src="./assets/logo.png" alt="Logo" className={styles.imgLogo} />
      <div className={styles.logo}>Jonas Filho DEVelopment</div>
      <div className={styles.links}>
        {links.map((l) => (
          <button key={l.id} className={styles.link} onClick={() => scrollTo(l.id)}>
            {l.label}
          </button>
        ))}
      </div>
    </nav>
  )
}
