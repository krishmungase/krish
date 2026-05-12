import { cn } from '@/lib'

/**
 * Handwritten note paired with a hand-drawn arrow.
 * Direction controls which way the arrow curves and where the arrowhead sits.
 */
export const ScribbleArrow = ({
  label,
  className,
  direction = 'down-right',
  labelClassName,
}) => {
  const path = {
    'down-right':
      'M6 6 Q40 0 60 30 T140 70',
    'down-left':
      'M138 6 Q100 0 80 30 T4 70',
    up: 'M6 70 Q40 64 60 40 T140 6',
    right: 'M4 30 Q40 0 80 30 T140 30',
  }[direction]

  return (
    <div className={cn('pointer-events-none select-none', className)}>
      {label && (
        <span
          className={cn(
            'block font-handwritten text-xl leading-tight text-muted-foreground/80',
            labelClassName
          )}
        >
          {label}
        </span>
      )}
      <svg
        width="150"
        height="80"
        viewBox="0 0 150 80"
        fill="none"
        className="mt-1 text-muted-foreground/50"
      >
        <path
          d={path}
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          fill="none"
        />
        {/* arrowhead */}
        <path
          d={
            direction === 'down-right'
              ? 'M130 60 L140 70 L128 72'
              : direction === 'down-left'
                ? 'M14 60 L4 70 L16 72'
                : direction === 'up'
                  ? 'M132 14 L140 6 L142 18'
                  : 'M130 22 L140 30 L130 38'
          }
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </div>
  )
}

/** Tiny yellow asterisk (like the reference) */
export const AsteriskStar = ({ className, size = 22 }) => (
  <svg
    aria-hidden="true"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    className={cn('text-primary', className)}
  >
    <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07" />
  </svg>
)

/** Loose circle scribble */
export const CircleScribble = ({ className, size = 80 }) => (
  <svg
    aria-hidden="true"
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    className={cn('text-muted-foreground/40', className)}
  >
    <path
      d="M50 8 C70 8 92 22 92 50 C92 78 70 92 50 92 C30 92 8 78 8 50 C8 22 30 8 50 8 M52 12 C30 14 12 30 14 52 C16 74 36 90 56 88"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
)
