'use client'

import Link from 'next/link'
import { useState } from 'react'

const navLinks = [
  { href: '/pricing', label: 'قیمت‌ها' },
  { href: '/blog', label: 'وبلاگ' },
  { href: '/setup', label: 'راهنمای نصب' },
  { href: '/faq', label: 'سوالات متداول' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 glass">
      <div className="section flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <span className="text-2xl">🇮🇷</span>
          <span className="text-gradient">ایران آی‌پی پلاس</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-white transition-colors">
              {l.label}
            </Link>
          ))}
          <Link
            href="/pricing"
            className="px-4 py-2 bg-sky-500 hover:bg-sky-400 text-white rounded-xl font-medium transition-colors"
          >
            شروع کنید
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-slate-300 hover:text-white"
          onClick={() => setOpen(!open)}
          aria-label="منو"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-950/95 backdrop-blur-md px-4 py-4 flex flex-col gap-3">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-slate-300 hover:text-white py-2 text-sm"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/pricing"
            className="mt-2 px-4 py-2 bg-sky-500 text-white rounded-xl text-sm text-center"
            onClick={() => setOpen(false)}
          >
            شروع کنید
          </Link>
        </div>
      )}
    </header>
  )
}
