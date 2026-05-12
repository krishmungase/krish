import { motion } from 'framer-motion'

import { AsteriskStar, ScribbleArrow } from '@/components/effects'

const SectionHeading = ({
  eyebrow,
  title,
  description,
  note,
  noteDirection = 'down-right',
  align = 'left',
}) => {
  const isCenter = align === 'center'
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6 }}
      className={`relative mb-12 flex max-w-3xl flex-col gap-4 ${
        isCenter ? 'mx-auto items-center text-center' : ''
      }`}
    >
      {eyebrow && (
        <div className="flex items-center gap-2">
          <AsteriskStar size={18} />
          <span className="font-mono text-[11px] uppercase tracking-[0.32em] text-muted-foreground">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
      {note && !isCenter && (
        <ScribbleArrow
          label={note}
          direction={noteDirection}
          className="absolute -right-2 top-2 hidden lg:block"
          labelClassName="text-primary/80 -rotate-3"
        />
      )}
    </motion.div>
  )
}

export default SectionHeading
