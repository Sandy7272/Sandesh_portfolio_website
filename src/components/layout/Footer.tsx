import { motion } from "framer-motion";
import { ArrowUp, Mail, Linkedin, Github, Youtube } from "lucide-react";

const socialLinks = [
  { icon: Mail, href: "mailto:sandesh@example.com", label: "Email" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/Sandy7272", label: "GitHub" },
  { icon: Youtube, href: "https://youtube.com/@SandeshGadakh", label: "YouTube" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border/50 px-6 lg:px-12 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex items-center gap-4">
            <span className="font-display font-bold text-lg">
              Sandesh<span className="text-primary">.</span>
            </span>
            <span className="hidden md:block h-4 w-px bg-border" />
            <p className="text-xs text-muted-foreground">
              VFX Artist · Motion Designer
            </p>
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300"
                aria-label={link.label}
              >
                <link.icon size={14} />
              </a>
            ))}
          </div>
        </div>

        <div className="hr-accent my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground/60">
            Designed & Built by Sandesh © {new Date().getFullYear()}
          </p>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            Back to top
            <ArrowUp className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}