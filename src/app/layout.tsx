import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Image from "next/image";
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
  title: "Nota",
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
        <nav className="fixed top-0 w-full z-50 border-b border-[#262626] bg-[#050505]/80 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <Link href="/" className="flex items-center gap-2 font-bold text-lg tracking-tight">
                <Image src="/nota-icon.png" alt="Nota" width={28} height={28} className="rounded-lg" />
                Nota
              </Link>
              <div className="flex items-center gap-8">
                <Link href="/privacy" className="text-sm font-medium text-[#888] hover:text-white transition-colors">
                  Privacy
                </Link>
                <Link href="/terms" className="text-sm font-medium text-[#888] hover:text-white transition-colors">
                  Terms
                </Link>
                <a href="https://nota-cash-count.userjot.com/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-[#888] hover:text-white transition-colors">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </nav>

        <main className="pt-16 pb-20">{children}</main>

        <footer className="border-t border-[#262626] py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
            <Image src="/nota-icon.png" alt="Nota" width={40} height={40} className="rounded-xl mb-4" />
            <span className="font-bold text-lg tracking-tight mb-2">Nota</span>
            <div className="flex gap-6 mb-4 text-sm text-[#888]">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
              <a href="https://nota-cash-count.userjot.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Contact</a>
            </div>
            <p className="text-[#666] text-sm">
              &copy; {new Date().getFullYear()} Nota. All rights reserved.
            </p>
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
