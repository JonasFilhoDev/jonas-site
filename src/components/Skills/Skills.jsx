import styles from './Skills.module.css'

const skills = [
  { icon: '🌐', name: 'HTML5',        level: 'Sólido'     },
  { icon: '🎨', name: 'CSS3',         level: 'Sólido'     },
  { icon: '⚡', name: 'JavaScript',   level: 'Sólido'     },
  { icon: '🐙', name: 'Git/GitHub',   level: 'Sólido'     },  
  { icon: '⚛️', name: 'React',        level: 'Aprendendo' },
  { icon: '📱', name: 'React Native', level: 'Aprendendo' },
  { icon: '🔷', name: 'TypeScript',   level: 'Aprendendo' },
  { icon: '🟢', name: 'Node.js',      level: 'Aprendendo' },
  { icon: '🐍', name: 'Python',       level: 'Básico'     },
  { icon: '🐘', name: 'PostgreSQL',   level: 'Básico'     },
  { icon: '🍃', name: 'MongoDB',      level: 'Básico'     },
  { icon: '☁️', name: 'Google Cloud', level: 'Básico'     },
]

export default function Skills() {
  return (
    <section className={styles.section} id="skills">
      <div className={styles.inner}>
        <div className={styles.label}>// tecnologias</div>
        <h2 className={styles.title}>Minhas Skills</h2>
        <div className={styles.grid}>
          {skills.map((s) => (
            <div key={s.name} className={styles.card}>
              <span className={styles.icon}>{s.icon}</span>
              <span className={styles.name}>{s.name}</span>
              <span className={`${styles.level} ${styles[s.level.toLowerCase()]}`}>
                {s.level}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
