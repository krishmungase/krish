import { ArrowUp } from 'lucide-react'

import { AsteriskStar } from '@/components/effects'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="relative mt-20 overflow-hidden border-t border-dashed border-border/60">
      {/* Subtle background grid */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-25" />

      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
        {/* ===== TOP STRIP — sign off ===== */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-dashed border-border/60 py-3 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          <div className="flex items-center gap-2">
            <AsteriskStar size={11} />
            <span>fin · end of feed</span>
          </div>
          <span className="font-handwritten -rotate-3 text-base normal-case tracking-normal text-primary">
            see you soon ✦
          </span>
        </div>

        {/* ===== ONE-LINE EDITORIAL SIGNATURE ===== */}
        <div className="flex flex-col items-start justify-between gap-6 py-10 md:flex-row md:items-center">
          {/* tiny mark */}
          <p className="font-display flex items-baseline gap-1 text-2xl font-extrabold leading-none text-foreground">
            krish<span className="font-serif italic text-primary">.</span>
          </p>

          {/* center meta — build credits */}
          <p className="font-mono max-w-md text-center text-[10px] uppercase tracking-[0.22em] leading-relaxed text-muted-foreground">
            hand-built with{' '}
            <span className="text-foreground">react</span>,{' '}
            <span className="text-foreground">tailwind</span> &amp;{' '}
            <span className="text-foreground">framer-motion</span>
            <br className="hidden sm:inline" />
            <span className="block sm:inline">
              {' '}
              · a healthy dose of <span className="text-primary">☕</span>
            </span>
          </p>

          {/* back to top */}
          <a
            href="#home"
            aria-label="Back to top"
            className="group font-mono inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-3.5 py-2 text-[10px] uppercase tracking-[0.22em] text-foreground transition hover:border-primary hover:bg-primary/10"
          >
            back to top
            <ArrowUp
              size={12}
              className="transition-transform group-hover:-translate-y-0.5"
            />
          </a>
        </div>

        {/* ===== BOTTOM FINE PRINT ===== */}
        <div className="flex flex-col gap-2 border-t border-dashed border-border/60 py-4 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>© {year} krish mungase · all rights reserved</span>
          <span>
            made in <span className="text-primary">pune, india</span>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
