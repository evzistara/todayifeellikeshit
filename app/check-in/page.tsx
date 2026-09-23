'use client'

import { Check } from 'lucide-react'
import { useState } from 'react'
import { PageIntro, PageShell } from '@/components/site-header'

const moods = ['Barely here', 'Not great', 'Getting by', 'Pretty okay', 'Actually good']

export default function CheckInPage() {
  const [selected, setSelected] = useState<number | null>(null)
  return <PageShell><PageIntro number="02 / Check in" title={<>How are you,<br /><span className="text-[#8fe3cf]">really?</span></>}><p>There is no right answer here. Just notice what is true, without judging it. No gold stars required.</p></PageIntro><section className="mx-auto max-w-[1000px] px-6 py-20 lg:px-10"><div className="rounded-3xl border border-white/10 bg-[#202321] p-7 md:p-10"><div className="grid gap-3 sm:grid-cols-5">{moods.map((mood, index) => <button key={mood} onClick={() => setSelected(index)} className={`min-h-28 rounded-2xl border p-4 text-left text-sm transition-all ${selected === index ? 'border-[#8fe3cf] bg-[#8fe3cf] text-[#151617]' : 'border-white/10 bg-[#292c2a] text-[#aaa9a2] hover:border-white/30'}`}><span className="mb-5 block text-3xl font-black">{index + 1}</span>{mood}</button>)}</div>{selected !== null && <div className="mt-7 flex items-center gap-3 border-t border-white/10 pt-6 text-sm text-[#bfc0b8]"><Check size={18} className="text-[#8fe3cf]" />Noted. You made space for how you feel today.</div>}</div></section></PageShell>
}
