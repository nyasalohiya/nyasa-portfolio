import AnimatedSection from "@/components/shared/AnimatedSection";
import { experiences } from "@/lib/data/experience";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <AnimatedSection id="experience" className="py-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight text-center">
          Experience
        </h2>
        
        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              {/* Timeline marker */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Briefcase className="w-4 h-4 text-primary" />
              </div>
              
              {/* Content Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl border border-border bg-card shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                  <h3 className="font-bold text-xl text-foreground">{exp.role}</h3>
                  <span className="text-sm font-medium text-muted-foreground bg-secondary px-3 py-1 rounded-full mt-2 md:mt-0">
                    {exp.period}
                  </span>
                </div>
                <h4 className="text-lg text-primary mb-4 font-medium">{exp.company}</h4>
                
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-6">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
                
                <div className="mb-6 p-4 bg-secondary/50 rounded-lg border border-border/50">
                  <p className="text-sm font-medium text-foreground mb-1">Impact:</p>
                  <p className="text-sm text-muted-foreground">{exp.impact}</p>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="text-xs font-medium px-2 py-1 bg-secondary text-secondary-foreground rounded border border-border/50">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
