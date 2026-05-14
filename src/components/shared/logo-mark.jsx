import { motion } from 'framer-motion'

import { cn } from '@/lib'

/**
 * App-icon style logo — bold black K on a rounded yellow square.
 * The kind of mark that works on a favicon, app icon, or business card.
 * Hover: gentle tilt + scale, like picking up a sticker.
 */
const LogoMark = ({ className, animated = true }) => {
  return (
    <motion.span
      whileHover={animated ? 'hover' : undefined}
      initial="rest"
      animate="rest"
      variants={{ rest: {}, hover: {} }}
      className={cn(
        'relative inline-grid shrink-0 place-items-center',
        className
      )}
      aria-label="Krish Mungase"
    >
      <svg
        viewBox="0 0 40 40"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full overflow-visible"
      >
        {/* Soft yellow drop shadow */}
        <motion.rect
          x="2"
          y="3"
          width="36"
          height="36"
          rx="9"
          fill="#ffc11c"
          opacity="0.25"
          variants={{
            rest: { y: 3, opacity: 0.25 },
            hover: { y: 5, opacity: 0.4 },
          }}
          transition={{ type: 'spring', stiffness: 240, damping: 16 }}
        />

        {/* Rounded yellow square — the "icon tile" */}
        <motion.rect
          x="0"
          y="0"
          width="40"
          height="40"
          rx="9"
          fill="#ffc11c"
          variants={{
            rest: { scale: 1, rotate: 0 },
            hover: { scale: 1.04, rotate: -5 },
          }}
          style={{ transformOrigin: '20px 20px' }}
          transition={{ type: 'spring', stiffness: 220, damping: 16 }}
        />

        {/* Bold black K — three confident strokes */}
        <motion.g
          stroke="#0a0a0a"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          variants={{
            rest: { scale: 1, rotate: 0 },
            hover: { scale: 1.04, rotate: -5 },
          }}
          style={{ transformOrigin: '20px 20px' }}
          transition={{ type: 'spring', stiffness: 220, damping: 16 }}
        >
          {/* vertical stem */}
          <line x1="13" y1="10" x2="13" y2="30" />
          {/* upper arm */}
          <line x1="13" y1="20" x2="28" y2="10" />
          {/* lower arm */}
          <line x1="13" y1="20" x2="28" y2="30" />
        </motion.g>
      </svg>
    </motion.span>
  )
}

export default LogoMark
