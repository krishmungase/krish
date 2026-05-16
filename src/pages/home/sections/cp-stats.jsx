import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Code2,
  Flame,
  Trophy,
  Target,
  Award,
  ExternalLink,
} from 'lucide-react'

import { cpStats, cpStatRings, cpStatTiles } from '@/constants'
import SectionHeading from '@/components/shared/section-heading'
import { AsteriskStar, CircleScribble } from '@/components/effects'

const TILE_ICONS = { Trophy, Target, Flame, Code2 }

const ProgressRing = ({ value, total, color, label, sub }) => {
  const pct = Math.round((value / total) * 100)
  const r = 36
  const c = 2 * Math.PI * r
  const offset = c - (pct / 100) * c
  return (
    <div className="flex items-center gap-3">
      <div className="relative grid h-20 w-20 place-items-center">
        <svg className="absolute inset-0 -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r={r}
            stroke="var(--border)"
            strokeWidth="8"
            fill="none"
          />
          <motion.circle
            cx="50"
            cy="50"
            r={r}
            stroke={color}
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
            strokeDasharray={c}
            initial={{ strokeDashoffset: c }}
            whileInView={{ strokeDashoffset: offset }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            style={{ filter: `drop-shadow(0 0 10px ${color}80)` }}
          />
        </svg>
        <div className="text-center">
          <div className="font-display text-base font-semibold">{value}</div>
          <div className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
            {pct}%
          </div>
        </div>
      </div>
      <div>
        <div className="text-sm font-semibold" style={{ color }}>
          {label}
        </div>
        <div className="text-xs text-muted-foreground">{sub}</div>
      </div>
    </div>
  )
}

const StatTile = ({ icon: Icon, value, label, accent }) => (
  <div className="surface card-elevated relative overflow-hidden p-4">
    <div
      className="absolute -right-3 -top-3 h-16 w-16 rounded-full blur-2xl"
      style={{ background: accent, opacity: 0.25 }}
    />
    <Icon size={16} style={{ color: accent }} />
    <div className="mt-3 font-display text-2xl font-bold">{value}</div>
    <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
      {label}
    </div>
  </div>
)

const CpStats = () => {
  return (
    <section id="cp" className="relative scroll-mt-24 py-24">
      {/* Decorations */}
      <CircleScribble
        className="absolute left-12 top-32 hidden lg:block"
        size={70}
      />
      <AsteriskStar
        className="absolute right-10 bottom-24 hidden md:block"
        size={22}
      />

      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Competitive Programming"
          title={
            <>
              I solve algorithms{' '}
              <span className="highlight-marker text-primary-foreground py-2 mx-2">
                for fun.
              </span>
            </>
          }
          description="A real, lived-in CP profile — updated stats straight from LeetCode."
          note="one hard / weekend ⏱️"
        />

        <div className="grid gap-5 lg:grid-cols-5">
          {/* Hero card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl border border-border bg-card/70 p-6 backdrop-blur card-elevated lg:col-span-3"
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-orange-500/15 blur-3xl" />

            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  LeetCode · @{cpStats.handle}
                </div>
                <div className="mt-1 flex items-baseline gap-2 font-display text-3xl font-bold">
                  {cpStats.totalSolved}
                  <span className="text-base font-normal text-muted-foreground">
                    problems
                  </span>
                  <span className="font-handwritten -rotate-2 text-xl text-primary/90">
                    & counting…
                  </span>
                </div>
              </div>
              <a
                href={cpStats.leetcodeUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-outline !py-1.5 !px-3 text-xs"
              >
                View on LeetCode <ExternalLink size={12} />
              </a>
            </div>

            <div className="mt-6 grid gap-5 sm:grid-cols-3">
              {cpStatRings.map(({ key, color, label }) => (
                <ProgressRing
                  key={key}
                  value={cpStats[key]}
                  total={cpStats.totalSolved}
                  color={color}
                  label={label}
                  sub={`${cpStats[key]} solved`}
                />
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              {cpStats.badges.map((b) => (
                <span
                  key={b}
                  className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 px-2.5 py-1 text-[11px] font-medium text-amber-300"
                >
                  <Award size={11} />
                  {b}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Stat tiles */}
          <div className="grid grid-cols-2 gap-3 lg:col-span-2">
            {cpStatTiles.map(({ key, icon, label, accent, suffix }) => (
              <StatTile
                key={key}
                icon={TILE_ICONS[icon]}
                value={suffix ? `${cpStats[key]}${suffix}` : cpStats[key]}
                label={label}
                accent={accent}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CpStats
