"use client";

import { motion } from "framer-motion";
import { Send, Terminal } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    const formData = new FormData(e.currentTarget);
    // TODO: Replace with your actual Web3Forms access key
    formData.append("access_key", "cef61623-d361-402e-b096-32a3a64c6841");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative pt-8 md:pt-12 pb-0 bg-transparent overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl text-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#7C5CFF] mb-6 block">
            Initialize Link
          </span>
          <h2 className="text-5xl sm:text-7xl font-black tracking-[-0.04em] text-white leading-tight mb-8">
            Deploy<br />Together.
          </h2>
          <p className="text-lg text-white/40 max-w-xl mx-auto">
            Open for opportunities to build production AI systems.
            Send a transmission to initiate contact.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto bg-[#060608] border border-white/[0.06] rounded-3xl p-8 sm:p-10 relative overflow-hidden"
        >
          {/* Terminal chrome for the form */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#7C5CFF]/30 to-transparent" />

          <div className="space-y-6 text-left">
            <div>
              <label htmlFor="name" className="block text-xs font-mono text-white/30 uppercase tracking-widest mb-2">Identifier</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full bg-transparent border border-white/[0.08] rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#7C5CFF]/50 focus:bg-white/[0.02] transition-all duration-300 placeholder:text-white/20"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-mono text-white/30 uppercase tracking-widest mb-2">Endpoint</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-transparent border border-white/[0.08] rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#7C5CFF]/50 focus:bg-white/[0.02] transition-all duration-300 placeholder:text-white/20"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-xs font-mono text-white/30 uppercase tracking-widest mb-2">Payload</label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full bg-transparent border border-white/[0.08] rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#7C5CFF]/50 focus:bg-white/[0.02] transition-all duration-300 placeholder:text-white/20 resize-none"
                placeholder="Enter your message"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting || status === "success"}
              className="w-full group relative flex items-center justify-center gap-3 bg-white text-black font-bold py-4 rounded-xl overflow-hidden transition-transform duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100"
            >
              {isSubmitting ? (
                <>
                  <Terminal className="w-5 h-5 animate-pulse" />
                  <span>Executing...</span>
                </>
              ) : status === "success" ? (
                <>
                  <span className="text-emerald-600">Transmission Successful</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  <span>Transmit Payload</span>
                </>
              )}
            </button>
            {status === "error" && (
              <p className="text-red-400 text-sm text-center mt-2">Transmission failed. Please try again.</p>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
}
