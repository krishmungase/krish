import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'

import { skills, skillCategories } from '@/constants'
import SectionHeading from '@/components/shared/section-heading'
import { SkillIcon, AsteriskStar, CircleScribble } from '@/components/effects'
import { cn } from '@/lib'

const groupMeta = {
  Language: { title: 'Languages', tag: 'the speaking layer' },
  Frontend: { title: 'Frontend', tag: 'the visible layer' },
  Backend: { title: 'Backend', tag: 'the thinking layer' },
  DevOps: { title: 'DevOps & Cloud', tag: 'the shipping layer' },
}

const Skills = () => {
  const [filter, setFilter] = useState('All')

  const groups = useMemo(() => {
    return ['Language', 'Frontend', 'Backend', 'DevOps']
      .map((cat) => ({
        cat,
        ...groupMeta[cat],
        items: skills.filter((s) => s.category === cat),
      }))
      .filter((g) => filter === 'All' || g.cat === filter)
  }, [filter])

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
          note="grouped by layer"
        />

        <div className="mb-8 flex flex-wrap items-center gap-2">
          {skillCategories.map((c) => {
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
            21 skills · all daily
          </span>
        </div>

        <motion.div layout className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {groups.map((g, gi) => (
            <motion.div
              key={g.cat}
              layout
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: gi * 0.08 }}
              className="surface card-elevated relative overflow-hidden p-5"
            >
              {/* Soft yellow glow corner */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary/15 blur-3xl" />

              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-lg font-bold tracking-tight">
                    {g.title}
                  </h3>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {g.tag}
                  </p>
                </div>
                <span className="rounded-full border border-border bg-background/40 px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
                  {g.items.length}
                </span>
              </div>

              <ul className="mt-5 space-y-2">
                {g.items.map((s, i) => (
                  <motion.li
                    key={s.name}
                    initial={{ opacity: 0, x: -6 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: gi * 0.08 + i * 0.04 }}
                    className="group flex items-center justify-between gap-3 rounded-lg border border-transparent px-2 py-1.5 transition hover:border-border hover:bg-background/40"
                  >
                    <span className="flex items-center gap-2.5 text-sm">
                      <SkillIcon
                        name={s.name}
                        size={16}
                        style={{ color: s.color }}
                      />
                      <span className="text-foreground/90 group-hover:text-foreground">
                        {s.name}
                      </span>
                    </span>
                    <span
                      className="h-1.5 w-1.5 rounded-full opacity-60 transition-opacity group-hover:opacity-100"
                      style={{
                        background: s.color,
                        boxShadow: `0 0 10px ${s.color}`,
                      }}
                    />
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
