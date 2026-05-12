import { useState } from 'react'
import { motion } from 'framer-motion'

import { cn } from '@/lib'

const ProfilePhoto = ({ className }) => {
  const [errored, setErrored] = useState(false)

  return (
    <div className={cn('relative w-fit', className)}>
      {/* Offset yellow sticker behind */}
      <div
        aria-hidden="true"
        className="absolute inset-0 translate-x-3 translate-y-3 rounded-[2rem] bg-primary"
      />

      {/* Photo card */}
      <motion.div
        whileHover={{ y: -3 }}
        transition={{ type: 'spring', stiffness: 300, damping: 22 }}
        className="relative h-80 w-72 overflow-hidden rounded-[2rem] border border-border bg-card sm:h-[24rem] sm:w-[20rem]"
      >
        {!errored ? (
          <img
            src="/krishna.jpg"
            alt="Krish Mungase"
            loading="eager"
            onError={() => setErrored(true)}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-card px-6 text-center">
            <div className="font-display text-6xl font-extrabold text-primary">
              KM
            </div>
            <p className="text-xs text-muted-foreground">
              Drop your photo at
              <br />
              <code className="font-mono text-foreground">
                public/krish.jpeg
              </code>
            </p>
          </div>
        )}

        {/* Available pill — sits inside the photo, top-left */}
        <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full border border-emerald-400/40 bg-black/55 px-2.5 py-1 text-[11px] font-medium text-emerald-300 backdrop-blur">
          <span className="relative grid h-1.5 w-1.5 place-items-center">
            <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-80" />
            <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </span>
          Available for work
        </span>
      </motion.div>
    </div>
  )
}

export default ProfilePhoto
