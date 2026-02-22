import Image from "next/image";

const SCREENSHOTS = [
  { src: "/screenshots/01.png", title: "The Fastest Way to Count Cash", subtitle: "Count any register in under 60 seconds" },
  { src: "/screenshots/02.png", title: "Exact to the Dollar", subtitle: "Never second-guess your count" },
  { src: "/screenshots/03.png", title: "Never Recount Again", subtitle: "Every session saved automatically" },
  { src: "/screenshots/04.png", title: "Send Reports in One Tap", subtitle: "Share reports instantly" },
  { src: "/screenshots/05.png", title: "5 Currencies Free. Forever.", subtitle: "Global support out of the box" },
  { src: "/screenshots/06.png", title: "Every Currency. Everywhere.", subtitle: "160+ currencies with Nota Pro" },
  { src: "/screenshots/07.png", title: "Your Bills. Your Way.", subtitle: "Customize denominations to match your register" },
];

const FEATURES = [
  {
    title: "100% Private",
    description: "All data stays on your device. No accounts, no analytics, no tracking. Your financial data is yours alone.",
  },
  {
    title: "Multi-Currency",
    description: "Support for multiple currencies with customizable denominations. Count whatever cash you have.",
  },
  {
    title: "Pro Features",
    description: "Session history, custom denominations, and more with Nota Pro. Unlock the full potential.",
  },
];

export default function Home() {
  return (
    <main>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        <Image
          src="/nota-icon.png"
          alt="Nota"
          width={96}
          height={96}
          className="mx-auto mb-8 rounded-2xl shadow-lg"
        />
        <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#888] mb-6 uppercase">
          Cash Counting App
        </p>
        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-extrabold tracking-tight mb-6">
          Nota
        </h1>
        <p className="text-xl sm:text-2xl font-medium text-[#ccc] mb-4">
          Count faster. Count smarter.
        </p>
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#888] mb-10 leading-relaxed">
          No accounts, no cloud, no tracking. Your money stays your business.
        </p>
        <a
          href="https://apps.apple.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium rounded-full border border-[#262626] bg-[#121212] hover:bg-[#1a1a1a] transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
        >
          <svg className="w-5 h-5 mr-2 -ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.3-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
          </svg>
          Download on the App Store
        </a>
      </div>

      <div className="relative w-full overflow-hidden py-12">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#050505] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#050505] to-transparent z-10" />

        <div className="scrollbar-hide flex overflow-x-auto gap-6 px-4 sm:px-8 snap-x snap-mandatory pb-8">
          {SCREENSHOTS.map((s) => (
            <div
              key={s.src}
              className="snap-center shrink-0 w-[300px] sm:w-[340px] flex flex-col bg-[#121212] border border-[#262626] rounded-2xl overflow-hidden hover:border-[#444] transition-colors duration-300 group"
            >
              <Image
                src={s.src}
                alt={s.title}
                width={886}
                height={1920}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="p-8 rounded-2xl bg-[#121212] border border-[#262626] relative overflow-hidden group"
            >
              <h3 className="text-lg font-bold mb-3">{feature.title}</h3>
              <p className="text-[#888] text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
