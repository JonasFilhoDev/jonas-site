import { Icon } from '../Icon'
import card from '../Projetos/Projetos.module.css'
import styles from './Ia.module.css'

const sistemas = [
  {
    num: '01',
    nome: 'Agente de automação',
    kicker: 'agente com ferramentas · 22 rotinas no ar',
    problema:
      'Boa parte do que eu fazia à mão tinha sempre o mesmo formato: ler uma fonte, decidir com algum critério, executar e registrar o que aconteceu. Script comum não dava conta, porque a decisão muda de caso para caso e a fonte nem sempre oferece API.',
    solucao:
      'Um agente que roda em VPS própria, com ferramentas de arquivo, terminal, navegador e APIs externas, memória entre sessões e procedimentos carregados conforme a tarefa. Hoje são 22 rotinas agendadas, entre publicação em quatro horários, vigilância de fonte externa, relatório semanal e backup. Cada execução passa pelo portal interno, que já registrou 179 publicações.',
    decisoes: [
      'Procedimento em arquivo em vez de um prompt gigante: cada tarefa carrega só a instrução que importa, o que reduz erro e custo por execução',
      'Ferramenta com poder de escrita pede permissão: publicar, gastar e apagar continuam exigindo aprovação explícita',
      'Rotina agendada valida antes de publicar e confere se a versão no ar é a que está no disco',
    ],
    stack: [
      'Python',
      'Node.js',
      'APIs de LLM',
      'Chamada de ferramentas',
      'nginx',
      'systemd',
      'PostgreSQL',
      'Bash',
    ],
    links: [
      {
        label: 'Vitrine do portal',
        href: 'https://jonasfilhodev.github.io/central_operacoes_demo/',
      },
    ],
  },
  {
    num: '02',
    nome: 'Pipeline de conteúdo',
    kicker: 'imagem, voz e vídeo · custo medido',
    problema:
      'Uma peça de rede social por dia não caberia se cada etapa fosse manual: escrever, desenhar, revisar, narrar e montar o vídeo. O gargalo era o tempo de produção, não a falta de ideia.',
    solucao:
      'Pipeline que transforma um tema em peça publicada. O roteiro sai do modelo, a imagem vem de uma API de difusão, a peça passa por verificação automática, a narração é sintetizada em voz e o vídeo vertical é montado por linha de comando. Quando o texto precisa ficar em posição exata, a arte é gerada em HTML e capturada por navegador headless, porque modelo de imagem erra tipografia.',
    decisoes: [
      'Verificação antes de publicar: o script mede margem, corte e espessura por pixel, porque conferir no olho e pedir isso a um modelo de visão erram nesse tipo de checagem',
      'Custo por peça medido, não estimado: cerca de US$ 0,03 por imagem gerada, acompanhado a cada lote',
      'Cada ferramenta no que ela faz melhor: modelo para imagem, HTML e CSS para texto em posição fixa',
    ],
    stack: ['Python', 'API de imagem', 'LLM', 'TTS', 'ffmpeg', 'Chromium headless', 'cron'],
    links: [
      {
        label: 'Ver no Instagram',
        href: 'https://www.instagram.com/jonasfilhodev/',
      },
    ],
  },
]

export default function Ia() {
  return (
    <section className={`${card.section} ${styles.section}`} id="ia">
      <div className={card.inner}>
        <header className={card.head}>
          <p className={card.kicker}>IA e automação</p>
          <h2 className={card.title}>
            Onde o modelo é peça do processo, não demonstração
          </h2>
          <p className={card.sub}>
            Dois sistemas em que a IA executa trabalho de verdade: um agente que
            roda rotinas agendadas no servidor e um pipeline que gera, verifica
            e publica conteúdo. Em ambos, o número de uso está medido, não
            estimado.
          </p>
        </header>

        <div className={card.list}>
          {sistemas.map((p) => (
            <article key={p.nome} className={card.card}>
              <div className={card.side}>
                <span className={card.num}>{p.num}</span>
                <h3 className={card.name}>{p.nome}</h3>
                <p className={card.cardKicker}>{p.kicker}</p>
              </div>

              <div className={card.body}>
                <div className={card.block}>
                  <span className={card.label}>O problema</span>
                  <p>{p.problema}</p>
                </div>
                <div className={card.block}>
                  <span className={card.label}>O que foi construído</span>
                  <p>{p.solucao}</p>
                </div>
                <div className={card.block}>
                  <span className={card.label}>Decisões técnicas</span>
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
