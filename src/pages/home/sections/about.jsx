import { motion } from 'framer-motion'
import {
  GraduationCap,
  MapPin,
  Award,
  Briefcase,
  Cpu,
  Sparkles,
} from 'lucide-react'

import { achievements, aboutFacts } from '@/constants'
import SectionHeading from '@/components/shared/section-heading'
import { AsteriskStar, CircleScribble } from '@/components/effects'

const FACT_ICONS = { MapPin, Briefcase, GraduationCap, Cpu }

const About = () => {
  return (
    <section id="about" className="relative scroll-mt-24 py-24">
      {/* Decorations */}
      <CircleScribble
        className="absolute right-10 top-32 hidden lg:block"
        size={70}
      />
      <AsteriskStar
        className="absolute left-10 bottom-24 hidden md:block"
        size={20}
      />

      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="About Me"
          title={
            <>
              I build for the web —{' '}
              <span className="highlight-marker text-primary-foreground py-2 mx-2">
                end-to-end.
              </span>
            </>
          }
          description="From a sharp UI to a clean API to the database underneath, I enjoy owning every layer."
          note="a quick intro 👋"
        />

        <div className="grid gap-6 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="surface card-elevated relative overflow-hidden p-7 lg:col-span-3"
          >
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/15 blur-3xl" />
            <AsteriskStar
              className="absolute right-5 top-5 opacity-60"
              size={16}
            />

            <p className="relative text-base leading-relaxed text-foreground/90 sm:text-lg">
              Pre final-year CE student at{' '}
              <span className="font-medium text-foreground">
                MIT Academy of Engineering
              </span>{' '}
              with a soft spot for products that feel{' '}
              <em>fast and effortless</em>.
            </p>

            <span className="font-handwritten relative mt-4 inline-block -rotate-2 text-lg text-primary/80">
              — the short version 👇
            </span>

            <p className="relative mt-2 text-base leading-relaxed text-muted-foreground sm:text-lg">
              I write production React & Node at{' '}
              <span className="font-medium text-foreground">WorkableAI</span>,
              ship side projects on weekends, and grind LeetCode in between. My
              focus: code that's a pleasure to read and interfaces that respect
              the user's attention.
            </p>

            <span className="font-script absolute -bottom-1 right-6 select-none text-3xl text-primary/40">
              — Krish
            </span>
          </motion.div>

          <div className="grid gap-4 lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55 }}
              className="grid grid-cols-2 gap-3"
            >
              {aboutFacts.map(({ icon, label, value }) => {
                const Icon = FACT_ICONS[icon]
                return (
                  <div
                    key={label}
                    className="card-elevated surface flex flex-col gap-2 p-4"
                  >
                    <Icon size={16} className="text-primary" />
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      {label}
                    </span>
                    <span className="text-sm font-medium text-foreground">
                      {value}
                    </span>
                  </div>
                )
              })}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="surface card-elevated relative overflow-hidden p-5"
            >
              <div className="absolute -right-4 -top-4 text-primary/15">
                <Sparkles size={84} />
              </div>
              <div className="mb-3 flex items-center gap-2 text-sm font-medium">
                <Award size={16} className="text-primary" />
                Achievements
              </div>
              <ul className="space-y-3">
                {achievements.map((a) => (
                  <li key={a.title} className="flex items-start gap-3 text-sm">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <div>
                      <div className="font-medium text-foreground">
                        {a.title}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {a.org}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
