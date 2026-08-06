import AnimatedSection from "@/components/shared/AnimatedSection";
import { techStack } from "@/lib/data/tech-stack";

export default function TechStack() {
  return (
    <AnimatedSection id="tech-stack" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight text-center">
          Technical Arsenal
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techStack.map((category, index) => (
            <div 
              key={category.title} 
              className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold mb-4 text-foreground">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-md border border-border/50"
                  >
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
