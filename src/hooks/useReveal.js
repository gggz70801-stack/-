import { useEffect } from 'react'

/**
 * 全局滚动进入动效：
 * 观察页面上所有 [data-reveal] / [data-reveal-mask] 元素，
 * 进入视口后加上 .is-in（只触发一次）。
 */
export function useReveal() {
  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll('[data-reveal], [data-reveal-mask]')
    )

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce || !('IntersectionObserver' in window)) {
      nodes.forEach((n) => n.classList.add('is-in'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-in')
          observer.unobserve(entry.target)
        })
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.12 }
    )

    nodes.forEach((n) => observer.observe(n))
    return () => observer.disconnect()
  }, [])
}

/** 滚动位置（用于导航栏状态与滚动进度） */
export function onScroll(handler) {
  let raf = 0
  const run = () => {
    raf = 0
    handler(window.scrollY, window.innerHeight, document.body.scrollHeight)
  }
  const listener = () => {
    if (raf) return
    raf = window.requestAnimationFrame(run)
  }
  window.addEventListener('scroll', listener, { passive: true })
  window.addEventListener('resize', listener, { passive: true })
  listener()
  return () => {
    window.removeEventListener('scroll', listener)
    window.removeEventListener('resize', listener)
    if (raf) window.cancelAnimationFrame(raf)
  }
}
