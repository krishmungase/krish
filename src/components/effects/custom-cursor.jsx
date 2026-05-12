import { useEffect, useRef, useState } from 'react'

const isCoarse = () =>
  typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches

const CustomCursor = () => {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const [enabled, setEnabled] = useState(false)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    if (isCoarse()) return
    setEnabled(true)

    const dot = dotRef.current
    const ring = ringRef.current
    let mx = window.innerWidth / 2
    let my = window.innerHeight / 2
    let rx = mx
    let ry = my
    let raf = 0

    const onMove = (e) => {
      mx = e.clientX
      my = e.clientY
      if (dot) {
        dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`
      }
    }

    const onOver = (e) => {
      const t = e.target
      const interactive =
        t.closest('a, button, [role="button"], input, textarea, [data-cursor="hover"]')
      setHovered(!!interactive)
    }

    const tick = () => {
      rx += (mx - rx) * 0.18
      ry += (my - ry) * 0.18
      if (ring) {
        ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
    }
  }, [])

  if (!enabled) return null
  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div
        ref={ringRef}
        className={`cursor-ring ${hovered ? 'hovered' : ''}`}
        aria-hidden="true"
      />
    </>
  )
}

export default CustomCursor
