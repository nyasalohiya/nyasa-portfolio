import Link from "next/link";
import { Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/shared/Icons";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link href="/" className="text-xl font-bold tracking-tight">
            Nyasa Lohiya<span className="text-destructive">.</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            Building Intelligent AI Systems.
          </p>
        </div>
        
        <div className="flex items-center gap-6">
          <Link
            href="https://github.com/nyasalohiya"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="w-5 h-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/nyasa-lohiya-486751283"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="mailto:nyasalohiya1007@gmail.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
        
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Nyasa Lohiya. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
