import { motion } from "framer-motion";
import { Award } from "lucide-react";

const experience = [
  {
    company: "MetaShop AI",
    role: "Operations Manager | Creative Technologist | 3D Generalist",
    period: "Jan 2024 – Present",
    highlights: [
      "Leading video-to-3D pipeline operations and R&D",
      "Converted 50+ hotels and 1500+ products into 3D",
      "Built scalable production systems for Gaussian splatting",
      "Managing cross-functional teams for AI-driven 3D workflows",
    ],
  },
  {
    company: "BYJU'S",
    role: "Senior Motion Graphics & 3D Artist",
    period: "2019 – 2022",
    highlights: [
      "Produced 500+ educational 3D animations",
      "Awarded Best Employee three times",
      "Developed reusable motion design templates",
      "Mentored junior designers on 3D workflows",
    ],
    awards: 3,
  },
  {
    company: "Global Studio",
    role: "3D Artist & Motion Designer",
    period: "2017 – 2019",
    highlights: [
      "National brand campaign animations",
      "Product visualization for e-commerce clients",
      "Broadcast graphics and title sequences",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="section-container section-padding scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <p className="text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground mb-4">
          Work Experience
        </p>
        <h2 className="font-display text-display-lg">Professional History</h2>
      </motion.div>

      <div className="space-y-0">
        {experience.map((exp, i) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="py-8 border-b border-border/50 group"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-5">
              <div>
                <div className="flex items-center gap-3">
                  <h4 className="font-display text-display-md">{exp.company}</h4>
                  {exp.awards && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-accent/10 text-accent text-[10px] font-mono uppercase tracking-wider">
                      <Award className="w-3 h-3" />
                      {exp.awards}× Best Employee
                    </span>
                  )}
                </div>
                <p className="text-muted-foreground text-sm mt-1">{exp.role}</p>
              </div>
              <p className="text-xs font-mono text-muted-foreground whitespace-nowrap">{exp.period}</p>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {exp.highlights.map((h, j) => (
                <li key={j} className="text-sm text-foreground/50 flex items-start gap-2">
                  <span className="mt-2 block w-1 h-1 rounded-full bg-primary/60 flex-shrink-0" />
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
