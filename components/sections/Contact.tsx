"use client";

import AnimatedSection from "@/components/shared/AnimatedSection";
import { Send, Mail, MapPin } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission to mailto
    setTimeout(() => {
      const formData = new FormData(e.currentTarget);
      const name = formData.get("name");
      const body = formData.get("message");
      window.location.href = `mailto:nyasalohiya1007@gmail.com?subject=Contact from ${name}&body=${body}`;
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <AnimatedSection id="contact" className="py-24 border-t border-border/50 bg-background/50">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Let's Connect
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Interested in collaborating on AI projects, discussing agentic architectures, or exploring new opportunities? My inbox is always open.
          </p>
        </div>
        
        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-2 space-y-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-secondary rounded-lg shrink-0">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Email</h3>
                <a href="mailto:nyasalohiya1007@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
                  nyasalohiya1007@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-3 bg-secondary rounded-lg shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Location</h3>
                <p className="text-muted-foreground">
                  Ahmedabad, India<br/>
                  <span className="text-sm">(Open to remote)</span>
                </p>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-3">
            <form onSubmit={handleSubmit} className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-sm space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-md bg-secondary/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-md bg-secondary/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-md bg-secondary/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors disabled:opacity-70"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
