export default function Home() {
  return (
    <div className="flex flex-col items-center px-6">
      <section className="flex max-w-3xl flex-col items-center gap-6 py-24 text-center md:py-32">
        <h1 className="text-5xl font-bold tracking-tight md:text-6xl">
          Cash Count
        </h1>
        <p className="text-xl text-bronze md:text-2xl">
          Count faster. Count smarter.
        </p>
        <p className="max-w-lg text-lg text-white/60">
          A simple, private cash counting app. No accounts, no cloud, no tracking.
          Your money stays your business.
        </p>
        <a
          href="https://apps.apple.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 rounded-full bg-bronze px-8 py-3 text-sm font-semibold text-[#0a0a0a] transition-opacity hover:opacity-90"
        >
          Download on the App Store
        </a>
      </section>

      <section className="grid w-full max-w-4xl gap-6 pb-24 md:grid-cols-3">
        <FeatureCard
          title="100% Private"
          description="All data stays on your device. No accounts, no analytics, no tracking."
        />
        <FeatureCard
          title="Multi-Currency"
          description="Support for multiple currencies with customizable denominations."
        />
        <FeatureCard
          title="Pro Features"
          description="Unlock session history, custom denominations, and more with Cash Count Pro."
        />
      </section>
    </div>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-2xl border border-white/10 p-6">
      <h3 className="mb-2 text-lg font-semibold text-bronze">{title}</h3>
      <p className="text-sm leading-relaxed text-white/60">{description}</p>
    </div>
  );
}
