export const pt = {
  code: 'pt',
  htmlLang: 'pt-BR',
  label: 'Português',
  short: 'PT',
  meta: {
    title: '🐴 Jonas Filho | Desenvolvedor FullStack, React, Node e PostgreSQL',
    description:
      'Desenvolvedor FullStack construindo sistemas que rodam de verdade: API, interface, banco e deploy.',
  },
  waMsg:
    'Olá Jonas, vi seu portfólio e gostaria de conversar sobre uma oportunidade.',
  nav: {
    brandName: 'Jonas Filho',
    brandRole: 'Desenvolvedor FullStack',
    menuOpen: 'Abrir menu',
    menuClose: 'Fechar menu',
    language: 'Idioma',
    cta: 'Falar comigo',
    links: [
      { label: 'Projetos', href: '#projetos' },
      { label: 'IA', href: '#ia' },
      { label: 'Escritos', href: '#escritos' },
      { label: 'Como trabalho', href: '#processo' },
      { label: 'Sobre', href: '#sobre' },
      { label: 'Contato', href: '#contato' },
    ],
  },
  hero: {
    status: 'disponível para oportunidades e freelas',
    titleLine1: 'Construo sistemas web que',
    titleMark: 'saem do seu ambiente local',
    titleLine3: 'API, interface, banco e deploy.',
    leadBefore: 'Sou Jonas Filho, desenvolvedor FullStack. Meu trabalho está em ',
    leadLink: 'projetos que rodam no ar',
    leadAfter:
      ', com banco de dados, autenticação e publicação automatizada, em vez de exercícios de curso. Escolhi Node, React e PostgreSQL porque é o que aparece quando a feature precisa funcionar fora do meu computador.',
    ctaPrimary: 'Ver os projetos',
    ctaSecondary: 'Falar comigo',
  },
  projetos: {
    kicker: 'Projetos',
    title: 'Três sistemas que resolveram um problema real',
    sub: 'Descrevo cada um pelo problema que ele resolve e pela decisão que precisei tomar. A lista de tecnologias fica no fim do card porque é consequência, não argumento.',
    labelProblema: 'O problema',
    labelSolucao: 'O que foi construído',
    labelDecisoes: 'Decisões técnicas',
    moreEm: 'Tem mais código no meu GitHub',
    moreText:
      'Os exercícios de curso que comecei, e o que estou construindo agora.',
    items: [
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
          'Um projeto de curso que eu levei além do enunciado: uma loja completa, com cadastro de usuário, catálogo, carrinho e pagamento, e não só a parte visual que o exercício pede.',
        solucao:
          'Duas bases separadas. A interface em React com Material UI, validação de formulário, carrousel de categorias e checkout com Stripe. A API em Node e Express, com duas camadas de banco (MongoDB por Mongoose e Postgres por Sequelize), autenticação JWT, upload de imagem em Cloudinary e tratamento de erro.',
        decisoes: [
          'API separada da interface, com contrato definido entre as duas',
          'Token JWT com middlewares de autenticação e de perfil de administrador',
          'Upload de imagem resolvido depois de três tentativas. O registro do que deu errado está no histórico de commits',
        ],
        stack: ['React', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'JWT', 'Stripe'],
        links: [
          { label: 'Rodando', href: 'https://projeto-dev-burguer-interface.vercel.app' },
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
        links: [
          { label: 'Ver o código', href: 'https://github.com/JonasFilhoDev/inventory-genius-32' },
        ],
        nota: 'Começou como um projeto gerado com Lovable e refiz a parte de dados. É o que mais usei TypeScript até agora.',
      },
    ],
  },
  ia: {
    kicker: 'IA e automação',
    title: 'Onde o modelo é peça do processo, não demonstração',
    sub: 'Dois sistemas em que a IA executa trabalho de verdade: um agente que roda rotinas agendadas no servidor e um pipeline que gera, verifica e publica conteúdo. Em ambos, o número de uso está medido, não estimado.',
    items: [
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
          { label: 'Ver no Instagram', href: 'https://www.instagram.com/jonasfilhodev/' },
        ],
      },
    ],
  },
  escritos: {
    kicker: 'Escritos técnicos',
    title: 'O que quebrou enquanto eu construía, escrito no detalhe',
    sub: 'Publico no dev.to, em inglês, o problema que apareceu e como descobri a causa. É o mesmo tipo de conferência que faço antes de publicar qualquer coisa: medir, não supor.',
    moreEm: 'Todos os artigos no dev.to',
    moreText:
      'Escrevo sobre o que estou construindo e sobre o que quebra no caminho.',
    months: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'],
  },
  processo: {
    kicker: 'Como eu trabalho',
    title: 'Três decisões que se repetem em cada projeto',
    steps: [
      {
        n: '01',
        t: 'Entendo o problema antes de escolher a ferramenta',
        d: 'Qualquer projeto começa por saber o que precisa acontecer, não por decidir se uso React ou CSS. A escolha da stack é consequência da restrição: volume de dados, quem vai manter, o que já existe rodando.',
      },
      {
        n: '02',
        t: 'Construo a parte que dá problema primeiro',
        d: 'Autenticação, banco, upload e deploy são onde o software quebra. Faço esses dois dias de trabalho antes de polir tela, porque descobrir um problema de permissão depois da interface pronta custa dez vezes mais.',
      },
      {
        n: '03',
        t: 'Deploy é parte do trabalho, não o final',
        d: 'Se não está no ar, não está pronto. Versiono, publico, verifico que a versão no servidor é a que está no meu disco. Foi assim que a Central de Operações deixou de ser um projeto local.',
      },
    ],
  },
  sobre: {
    kicker: 'Sobre',
    title: 'Aprendizado em público, do jeito que dá para manter',
    paragraph:
      'Comecei nos exercícios do curso e eles continuam no GitHub: o histórico de como alguém evolui diz mais do que uma lista de front-end. O que me levou adiante foi querer ver as coisas funcionando fora do meu notebook, e é por isso que a Central de Operações existe.',
    facts: [
      { k: 'Onde', v: 'Minas Gerais' },
      { k: 'Formação', v: 'Faculdade Pitágoras Anhanguera Unopar' },
      { k: 'Curso', v: 'Ciências da Computação' },
      { k: 'Estudo', v: 'DevClub' },
      {
        k: 'Certificações',
        v: 'Credly',
        href: 'https://www.credly.com/users/jonas-filho.02d00765',
      },
      { k: 'Stack', v: 'Node · React · TypeScript' },
    ],
  },
  contato: {
    kicker: 'Contato',
    title:
      'Se a sua vaga ou projeto precisa de alguém que entrega o que está no ar, vamos conversar.',
    sub: 'Prefiro WhatsApp, mas qualquer canal funciona. Se você tem um problema técnico em mente, escreva o que ele é em uma frase. Para mim vale mais do que um currículo.',
    channels: [
      {
        icon: 'whatsapp',
        nome: 'WhatsApp',
        valor: 'Responder no mesmo dia',
        href: 'WA',
        externo: true,
      },
      {
        icon: 'mail',
        nome: 'E-mail',
        valor: 'jonasfilho1985@gmail.com',
        href: 'mailto:jonasfilho1985@gmail.com',
        externo: false,
      },
      {
        icon: 'linkedin',
        nome: 'LinkedIn',
        valor: 'jonasfilhodev',
        href: 'https://www.linkedin.com/in/jonasfilhodev/',
        externo: true,
      },
      {
        icon: 'download',
        nome: 'Currículo',
        valor: 'PDF, 2 páginas',
        href: '/cv-jonas-filho.pdf',
        externo: false,
        download: 'cv-jonas-filho.pdf',
        notaIdioma:
          'O PDF está em português. Para a versão em inglês, peça pelo WhatsApp ou e-mail.',
      },
      {
        icon: 'github',
        nome: 'GitHub',
        valor: 'JonasFilhoDev',
        href: 'https://github.com/JonasFilhoDev',
        externo: true,
      },
    ],
  },
  rodape: {
    copy: 'Jonas Filho Dev. Feito com React e deploy no ar.',
    top: 'topo',
    topAria: 'Voltar ao topo',
  },
}
