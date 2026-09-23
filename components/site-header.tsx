'use client'

import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/why', label: 'The point' },
  { href: '/check-in', label: 'Check in' },
  { href: '/toolkit', label: 'Toolkit' },
  { href: '/resources', label: 'Resources' },
  { href: '/about', label: 'About' },
]

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="relative z-20 mx-auto flex max-w-[1240px] items-center justify-between px-6 py-6 lg:px-10">
      <a href="/" className="text-sm font-bold tracking-[-0.02em]">today i feel like shit<span className="text-[#8fe3cf]">.</span></a>
      <nav className="hidden items-center gap-6 text-sm text-[#aaa9a2] md:flex" aria-label="Main navigation">
        {links.map((link) => <a key={link.href} className="transition-colors hover:text-white" href={link.href}>{link.label}</a>)}
      </nav>
      <button onClick={() => setMenuOpen(!menuOpen)} className="rounded-full border border-white/15 p-2 md:hidden" aria-label="Toggle menu">
        {menuOpen ? <X size={18} /> : <Menu size={18} />}
      </button>
      {menuOpen && <nav className="absolute right-6 top-20 flex w-52 flex-col gap-4 rounded-2xl border border-white/10 bg-[#222423] p-5 text-sm shadow-xl md:hidden" aria-label="Mobile navigation">
        {links.map((link) => <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>)}
      </nav>}
    </header>
  )
}

export function SiteFooter() {
  return <footer className="mx-auto flex max-w-[1240px] flex-col gap-5 px-6 py-8 text-xs text-[#6f716b] md:flex-row md:items-center md:justify-between lg:px-10"><span>today i feel like shit<span className="text-[#8fe3cf]">.</span></span><span>Not medical advice. If you are in immediate danger, call emergency services.</span></footer>
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return <main className="min-h-screen overflow-hidden bg-[#151617] text-[#f3f0e9] selection:bg-[#8fe3cf] selection:text-[#151617]"><SiteHeader /><div role="note" className="mx-auto max-w-[1240px] px-6 pt-2 lg:px-10"><div className="rounded-2xl border border-[#8fe3cf]/20 bg-[#8fe3cf]/[0.07] px-4 py-3 text-xs leading-relaxed text-[#b9d8cf] md:flex md:items-center md:justify-between md:gap-6"><span><strong className="font-bold text-[#8fe3cf]">A quick note:</strong> Everything here is for education and reflection, not medical advice or a diagnosis.</span><span className="mt-1 block text-[#8fa8a0] md:mt-0">If you&apos;re in immediate danger, contact local emergency services.</span></div></div>{children}<SiteFooter /></main>
}

export function PageIntro({ number, title, children }: { number: string; title: React.ReactNode; children: React.ReactNode }) {
  return <section className="border-b border-white/10 bg-[#1b1d1c]"><div className="mx-auto max-w-[1240px] px-6 py-20 lg:px-10 lg:py-28"><p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#8fe3cf]">{number}</p><h1 className="max-w-4xl text-6xl font-black leading-[0.9] tracking-[-0.07em] md:text-8xl">{title}</h1><div className="mt-8 max-w-2xl text-lg leading-relaxed text-[#aaa9a2]">{children}</div></div></section>
}
