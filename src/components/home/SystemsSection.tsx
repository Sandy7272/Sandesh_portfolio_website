import { motion } from "framer-motion";

const systems = [
  {
    title: "Video-to-3D Pipeline",
    description: "End-to-end NeRF-based system converting raw video into production-ready 3D assets. 3-4 hour turnaround, previously 2-3 weeks.",
  },
  {
    title: "Gaussian Splatting Workflows",
    description: "Real-time 3D scene reconstruction for hospitality walkthroughs. Drone + interior capture → interactive web viewer.",
  },
  {
    title: "Batch Processing Automation",
    description: "Python-driven pipeline for bulk 3D conversion. 154 products digitized in 8 weeks with consistent quality metrics.",
  },
  {
    title: "Motion Design Systems",
    description: "Templated animation workflows that scaled from individual deliverables to 500+ educational content pieces.",
  },
];

export function SystemsSection() {
  return (
    <section id="systems" className="editorial-container section-padding scroll-mt-20">
      <div className="divider mb-16" />
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-4"
      >
        Systems
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-display-xl mb-14 max-w-[700px]"
      >
        Architecture, Automation & Pipeline Engineering
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
        {systems.map((sys, i) => (
          <motion.div
            key={sys.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="bg-background p-8 md:p-10"
          >
            <h3 className="text-display-sm mb-3">{sys.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{sys.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
