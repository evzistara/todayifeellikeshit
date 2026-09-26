import { ShieldAlert } from "lucide-react";

export default function MedicalDisclaimer() {
  return (
    <div className="w-full bg-[#111615] border-y border-[#1d2624] py-6 px-4">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 text-neutral-300">
        <div className="flex items-center gap-2 shrink-0 text-[#6ee7b7]">
          <ShieldAlert className="w-5 h-5" />
          <span className="text-xs font-mono uppercase tracking-widest font-semibold text-[#6ee7b7]">
            Important Note
          </span>
        </div>
        <p className="text-sm leading-relaxed text-neutral-400">
          This site is a personal creative project and shared space. I am not a
          doctor or mental health professional, and nothing here is medical
          advice. If you are in crisis or need professional support, please
          reach out to a healthcare provider or a local helpline. ❤️
        </p>
      </div>
    </div>
  );
}
