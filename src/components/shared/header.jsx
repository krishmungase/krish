import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'

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
          'fixed inset-x-0 top-4 z-50 mx-auto flex w-[min(96%,74rem)] items-center justify-between gap-4 rounded-2xl border border-transparent px-3.5 py-2 transition-all duration-300',
          scrolled &&
            'border-border bg-card/80 backdrop-blur-md shadow-[0_8px_30px_-10px_rgba(0,0,0,0.5)]'
        )}
      >
        {/* === LEFT: Wordmark === */}
        <a
          href="#home"
          className="flex items-center gap-2.5 pl-1 pr-2"
          aria-label="Krish Mungase — home"
        >
          <LogoMark className="h-7 w-7" />
          <div className="hidden flex-col leading-none sm:flex">
            <span className="font-display text-sm font-bold tracking-tight text-foreground">
              krish<span className="font-serif italic text-primary">.</span>
            </span>
            <span className="font-mono mt-0.5 text-[8px] uppercase tracking-[0.28em] text-muted-foreground">
              full-stack · '27
            </span>
          </div>
        </a>

        {/* === CENTER: Nav (mono uppercase, editorial) === */}
        <nav className="hidden items-center gap-0.5 md:flex">
          {navLinks.map((link) => {
            const isActive = active === link.href
            return (
              <a
                key={link.href}
                href={link.href}
                data-active={isActive}
                className={cn(
                  'font-mono relative rounded-full px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground',
                  isActive && 'text-foreground'
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-primary/12"
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 30,
                    }}
                  />
                )}
                {link.label}
              </a>
            )
          })}
        </nav>

        {/* === RIGHT: CTA + mobile menu === */}
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="font-mono group hidden items-center gap-1.5 rounded-full border border-border bg-background/40 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-foreground transition hover:border-primary hover:bg-primary/10 md:inline-flex"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/70" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
            let's talk
            <ArrowUpRight
              size={12}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>

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

      {/* Mobile sheet — editorial typography */}
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

            <div className="flex h-16 items-center justify-between px-5">
              <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                menu / index
              </span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card/60"
              >
                <X size={16} />
              </button>
            </div>

            <nav className="mx-auto flex flex-1 flex-col items-start justify-center gap-2 px-8 pb-24">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05 }}
                  className="group flex items-baseline gap-3"
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                    0{i + 1}
                  </span>
                  <span className="font-display text-4xl font-extrabold text-foreground transition-colors group-hover:text-primary">
                    {link.label}
                    <span className="font-serif italic text-primary">.</span>
                  </span>
                </motion.a>
              ))}
            </nav>

            <div className="border-t border-dashed border-border/60 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
              krish mungase · pune, in
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header
