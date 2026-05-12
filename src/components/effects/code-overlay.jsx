import { cn } from '@/lib'

const code = `function Portfolio() {
  return (
    <Hero>
      <h1>Hi, I'm Krish 👋</h1>
      <p>Full-stack developer.</p>
      <p>I build fast, polished
         web products.</p>
      <p>550+ LeetCode solves.</p>
      <p>Shipping at WorkableAI.</p>
    </Hero>
  )
}

export default Portfolio
`

const CodeOverlay = ({ className }) => {
  return (
    <pre
      aria-hidden="true"
      className={cn(
        'pointer-events-none select-none whitespace-pre font-mono text-[12px] leading-[1.55] tracking-tight text-foreground/[0.08]',
        className
      )}
    >
      {code}
    </pre>
  )
}

export default CodeOverlay
