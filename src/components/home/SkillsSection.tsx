import { motion } from "framer-motion";

const techStack = {
  "3D & VFX": ["Blender", "Unreal Engine", "Cinema 4D", "Nerfstudio"],
  "Motion & Design": ["After Effects", "Premiere Pro", "Figma", "DaVinci Resolve"],
  "Engineering": ["Python", "Three.js", "WebGL", "Cloud Processing"],
  "Workflow": ["Lottie", "Rive", "Git", "Notion"],
};

export function SkillsSection() {
  return (
    <section id="skills" className="editorial-container section-padding scroll-mt-20">
      <div className="divider mb-16" />
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-10"
      >
        Tech Stack
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
        {Object.entries(techStack).map(([category, items], i) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
          >
            <h3 className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground mb-5">
              {category}
            </h3>
            <ul className="space-y-3">
              {items.map((item) => (
                <li key={item} className="text-sm text-foreground/80">{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
