export function Icon({ name, size = 20 }) {
  const p = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  }

  const paths = {
    github: (
      <>
        <path
          {...p}
          d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 0 0-6.2 0C6.5 2.3 5.4 2.6 5.4 2.6A4.2 4.2 0 0 0 5.3 5.8 4.6 4.6 0 0 0 4 9c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"
        />
      </>
    ),
    linkedin: (
      <>
        <path
          {...p}
          d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM6 9H2v12h4zM4 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
        />
      </>
    ),
    mail: (
      <>
        <rect {...p} x="2" y="4" width="20" height="16" rx="2" />
        <path {...p} d="m22 7-10 6L2 7" />
      </>
    ),
    whatsapp: (
      <>
        <path
          {...p}
          d="M21 11.5a8.5 8.5 0 0 1-12.4 7.5L3 21l2.1-5.4A8.5 8.5 0 1 1 21 11.5z"
        />
        <path {...p} d="M8.8 9.2c.2-.5.4-.5.6-.5h.5c.2 0 .4 0 .6.5l.7 1.6c.1.2 0 .4-.1.6l-.4.4c-.1.2-.3.3-.1.6a6 6 0 0 0 2.6 2.2c.3.1.5 0 .6-.1l.5-.6c.2-.2.3-.2.6-.1l1.5.7c.3.2.4.3.4.5v.6c-.1.4-.5 1-1.1 1.2-.5.2-1.2.3-3.3-.7a10 10 0 0 1-4.1-4.6c-.5-1.4-.3-2.5-.2-3z"
        />
      </>
    ),
    instagram: (
      <>
        <rect {...p} x="3" y="3" width="18" height="18" rx="5" />
        <circle {...p} cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </>
    ),
    arrow: <path {...p} d="M5 12h14m-6-6 6 6-6 6" />,
    external: (
      <>
        <path {...p} d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <path {...p} d="M15 3h6v6m0-6-9 9" />
      </>
    ),
    credly: (
      <>
        <circle {...p} cx="12" cy="9" r="6" />
        <path {...p} d="M8.2 14.3 7 22l5-3 5 3-1.2-7.7" />
      </>
    ),
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      {paths[name] ?? null}
    </svg>
  )
}