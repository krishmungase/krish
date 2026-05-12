import { useState } from 'react'
import { motion } from 'framer-motion'

import { cn } from '@/lib'

/**
 * Polaroid-style photo card with a paper tape strip on top.
 * Rotates slightly, lifts on hover.
 */
const Polaroid = ({ src = '/krish.jpeg', caption = 'krish', className }) => {
  const [errored, setErrored] = useState(false)
  return (
    <motion.div
      whileHover={{ rotate: -2, y: -4 }}
      transition={{ type: 'spring', stiffness: 220, damping: 18 }}
      className={cn(
        'relative w-fit -rotate-6 bg-[#f4eedb] p-3 pb-12 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7),0_0_0_1px_rgba(0,0,0,0.08)]',
        className
      )}
    >
      {/* Tape strip on top */}
      <span
        aria-hidden="true"
        className="absolute -top-3 left-1/2 h-6 w-20 -translate-x-1/2 rotate-[3deg] rounded-sm bg-primary/70 mix-blend-screen"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, rgba(0,0,0,0.05) 0 4px, transparent 4px 8px)',
        }}
      />

      {/* Photo */}
      <div className="relative h-56 w-44 overflow-hidden bg-card sm:h-64 sm:w-52">
        {!errored ? (
          <img
            src={src}
            alt="Krish Mungase"
            loading="eager"
            onError={() => setErrored(true)}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center bg-card text-center">
            <div className="font-display text-5xl font-extrabold text-primary">
              KM
            </div>
            <p className="mt-2 px-3 text-[10px] text-muted-foreground">
              drop /krish.jpeg
            </p>
          </div>
        )}
      </div>

      {/* Caption */}
      <div className="absolute bottom-2 left-0 right-0 flex flex-col items-center">
        <span className="font-script text-2xl text-neutral-900">{caption}</span>
        <span className="font-mono text-[8px] uppercase tracking-widest text-neutral-700">
          MIT AOE · 2026
        </span>
      </div>
    </motion.div>
  )
}

export default Polaroid
