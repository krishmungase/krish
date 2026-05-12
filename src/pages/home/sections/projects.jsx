import { useMemo, useRef, useState } from 'react'
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion'
import { ArrowUpRight, Github, ExternalLink, Star } from 'lucide-react'

import { projects, projectCategories } from '@/constants'
import SectionHeading from '@/components/shared/section-heading'
import { SkillIcon, AsteriskStar, CircleScribble } from '@/components/effects'
import { cn } from '@/lib'

const hostnameOf = (url) => {
  try {
    return new URL(url).hostname.replace(/^www\./, '')
  } catch {
    return ''
  }
}

const Projects = () => {
  const [filter, setFilter] = useState('All')
  const visible = useMemo(
    () => projects.filter((p) => filter === 'All' || p.category === filter),
    [filter]
  )

  return (
    <section id="projects" className="relative scroll-mt-24 py-24">
      {/* Decorations */}
      <AsteriskStar
        className="absolute left-10 top-32 hidden md:block"
        size={20}
      />
      <CircleScribble
        className="absolute right-12 bottom-24 hidden lg:block"
        size={70}
      />

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Selected Work"
          title={
            <>
              Projects I've{' '}
              <span className="highlight-marker text-primary-foreground py-2 mx-2">
                shipped
              </span>
              .
            </>
          }
          description="Eight products I designed, engineered, and pushed to production. Filter by stack or jump straight to the live build."
          note="all live in production →"
        />

        <div className="mb-8 flex flex-wrap items-center gap-2">
          {projectCategories.map((c) => {
            const active = filter === c
            return (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={cn(
                  'rounded-full border border-border bg-card/40 px-3.5 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur transition',
                  active &&
                    'border-primary/50 bg-primary/15 text-foreground shadow-[0_0_24px_-6px_var(--glow-primary)]'
                )}
              >
                {c}
              </button>
            )
          })}
          <span className="font-handwritten ml-2 inline-block -rotate-2 text-base text-primary/80 sm:text-lg">
            → all live in production
          </span>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((p, idx) => (
              <ProjectCard key={p.slug} project={p} index={idx} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

const BrowserMockup = ({ project }) => {
  const hostname = hostnameOf(project.live)
  return (
    <div className="relative h-44 w-full overflow-hidden rounded-xl border border-border bg-background">
      {/* Top bar (window chrome) */}
      <div className="relative z-10 flex items-center gap-1.5 border-b border-border bg-card/80 px-3 py-2 backdrop-blur">
        <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
        <div className="ml-3 flex-1 truncate rounded-md border border-border bg-background/60 px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
          {hostname || project.live}
        </div>
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open ${project.title}`}
          className="grid h-5 w-5 place-items-center rounded text-muted-foreground transition hover:text-foreground"
        >
          <ArrowUpRight size={12} />
        </a>
      </div>

      {/* Body — designed preview */}
      <div className="relative flex h-[calc(100%-2rem)] items-center justify-center px-4">
        {/* Accent gradient */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background: `radial-gradient(140% 90% at 0% 0%, ${project.accent}40, transparent 60%), radial-gradient(140% 90% at 100% 100%, ${project.accent}20, transparent 60%)`,
          }}
        />
        {/* Faint grid */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              'linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
        {/* Big watermark initial */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-3 -bottom-6 font-display text-[7rem] font-extrabold leading-none opacity-[0.08]"
          style={{ color: project.accent }}
        >
          {project.title.charAt(0)}
        </span>
        {/* Project name centered */}
        <div className="relative z-10 text-center">
          <div className="font-display text-2xl font-extrabold tracking-tight">
            {project.title}
          </div>
          <div
            className="mt-1 font-mono text-[10px] uppercase tracking-widest"
            style={{ color: project.accent }}
          >
            {project.category}
          </div>
        </div>
      </div>
    </div>
  )
}

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null)
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const sx = useSpring(rotateX, { stiffness: 240, damping: 18 })
  const sy = useSpring(rotateY, { stiffness: 240, damping: 18 })
  const glowX = useMotionValue(50)
  const glowY = useMotionValue(50)
  const glowBg = useTransform(
    [glowX, glowY],
    ([gx, gy]) =>
      `radial-gradient(220px circle at ${gx}% ${gy}%, ${project.accent}1f, transparent 60%)`
  )

  const onMove = (e) => {
    const r = ref.current?.getBoundingClientRect()
    if (!r) return
    const px = (e.clientX - r.left) / r.width
    const py = (e.clientY - r.top) / r.height
    rotateY.set((px - 0.5) * 6)
    rotateX.set(-(py - 0.5) * 6)
    glowX.set(px * 100)
    glowY.set(py * 100)
  }
  const onLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.45, delay: index * 0.04 }}
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: sx, rotateY: sy, transformPerspective: 1000 }}
      className="group relative isolate flex flex-col gap-4 overflow-hidden rounded-2xl border border-border bg-card/70 p-4 backdrop-blur card-elevated"
    >
      {/* Hover spotlight glow */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: glowBg }}
      />

      <BrowserMockup project={project} />

      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 space-y-1">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              {project.category}
            </span>
            {project.featured && (
              <span className="inline-flex items-center gap-1 rounded-full border border-primary/40 bg-primary/10 px-1.5 py-0.5 text-[9px] font-medium text-primary">
                <Star size={9} /> Featured
              </span>
            )}
          </div>
          <h3 className="truncate font-display text-lg font-bold tracking-tight">
            {project.title}
          </h3>
        </div>
      </div>

      <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
        {project.blurb}
      </p>

      <div className="mt-auto flex flex-wrap gap-1.5">
        {project.tags.slice(0, 4).map((t) => (
          <span
            key={t}
            className="inline-flex items-center gap-1 rounded-md border border-border bg-background/40 px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
          >
            <SkillIcon name={t} size={10} />
            {t}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between gap-3 border-t border-border/60 pt-3">
        <span className="truncate text-[11px] text-muted-foreground">
          {project.role}
        </span>
        <div className="flex shrink-0 items-center gap-3 text-xs">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground link-underline"
            >
              <Github size={13} /> Code
            </a>
          )}
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 font-medium text-primary link-underline"
          >
            <ExternalLink size={13} /> Live
          </a>
        </div>
      </div>
    </motion.article>
  )
}

export default Projects
