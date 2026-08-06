import AnimatedSection from "@/components/shared/AnimatedSection";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <AnimatedSection id="education" className="py-24 border-t border-border/50 bg-background/50">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight text-center">
          Education
        </h2>
        
        <div className="space-y-6">
          <div className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-sm flex flex-col md:flex-row gap-6 items-start hover:shadow-md transition-shadow">
            <div className="p-4 bg-secondary rounded-full shrink-0">
              <GraduationCap className="w-8 h-8 text-primary" />
            </div>
            
            <div className="w-full">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                <h3 className="text-2xl font-bold">M.Sc. Information Technology</h3>
                <span className="text-sm font-medium text-muted-foreground bg-secondary px-3 py-1 rounded-full mt-2 md:mt-0">
                  2024 – 2026
                </span>
              </div>
              <p className="text-lg text-primary font-medium mb-1">SKIPS UNIVERSITY</p>
              <p className="text-muted-foreground mb-4">
                Data Science Specialization
              </p>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-sm flex flex-col md:flex-row gap-6 items-start hover:shadow-md transition-shadow">
            <div className="p-4 bg-secondary rounded-full shrink-0 opacity-80">
              <GraduationCap className="w-6 h-6 text-muted-foreground" />
            </div>
            
            <div className="w-full">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                <h3 className="text-xl font-bold text-foreground/90">BCA</h3>
                <span className="text-sm font-medium text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full mt-2 md:mt-0">
                  2021 – 2024
                </span>
              </div>
              <p className="text-lg text-primary/80 font-medium mb-1">Umiya BCA College</p>
              <p className="text-muted-foreground mb-4">
                CGPA: 7.55/8.0
              </p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
