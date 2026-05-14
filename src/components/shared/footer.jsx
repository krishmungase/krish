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
          <span className="font-handwritten -rotate-3 text-base normal-case tracking-normal text-primary">
            see you soon ✦
          </span>
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
