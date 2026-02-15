import { motion } from "framer-motion";
import { skills } from "@/data/projects";

export function SkillsSection() {
  return (
    <section id="skills" className="relative px-6 lg:px-12 py-28 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-primary mb-4 block">
            Skills
          </span>
          <h2 className="font-display text-display-lg font-bold">
            Core <span className="text-gradient">Expertise</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Core Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-6">Core Skills</h3>
            <div className="grid grid-cols-1 gap-3">
              {skills.core.map((skill, i) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  className="group px-5 py-4 glass-card rounded-xl hover:bg-secondary/30 transition-all duration-300 cursor-default"
                >
                  <span className="text-sm font-medium">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-6">Tools</h3>
            <div className="grid grid-cols-1 gap-3">
              {skills.tools.map((tool, i) => (
                <motion.div
                  key={tool}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.05 }}
                  className="group px-5 py-4 glass-card rounded-xl hover:bg-secondary/30 transition-all duration-300 cursor-default"
                >
                  <span className="text-sm font-medium">{tool}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
