import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Mail,
  MapPin,
  Phone,
  Github,
  Linkedin,
  Send,
  CheckCircle2,
  Sparkles,
} from 'lucide-react'

import { profile } from '@/constants'
import SectionHeading from '@/components/shared/section-heading'
import {
  Magnetic,
  AsteriskStar,
  CircleScribble,
  ScribbleArrow,
} from '@/components/effects'

const LeetCodeIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    fill="currentColor"
    {...props}
  >
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.541.54-1.419.003-1.96a1.392 1.392 0 0 0-1.955-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
  </svg>
)

const socials = [
  { icon: Github, href: profile.socials.github, label: 'GitHub' },
  { icon: Linkedin, href: profile.socials.linkedin, label: 'LinkedIn' },
  { icon: LeetCodeIcon, href: profile.socials.leetcode, label: 'LeetCode' },
  { icon: Mail, href: profile.socials.email, label: 'Email' },
]

const Contact = () => {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const onSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(
      `Hello from ${form.name || 'your portfolio'}`
    )
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact" className="relative scroll-mt-24 py-24">
      {/* Decorations */}
      <AsteriskStar
        className="absolute left-10 top-28 hidden md:block"
        size={22}
      />
      <CircleScribble
        className="absolute right-14 bottom-32 hidden lg:block"
        size={68}
      />
      <span className="font-script pointer-events-none absolute -top-2 left-1/2 -translate-x-1/2 select-none text-6xl text-primary/15 sm:text-7xl">
        let's chat
      </span>

      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Get In Touch"
          align="center"
          title={
            <>
              Let's build something{' '}
              <span className="highlight-marker text-primary-foreground mx-2 py-2">
                amazing
              </span>{' '}
              together.
            </>
          }
          description="Got a product idea, a freelance project, or just want to nerd out about React or system design? My inbox is open."
        />

        <div className="grid gap-6 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
            className="surface card-elevated relative overflow-hidden p-6 lg:col-span-2"
          >
            <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-primary/20 blur-3xl" />

            <div className="relative space-y-5">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Reach me at
                </div>
                <a
                  href={profile.socials.email}
                  className="mt-1 inline-block font-display text-xl font-semibold text-foreground link-underline"
                >
                  {profile.email}
                </a>
                <span className="font-handwritten mt-1 block -rotate-1 text-base text-primary/85">
                  I reply within a day — promise ✨
                </span>
              </div>

              <div className="space-y-3 text-sm">
                <Row icon={Phone} label="Phone" value={profile.phone} />
                <Row icon={MapPin} label="Based in" value={profile.location} />
              </div>

              <div>
                <div className="mb-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Find me online
                </div>
                <div className="flex flex-wrap gap-2">
                  {socials.map(({ icon: Icon, href, label }) => (
                    <Magnetic strength={10} key={label}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={label}
                        className="group inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1.5 text-xs font-medium text-muted-foreground transition hover:border-primary hover:text-foreground"
                      >
                        <Icon className="text-current" />
                        {label}
                      </a>
                    </Magnetic>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            onSubmit={onSubmit}
            className="surface card-elevated relative overflow-hidden p-6 lg:col-span-3"
          >
            <div className="pointer-events-none absolute -bottom-24 -right-24 h-56 w-56 rounded-full bg-primary/15 blur-3xl" />
            <ScribbleArrow
              label="opens in your mail app"
              direction="down-right"
              className="absolute -top-2 right-2 hidden lg:block"
              labelClassName="text-primary/80 -rotate-2"
            />

            <div className="grid gap-4 sm:grid-cols-2">
              <Field
                label="Your name"
                value={form.name}
                onChange={(v) => setForm({ ...form, name: v })}
                required
              />
              <Field
                label="Email"
                type="email"
                value={form.email}
                onChange={(v) => setForm({ ...form, email: v })}
                required
              />
            </div>
            <Field
              label="Message"
              textarea
              value={form.message}
              onChange={(v) => setForm({ ...form, message: v })}
              required
            />

            <div className="mt-5 flex items-center justify-between">
              <span className="text-xs text-muted-foreground">
                Or just say hi — I reply to every message.
              </span>
              <button type="submit" className="btn-primary">
                {sent ? (
                  <>
                    <CheckCircle2 size={16} /> Opened mail
                  </>
                ) : (
                  <>
                    <Sparkles size={16} /> Send
                    <Send size={14} />
                  </>
                )}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

const Row = ({ icon: Icon, label, value }) => (
  <div className="flex items-center gap-3">
    <span className="grid h-8 w-8 place-items-center rounded-lg border border-border bg-background/40 text-primary">
      <Icon size={14} />
    </span>
    <div>
      <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        {label}
      </div>
      <div className="text-sm font-medium">{value}</div>
    </div>
  </div>
)

const Field = ({
  label,
  value,
  onChange,
  type = 'text',
  textarea,
  required,
}) => (
  <label className="group block">
    <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
      {label}
    </span>
    {textarea ? (
      <textarea
        rows={5}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full resize-none rounded-lg border border-border bg-background/40 px-3 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
      />
    ) : (
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-lg border border-border bg-background/40 px-3 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
      />
    )}
  </label>
)

export default Contact
