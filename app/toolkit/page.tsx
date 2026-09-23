'use client'

import { Minus, Plus } from 'lucide-react'
import { useState } from 'react'
import { PageIntro, PageShell } from '@/components/site-header'

const tools = [['The 5-minute reset', 'Put both feet on the floor. Name five things you can see. Take one slow breath. That is enough for now.'], ['Make the next thing tiny', 'You do not need to fix your life today. Drink water. Open the window. Reply to one message.'], ['Borrow someone else’s hope', 'Text someone: “I am having a hard day. Can you stay with me for a bit?” You do not have to explain everything.']]

export default function ToolkitPage() {
  const [open, setOpen] = useState<number | null>(null)
  return <PageShell><PageIntro number="03 / Coping toolkit" title={<>For right<br /><span className="text-[#8fe3cf]">now.</span></>}><p>Small things for when your capacity is low. You do not have to do all of them. Pick the one that feels least impossible.</p></PageIntro><section className="mx-auto max-w-[1000px] px-6 py-20 lg:px-10"><div className="divide-y divide-[#151617]/20 rounded-3xl bg-[#8fe3cf] px-7 text-[#151617] md:px-10">{tools.map(([title, text], index) => <button key={title} className="flex w-full items-start justify-between gap-6 py-7 text-left" onClick={() => setOpen(open === index ? null : index)}><span><span className="mb-2 block text-xl font-black">{title}</span>{open === index && <span className="block max-w-xl text-base leading-relaxed opacity-75">{text}</span>}</span>{open === index ? <Minus size={22} /> : <Plus size={22} />}</button>)}</div></section></PageShell>
}
