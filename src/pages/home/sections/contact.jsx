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
  ArrowUpRight,
  Loader2,
} from 'lucide-react'

import { profile, contactSocials } from '@/constants'
import SectionHeading from '@/components/shared/section-heading'
import { AsteriskStar, CircleScribble } from '@/components/effects'
import { cn } from '@/lib'

const LeetCodeIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    width="14"
    height="14"
    fill="currentColor"
    {...props}
  >
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.541.54-1.419.003-1.96a1.392 1.392 0 0 0-1.955-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
  </svg>
)

const SOCIAL_ICONS = { Github, Linkedin, LeetCode: LeetCodeIcon }

const Contact = () => {
  // status: idle | sending | sent | error
  const [status, setStatus] = useState('idle')
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch(
        `https://formsubmit.co/ajax/${profile.email}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            message: form.message,
            _subject: `Portfolio · message from ${form.name}`,
            _captcha: 'false',
            _template: 'table',
          }),
        }
      )

      const data = await res.json().catch(() => null)
      if (res.ok && data?.success !== false) {
        setStatus('sent')
        setForm({ name: '', email: '', message: '' })
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        throw new Error('Submit failed')
      }
    } catch {
      setStatus('error')
      // mailto fallback
      const subject = encodeURIComponent(
        `Hello from ${form.name || 'your portfolio'}`
      )
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
      )
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    }
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

      <div className="relative mx-auto w-full max-w-5xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Get In Touch"
          align="center"
          title={
            <>
              Got a project, role, or idea?{' '}
              <span className="font-serif italic text-primary">
                tell me about it.
              </span>
            </>
          }
          description="My inbox is the fastest way. Drop a line below — I read everything and reply within a day, usually."
        />

        {/* ===== UNIFIED PANEL ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="surface card-elevated relative overflow-hidden"
        >
          {/* corner glow */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />

          <div className="grid lg:grid-cols-[280px_1fr]">
            {/* ===== LEFT SIDEBAR — meta ===== */}
            <aside className="relative border-b border-border bg-background/30 p-6 lg:border-b-0 lg:border-r">
              {/* status */}
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/70" />
                  <span className="relative h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                  available now
                </span>
              </div>

              <p className="font-handwritten mt-2 -rotate-1 text-lg text-primary/85">
                replies within a day ✦
              </p>

              {/* dashed divider */}
              <div className="my-6 border-t border-dashed border-border/60" />

              {/* email */}
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                  reach me
                </p>
                <a
                  href={profile.socials.email}
                  className="font-serif mt-1 block break-all text-xl italic text-foreground underline decoration-primary/60 decoration-2 underline-offset-4 transition-colors hover:text-primary"
                >
                  {profile.email}
                </a>
              </div>

              <div className="mt-4 space-y-2.5">
                <MetaRow icon={Phone} value={profile.phone} />
                <MetaRow icon={MapPin} value={profile.location} />
              </div>

              {/* socials */}
              <div className="mt-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                  find me online
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {contactSocials.map(({ icon, socialKey, label }) => {
                    const Icon = SOCIAL_ICONS[icon]
                    return (
                      <a
                        key={label}
                        href={profile.socials[socialKey]}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={label}
                        className="group inline-flex items-center gap-1.5 rounded-full border border-border bg-card/40 px-2.5 py-1 text-muted-foreground transition hover:border-primary hover:bg-primary/10 hover:text-foreground"
                      >
                        <Icon size={12} />
                        <span className="font-mono text-[10px] uppercase tracking-[0.18em]">
                          {label}
                        </span>
                      </a>
                    )
                  })}
                </div>
              </div>
            </aside>

            {/* ===== RIGHT — Form ===== */}
            <form onSubmit={onSubmit} className="relative p-6 lg:p-8">
              {/* form header */}
              <div className="mb-6 flex items-center justify-between">
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                  / new message
                </p>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  {form.message.length > 0 && `${form.message.length} chars`}
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  label="Your name"
                  value={form.name}
                  onChange={(v) => setForm({ ...form, name: v })}
                  placeholder="Ada Lovelace"
                  required
                  disabled={status === 'sending' || status === 'sent'}
                />
                <Field
                  label="Email"
                  type="email"
                  value={form.email}
                  onChange={(v) => setForm({ ...form, email: v })}
                  placeholder="you@example.com"
                  required
                  disabled={status === 'sending' || status === 'sent'}
                />
              </div>

              <div className="mt-5">
                <Field
                  label="Message"
                  textarea
                  value={form.message}
                  onChange={(v) => setForm({ ...form, message: v })}
                  placeholder="Tell me about your idea, role, or just say hi…"
                  required
                  disabled={status === 'sending' || status === 'sent'}
                />
              </div>

              {/* footer row */}
              <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  {status === 'sent'
                    ? '✓ delivered — talk soon!'
                    : status === 'error'
                      ? 'opened in your mail app instead'
                      : 'sent via email · ~24h reply'}
                </p>

                <button
                  type="submit"
                  disabled={status === 'sending' || status === 'sent'}
                  className={cn(
                    'btn-primary group min-w-[140px] justify-center',
                    (status === 'sending' || status === 'sent') &&
                      'cursor-not-allowed opacity-90'
                  )}
                >
                  {status === 'sending' && (
                    <>
                      <Loader2 size={15} className="animate-spin" />
                      Sending…
                    </>
                  )}
                  {status === 'sent' && (
                    <>
                      <CheckCircle2 size={15} />
                      Sent
                    </>
                  )}
                  {(status === 'idle' || status === 'error') && (
                    <>
                      Send message
                      <Send
                        size={14}
                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </>
                  )}
                </button>
              </div>

              {/* small "or" line */}
              <p className="mt-5 border-t border-dashed border-border/60 pt-4 text-center text-xs text-muted-foreground">
                or just{' '}
                <a
                  href={profile.socials.email}
                  className="font-serif italic text-foreground underline decoration-primary/60 underline-offset-2 hover:text-primary"
                >
                  email me directly
                </a>
                <ArrowUpRight
                  size={11}
                  className="ml-0.5 inline-block align-middle"
                />
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const MetaRow = ({ icon: Icon, value }) => (
  <div className="flex items-center gap-2.5 text-sm">
    <Icon size={13} className="text-primary" />
    <span className="text-foreground/90">{value}</span>
  </div>
)

const Field = ({
  label,
  value,
  onChange,
  type = 'text',
  textarea,
  required,
  placeholder,
  disabled,
}) => (
  <label className="group block">
    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
      {label}
    </span>
    {textarea ? (
      <textarea
        rows={5}
        required={required}
        value={value}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-1.5 w-full resize-none rounded-lg border border-border bg-background/40 px-3.5 py-3 text-sm outline-none transition placeholder:text-muted-foreground/40 focus:border-primary focus:bg-background/70 focus:ring-2 focus:ring-primary/30 disabled:opacity-60"
      />
    ) : (
      <input
        type={type}
        required={required}
        value={value}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-lg border border-border bg-background/40 px-3.5 py-2.5 text-sm outline-none transition placeholder:text-muted-foreground/40 focus:border-primary focus:bg-background/70 focus:ring-2 focus:ring-primary/30 disabled:opacity-60"
      />
    )}
  </label>
)

export default Contact
