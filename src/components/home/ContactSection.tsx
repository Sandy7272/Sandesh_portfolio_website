import { motion } from "framer-motion";
import { Download, ArrowUpRight } from "lucide-react";

const links = [
  { label: "Email", href: "mailto:sandesh@example.com" },
  { label: "LinkedIn", href: "https://linkedin.com/in/" },
  { label: "GitHub", href: "https://github.com/Sandy7272" },
  { label: "YouTube", href: "https://youtube.com/@SandeshGadakh" },
];

export function ContactSection() {
  return (
    <section id="contact" className="editorial-container section-padding scroll-mt-20">
      <div className="divider mb-16" />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-display-hero max-w-[800px] mb-10"
      >
        Let's build something exceptional.
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="flex flex-wrap gap-4 mb-14"
      >
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-5 py-3 border border-foreground text-sm font-medium hover:bg-foreground hover:text-background transition-all duration-300"
          >
            {link.label}
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <button
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 px-7 py-3.5 bg-foreground text-background text-sm font-medium hover:opacity-80 transition-opacity"
        >
          <Download className="w-4 h-4" />
          Download Resume
        </button>
      </motion.div>
    </section>
  );
}
