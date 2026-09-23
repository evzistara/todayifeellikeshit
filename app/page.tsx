'use client'

import { useState } from 'react'
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Heart,
  Menu,
  Minus,
  Plus,
  ShieldAlert,
  Sparkles,
  X,
} from 'lucide-react'

const moods = [
  { label: 'Barely here', score: 1 },
  { label: 'Not great', score: 2 },
  { label: 'Getting by', score: 3 },
  { label: 'Pretty okay', score: 4 },
  { label: 'Actually good', score: 5 },
]

const resources = [
  { type: 'Crisis support', title: '988 Suicide & Crisis Lifeline', desc: 'Free, confidential support for people in crisis or emotional distress.', action: 'Call or text 988', urgent: true },
  { type: 'Therapy', title: 'Find a therapist', desc: 'A searchable directory to find licensed mental health professionals.', action: 'Visit Psychology Today' },
  { type: 'Peer support', title: '7 Cups', desc: 'Talk to a trained listener anonymously, any time you need it.', action: 'Explore 7 Cups' },
]

const toolkit = [
  ['The 5-minute reset', 'Put both feet on the floor. Name five things you can see. Take one slow breath. That is enough for now.'],
  ['Make the next thing tiny', 'You do not need to fix your life today. Drink water. Open the window. Reply to one message.'],
  ['Borrow someone else’s hope', 'Text someone: “I am having a hard day. Can you stay with me for a bit?” You do not have to explain everything.'],
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedMood, setSelectedMood] = useState<number | null>(null)
  const [openTool, setOpenTool] = useState<number | null>(null)

  return (
    <main className="min-h-screen overflow-hidden bg-[#151617] text-[#f3f0e9] selection:bg-[#8fe3cf] selection:text-[#151617]">
      <header className="mx-auto flex max-w-[1240px] items-center justify-between px-6 py-6 lg:px-10">
        <a href="#top" className="text-sm font-bold tracking-[-0.02em]">today i feel like shit<span className="text-[#8fe3cf]">.</span></a>
        <nav className="hidden items-center gap-8 text-sm text-[#aaa9a2] md:flex" aria-label="Main navigation">
          <a className="transition-colors hover:text-white" href="/why">The point</a>
          <a className="transition-colors hover:text-white" href="/check-in">Check in</a>
          <a className="transition-colors hover:text-white" href="/resources">Resources</a>
          <a className="transition-colors hover:text-white" href="/about">About</a>
        </nav>
        <button onClick={() => setMenuOpen(!menuOpen)} className="rounded-full border border-white/15 p-2 md:hidden" aria-label="Toggle menu">
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
        {menuOpen && <nav className="absolute right-6 top-20 z-10 flex w-48 flex-col gap-4 rounded-2xl border border-white/10 bg-[#222423] p-5 text-sm shadow-xl md:hidden"><a href="/why" onClick={() => setMenuOpen(false)}>The point</a><a href="/check-in" onClick={() => setMenuOpen(false)}>Check in</a><a href="/resources" onClick={() => setMenuOpen(false)}>Resources</a><a href="/about" onClick={() => setMenuOpen(false)}>About</a></nav>}
      </header>

      <section id="top" className="mx-auto grid min-h-[620px] max-w-[1240px] items-center gap-12 px-6 pb-20 pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:pt-20">
        <div>
          <p className="mb-7 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#b0b1a9]"><span className="h-2 w-2 rounded-full bg-[#8fe3cf]" />A softer place to land</p>
          <h1 className="max-w-4xl text-[clamp(4rem,10vw,9.6rem)] font-black leading-[0.82] tracking-[-0.085em] text-[#f3f0e9]">Today<br /><span className="text-[#8fe3cf]">I feel</span><br />like shit<span className="text-[#8fe3cf]">.</span></h1>
          <p className="mt-10 max-w-md text-lg leading-relaxed text-[#aaa9a2]">A place for the days when “I’m fine” is not going to cut it. No toxic positivity. No fixing you. Just honest tools, useful resources, and a reminder that you are not the only one.</p>
          <a href="#check-in" className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#8fe3cf] px-6 py-3 text-sm font-bold text-[#151617] transition-transform hover:scale-105">Start where you are <ArrowDown size={16} /></a>
        </div>
        <div className="relative hidden h-[420px] items-center justify-center lg:flex">
          <div className="absolute h-[330px] w-[330px] rotate-6 rounded-[42%_58%_61%_39%/45%_42%_58%_55%] bg-[#272a28]" />
          <div className="relative flex h-56 w-56 -rotate-6 flex-col justify-between rounded-[40%_60%_58%_42%/44%_42%_58%_56%] bg-[#8fe3cf] p-8 text-[#151617] shadow-2xl shadow-black/20"><Heart size={28} fill="currentColor" /><span className="text-3xl font-black leading-none tracking-[-0.06em]">still<br />here<span className="text-xl">.</span></span><span className="text-xs font-bold uppercase tracking-[0.18em]">that counts</span></div>
          <span className="absolute bottom-3 left-4 max-w-32 text-xs uppercase leading-relaxed tracking-[0.16em] text-[#666962]">You don&apos;t have to be positive to be moving forward.</span>
        </div>
      </section>

      <section id="why" className="border-y border-white/10 bg-[#1b1d1c]">
        <div className="mx-auto grid max-w-[1240px] gap-12 px-6 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
          <div><p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#8fe3cf]">01 / The point</p><h2 className="max-w-sm text-4xl font-black leading-[0.95] tracking-[-0.055em] md:text-6xl">Feelings aren&apos;t failures.</h2></div>
          <div className="max-w-2xl space-y-6 text-xl leading-relaxed text-[#b9b9b1]"><p>Some days are heavy. That does not mean you are weak, broken, or doing life wrong.</p><p><span className="text-[#f3f0e9]">Today I feel like shit.</span> exists to make room for the full range of being human — the messy, complicated, deeply unglamorous parts included.</p><p className="text-base text-[#858780]">Take what helps. Leave what doesn&apos;t. Come back whenever you need a place that won&apos;t ask you to pretend.</p></div>
        </div>
      </section>

      <section id="check-in" className="mx-auto max-w-[1240px] px-6 py-24 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">
          <div><p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#8fe3cf]">02 / Check in</p><h2 className="text-4xl font-black leading-[0.95] tracking-[-0.055em] md:text-6xl">No gold stars<br />required.</h2><p className="mt-6 max-w-xs text-[#898b84]">There is no right answer here. Just notice what is true, without judging it.</p></div>
          <div className="rounded-3xl border border-white/10 bg-[#202321] p-7 md:p-10"><p className="mb-8 text-2xl font-bold tracking-[-0.03em]">How are you, really?</p><div className="grid gap-3 sm:grid-cols-5">{moods.map((mood) => <button key={mood.score} onClick={() => setSelectedMood(mood.score)} className={`min-h-24 rounded-2xl border p-3 text-left text-sm transition-all ${selectedMood === mood.score ? 'border-[#8fe3cf] bg-[#8fe3cf] text-[#151617]' : 'border-white/10 bg-[#292c2a] text-[#aaa9a2] hover:border-white/30'}`}><span className="mb-5 block text-2xl font-black">{mood.score}</span>{mood.label}</button>)}</div>{selectedMood && <div className="mt-7 flex items-center gap-3 border-t border-white/10 pt-6 text-sm text-[#bfc0b8]"><Check size={18} className="text-[#8fe3cf]" /> Noted. You made space for how you feel today.</div>}</div>
        </div>
      </section>

      <section className="bg-[#8fe3cf] text-[#151617]"><div className="mx-auto grid max-w-[1240px] gap-12 px-6 py-20 lg:grid-cols-[0.7fr_1.3fr] lg:px-10"><div><p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] opacity-60">03 / Coping toolkit</p><h2 className="text-4xl font-black leading-[0.95] tracking-[-0.055em] md:text-6xl">For right<br />now.</h2></div><div className="divide-y divide-[#151617]/20">{toolkit.map(([title, text], index) => <button key={title} className="flex w-full items-start justify-between py-6 text-left" onClick={() => setOpenTool(openTool === index ? null : index)}><span><span className="mb-2 block text-xl font-black">{title}</span>{openTool === index && <span className="block max-w-xl text-base leading-relaxed opacity-75">{text}</span>}</span>{openTool === index ? <Minus size={22} /> : <Plus size={22} />}</button>)}</div></div></section>

      <section id="resources" className="mx-auto max-w-[1240px] px-6 py-24 lg:px-10"><div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#8fe3cf]">04 / Resources</p><h2 className="text-4xl font-black leading-[0.95] tracking-[-0.055em] md:text-6xl">You deserve<br />real support.</h2></div><p className="max-w-xs text-sm leading-relaxed text-[#898b84]">Curated places to find professional help, peer support, or immediate crisis care.</p></div><div className="grid gap-4 md:grid-cols-3">{resources.map((resource) => <article key={resource.title} className={`flex min-h-64 flex-col justify-between rounded-3xl border p-6 ${resource.urgent ? 'border-[#8fe3cf]/50 bg-[#252b22]' : 'border-white/10 bg-[#202321]'}`}><div><div className="mb-6 flex items-center justify-between"><span className="text-xs font-bold uppercase tracking-[0.15em] text-[#8fe3cf]">{resource.type}</span>{resource.urgent && <ShieldAlert size={18} className="text-[#8fe3cf]" />}</div><h3 className="text-xl font-bold">{resource.title}</h3><p className="mt-3 text-sm leading-relaxed text-[#999b94]">{resource.desc}</p></div><a href="#" className="mt-8 flex items-center justify-between text-sm font-bold">{resource.action}<ArrowUpRight size={17} /></a></article>)}</div></section>

      <section id="about" className="border-t border-white/10 bg-[#1b1d1c]"><div className="mx-auto max-w-[1240px] px-6 py-24 lg:px-10"><div className="max-w-3xl"><Sparkles className="mb-7 text-[#8fe3cf]" size={28} /><h2 className="text-4xl font-black leading-[0.95] tracking-[-0.055em] md:text-6xl">You can be a work in progress and still be worth showing up for.</h2><p className="mt-8 max-w-xl text-lg leading-relaxed text-[#aaa9a2]">This is an independent project built with care for anyone who has ever felt like they were the only one struggling. You are welcome here exactly as you are.</p></div></div></section>

      <footer className="mx-auto flex max-w-[1240px] flex-col gap-5 px-6 py-8 text-xs text-[#6f716b] md:flex-row md:items-center md:justify-between lg:px-10"><span>today i feel like shit<span className="text-[#8fe3cf]">.</span></span><span>Not medical advice. If you are in immediate danger, call emergency services.</span></footer>
    </main>
  )
}


