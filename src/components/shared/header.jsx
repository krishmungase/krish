import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { Menu, X } from 'lucide-react'

import LogoMark from './logo-mark'
import { navLinks } from '@/constants'
import { cn } from '@/lib'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#home')

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 25,
    mass: 0.3,
  })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return
    const sections = navLinks
      .map((n) => document.querySelector(n.href))
      .filter(Boolean)
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(`#${visible.target.id}`)
      },
      {
        rootMargin: '-40% 0px -55% 0px',
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      }
    )
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed left-0 right-0 top-0 z-[60] h-[2px] origin-left bg-primary"
      />

      <header
        className={cn(
          'fixed inset-x-0 top-3 z-50 mx-auto flex w-[min(96%,72rem)] items-center justify-between gap-4 rounded-full border border-transparent px-3 py-1.5 transition-all duration-300',
          scrolled &&
            'border-border bg-card/80 backdrop-blur-md shadow-[0_8px_30px_-10px_rgba(0,0,0,0.5)]'
        )}
      >
        {/* Left: logo + wordmark */}
        <a
          href="#home"
          className="flex items-center gap-2.5 pl-1 pr-2"
          aria-label="Krish Mungase — home"
        >
          <LogoMark className="h-8 w-8" />
          <span className="hidden font-display text-base font-bold tracking-tight sm:inline">
            krish<span className="text-primary">.</span>
          </span>
        </a>

        {/* Center: nav */}
        <nav className="hidden items-center gap-0.5 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-active={active === link.href}
              className={cn(
                'relative rounded-full px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground',
                active === link.href && 'text-foreground'
              )}
            >
              {active === link.href && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-primary/10"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: mobile menu only */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card/60 backdrop-blur md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -45, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 45, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={16} />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: 45, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -45, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={16} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[55] flex flex-col bg-background/95 backdrop-blur-xl md:hidden"
          >
            <div className="absolute inset-0 -z-10 bg-grid opacity-50" />

            <div className="flex h-16 items-center justify-end px-4">
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card/60"
              >
                <X size={16} />
              </button>
            </div>
            <nav className="mx-auto flex flex-1 flex-col items-center justify-center gap-3 px-6 pb-24">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.05 }}
                  className="font-display text-3xl font-bold text-foreground"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header
