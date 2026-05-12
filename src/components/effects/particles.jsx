import { useEffect, useRef } from 'react'

import { useTheme } from '@/providers'
import { useReducedMotion } from '@/hooks'

const Particles = ({ density = 0.00012 }) => {
  const canvasRef = useRef(null)
  const { resolvedTheme } = useTheme()
  const reduced = useReducedMotion()

  useEffect(() => {
    if (reduced) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let rafId
    let particles = []
    let w = 0
    let h = 0
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      w = rect.width
      h = rect.height
      canvas.width = Math.floor(w * dpr)
      canvas.height = Math.floor(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.max(35, Math.floor(w * h * density))
      particles = Array.from({ length: count }).map(() => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.4 + 0.4,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        a: Math.random() * 0.6 + 0.2,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      const isDark = resolvedTheme === 'dark'
      const baseColor = isDark ? '255,255,255' : '20,20,40'
      const accentColor = isDark ? '139,109,255' : '91,61,245'

      // links
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.hypot(dx, dy)
          if (dist < 110) {
            const op = (1 - dist / 110) * (isDark ? 0.18 : 0.1)
            ctx.strokeStyle = `rgba(${accentColor},${op})`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      // dots
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1
        ctx.beginPath()
        ctx.fillStyle = `rgba(${baseColor},${p.a})`
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      }
      rafId = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', resize)
    }
  }, [resolvedTheme, density, reduced])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  )
}

export default Particles
