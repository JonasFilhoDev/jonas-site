import { Icon } from '../Icon'
import styles from './Projetos.module.css'

const projetos = [
  {
    num: '01',
    nome: 'Central de Operações',
    kicker: 'sistema interno · no ar',
    problema:
      'Eu precisava de um lugar único onde ver o que estava acontecendo nos meus projetos e no meu servidor: o que foi publicado, o que falhou, o que estava em andamento. Tudo espalhado em terminal, log e memória de agente.',
    solucao:
      'Um portal com nginx e TLS que recebe publicações automatizadas, indexa cada atividade, mantém histórico do que foi feito e registra relatórios. Publicar virou um comando com validação, commit e verificação de que a versão que subiu é a que está no disco.',
    decisoes: [
      'Autenticação em toda a área pública, com verificação no servidor',
      'Publicação em worktree: a edição já está no ar quando o deploy termina',
      'Vitrine pública separada da instância real, gerada por script num sentido só',
    ],
    stack: ['nginx', 'TLS', 'Bash', 'Git', 'Agente de IA'],
    links: [
      {
        label: 'Vitrine pública',
        href: 'https://jonasfilhodev.github.io/central_operacoes_demo/',
      },
    ],
    destaque: true,
  },
  {
    num: '02',
    nome: 'DevBurguer',
    kicker: 'e-commerce fullstack · no ar',
    problema:
      'Um projeto de curso que eu levei além do enunciado: uma loja completa, com cadastro de usuário, catálogo, carrinho e pagamento — não só a parte visual que o exercício pede.',
    solucao:
      'Duas bases separadas. A interface em React com Material UI, validação de formulário, carrousel de categorias e checkout com Stripe. A API em Node e Express, com duas camadas de banco (MongoDB por Mongoose e Postgres por Sequelize), autenticação JWT, upload de imagem em Cloudinary e tratamento de erro.',
    decisoes: [
      'API separada da interface, com contrato definido entre as duas',
      'Token JWT com middlewares de autenticação e de perfil de administrador',
      'Upload de imagem resolvido depois de três tentativas — o registro do que deu errado está no histórico de commits',
    ],
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'JWT', 'Stripe'],
    links: [
      {
        label: 'Rodando',
        href: 'https://projeto-dev-burguer-interface.vercel.app',
      },
      {
        label: 'API',
        href: 'https://github.com/JonasFilhoDev/Projeto---DevBurguer-api',
      },
      {
        label: 'Interface',
        href: 'https://github.com/JonasFilhoDev/Projeto---DevBurguer-interface',
      },
    ],
  },
  {
    num: '03',
    nome: 'Inventory Genius',
    kicker: 'controle de estoque · typescript',
    problema:
      'Controle de material em um negócio pequeno costuma ser uma planilha: nenhuma rastreabilidade de entrada e saída, nenhum histórico de alteração e nenhum aviso quando o estoque sai do lugar.',
    solucao:
      'Sistema em TypeScript com PostgreSQL para registrar produtos, seus materiais e a relação entre os dois. A interface usa shadcn/ui sobre React, com formulários de produto e de material e o controle de quanto de cada material está vinculado a cada produto.',
    decisoes: [
      'Modelagem relacional de produto, material e o vínculo entre os dois',
      'TypeScript no lugar de JavaScript justamente porque o domínio tem muitos campos',
      'Componentes de formulário separados da regra de negócio',
    ],
    stack: ['TypeScript', 'PostgreSQL', 'React', 'shadcn/ui'],
    links: [],
  },
]

export default function Projetos() {
  return (
    <section className={styles.section} id="projetos">
      <div className={styles.inner}>
        <header className={styles.head}>
          <p className={styles.kicker}>Projetos</p>
          <h2 className={styles.title}>
            Três sistemas que resolveram um problema real
          </h2>
          <p className={styles.sub}>
            Descrevo cada um pelo problema que ele resolve e pela decisão que
            precisei tomar. A lista de tecnologias fica no fim do card porque é
            consequência, não argumento.
          </p>
        </header>

        <div className={styles.list}>
          {projetos.map((p) => (
            <article
              key={p.nome}
              className={`${styles.card} ${p.destaque ? styles.cardDestaque : ''}`}
            >
              <div className={styles.side}>
                <span className={styles.num}>{p.num}</span>
                <h3 className={styles.name}>{p.nome}</h3>
                <p className={styles.cardKicker}>{p.kicker}</p>
              </div>

              <div className={styles.body}>
                <div className={styles.block}>
                  <span className={styles.label}>O problema</span>
                  <p>{p.problema}</p>
                </div>
                <div className={styles.block}>
                  <span className={styles.label}>O que foi construído</span>
                  <p>{p.solucao}</p>
                </div>
                <div className={styles.block}>
                  <span className={styles.label}>Decisões técnicas</span>
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
            <em>Tem mais código no meu GitHub</em>
            Os exercícios de curso que comecei, e o que estou construindo agora.
          </span>
          <Icon name="arrow" size={18} />
        </a>
      </div>
    </section>
  )
}