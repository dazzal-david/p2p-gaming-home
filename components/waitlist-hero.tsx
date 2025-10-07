export function WaitlistHero() {
  return (
    <section className="flex flex-col justify-center gap-5">
      <span className="inline-flex w-fit items-center rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
        COMING SOON
      </span>
      <h1 className="text-pretty text-4xl font-semibold leading-tight md:text-5xl">
        Play AAA games without the rig.
        <span className="block text-muted-foreground">Host your PC. Earn while you’re AFK.</span>
      </h1>
      <p className="max-w-prose text-pretty text-base leading-relaxed text-muted-foreground">
        NovaArcade is a peer‑to‑peer gaming network where players can rent high‑performance PCs on demand, and hosts get
        paid for sharing their idle hardware. Lower the barrier to PC gaming—anytime, anywhere.
      </p>
      <ul className="grid list-disc gap-2 pl-5 text-sm text-muted-foreground">
        <li>
          <span className="text-foreground">Instant access</span> to powerful hosts near you
        </li>
        <li>
          <span className="text-foreground">Fair payouts</span> for hosts with transparent rates
        </li>
        <li>
          <span className="text-foreground">Low-latency</span> sessions optimized for performance
        </li>
      </ul>
      <div className="mt-2 h-px w-24 bg-border" />
      <p className="text-xs text-muted-foreground">Be the first to try it and help shape the beta.</p>
    </section>
  )
}
