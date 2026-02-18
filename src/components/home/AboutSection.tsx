import { motion } from "framer-motion";

const statements = [
  "4+ years building at the intersection of 3D, motion, and AI.",
  "Pioneered video-to-3D pipelines processing 154+ products at scale.",
  "Currently leading R&D and operations at MetaShop AI.",
  "Previously at Byju's — 500+ animations, 3× Best Employee.",
  "I think in systems, ship fast, and obsess over craft.",
];

export function AboutSection() {
  return (
    <section id="about" className="editorial-container section-padding scroll-mt-20">
      <div className="divider mb-16" />
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-10"
      >
        About
      </motion.p>

      <div className="max-w-[800px] space-y-6">
        {statements.map((s, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="text-lg md:text-xl leading-relaxed text-foreground/80"
          >
            {s}
          </motion.p>
        ))}
      </div>
    </section>
  );
}
