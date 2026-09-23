import { Sparkles } from 'lucide-react'
import { PageIntro, PageShell } from '@/components/site-header'

export default function AboutPage() {
  return <PageShell><PageIntro number="05 / About" title={<>You are welcome<br /><span className="text-[#8fe3cf]">exactly as you are.</span></>}><p>This is an independent project built with care for anyone who has ever felt like they were the only one struggling.</p></PageIntro><section className="mx-auto max-w-[1000px] px-6 py-20 lg:px-10"><div className="rounded-3xl border border-white/10 bg-[#202321] p-8 md:p-12"><Sparkles className="mb-7 text-[#8fe3cf]" size={28} /><h2 className="max-w-2xl text-3xl font-black leading-tight tracking-[-0.04em] md:text-5xl">A work in progress is still worth showing up for.</h2><p className="mt-8 max-w-xl text-lg leading-relaxed text-[#aaa9a2]">The rest of this space can grow with the people who use it. More stories, guides, and ways to feel a little less alone are coming.</p></div></section></PageShell>
}
