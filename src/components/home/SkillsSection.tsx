import { motion } from "framer-motion";

const techStack = {
  "Creative Tools": ["Blender", "After Effects", "Unreal Engine", "Cinema 4D"],
  "AI & 3D Tech": ["Nerfstudio", "Gaussian Splats", "Photogrammetry", "Python Pipelines"],
  "Web Tech": ["React", "Three.js", "WebGL", "TypeScript"],
  "Workflow": ["Figma", "DaVinci Resolve", "Git", "Cloud Processing"],
};

export function SkillsSection() {
  return (
    <section id="skills" className="section-container section-padding scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <p className="text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground mb-4">
          Technology Stack
        </p>
        <h2 className="font-display text-display-lg">Tools & Technologies</h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
        {Object.entries(techStack).map(([category, items], i) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-primary/70 mb-5">{category}</h4>
            <ul className="space-y-3">
              {items.map((item) => (
                <li key={item} className="text-sm text-foreground/60 hover:text-foreground transition-colors cursor-default flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-primary/40" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
