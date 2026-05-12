import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, MapPin, Rocket } from 'lucide-react'

import { experience, education } from '@/constants'
import SectionHeading from '@/components/shared/section-heading'
import { AsteriskStar, CircleScribble } from '@/components/effects'

const Journey = () => {
  return (
    <section id="journey" className="relative scroll-mt-24 py-24">
      {/* Decorations */}
      <AsteriskStar
        className="absolute right-12 top-28 hidden md:block"
        size={20}
      />
      <CircleScribble
        className="absolute left-8 bottom-28 hidden lg:block"
        size={64}
      />

      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="My Journey"
          title={
            <>
              Where I've been,{' '}
              <span className="highlight-marker text-primary-foreground py-2 mx-2">
                where I am.
              </span>
            </>
          }
          description="A short, honest timeline of the work and the school that shaped how I build today."
          note="from college to WorkableAI →"
        />

        {/* Featured: Workable */}
        <FeaturedWorkable item={experience[0]} />

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <Timeline title="Experience" items={experience} icon={Briefcase} />
          <Timeline title="Education" items={education} icon={GraduationCap} />
        </div>
      </div>
    </section>
  )
}

const FeaturedWorkable = ({ item }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.7 }}
    className="relative overflow-hidden rounded-3xl border border-border bg-card/70 p-7 backdrop-blur card-elevated"
  >
    <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-primary/25 blur-3xl" />
    <div className="pointer-events-none absolute -bottom-24 left-1/3 h-60 w-60 rounded-full bg-cyan-400/20 blur-3xl" />

    <div className="relative grid gap-8 lg:grid-cols-5">
      <div className="lg:col-span-3">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 text-[11px] font-medium text-emerald-400">
            <span className="relative grid h-1.5 w-1.5 place-items-center">
              <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-70" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            Currently
          </span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            {item.type}
          </span>
        </div>

        <h3 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
          {item.role}{' '}
          <span className="text-gradient-soft">@ {item.company}</span>
        </h3>

        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <MapPin size={12} /> {item.location}
          </span>
          <span>·</span>
          <span>{item.period}</span>
        </div>

        <ul className="mt-5 space-y-2.5">
          {item.points.map((p, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.07 }}
              className="flex items-start gap-3 text-sm leading-relaxed text-foreground/85"
            >
              <Rocket size={14} className="mt-1 shrink-0 text-primary" />
              {p}
            </motion.li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {item.stack.map((s) => (
            <span
              key={s}
              className="rounded-md border border-border bg-background/40 px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      <div className="relative lg:col-span-2">
        <span className="font-handwritten absolute -top-4 -left-3 z-10 inline-block -rotate-3 text-lg text-primary sm:text-xl">
          ← currently here
        </span>
        <div className="relative grid h-full place-items-center rounded-2xl border border-border bg-background/40 p-6">
          <div className="absolute inset-x-6 inset-y-6 rounded-xl border border-dashed border-border/60" />
          <div className="text-center">
            <div className="mx-auto grid h-20 w-20 place-items-center">
              <span className="font-display text-3xl font-bold text-primary-foreground">
                <img
                  src="https://www.workableai.org/new_logo.png"
                  alt={`${item.company} logo`}
                  className="h-12 w-12 object-contain"
                />
              </span>
            </div>
            <div className="mt-4 font-display text-xl font-semibold">
              WorkableAI
            </div>
            <div className="text-xs text-muted-foreground">
              Remote · Full-stack
            </div>
            <div className="mt-3 font-mono text-[11px] text-muted-foreground">
              <span className="text-foreground">— shipping</span> in production.
            </div>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
)

const Timeline = ({ title, items, icon: Icon }) => (
  <div>
    <div className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground">
      <Icon size={15} className="text-primary" />
      {title}
    </div>
    <div className="relative space-y-6 border-l border-dashed border-border pl-6">
      <span className="pointer-events-none absolute left-0 top-0 h-full w-px bg-gradient-to-b from-primary via-cyan-400/70 to-transparent" />
      {items.map((item, i) => (
        <motion.div
          key={`${title}-${i}`}
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="relative"
        >
          <span
            className="absolute -left-[31px] top-1.5 grid h-3.5 w-3.5 place-items-center rounded-full border-2 border-background bg-primary shadow-[0_0_14px_var(--glow-primary)]"
            style={{ background: item.accent }}
          />
          <div className="surface card-elevated p-4">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h4 className="font-display text-base font-semibold">
                {item.role}
              </h4>
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {item.period}
              </span>
            </div>
            <div className="text-sm text-muted-foreground">{item.company}</div>
            {item.detail && (
              <div className="mt-1 text-xs text-muted-foreground/90">
                {item.detail}
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  </div>
)

export default Journey
