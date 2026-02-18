const DENOMINATION_COLORS = [
  "#CDB38B",
  "#CD5C5C",
  "#3CB371",
  "#9370DB",
  "#87CEEB",
];

const FEATURES = [
  {
    title: "100% Private",
    description: "All data stays on your device. No accounts, no analytics, no tracking.",
    color: DENOMINATION_COLORS[0],
  },
  {
    title: "Multi-Currency",
    description: "Support for multiple currencies with customizable denominations.",
    color: DENOMINATION_COLORS[2],
  },
  {
    title: "Pro Features",
    description: "Session history, custom denominations, and more with Cash Count Pro.",
    color: DENOMINATION_COLORS[3],
  },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl px-6">
      <section className="flex flex-col items-center gap-4 py-20 text-center md:py-28">
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-muted">
          Cash Counting App
        </p>
        <h1 className="font-mono text-6xl font-bold tracking-tight md:text-7xl">
          Cash Count
        </h1>
        <p className="mt-2 text-lg text-muted">
          Count faster. Count smarter.
        </p>
        <p className="max-w-md text-sm leading-relaxed text-subtle">
          No accounts, no cloud, no tracking. Your money stays your business.
        </p>
        <a
          href="https://apps.apple.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 rounded-xl bg-white/10 px-6 py-3 text-sm font-medium transition-colors hover:bg-white/20"
        >
          Download on the App Store
        </a>
      </section>

      <section className="grid gap-3 pb-20 md:grid-cols-3">
        {FEATURES.map((feature) => (
          <div
            key={feature.title}
            className="relative overflow-hidden rounded-2xl border border-border bg-surface p-5"
          >
            <div
              className="absolute left-0 top-0 h-full w-[3px]"
              style={{ backgroundColor: feature.color }}
            />
            <h3 className="mb-1.5 text-sm font-semibold">{feature.title}</h3>
            <p className="text-sm leading-relaxed text-muted">{feature.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
