import { useMemo, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { skills } from '@/constants'
import SectionHeading from '@/components/shared/section-heading'
import { SkillIcon, AsteriskStar, CircleScribble } from '@/components/effects'
import { cn } from '@/lib'

const CATEGORIES = ['Language', 'Frontend', 'Backend', 'DevOps']

const categoryMeta = {
  Language: {
    file: 'languages.ts',
    varName: 'languages',
    tag: 'the speaking layer',
    blurb: 'How I think out loud.',
  },
  Frontend: {
    file: 'frontend.ts',
    varName: 'frontend',
    tag: 'the visible layer',
    blurb: 'What ships to the browser.',
  },
  Backend: {
    file: 'backend.ts',
    varName: 'backend',
    tag: 'the thinking layer',
    blurb: 'Where the heavy lifting lives.',
  },
  DevOps: {
    file: 'devops.ts',
    varName: 'devops',
    tag: 'the shipping layer',
    blurb: 'How it gets to production.',
  },
}

const FolderIcon = ({ open = false }) => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    className="shrink-0 text-primary/80"
  >
    {open ? (
      <path
        d="M2 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v1H4l-2 9V7Z"
        fill="currentColor"
        opacity="0.85"
      />
    ) : (
      <path
        d="M2 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7Z"
        fill="currentColor"
        opacity="0.85"
      />
    )}
  </svg>
)

const FileIcon = () => (
  <svg
    width="11"
    height="11"
    viewBox="0 0 24 24"
    fill="none"
    className="shrink-0 text-sky-400/80"
  >
    <path
      d="M6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z"
      fill="currentColor"
      opacity="0.18"
      stroke="currentColor"
      strokeWidth="1.4"
    />
    <path
      d="M14 2v6h6"
      stroke="currentColor"
      strokeWidth="1.4"
      fill="none"
    />
  </svg>
)

const Chevron = ({ open }) => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 24 24"
    fill="none"
    className={cn(
      'shrink-0 text-muted-foreground transition-transform duration-300',
      open && 'rotate-90'
    )}
  >
    <path
      d="M9 6l6 6-6 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

