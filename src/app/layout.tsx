import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cash Count",
  description: "Count faster. Count smarter. A simple, private cash counting app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
          <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
            <Link href="/" className="font-semibold tracking-tight">
              Cash Count
            </Link>
            <div className="flex gap-6 text-sm text-muted">
              <Link href="/privacy" className="transition-colors hover:text-white">
                Privacy
              </Link>
              <Link href="/terms" className="transition-colors hover:text-white">
                Terms
              </Link>
            </div>
          </nav>
        </header>

        <main className="min-h-[calc(100vh-130px)]">{children}</main>

        <footer className="border-t border-border px-6 py-8 text-center text-sm text-muted">
          &copy; {new Date().getFullYear()} Cash Count
        </footer>
      </body>
    </html>
  );
}
