import { motion } from 'framer-motion'
import { FileCode2, GitBranch } from 'lucide-react'

import Typewriter from './typewriter'
import { profile } from '@/constants'

// Tiny tokenizer-ish helpers so we don't lean on a real highlighter
const K = ({ children }) => <span className="text-rose-400/90">{children}</span>
const P = ({ children }) => <span className="text-primary">{children}</span>
const S = ({ children }) => (
  <span className="text-emerald-300/90">{children}</span>
)
const N = ({ children }) => <span className="text-cyan-300/90">{children}</span>
const C = ({ children }) => (
  <span className="italic text-muted-foreground/80">{children}</span>
)
const M = ({ children }) => (
  <span className="text-foreground/95">{children}</span>
)

const lines = [
  <>
    <K>const</K> <M>krish</M> <K>=</K> <M>{'{'}</M>
  </>,
  <>
    {'  '}
    <P>name</P>: <S>"Krish Mungase"</S>,
  </>,
  <>
    {'  '}
    <P>role</P>:{' '}
    <span className="text-emerald-300/90">
      "
      <Typewriter words={profile.roles} typingSpeed={60} deletingSpeed={35} />"
    </span>
    ,
  </>,
  <>
    {'  '}
    <P>location</P>: <S>"Pune, IN 🇮🇳"</S>,
  </>,
  <>
    {'  '}
    <P>currently</P>: <S>"WorkableAI Intern"</S>, <C>// since Jul 2025</C>
  </>,
  <>
    {'  '}
    <P>stack</P>: [<S>"React"</S>, <S>"Node.js"</S>, <S>"TypeScript"</S>,{' '}
    <S>"Tailwind CSS"</S>, <S>"C++"</S>],
  </>,
  <>
    {'  '}
    <P>leetcode</P>: <N>767</N>, <C>// problems solved</C>
  </>,
  <>
    {'  '}
    <P>cgpa</P>: <N>8.50</N>, <C>// MIT AOE</C>
  </>,
  <>
    {'  '}
    <P>available</P>: <K>true</K>,
  </>,
  <M>{'}'}</M>,
  '',
  <C>{'// shipping production code, daily.'}</C>,
  <>
    <K>export default</K> <M>krish</M>
  </>,
]

const CodeEditor = () => {
  return (
    <div className="relative isolate w-full max-w-2xl overflow-hidden rounded-2xl border border-border bg-card/90 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9),0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur-md">
      {/* Title bar */}
      <div className="flex items-center justify-between gap-3 border-b border-border bg-background/60 px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
        </div>
        <div className="hidden items-center gap-2 sm:flex">
          <div className="inline-flex items-center gap-1.5 border-t-2 border-primary bg-card/80 px-3 py-1 font-mono text-[11px] text-foreground">
            <FileCode2 size={11} className="text-primary" />
            portfolio.tsx
          </div>
          <span className="hidden font-mono text-[11px] text-muted-foreground/60 md:inline-flex">
            about.md
          </span>
          <span className="hidden font-mono text-[11px] text-muted-foreground/60 md:inline-flex">
            stack.json
          </span>
        </div>
        <div className="hidden items-center gap-1.5 font-mono text-[10px] text-muted-foreground sm:flex">
          <GitBranch size={11} /> main
        </div>
      </div>

      {/* Editor body */}
      <div className="relative flex font-mono text-[13px] leading-[1.85] sm:text-sm">
        {/* Gutter */}
        <div className="border-r border-border/60 bg-background/40 px-3 py-4 text-right">
          {lines.map((_, i) => (
            <div key={i} className="text-muted-foreground/40">
              {i + 1}
            </div>
          ))}
        </div>

        {/* Code */}
        <pre className="flex-1 overflow-hidden whitespace-pre py-4 pl-4 pr-6 text-foreground/90">
          {lines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 + i * 0.06, duration: 0.35 }}
            >
              {line || ' '}
            </motion.div>
          ))}
        </pre>
      </div>

      {/* Status bar */}
      <div className="flex items-center justify-between gap-3 border-t border-border bg-primary px-3 py-1 font-mono text-[10px] text-primary-foreground">
        <div className="flex items-center gap-3">
          <span>● TypeScript React</span>
          <span className="hidden sm:inline">UTF-8</span>
        </div>
        <div className="flex items-center gap-3">
          <span>Ln {lines.length}, Col 1</span>
          <span className="hidden sm:inline">Spaces: 2</span>
        </div>
      </div>
    </div>
  )
}

export default CodeEditor
