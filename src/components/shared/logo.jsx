const Logo = () => {
  return (
    <a href="#home" className="group inline-flex items-center gap-2.5">
      <span className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-primary to-cyan-400 text-primary-foreground shadow-[0_0_24px_-6px_var(--glow-primary)] transition-transform duration-300 group-hover:scale-105">
        <span className="font-display text-base font-bold">K</span>
        <span className="absolute -bottom-1 -right-1 h-2 w-2 rounded-full bg-emerald-400 ring-2 ring-background" />
      </span>
      <div className="hidden flex-col leading-none sm:flex">
        <span className="font-display text-sm font-semibold">Krish Mungase</span>
        <span className="font-mono text-[10px] text-muted-foreground">/full-stack-dev</span>
      </div>
    </a>
  )
}

export default Logo
