import { motion } from "framer-motion";
import { experience } from "@/data/projects";

export function ExperienceSection() {
  return (
    <section id="experience" className="editorial-container section-padding scroll-mt-20">
      <div className="divider mb-16" />
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-10"
      >
        Experience
      </motion.p>

      <div className="space-y-0">
        {experience.map((exp, i) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="group py-10 border-b border-border last:border-b-0"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-8 mb-4">
              <div>
                <h3 className="text-display-md">{exp.role}</h3>
                <p className="text-muted-foreground text-sm mt-1">{exp.company} · {exp.location}</p>
              </div>
              <p className="text-sm text-muted-foreground md:text-right whitespace-nowrap">{exp.period}</p>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 mt-4">
              {exp.highlights.map((h, j) => (
                <li key={j} className="text-sm text-foreground/70 flex items-start gap-2">
                  <span className="text-muted-foreground mt-1.5 block w-1 h-1 rounded-full bg-foreground/30 flex-shrink-0" />
                  {h}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
