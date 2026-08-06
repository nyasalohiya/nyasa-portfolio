"use client";

import AnimatedSection from "@/components/shared/AnimatedSection";
import { Send, Mail, MapPin, Sparkles } from "lucide-react";
import { useState } from "react";
import { Github, Linkedin } from "@/components/shared/Icons";
import Link from "next/link";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      const formData = new FormData(e.currentTarget);
      const name = formData.get("name");
      const body = formData.get("message");
      window.location.href = `mailto:nyasalohiya1007@gmail.com?subject=AI Collaboration Request from ${name}&body=${body}`;
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <AnimatedSection id="contact" className="py-28 border-t border-white/[0.06] bg-[#050508] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-[#7C5CFF]/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7C5CFF]/15 border border-[#7C5CFF]/30 text-xs font-semibold text-[#A78BFA] tracking-wide uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Get In Touch
          </div>
          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-4">
            Let's Build Something Intelligent Together.
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto font-normal">
            Whether you want to discuss multi-agent workflows, production RAG pipelines, or enterprise AI opportunities — send me a message.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-5 gap-10 items-start">
          <div className="lg:col-span-2 space-y-6">
            <div className="ai-glow-card rounded-2xl p-6 flex items-start gap-4">
              <div className="p-3 bg-[#7C5CFF]/15 border border-[#7C5CFF]/30 rounded-xl shrink-0 text-[#7C5CFF]">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-white mb-1">Email</h3>
                <a href="mailto:nyasalohiya1007@gmail.com" className="text-sm text-muted-foreground hover:text-[#A78BFA] transition-colors">
                  nyasalohiya1007@gmail.com
                </a>
              </div>
            </div>
            
            <div className="ai-glow-card rounded-2xl p-6 flex items-start gap-4">
              <div className="p-3 bg-[#7C5CFF]/15 border border-[#7C5CFF]/30 rounded-xl shrink-0 text-[#7C5CFF]">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-white mb-1">Location</h3>
                <p className="text-sm text-muted-foreground">
                  Ahmedabad, India <span className="text-[#A78BFA]">(Remote Available)</span>
                </p>
              </div>
            </div>

            <div className="ai-glow-card rounded-2xl p-6 flex items-center justify-around">
              <Link 
                href="https://github.com/nyasalohiya" 
                target="_blank"
                className="flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" /> GitHub
              </Link>
              <span className="text-white/20">|</span>
              <Link 
                href="https://www.linkedin.com/in/nyasa-lohiya-486751283" 
                target="_blank"
                className="flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </Link>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="ai-glow-card rounded-3xl p-8 sm:p-10 border border-white/10 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-semibold text-white/90 uppercase tracking-wider">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-muted-foreground/50 focus:outline-none focus:border-[#7C5CFF] focus:ring-1 focus:ring-[#7C5CFF] transition-all text-sm"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-semibold text-white/90 uppercase tracking-wider">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-muted-foreground/50 focus:outline-none focus:border-[#7C5CFF] focus:ring-1 focus:ring-[#7C5CFF] transition-all text-sm"
                    placeholder="john@company.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-semibold text-white/90 uppercase tracking-wider">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-muted-foreground/50 focus:outline-none focus:border-[#7C5CFF] focus:ring-1 focus:ring-[#7C5CFF] transition-all text-sm resize-none"
                  placeholder="Tell me about your project or opportunity..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#7C5CFF] text-white font-semibold hover:bg-[#6C4CEF] transition-all duration-300 shadow-[0_0_30px_rgba(124,92,255,0.4)] hover:shadow-[0_0_40px_rgba(124,92,255,0.6)] disabled:opacity-70 text-sm"
              >
                {isSubmitting ? "Opening Mail Client..." : "Initiate Conversation"}
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
