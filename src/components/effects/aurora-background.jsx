const Aurora = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Soft yellow halo top-right, like a single light source */}
      <div
        aria-hidden="true"
        className="absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full opacity-50 blur-[120px] animate-float-slow"
        style={{
          background:
            'radial-gradient(circle, color-mix(in oklab, var(--primary) 55%, transparent) 0%, transparent 65%)',
        }}
      />
      {/* Very subtle counter-glow bottom-left */}
      <div
        aria-hidden="true"
        className="absolute -bottom-32 left-[-10%] h-[480px] w-[480px] rounded-full opacity-25 blur-[140px] animate-float-slower"
        style={{
          background:
            'radial-gradient(circle, color-mix(in oklab, var(--primary) 35%, transparent) 0%, transparent 70%)',
        }}
      />
      <div className="absolute inset-0 bg-grid opacity-50" />
    </div>
  )
}

export default Aurora
