import { motion } from "framer-motion";
import { Download, Linkedin, Mail, FileText } from "lucide-react";

const actions = [
  { icon: Download, label: "Download Resume", href: "/resume.pdf", external: false },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/", external: true },
  { icon: Mail, label: "Email Contact", href: "mailto:gadakhsandesh@gmail.com", external: false },
  { icon: FileText, label: "Portfolio PDF", href: "/portfolio.pdf", external: false },
];

export function RecruiterSection() {
  return (
    <section className="section-container py-20 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-8 md:p-12 rounded-2xl glass-card-strong relative overflow-hidden"
      >
        {/* Subtle glow */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

        <div className="relative z-10">
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-primary mb-3">
            Quick Access
          </p>
          <h3 className="font-display text-display-md mb-6">
            For Recruiters & Collaborators
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {actions.map((action, i) => (
              <motion.a
                key={action.label}
                href={action.href}
                target={action.external ? "_blank" : undefined}
                rel={action.external ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group flex flex-col items-center gap-3 p-5 rounded-xl glass-card-hover text-center"
              >
                <action.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-xs font-medium">{action.label}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
