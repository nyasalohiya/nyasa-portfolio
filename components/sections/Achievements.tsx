import AnimatedSection from "@/components/shared/AnimatedSection";
import { Trophy, Award, Code2 } from "lucide-react";
import Image from "next/image";

export default function Achievements() {
  return (
    <AnimatedSection id="achievements" className="py-28 border-t border-white/[0.06] bg-[#030305]">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#7C5CFF] mb-2">
            Recognition & Stats
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Achievements
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="ai-glow-card rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-xl bg-[#7C5CFF]/15 border border-[#7C5CFF]/30 flex items-center justify-center text-[#7C5CFF]">
                <Trophy className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">Hackathons & Highlights</h3>
            </div>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-[#7C5CFF] shrink-0"></span>
                <div>
                  <p className="font-semibold text-white">AI Innovation Hackathon</p>
                  <p className="text-xs text-muted-foreground">Winner — Autonomous LangGraph RAG Agent System</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-[#7C5CFF] shrink-0"></span>
                <div>
                  <p className="font-semibold text-white">Enterprise AI Challenge</p>
                  <p className="text-xs text-muted-foreground">Finalist — High-Throughput Document QA Pipeline</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="ai-glow-card rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-xl bg-[#7C5CFF]/15 border border-[#7C5CFF]/30 flex items-center justify-center text-[#7C5CFF]">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">Certifications</h3>
            </div>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-[#7C5CFF] shrink-0"></span>
                <div>
                  <p className="font-semibold text-white">Azure AI Engineer Associate</p>
                  <p className="text-xs text-muted-foreground">Microsoft</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-[#7C5CFF] shrink-0"></span>
                <div>
                  <p className="font-semibold text-white">Deep Learning Specialization</p>
                  <p className="text-xs text-muted-foreground">DeepLearning.AI</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* GitHub Stats Card */}
        <div className="ai-glow-card rounded-3xl p-8 border border-white/10 overflow-hidden">
          <div className="flex items-center gap-3 mb-6">
            <Code2 className="w-5 h-5 text-[#7C5CFF]" />
            <h3 className="text-xl font-bold text-white">GitHub Contribution Metrics</h3>
          </div>
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-center">
            <Image 
              src="https://github-readme-stats.vercel.app/api?username=nyasalohiya&show_icons=true&theme=transparent&hide_border=true&title_color=7C5CFF&text_color=9ca3af&icon_color=A78BFA&bg_color=00000000"
              alt="GitHub Stats"
              width={450}
              height={195}
              className="w-full max-w-[450px]"
              unoptimized
            />
            <Image 
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=nyasalohiya&layout=compact&theme=transparent&hide_border=true&title_color=7C5CFF&text_color=9ca3af&bg_color=00000000"
              alt="Top Languages"
              width={350}
              height={195}
              className="w-full max-w-[350px]"
              unoptimized
            />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
