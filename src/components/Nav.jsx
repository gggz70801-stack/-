import { useEffect, useState } from 'react'
import { nav, profile } from '../data/resume'
import { onScroll } from '../hooks/useReveal'
import { ArrowUpRight, Close, Menu } from './Icons'
import './Nav.css'

function Monogram() {
  return (
    <span className="nav__mark" aria-hidden="true">
      <svg viewBox="0 0 34 34" fill="none">
        <rect x="0.75" y="0.75" width="32.5" height="32.5" rx="10" stroke="currentColor" strokeWidth="1.5" />
        <path d="M11 22.5 23 11.5" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="11.5" cy="11.5" r="1.9" fill="currentColor" />
      </svg>
    </span>
  )
}

export default function Nav() {
  const [solid, setSolid] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    let last = window.scrollY
    return onScroll((y) => {
      setSolid(y > 40)
      const goingDown = y > last
      setHidden(goingDown && y > 420)
      last = y
    })
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const className = ['nav', solid && 'nav--solid', hidden && !open && 'nav--hidden'].filter(Boolean).join(' ')

  return (
    <>
      <header className={className}>
        <div className="shell nav__inner">
          <a className="nav__brand" href="#top" aria-label={`${profile.name} 首页`}>
            <Monogram />
            <span className="nav__brand-text">
              <strong>{profile.name}</strong>
              <em>{profile.roleLine}</em>
            </span>
          </a>

          <nav className="nav__links" aria-label="主导航">
            {nav.map((item, i) => (
              <a className="nav__link" href={item.href} key={item.href}>
                <span className="nav__link-index">{String(i + 1).padStart(2, '0')}</span>
                <span className="nav__link-label">{item.label}</span>
              </a>
            ))}
          </nav>

          <div className="nav__actions">
            <a className="btn nav__cta" href="#contact">
              联系我
              <ArrowUpRight size={15} />
            </a>
            <button
              className="nav__burger"
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? '关闭菜单' : '打开菜单'}
            >
              {open ? <Close /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      <div className={`nav-panel${open ? ' is-open' : ''}`}>
        <ul className="nav-panel__list">
          {nav.map((item, i) => (
            <li key={item.href}>
              <a href={item.href} onClick={() => setOpen(false)}>
                <span>{String(i + 1).padStart(2, '0')}</span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav-panel__foot">
          <a href="#contact" onClick={() => setOpen(false)}>
            联系我
          </a>
          <span>{profile.location}</span>
        </div>
      </div>
    </>
  )
}
