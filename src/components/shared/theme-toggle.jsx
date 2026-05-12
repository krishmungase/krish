import { motion } from 'framer-motion'
import { Moon, Sun, Monitor } from 'lucide-react'

import { useTheme } from '@/providers'
import { cn } from '@/lib'

const options = [
  { value: 'light', icon: Sun, label: 'Light' },
  { value: 'system', icon: Monitor, label: 'System' },
  { value: 'dark', icon: Moon, label: 'Dark' },
]

const ThemeToggle = ({ className }) => {
  const { theme, setTheme } = useTheme()
  const activeIndex = options.findIndex((o) => o.value === theme)

  return (
    <div
      role="radiogroup"
      aria-label="Theme"
      className={cn(
        'relative flex items-center gap-0 rounded-full border border-border bg-card/60 p-1 backdrop-blur-md',
        className
      )}
    >
      <motion.span
        aria-hidden="true"
        className="absolute top-1 bottom-1 rounded-full bg-gradient-to-br from-primary/90 to-cyan-400/90 shadow-[0_0_24px_-2px_var(--glow-primary)]"
        animate={{
          left: `calc(${activeIndex} * (100% / 3) + 4px)`,
          width: 'calc(100% / 3 - 8px)',
        }}
        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
      />
      {options.map(({ value, icon: Icon, label }) => {
        const isActive = theme === value
        return (
          <button
            key={value}
            type="button"
            role="radio"
            aria-checked={isActive}
            aria-label={`${label} theme`}
            onClick={() => setTheme(value)}
            className={cn(
              'relative z-10 grid h-8 w-9 place-items-center rounded-full text-muted-foreground transition-colors duration-300',
              isActive && 'text-white'
            )}
          >
            <Icon size={15} strokeWidth={2.2} />
          </button>
        )
      })}
    </div>
  )
}

export default ThemeToggle
