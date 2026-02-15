import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about" className="relative px-6 lg:px-12 py-28 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-primary mb-4 block">
            About
          </span>
          <h2 className="font-display text-display-lg font-bold">
            About <span className="text-gradient">Me</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="space-y-6"
        >
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm a <span className="text-foreground font-medium">3D Artist and VFX Researcher</span> with 4+ years of experience in motion graphics, real-time engines, and immersive digital environments.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Currently working at <span className="text-primary font-medium">MetaShop AI</span>, where I help build video-to-3D systems and interactive 3D viewers. Previously at Byju's, where I produced 500+ educational animations and was recognized with the Best Employee award 3 times.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
