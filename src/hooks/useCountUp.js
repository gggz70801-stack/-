import { useEffect, useRef, useState } from 'react'

/** 数字滚动：元素进入视口后从 0 数到目标值 */
export function useCountUp(target, duration = 1400) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce || !('IntersectionObserver' in window)) {
      setValue(target)
      return
    }

    let raf = 0
    let start = 0

    const step = (now) => {
      if (!start) start = now
      const p = Math.min((now - start) / duration, 1)
      // easeOutExpo，收尾更稳
      const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p)
      setValue(Math.round(target * eased))
      if (p < 1) raf = requestAnimationFrame(step)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return
        observer.disconnect()
        raf = requestAnimationFrame(step)
      },
      { threshold: 0.4 }
    )

    observer.observe(el)
    return () => {
      observer.disconnect()
      if (raf) cancelAnimationFrame(raf)
    }
  }, [target, duration])

  return { ref, value }
}
