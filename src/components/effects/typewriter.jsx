import { useEffect, useState } from 'react'

const Typewriter = ({
  words = [],
  typingSpeed = 70,
  deletingSpeed = 35,
  pause = 1400,
  className = '',
}) => {
  const [index, setIndex] = useState(0)
  const [sub, setSub] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (!words.length) return
    const current = words[index % words.length]
    let timeout

    if (!deleting && sub === current) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && sub === '') {
      setDeleting(false)
      setIndex((i) => (i + 1) % words.length)
    } else {
      const speed = deleting ? deletingSpeed : typingSpeed
      timeout = setTimeout(() => {
        setSub((prev) =>
          deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1)
        )
      }, speed)
    }

    return () => clearTimeout(timeout)
  }, [sub, deleting, index, words, typingSpeed, deletingSpeed, pause])

  return (
    <span className={className}>
      <span>{sub}</span>
      <span
        aria-hidden="true"
        className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] bg-primary align-middle animate-pulse"
      />
    </span>
  )
}

export default Typewriter
