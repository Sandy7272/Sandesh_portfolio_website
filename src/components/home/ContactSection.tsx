import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Youtube } from "lucide-react";

const contactInfo = [
  { icon: Mail, label: "Email", value: "gadakhsandesh@gmail.com", href: "mailto:gadakhsandesh@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91-7447337272", href: "tel:+917447337272" },
  { icon: MapPin, label: "Location", value: "Pune, India", href: "#" },
];

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/" },
  { icon: Github, label: "GitHub", href: "https://github.com/Sandy7272" },
  { icon: Youtube, label: "YouTube", href: "https://youtube.com/@SandeshGadakh" },
];

export function ContactSection() {
  return (
    <section id="contact" className="section-container section-padding scroll-mt-20 relative">
      <div className="absolute inset-0 dot-bg opacity-20 pointer-events-none" />

      <div className="text-center mb-16 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground mb-6"
        >
          Get In Touch
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-display-xl mb-2"
        >
          Let's build the future
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-display-xl text-gradient"
        >
          of the 3D internet.
        </motion.h2>
      </div>

      {/* Contact cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-10 relative z-10"
      >
        {contactInfo.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="group flex flex-col items-center gap-3 p-6 rounded-2xl glass-card-hover text-center"
          >
            <item.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
            <div>
              <p className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground mb-1">{item.label}</p>
              <p className="text-sm font-medium group-hover:text-primary transition-colors">{item.value}</p>
            </div>
          </a>
        ))}
      </motion.div>

      {/* Social links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="flex items-center justify-center gap-3 relative z-10"
      >
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full glass-card-hover flex items-center justify-center hover:text-primary transition-all"
            aria-label={link.label}
          >
            <link.icon className="w-4.5 h-4.5" />
          </a>
        ))}
      </motion.div>
    </section>
  );
}
