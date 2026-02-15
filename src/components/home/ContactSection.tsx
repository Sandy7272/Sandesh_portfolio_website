import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Youtube } from "lucide-react";

const links = [
  { icon: Mail, label: "Email", href: "mailto:sandesh@example.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/" },
  { icon: Github, label: "GitHub", href: "https://github.com/Sandy7272" },
  { icon: Youtube, label: "YouTube", href: "https://youtube.com/@SandeshGadakh" },
];

export function ContactSection() {
  return (
    <section id="contact" className="relative px-6 lg:px-12 py-28 scroll-mt-20 bg-section">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-primary mb-4 block">
            Contact
          </span>
          <h2 className="font-display text-display-lg font-bold mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground">
            Have a project in mind? I'd love to hear from you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="flex items-center justify-center gap-4"
        >
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.08 }}
              className="group w-14 h-14 rounded-2xl glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:glow-primary transition-all duration-300"
              aria-label={link.label}
            >
              <link.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