// Subtle 3D tilt card — magnetic hover for skill chips on the right pane.
const TiltCard = ({ children, className, onMouseEnter, onMouseLeave }) => {
  const ref = useRef(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const onMove = (e) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    setTilt({ x: y * -8, y: x * 10 })
  }

  const reset = () => setTilt({ x: 0, y: 0 })

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={(e) => {
        reset()
        onMouseLeave?.(e)
      }}
      style={{
        transform: `perspective(600px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: 'transform 0.18s ease-out',
      }}
      className={className}
    >
      {children}
    </div>
  )
}

const Skills = () => {
  const [activeCat, setActiveCat] = useState('Language')
  const [hoverSkill, setHoverSkill] = useState(null)

  const grouped = useMemo(() => {
    const obj = {}
    CATEGORIES.forEach((c) => {
      obj[c] = skills.filter((s) => s.category === c)
    })
    return obj
  }, [])

  const activeSkills = grouped[activeCat]
  const meta = categoryMeta[activeCat]

  return (
    <section id="skills" className="relative scroll-mt-24 py-24">
      {/* Decorations */}
      <CircleScribble
        className="absolute left-8 top-24 hidden lg:block"
        size={60}
      />
      <AsteriskStar
        className="absolute right-12 bottom-20 hidden md:block"
        size={18}
      />

      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="My Stack"
          title={
            <>
              The tools I{' '}
              <span className="highlight-marker text-primary-foreground py-2 mx-2">
                build
              </span>{' '}
              with.
            </>
          }
          description="A short, honest list of what I reach for daily — language at the core, cloud at the edge."
          note="tour the stack"
        />

        {/* === IDE Editor Card ===================================== */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="surface card-elevated relative overflow-hidden p-0"
        >
          {/* Window chrome */}
          <div className="flex items-center gap-3 border-b border-border bg-background/40 px-4 py-2.5">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            </div>
            <div className="hidden font-mono text-[11px] text-muted-foreground sm:block">
              ~/krish/portfolio/<span className="text-foreground/70">stack</span>/{meta.file}
            </div>
            <div className="ml-auto flex items-center gap-2">
              <span className="hidden font-mono text-[10px] uppercase tracking-widest text-muted-foreground sm:inline">
                21 skills · live
              </span>
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/60" />
                <span className="relative h-2 w-2 rounded-full bg-emerald-500" />
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr_280px]">
            {/* === SIDEBAR: file explorer ============================ */}
            <aside className="border-b border-border bg-background/20 p-3 lg:border-b-0 lg:border-r">
              <div className="mb-2 flex items-center gap-1.5">
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Explorer
                </span>
                <span className="ml-auto font-mono text-[10px] text-muted-foreground">
                  ⌘P
                </span>
              </div>
              <div className="space-y-0.5">
                <div className="flex items-center gap-1.5 px-1 font-mono text-xs text-foreground/80">
                  <Chevron open />
                  <FolderIcon open />
                  <span>stack</span>
                </div>
                <div className="ml-3 border-l border-border/60 pl-1.5">
                  {CATEGORIES.map((cat) => {
                    const active = activeCat === cat
                    return (
                      <button
                        key={cat}
                        onClick={() => setActiveCat(cat)}
                        className={cn(
                          'group flex w-full items-center gap-1.5 rounded px-1.5 py-1 font-mono text-[11px] transition-all',
                          active
                            ? 'bg-primary/10 text-foreground'
                            : 'text-muted-foreground hover:bg-background/60 hover:text-foreground'
                        )}
                      >
                        <FileIcon />
                        <span className="truncate">
                          {categoryMeta[cat].file}
                        </span>
                        <span
                          className={cn(
                            'ml-auto rounded px-1 text-[9px] transition',
                            active
                              ? 'bg-primary/20 text-primary'
                              : 'bg-border/40 text-muted-foreground'
                          )}
                        >
                          {grouped[cat].length}
                        </span>
                      </button>
                    )
                  })}
                </div>

                <div className="mt-4 flex items-center gap-1.5 px-1 font-mono text-xs text-foreground/80">
                  <Chevron />
                  <FolderIcon />
                  <span className="text-muted-foreground">.config</span>
                </div>
                <div className="mt-3 flex items-center gap-1.5 px-1 font-mono text-xs text-muted-foreground/60">
                  <FileIcon />
                  <span>readme.md</span>
                </div>
              </div>

              {/* mini caption */}
              <div className="mt-6 hidden lg:block">
                <p className="font-handwritten -rotate-2 text-base text-primary/80">
                  hover any chip →
                </p>
              </div>
            </aside>

            {/* === EDITOR ============================================ */}
            <div className="relative min-h-[460px] border-b border-border lg:border-b-0 lg:border-r">
              {/* tab strip */}
              <div className="flex items-center overflow-x-auto border-b border-border bg-background/30">
                {CATEGORIES.map((cat) => {
                  const active = activeCat === cat
                  return (
                    <button
                      key={cat}
                      onClick={() => setActiveCat(cat)}
                      className={cn(
                        'relative flex shrink-0 items-center gap-2 border-r border-border px-3.5 py-2 font-mono text-[11px] transition-all',
                        active
                          ? 'bg-surface text-foreground'
                          : 'bg-background/20 text-muted-foreground hover:text-foreground'
                      )}
                    >
                      {active && (
                        <motion.span
                          layoutId="active-tab"
                          className="absolute inset-x-0 top-0 h-[2px] bg-primary"
                        />
                      )}
                      <FileIcon />
                      <span>{categoryMeta[cat].file}</span>
                      <span
                        className={cn(
                          'h-1 w-1 rounded-full transition',
                          active ? 'bg-primary' : 'bg-transparent'
                        )}
                      />
                    </button>
                  )
                })}
              </div>

              {/* code body */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCat}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.22 }}
                  className="flex font-mono text-[13px] leading-7"
                >
                  {/* line numbers */}
                  <div className="select-none border-r border-border bg-background/20 px-3 py-4 text-right text-[11px] text-muted-foreground/60">
                    {Array.from({ length: activeSkills.length + 7 }).map(
                      (_, i) => (
                        <div key={i}>{i + 1}</div>
                      )
                    )}
                  </div>

                  {/* code */}
                  <pre className="flex-1 overflow-x-auto px-4 py-4">
                    <code className="block">
                      <span className="text-pink-400">import</span>{' '}
                      <span className="text-foreground/80">{`{ Stack }`}</span>{' '}
                      <span className="text-pink-400">from</span>{' '}
                      <span className="text-emerald-400">{`'@krish/core'`}</span>
                      <span className="text-muted-foreground">;</span>
                      {'\n'}
                      {'\n'}
                      <span className="text-muted-foreground">{`// ${meta.blurb}`}</span>
                      {'\n'}
                      <span className="text-pink-400">export const</span>{' '}
                      <span className="text-sky-400">{meta.varName}</span>
                      <span className="text-foreground/80">{` : Stack = [`}</span>
                      {'\n'}
                      {activeSkills.map((s, i) => {
                        const isHover = hoverSkill === s.name
                        return (
                          <span
                            key={s.name}
                            onMouseEnter={() => setHoverSkill(s.name)}
                            onMouseLeave={() => setHoverSkill(null)}
                            className={cn(
                              'group/line flex items-center gap-2 rounded-sm pl-4 transition-colors duration-200',
                              isHover && 'bg-primary/8'
                            )}
                            style={
                              isHover
                                ? { background: `${s.color}14` }
                                : undefined
                            }
                          >
                            <span
                              className="inline-flex h-1.5 w-1.5 rounded-full transition-all duration-200"
                              style={{
                                background: s.color,
                                boxShadow: isHover
                                  ? `0 0 12px ${s.color}`
                                  : `0 0 4px ${s.color}40`,
                              }}
                            />
                            <SkillIcon
                              name={s.name}
                              size={13}
                              style={{ color: s.color }}
                            />
                            <span className="text-emerald-400">{`"${s.name}"`}</span>
                            <span className="text-muted-foreground">
                              {i < activeSkills.length - 1 ? ',' : ''}
                            </span>
                            {isHover && (
                              <motion.span
                                initial={{ opacity: 0, x: -4 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="font-handwritten ml-3 text-[15px] text-primary/80"
                                style={{ color: s.color }}
                              >
                                ← daily driver
                              </motion.span>
                            )}
                          </span>
                        )
                      })}
                      <span className="text-foreground/80">{`]`}</span>
                      <span className="text-muted-foreground">;</span>
                      {'\n'}
                      {'\n'}
                      <span className="text-muted-foreground">{`// ${activeSkills.length} entries · all in production`}</span>
                      <span className="ml-0.5 inline-block h-4 w-[7px] -translate-y-[2px] animate-pulse bg-primary align-middle" />
                    </code>
                  </pre>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* === RIGHT PANEL: interactive chip cluster ============= */}
            <aside className="relative bg-background/10 p-4">
              <div className="mb-3 flex items-center justify-between">
                <div>
                  <h4 className="font-display text-sm font-bold tracking-tight">
                    {activeCat}
                  </h4>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {meta.tag}
                  </p>
                </div>
                <span className="rounded-full border border-border bg-background/40 px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
                  {activeSkills.length}/21
                </span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCat}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="flex flex-wrap gap-2"
                >
                  {activeSkills.map((s, i) => {
                    const isHover = hoverSkill === s.name
                    return (
                      <TiltCard
                        key={s.name}
                        onMouseEnter={() => setHoverSkill(s.name)}
                        onMouseLeave={() => setHoverSkill(null)}
                        className="will-change-transform"
                      >
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.92 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{
                            delay: i * 0.03,
                            type: 'spring',
                            stiffness: 220,
                            damping: 18,
                          }}
                          className={cn(
                            'group flex cursor-default items-center gap-2 rounded-full border px-3 py-1.5 backdrop-blur-sm transition-all',
                            isHover
                              ? 'border-transparent'
                              : 'border-border bg-background/40'
                          )}
                          style={
                            isHover
                              ? {
                                  background: `${s.color}1f`,
                                  borderColor: `${s.color}66`,
                                  boxShadow: `0 8px 24px -10px ${s.color}, inset 0 1px 0 ${s.color}22`,
                                }
                              : undefined
                          }
                        >
                          <SkillIcon
                            name={s.name}
                            size={14}
                            style={{ color: s.color }}
                          />
                          <span
                            className={cn(
                              'text-xs font-medium transition-colors',
                              isHover
                                ? 'text-foreground'
                                : 'text-foreground/85'
                            )}
                          >
                            {s.name}
                          </span>
                        </motion.div>
                      </TiltCard>
                    )
                  })}
                </motion.div>
              </AnimatePresence>

              {/* mini "now" panel */}
              <div className="mt-6 rounded-lg border border-dashed border-border/80 bg-background/20 p-3">
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  now hovering
                </p>
                <div className="mt-1 flex h-6 items-center gap-2">
                  {hoverSkill ? (
                    <motion.div
                      key={hoverSkill}
                      initial={{ opacity: 0, x: -4 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-center gap-2"
                    >
                      <SkillIcon
                        name={hoverSkill}
                        size={14}
                        style={{
                          color: skills.find((s) => s.name === hoverSkill)
                            ?.color,
                        }}
                      />
                      <span className="text-sm font-medium">{hoverSkill}</span>
                    </motion.div>
                  ) : (
                    <span className="font-handwritten text-base text-muted-foreground/70">
                      pick one →
                    </span>
                  )}
                </div>
              </div>
            </aside>
          </div>

          {/* Status bar */}
          <div className="flex items-center gap-3 border-t border-border bg-background/40 px-4 py-1.5 font-mono text-[10px] text-muted-foreground">
            <span className="flex items-center gap-1">
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                className="text-primary"
              >
                <path
                  d="M6 3v12a3 3 0 0 0 3 3h6m-9-3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm12 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              main
            </span>
            <span className="hidden sm:inline">TypeScript</span>
            <span className="hidden sm:inline">UTF-8</span>
            <span className="hidden sm:inline">LF</span>
            <span className="ml-auto truncate">
              {hoverSkill ? `→ ${hoverSkill}` : 'ready'}
            </span>
            <span className="hidden sm:inline">
              Ln {activeSkills.length + 7}, Col 1
            </span>
          </div>
        </motion.div>

        {/* === Marquee ============================================== */}
        <div
          className="group/marquee relative mt-8 overflow-hidden rounded-2xl border border-border bg-background/30 py-4"
          style={{
            maskImage:
              'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)',
            WebkitMaskImage:
              'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)',
          }}
        >
          <div className="animate-marquee flex w-max gap-3 group-hover/marquee:[animation-play-state:paused]">
            {[...skills, ...skills].map((s, i) => (
              <div
                key={`${s.name}-${i}`}
                className="flex shrink-0 items-center gap-2 rounded-full border border-border bg-card/40 px-3.5 py-1.5 backdrop-blur transition-all hover:border-transparent"
                style={{
                  '--c': s.color,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = `${s.color}1a`
                  e.currentTarget.style.borderColor = `${s.color}66`
                  e.currentTarget.style.boxShadow = `0 0 22px -6px ${s.color}`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = ''
                  e.currentTarget.style.borderColor = ''
                  e.currentTarget.style.boxShadow = ''
                }}
              >
                <SkillIcon name={s.name} size={14} style={{ color: s.color }} />
                <span className="text-xs font-medium text-foreground/85">
                  {s.name}
                </span>
              </div>
            ))}
          </div>
          <span className="font-handwritten pointer-events-none absolute -top-1 right-6 hidden -rotate-3 text-base text-primary/80 lg:inline">
            all live, all daily
          </span>
        </div>
      </div>
    </section>
  )
}

export default Skills
