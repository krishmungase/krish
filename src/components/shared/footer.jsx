import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react'

import { profile } from '@/constants'
import { AsteriskStar } from '@/components/effects'

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

const Footer = () => {
  const year = new Date().getFullYear()
  const socials = [
    { icon: Github, href: profile.socials.github, label: 'GitHub' },
    { icon: Linkedin, href: profile.socials.linkedin, label: 'LinkedIn' },
    { icon: LeetCodeIcon, href: profile.socials.leetcode, label: 'LeetCode' },
    { icon: Mail, href: profile.socials.email, label: 'Email' },
  ]

  return (
    <footer className="relative mt-12 border-t border-border/70 py-10">
      <span className="font-script pointer-events-none absolute -top-4 left-1/2 -translate-x-1/2 select-none text-3xl text-primary/30 sm:text-4xl">
        thank you !
      </span>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div className="text-sm text-muted-foreground">
          <p className="flex items-center gap-1.5">
            <AsteriskStar size={12} className="text-primary" />
            Designed & built with <Heart
              size={12}
              className="text-rose-500"
            />{' '}
            by{' '}
            <span className="font-medium text-foreground">Krish Mungase</span> ·
            © {year}
          </p>
        </div>

        <div className="flex items-center gap-2">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card/60 text-muted-foreground transition hover:border-primary hover:text-foreground"
            >
              <Icon size={14} />
            </a>
          ))}
          <a
            href="#home"
            aria-label="Back to top"
            className="ml-1 inline-flex items-center gap-1.5 rounded-full border border-border bg-card/60 px-3 py-1.5 text-xs font-medium text-muted-foreground transition hover:border-primary hover:text-foreground"
          >
            Top
            <ArrowUp size={12} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
