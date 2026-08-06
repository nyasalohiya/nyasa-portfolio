import AnimatedSection from "@/components/shared/AnimatedSection";
import { experiences } from "@/lib/data/experience";
import { Briefcase, Building2, CheckCircle2 } from "lucide-react";

export default function Experience() {
  return (
    <AnimatedSection id="experience" className="py-28 border-t border-white/[0.06] bg-[#030305]">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#7C5CFF] mb-2">
            Track Record
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Professional Experience
          </h2>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div key={exp.id} className="ai-glow-card rounded-3xl p-8 sm:p-10 border border-white/10">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-6 pb-6 border-b border-white/10">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#A78BFA] uppercase tracking-wider mb-1">
                    <Building2 className="w-3.5 h-3.5" />
                    {exp.company}
                  </div>
                  <h3 className="text-2xl font-extrabold text-white">{exp.role}</h3>
                </div>
                <span className="px-4 py-1.5 rounded-full bg-[#7C5CFF]/15 border border-[#7C5CFF]/30 text-xs font-mono font-medium text-[#A78BFA] w-fit">
                  {exp.period}
                </span>
              </div>
              
              <ul className="space-y-3 text-muted-foreground text-sm sm:text-base leading-relaxed mb-8">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#7C5CFF] shrink-0 mt-1" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="text-xs font-medium px-3 py-1 bg-white/[0.04] text-white/90 rounded-lg border border-white/10">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
