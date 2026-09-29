/* 统一的内联图标：线性、1.5px、不依赖图标库 */

const base = {
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

export function ArrowUpRight({ size = 16 }) {
  return (
    <svg {...base} width={size} height={size}>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  )
}

export function ArrowDown({ size = 16 }) {
  return (
    <svg {...base} width={size} height={size}>
      <path d="M12 5v14" />
      <path d="m6 13 6 6 6-6" />
    </svg>
  )
}

export function Menu({ size = 18 }) {
  return (
    <svg {...base} width={size} height={size}>
      <path d="M4 8h16" />
      <path d="M4 16h16" />
    </svg>
  )
}

export function Close({ size = 18 }) {
  return (
    <svg {...base} width={size} height={size}>
      <path d="M6 6l12 12" />
      <path d="M18 6 6 18" />
    </svg>
  )
}

/** 个人优势卡片图标 */
export function CapabilityIcon({ name, size = 22 }) {
  const paths = {
    compass: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m15.5 8.5-2 5-5 2 2-5z" />
      </>
    ),
    layers: (
      <>
        <path d="m12 3 8 4.5-8 4.5-8-4.5z" />
        <path d="m4 12.5 8 4.5 8-4.5" />
        <path d="m4 16.5 8 4.5 8-4.5" />
      </>
    ),
    spark: (
      <>
        <path d="M12 3.5 13.8 9l5.7 1.8-5.7 1.8L12 18.3l-1.8-5.7L4.5 10.8 10.2 9z" />
        <path d="M18.5 16.5l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z" />
      </>
    ),
    motion: (
      <>
        <path d="M4 12a8 8 0 0 1 8-8" />
        <path d="M20 12a8 8 0 0 1-8 8" />
        <path d="M12 4v0" />
        <path d="m13.5 9 6.5 3-6.5 3z" />
      </>
    ),
    cube: (
      <>
        <path d="M12 3 20 7.5v9L12 21l-8-4.5v-9z" />
        <path d="M12 12 20 7.5" />
        <path d="M12 12v9" />
        <path d="M12 12 4 7.5" />
      </>
    ),
    users: (
      <>
        <circle cx="9" cy="9" r="3" />
        <path d="M3.5 19.5c0-3 2.5-5 5.5-5s5.5 2 5.5 5" />
        <path d="M16 6.2a3 3 0 0 1 0 5.6" />
        <path d="M17.5 14.8c2 .6 3.5 2.3 3.5 4.7" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5.5" width="18" height="13" rx="2.5" />
        <path d="m4 8 8 5.5L20 8" />
      </>
    ),
    wechat: (
      <>
        <path d="M9.5 4.5c-3.6 0-6.5 2.3-6.5 5.2 0 1.7 1 3.2 2.5 4.2l-.7 2.3 2.6-1.3c.7.2 1.4.3 2.1.3" />
        <path d="M21 15.2c0-2.4-2.3-4.4-5.2-4.4s-5.3 2-5.3 4.4 2.4 4.4 5.3 4.4c.6 0 1.2-.1 1.7-.2l2.2 1.1-.6-1.9c1.2-.8 1.9-2 1.9-3.4z" />
      </>
    ),
  }

  return (
    <svg {...base} width={size} height={size}>
      {paths[name] ?? paths.spark}
    </svg>
  )
}
