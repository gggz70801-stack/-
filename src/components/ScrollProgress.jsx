import { useEffect, useRef } from 'react'
import { onScroll } from '../hooks/useReveal'

/** 顶部 1px 滚动进度条 */
export default function ScrollProgress() {
  const ref = useRef(null)

  useEffect(() => {
    return onScroll((y, h, total) => {
      const el = ref.current
      if (!el) return
      const max = total - h
      const p = max > 0 ? Math.min(y / max, 1) : 0
      el.style.transform = `scaleX(${p})`
    })
  }, [])

  return <div className="scroll-progress" ref={ref} style={{ transform: 'scaleX(0)' }} aria-hidden="true" />
}
