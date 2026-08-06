import AnimatedSection from "@/components/shared/AnimatedSection";
import { Award, Trophy, Code } from "lucide-react";
import Image from "next/image";

export default function Achievements() {
  return (
    <AnimatedSection id="achievements" className="py-24">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight text-center">
          Achievements & Stats
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Hackathons / Certifications (Placeholder structure) */}
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <Trophy className="w-6 h-6 text-yellow-500" />
              <h3 className="text-xl font-bold">Hackathons & Competitions</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-primary shrink-0"></span>
                <div>
                  <p className="font-semibold">AI Innovation Hackathon</p>
                  <p className="text-sm text-muted-foreground">Winner - Built autonomous RAG agents</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-primary shrink-0"></span>
                <div>
                  <p className="font-semibold">Enterprise AI Challenge</p>
                  <p className="text-sm text-muted-foreground">Finalist - Optimized LLM latency</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-6 h-6 text-blue-500" />
              <h3 className="text-xl font-bold">Certifications</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-primary shrink-0"></span>
                <div>
                  <p className="font-semibold">Azure AI Engineer Associate</p>
                  <p className="text-sm text-muted-foreground">Microsoft</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-primary shrink-0"></span>
                <div>
                  <p className="font-semibold">Deep Learning Specialization</p>
                  <p className="text-sm text-muted-foreground">DeepLearning.AI</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* GitHub Stats */}
        <div className="bg-card border border-border rounded-xl p-6 shadow-sm overflow-hidden">
          <div className="flex items-center gap-3 mb-6">
            <Code className="w-6 h-6 text-foreground" />
            <h3 className="text-xl font-bold">GitHub Activity</h3>
          </div>
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-center">
            {/* Using github-readme-stats API with standard params */}
            <Image 
              src="https://github-readme-stats.vercel.app/api?username=nyasalohiya&show_icons=true&theme=transparent&hide_border=true&title_color=fff&text_color=9ca3af&icon_color=fff&bg_color=00000000"
              alt="GitHub Stats"
              width={450}
              height={195}
              className="w-full max-w-[450px] dark:invert-0 invert filter"
              unoptimized
            />
            <Image 
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=nyasalohiya&layout=compact&theme=transparent&hide_border=true&title_color=fff&text_color=9ca3af&bg_color=00000000"
              alt="Top Languages"
              width={350}
              height={195}
              className="w-full max-w-[350px] dark:invert-0 invert filter"
              unoptimized
            />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
