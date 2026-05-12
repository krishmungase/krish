import { motion } from 'framer-motion'
import { ArrowDownRight, ArrowUpRight, Download, Sparkles } from 'lucide-react'

import {
  Aurora,
  Magnetic,
  CodeOverlay,
  CodeEditor,
  Polaroid,
  ScribbleArrow,
  AsteriskStar,
  CircleScribble,
} from '@/components/effects'
import { profile } from '@/constants'

const Hero = () => {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-28 pb-20"
    >
      <Aurora />

      {/* Faded code overlays at the edges */}
      <CodeOverlay className="absolute -left-6 top-28 hidden max-w-xs rotate-[-3deg] md:block" />
      <CodeOverlay className="absolute -right-6 bottom-24 hidden max-w-xs rotate-[2deg] lg:block" />

      {/* Big script watermark */}
      <span
        aria-hidden="true"
        className="font-script pointer-events-none absolute left-1/2 top-12 z-0 -translate-x-1/2 select-none whitespace-nowrap text-[8rem] text-primary/[0.07] sm:text-[14rem]"
      >
        krish
      </span>

      {/* Scenery decorations */}
      <div className="pointer-events-none absolute top-32 left-[8%] hidden h-24 w-24 bg-dots opacity-40 md:block" />
      <div className="pointer-events-none absolute bottom-20 right-[6%] hidden h-28 w-28 bg-dots opacity-30 md:block" />
      <AsteriskStar
        className="absolute top-36 right-[10%] hidden md:block"
        size={22}
      />
      <AsteriskStar
        className="absolute bottom-32 left-[12%] hidden md:block"
        size={18}
      />
      <CircleScribble
        className="absolute bottom-24 right-1/4 hidden lg:block"
        size={70}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-8 px-5 sm:px-8">
        {/* Eyebrow handwritten line */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="flex flex-col items-center gap-1"
        >
          <span className="font-handwritten text-2xl text-muted-foreground sm:text-3xl">
            Hi, I'm —
          </span>
          <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            <span className="text-foreground mx-3">Krish </span>
            <span className="highlight-marker text-primary-foreground py-2">
              Mungase.
            </span>
          </h1>
        </motion.div>

        {/* Editor + polaroid composition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="relative flex w-full max-w-3xl flex-col items-center"
        >
          {/* Polaroid pinned to the editor's top-right (desktop) / above (mobile) */}
          <div className="z-20 -mb-12 sm:absolute sm:-top-12 sm:-right-16 sm:mb-0 lg:-right-28">
            <Polaroid caption="krish ✨" />
          </div>

          {/* Sticky note "Hi" above editor */}
          <span className="font-handwritten absolute -left-6 -top-10 hidden -rotate-[8deg] rounded-md bg-primary px-3 py-1 text-base font-semibold text-primary-foreground shadow-lg sm:inline-block sm:-left-14 sm:-top-8 sm:text-lg">
            this is me 👇
          </span>

          {/* Scribble arrow from "Hi" pointing to the editor */}
          <ScribbleArrow
            label=""
            direction="down-right"
            className="absolute -left-8 top-2 hidden sm:block"
            labelClassName="hidden"
          />

          {/* The Editor */}
          <CodeEditor />

          {/* Footnote handwritten under editor */}
          <span className="font-handwritten mt-4 inline-block -rotate-1 text-lg text-primary/80 sm:text-xl">
            * yes, it actually compiles.
          </span>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-2 flex flex-wrap items-center justify-center gap-3"
        >
          <Magnetic strength={14}>
            <a href="#projects" className="btn-primary group">
              <Sparkles size={16} />
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
            className="inline-flex items-center gap-1.5 px-1 text-sm text-muted-foreground hover:text-foreground link-underline"
          >
            <Download size={14} />
            Résumé
          </a>
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 text-muted-foreground"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-1 text-xs"
        >
          <span className="opacity-60">scroll</span>
          <span className="h-8 w-[2px] bg-gradient-to-b from-primary to-transparent" />
        </motion.div>
      </a>
    </section>
  )
}

export default Hero
