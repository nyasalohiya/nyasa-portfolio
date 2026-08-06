import AnimatedSection from "@/components/shared/AnimatedSection";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <AnimatedSection id="education" className="py-24 border-t border-white/[0.06] bg-[#050508]">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#7C5CFF] mb-2">
            Academic Background
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Education
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="ai-glow-card rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-4">
                <div className="w-9 h-9 rounded-xl bg-[#7C5CFF]/15 border border-[#7C5CFF]/30 flex items-center justify-center text-[#7C5CFF]">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-muted-foreground">
                  2024 – 2026
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">M.Sc. Information Technology</h3>
              <p className="text-sm font-medium text-[#A78BFA] mb-2">SKIPS UNIVERSITY</p>
              <p className="text-xs text-muted-foreground">Data Science Specialization</p>
            </div>
          </div>

          <div className="ai-glow-card rounded-2xl p-8 flex flex-col justify-between opacity-90">
            <div>
              <div className="flex justify-between items-center mb-4">
                <div className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-muted-foreground">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-muted-foreground">
                  2021 – 2024
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Bachelor of Computer Applications (BCA)</h3>
              <p className="text-sm font-medium text-[#A78BFA] mb-2">Umiya BCA College</p>
              <p className="text-xs text-muted-foreground">CGPA: 7.55 / 8.0</p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
