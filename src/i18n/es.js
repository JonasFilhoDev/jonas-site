export const es = {
  code: 'es',
  htmlLang: 'es',
  label: 'Español',
  short: 'ES',
  meta: {
    title: '🐴 Jonas Filho | Desarrollador FullStack, React, Node y PostgreSQL',
    description:
      'Desarrollador FullStack construyendo sistemas que funcionan de verdad: API, interfaz, base de datos y deploy.',
  },
  waMsg:
    'Hola Jonas, vi tu portafolio y me gustaría conversar sobre una oportunidad.',
  nav: {
    brandName: 'Jonas Filho',
    brandRole: 'Desarrollador FullStack',
    menuOpen: 'Abrir menú',
    menuClose: 'Cerrar menú',
    language: 'Idioma',
    cta: 'Hablemos',
    links: [
      { label: 'Proyectos', href: '#projetos' },
      { label: 'IA', href: '#ia' },
      { label: 'Artículos', href: '#escritos' },
      { label: 'Cómo trabajo', href: '#processo' },
      { label: 'Sobre mí', href: '#sobre' },
      { label: 'Contacto', href: '#contato' },
    ],
  },
  hero: {
    status: 'disponible para puestos y proyectos freelance',
    titleLine1: 'Construyo sistemas web que',
    titleMark: 'salen de tu entorno local',
    titleLine3: 'API, interfaz, base de datos y deploy.',
    leadBefore:
      'Soy Jonas Filho, desarrollador FullStack. Mi trabajo está en ',
    leadLink: 'proyectos que funcionan en producción',
    leadAfter:
      ', con base de datos, autenticación y publicación automatizada, en lugar de ejercicios de curso. Elegí Node, React y PostgreSQL porque es lo que aparece cuando la funcionalidad tiene que funcionar fuera de mi computadora.',
    ctaPrimary: 'Ver los proyectos',
    ctaSecondary: 'Hablemos',
  },
  projetos: {
    kicker: 'Proyectos',
    title: 'Tres sistemas que resolvieron un problema real',
    sub: 'Describo cada uno por el problema que resuelve y por la decisión que tuve que tomar. La lista de tecnologías va al final de la tarjeta porque es consecuencia, no argumento.',
    labelProblema: 'El problema',
    labelSolucao: 'Lo que se construyó',
    labelDecisoes: 'Decisiones técnicas',
    moreEm: 'Hay más código en mi GitHub',
    moreText: 'Los ejercicios de curso con los que empecé, y lo que estoy construyendo ahora.',
    items: [
      {
        num: '01',
        nome: 'Central de Operações',
        kicker: 'sistema interno · en el aire',
        problema:
          'Necesitaba un lugar único donde ver qué pasaba en mis proyectos y en mi servidor: lo que se publicó, lo que falló, lo que estaba en curso. Todo repartido entre terminal, logs y memoria del agente.',
        solucao:
          'Un portal con nginx y TLS que recibe publicaciones automatizadas, indexa cada actividad, mantiene el historial de lo hecho y registra informes. Publicar se volvió un comando con validación, commit y verificación de que la versión que subió es la que está en el disco.',
        decisoes: [
          'Autenticación en toda el área pública, con verificación en el servidor',
          'Publicación en worktree: la edición ya está en línea cuando termina el deploy',
          'Vitrina pública separada de la instancia real, generada por script en un solo sentido',
        ],
        stack: ['nginx', 'TLS', 'Bash', 'Git', 'Agente de IA'],
        links: [
          {
            label: 'Vitrina pública',
            href: 'https://jonasfilhodev.github.io/central_operacoes_demo/',
          },
        ],
        destaque: true,
      },
      {
        num: '02',
        nome: 'DevBurguer',
        kicker: 'e-commerce fullstack · en el aire',
        problema:
          'Un proyecto de curso que llevé más allá del enunciado: una tienda completa, con registro de usuario, catálogo, carrito y pago, y no solo la parte visual que pide el ejercicio.',
        solucao:
          'Dos bases separadas. La interfaz en React con Material UI, validación de formulario, carrusel de categorías y checkout con Stripe. La API en Node y Express, con dos capas de base de datos (MongoDB por Mongoose y Postgres por Sequelize), autenticación JWT, subida de imagen a Cloudinary y manejo de errores.',
        decisoes: [
          'API separada de la interfaz, con contrato definido entre las dos',
          'Token JWT con middlewares de autenticación y de perfil de administrador',
          'Subida de imagen resuelta después de tres intentos. El registro de lo que falló está en el historial de commits',
        ],
        stack: ['React', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'JWT', 'Stripe'],
        links: [
          {
            label: 'Funcionando',
            href: 'https://projeto-dev-burguer-interface.vercel.app',
          },
          {
            label: 'API',
            href: 'https://github.com/JonasFilhoDev/Projeto---DevBurguer-api',
          },
          {
            label: 'Interfaz',
            href: 'https://github.com/JonasFilhoDev/Projeto---DevBurguer-interface',
          },
        ],
      },
      {
        num: '03',
        nome: 'Inventory Genius',
        kicker: 'control de stock · typescript',
        problema:
          'El control de material en un negocio pequeño suele ser una planilla: sin trazabilidad de lo que entra y sale, sin historial de cambios y sin aviso cuando el stock se desvía.',
        solucao:
          'Sistema en TypeScript con PostgreSQL para registrar productos, sus materiales y la relación entre los dos. La interfaz usa shadcn/ui sobre React, con formularios de producto y de material y el control de cuánto de cada material está vinculado a cada producto.',
        decisoes: [
          'Modelado relacional de producto, material y el vínculo entre los dos',
          'TypeScript en lugar de JavaScript justamente porque el dominio tiene muchos campos',
          'Componentes de formulario separados de la regla de negocio',
        ],
        stack: ['TypeScript', 'PostgreSQL', 'React', 'shadcn/ui'],
        links: [
          {
            label: 'Ver el código',
            href: 'https://github.com/JonasFilhoDev/inventory-genius-32',
          },
        ],
        nota: 'Empezó como un proyecto generado con Lovable y rehice la parte de datos. Es donde más he usado TypeScript hasta ahora.',
      },
    ],
  },
  ia: {
    kicker: 'IA y automatización',
    title: 'Donde el modelo es parte del proceso, no una demostración',
    sub: 'Dos sistemas donde la IA hace trabajo real: un agente que ejecuta rutinas agendadas en el servidor y un pipeline que genera, verifica y publica contenido. En ambos, el número de uso está medido, no estimado.',
    items: [
      {
        num: '01',
        nome: 'Agente de automatización',
        kicker: 'agente con herramientas · 22 rutinas en línea',
        problema:
          'Buena parte de lo que hacía a mano tenía siempre la misma forma: leer una fuente, decidir con algún criterio, ejecutar y registrar lo que pasó. Un script común no alcanzaba, porque la decisión cambia de caso a caso y la fuente no siempre ofrece API.',
        solucao:
          'Un agente que corre en su propia VPS, con herramientas de archivo, terminal, navegador y APIs externas, memoria entre sesiones y procedimientos cargados según la tarea. Hoy son 22 rutinas agendadas, entre publicación en cuatro horarios, vigilancia de fuente externa, informe semanal y backup. Cada ejecución pasa por el portal interno, que ya registró 179 publicaciones.',
        decisoes: [
          'Procedimiento en archivo en lugar de un prompt gigante: cada tarea carga solo la instrucción que importa, lo que reduce error y costo por ejecución',
          'Una herramienta con poder de escritura pide permiso: publicar, gastar y borrar siguen exigiendo aprobación explícita',
          'La rutina agendada valida antes de publicar y comprueba si la versión en línea es la que está en el disco',
        ],
        stack: [
          'Python',
          'Node.js',
          'APIs de LLM',
          'Llamada de herramientas',
          'nginx',
          'systemd',
          'PostgreSQL',
          'Bash',
        ],
        links: [
          {
            label: 'Vitrina del portal',
            href: 'https://jonasfilhodev.github.io/central_operacoes_demo/',
          },
        ],
      },
      {
        num: '02',
        nome: 'Pipeline de contenido',
        kicker: 'imagen, voz y video · costo medido',
        problema:
          'Una pieza de red social por día no cabría si cada etapa fuera manual: escribir, diseñar, revisar, narrar y montar el video. El cuello de botella era el tiempo de producción, no la falta de idea.',
        solucao:
          'Pipeline que convierte un tema en pieza publicada. El guion sale del modelo, la imagen viene de una API de difusión, la pieza pasa por verificación automática, la narración se sintetiza en voz y el video vertical se monta por línea de comandos. Cuando el texto necesita quedar en una posición exacta, el arte se genera en HTML y se captura con navegador headless, porque el modelo de imagen se equivoca en tipografía.',
        decisoes: [
          'Verificación antes de publicar: el script mide margen, corte y grosor por píxel, porque revisar a ojo y pedir eso a un modelo de visión fallan en este tipo de control',
          'Costo por pieza medido, no estimado: cerca de US$ 0,03 por imagen generada, seguido en cada lote',
          'Cada herramienta en lo que hace mejor: modelo para imagen, HTML y CSS para texto en posición fija',
        ],
        stack: ['Python', 'API de imagen', 'LLM', 'TTS', 'ffmpeg', 'Chromium headless', 'cron'],
        links: [
          {
            label: 'Ver en Instagram',
            href: 'https://www.instagram.com/jonasfilhodev/',
          },
        ],
      },
    ],
  },
  escritos: {
    kicker: 'Artículos técnicos',
    title: 'Lo que se rompió mientras construía, escrito en detalle',
    sub: 'Publico en dev.to, en inglés, el problema que apareció y cómo descubrí la causa. Es el mismo tipo de control que hago antes de publicar cualquier cosa: medir, no suponer.',
    moreEm: 'Todos los artículos en dev.to',
    moreText: 'Escribo sobre lo que estoy construyendo y sobre lo que se rompe en el camino.',
    months: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
  },
  processo: {
    kicker: 'Cómo trabajo',
    title: 'Tres decisiones que se repiten en cada proyecto',
    steps: [
      {
        n: '01',
        t: 'Entiendo el problema antes de elegir la herramienta',
        d: 'Todo proyecto empieza por saber qué tiene que pasar, no por decidir si uso React o CSS. La elección del stack es consecuencia de la restricción: volumen de datos, quién lo va a mantener, qué ya está funcionando.',
      },
      {
        n: '02',
        t: 'Construyo primero la parte que da problemas',
        d: 'Autenticación, base de datos, subida de archivos y deploy son donde el software se rompe. Hago esos dos días de trabajo antes de pulir pantalla, porque descubrir un problema de permisos con la interfaz terminada cuesta diez veces más.',
      },
      {
        n: '03',
        t: 'El deploy es parte del trabajo, no el final',
        d: 'Si no está en línea, no está listo. Versiono, publico y verifico que la versión del servidor sea la que está en mi disco. Así fue como Central de Operações dejó de ser un proyecto local.',
      },
    ],
  },
  sobre: {
    kicker: 'Sobre mí',
    title: 'Aprendizaje en público, de la forma que se puede sostener',
    paragraph:
      'Empecé con los ejercicios del curso y siguen en GitHub: el historial de cómo evoluciona alguien dice más que una lista de front-end. Lo que me llevó adelante fue querer ver las cosas funcionando fuera de mi notebook, y por eso existe Central de Operações.',
    facts: [
      { k: 'Dónde', v: 'Minas Gerais, Brasil' },
      { k: 'Formación', v: 'Faculdade Pitágoras Anhanguera Unopar' },
      { k: 'Carrera', v: 'Ciencias de la Computación' },
      { k: 'Estudio', v: 'DevClub' },
      {
        k: 'Certificaciones',
        v: 'Credly',
        href: 'https://www.credly.com/users/jonas-filho.02d00765',
      },
      { k: 'Stack', v: 'Node · React · TypeScript' },
    ],
  },
  contato: {
    kicker: 'Contacto',
    title:
      'Si tu puesto o proyecto necesita a alguien que entrega lo que está en línea, hablemos.',
    sub: 'Prefiero WhatsApp, pero cualquier canal funciona. Si tienes un problema técnico en mente, escribe qué es en una frase. Para mí vale más que un currículum.',
    channels: [
      {
        icon: 'whatsapp',
        nome: 'WhatsApp',
        valor: 'Respondo el mismo día',
        href: 'WA',
        externo: true,
      },
      {
        icon: 'mail',
        nome: 'Correo',
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
        nome: 'Currículum',
        valor: 'PDF, 2 páginas',
        href: '/cv-jonas-filho.pdf',
        externo: false,
        download: 'cv-jonas-filho.pdf',
        notaIdioma:
          'El PDF está en portugués. Para la versión en español, pídela por WhatsApp o correo.',
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
    copy: 'Jonas Filho Dev. Hecho con React y deploy en línea.',
    top: 'arriba',
    topAria: 'Volver arriba',
  },
}
