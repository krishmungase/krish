import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDownRight, ArrowUpRight, Download, MapPin } from 'lucide-react'

import {
  Aurora,
  Magnetic,
  Typewriter,
  AsteriskStar,
  CircleScribble,
} from '@/components/effects'
import { profile } from '@/constants'

const useLocalClock = () => {
  const [time, setTime] = useState(() => new Date())
  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 60_000)
    return () => clearInterval(t)
  }, [])
  return time.toLocaleTimeString('en-IN', {
    timeZone: 'Asia/Kolkata',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  })
}

const Hero = () => {
  const clock = useLocalClock()

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-24 pb-16"
    >
      <Aurora />

      {/* Subtle dot pattern */}
      <div className="pointer-events-none absolute inset-0 -z-1 bg-grid opacity-50" />

      {/* Soft script watermark */}
      <span
        aria-hidden="true"
        className="font-script pointer-events-none absolute left-1/2 top-10 z-0 -translate-x-1/2 select-none whitespace-nowrap text-[8rem] text-primary/6 sm:text-[14rem]"
      >
        krish
      </span>

      {/* Scenery */}
      <AsteriskStar
        className="absolute top-32 right-[8%] hidden md:block"
        size={22}
      />
      <CircleScribble
        className="absolute bottom-28 left-[8%] hidden lg:block"
        size={64}
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-8">
        {/* ============ TOP META STRIP ============ */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-wrap items-center justify-between gap-3 border-b border-dashed border-border/60 pb-3 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/70" />
              <span className="relative h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span>open to opportunities</span>
          </div>
          <div className="hidden items-center gap-1.5 sm:flex">
            <MapPin size={11} /> Pune, IN · {clock} IST
          </div>
          <div className="font-handwritten -rotate-2 text-base normal-case tracking-normal text-primary">
            portfolio · '26
          </div>
        </motion.div>

        {/* ============ MAIN 2-COL ============ */}
        <div className="grid items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
          {/* ---- LEFT: Name + Copy + CTAs ---- */}
          <div>
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="font-handwritten block text-2xl text-muted-foreground sm:text-3xl"
            >
              Hi, I'm —
            </motion.span>

            {/* THE NAME — display sans + italic serif */}
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-2 leading-[0.95] tracking-tight"
            >
              <span className="font-display block text-foreground text-6xl font-extrabold sm:text-7xl lg:text-[6.5rem]">
                Krish
              </span>
              <span className="relative inline-block">
                <span className="font-serif italic text-primary text-6xl sm:text-7xl lg:text-[6.5rem]">
                  Mungase.
                </span>
                <svg
                  viewBox="0 0 400 14"
                  preserveAspectRatio="none"
                  className="pointer-events-none absolute -bottom-1 left-0 h-2.5 w-[88%] text-primary/70"
                >
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.9, duration: 1.0, ease: 'easeOut' }}
                    d="M2 8 Q 100 1, 200 7 T 398 5"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </span>
            </motion.h1>

            {/* TAGLINE */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              I design and build{' '}
              <span className="font-serif italic text-foreground">
                fast, polished
              </span>{' '}
              web products end-to-end. Currently shipping production React &
              Node at{' '}
              <span className="font-semibold text-foreground">WorkableAI</span>
              .
            </motion.p>

            {/* Role typewriter chip */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-border bg-background/50 px-3.5 py-2 backdrop-blur"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-primary/70" />
                <span className="relative h-2 w-2 rounded-full bg-primary" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                role
              </span>
              <span className="text-sm font-semibold text-foreground">
                <Typewriter
                  words={profile.roles}
                  typingSpeed={55}
                  deletingSpeed={28}
                />
              </span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Magnetic strength={14}>
                <a href="#projects" className="btn-primary group">
                  See my work
                  <ArrowDownRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                  />
                </a>
              </Magnetic>
              <Magnetic strength={10}>
                <a href="#contact" className="btn-outline group">
                  Let's talk
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </Magnetic>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline inline-flex items-center gap-1.5 px-1 text-sm text-muted-foreground hover:text-foreground"
              >
                <Download size={14} />
                Résumé
              </a>
            </motion.div>
          </div>

          {/* ---- RIGHT: Brand mark + Now card ---- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="flex flex-col items-center gap-5 lg:items-end"
          >
            {/* ============ BRAND MARK CARD ============ */}
            <div className="group relative">
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                className="surface card-elevated relative h-[340px] w-[280px] overflow-hidden p-6 sm:h-[380px] sm:w-[300px]"
              >
                {/* Background: yellow quadrant arc */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/90" />
                <div className="pointer-events-none absolute -right-32 -bottom-32 h-56 w-56 rounded-full bg-primary/20 blur-3xl" />

                {/* Top mono label */}
                <div className="relative flex items-center justify-between">
                  <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground">
                    / mark · 01
                  </span>
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/70" />
                    <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </span>
                </div>

                {/* MASSIVE typographic monogram */}
                <div className="relative mt-6 flex items-start">
                  <span className="font-display text-[11rem] font-black leading-[0.78] tracking-[-0.08em] text-foreground">
                    K
                  </span>
                  <span className="font-serif mt-3 text-[9rem] italic leading-[0.78] text-primary-foreground">
                    M
                  </span>
                  {/* asterisk accent */}
                  <AsteriskStar
                    className="ml-1 mt-4 animate-spin-slow text-primary-foreground"
                    size={20}
                  />
                </div>

                {/* Hand-drawn divider */}
                <svg
                  viewBox="0 0 240 8"
                  preserveAspectRatio="none"
                  className="relative mt-2 h-2 w-[60%] text-primary"
                >
                  <path
                    d="M2 5 Q 60 1, 120 4 T 238 3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>

                {/* Bottom plate */}
                <div className="relative mt-3 flex flex-col gap-0.5">
                  <span className="font-display text-base font-bold text-foreground">
                    Krish Mungase
                  </span>
                  <span className="font-serif text-base italic text-primary">
                    full-stack developer
                  </span>
                  <span className="font-mono mt-1 text-[9px] uppercase tracking-[0.28em] text-muted-foreground">
                    estd · pune · '27
                  </span>
                </div>

                {/* Handwritten corner note */}
                <span className="font-handwritten absolute bottom-3 right-4 -rotate-6 text-lg text-foreground/80">
                  ✦ that's me
                </span>
              </motion.div>

              {/* floating sticky tag */}
              <span className="font-handwritten absolute -left-4 -top-3 hidden -rotate-[6deg] rounded-md bg-foreground px-2.5 py-0.5 text-sm font-semibold text-background shadow-lg sm:inline-block">
                hello 👋
              </span>
            </div>

            {/* ============ NOW CARD ============ */}
            <div className="surface card-elevated relative w-full max-w-[300px] overflow-hidden p-4">
              <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-primary/15 blur-3xl" />

              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  now building
                </span>
                <span className="font-mono text-[10px] text-muted-foreground">
                  since Jul '25
                </span>
              </div>

              <div className="mt-1.5 flex items-baseline gap-2">
                <span className="font-display text-lg font-extrabold leading-none">
                  WorkableAI
                </span>
                <span className="font-serif text-base italic text-primary">
                  intern
                </span>
              </div>

              <p className="mt-1 text-xs text-muted-foreground">
                Full-stack features,{' '}
                <span className="font-serif italic text-foreground/90">
                  end-to-end
                </span>
                .
              </p>

              {/* mini waveform */}
              <div className="mt-2.5 flex items-end gap-[3px]">
                {[3, 6, 4, 8, 5, 9, 6, 4, 7, 5, 3, 8, 4, 6, 5, 7, 4].map(
                  (h, i) => (
                    <motion.span
                      key={i}
                      animate={{ scaleY: [0.4, 1, 0.6, 1, 0.5] }}
                      transition={{
                        duration: 1.2 + (i % 5) * 0.2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: i * 0.05,
                      }}
                      style={{
                        transformOrigin: 'bottom',
                        height: `${h * 2}px`,
                      }}
                      className="w-[3px] rounded-sm bg-primary/70"
                    />
                  )
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-3 left-1/2 z-10 -translate-x-1/2 text-muted-foreground"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-1 text-[10px] uppercase tracking-widest"
        >
          <span className="opacity-60">scroll</span>
          <span className="h-7 w-[2px] bg-gradient-to-b from-primary to-transparent" />
        </motion.div>
      </a>
    </section>
  )
}

export default Hero
