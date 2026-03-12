import { motion } from "framer-motion";

const milestones = [
  {
    year: "2017",
    title: "Started as 3D Artist",
    description: "Began career in 3D animation and motion graphics at Global Studio, Mumbai. Worked on national brand campaigns and broadcast graphics.",
    highlight: false,
  },
  {
    year: "2019",
    title: "Joined BYJU'S",
    description: "Senior Motion Graphics Artist creating educational 3D animations. Produced 500+ animations and won Best Employee award 3 times.",
    highlight: true,
  },
  {
    year: "2023",
    title: "Transitioned to AI + 3D",
    description: "Discovered the power of Neural Radiance Fields. Started building video-to-3D pipelines using Nerfstudio and Gaussian splatting.",
    highlight: false,
  },
  {
    year: "2024",
    title: "MetaShop AI",
    description: "Operations Manager & Creative Technologist building next-generation 3D commerce technology. Converting hotels and products into interactive 3D worlds.",
    highlight: true,
  },
];

export function JourneySection() {
  return (
    <section id="journey" className="section-container section-padding scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <p className="text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground mb-4">
          Professional Journey
        </p>
        <h2 className="font-display text-display-lg">The Path So Far</h2>
      </motion.div>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[19px] top-0 bottom-0 w-px bg-border" />

        <div className="space-y-0">
          {milestones.map((m, i) => (
            <motion.div
              key={m.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="relative pl-14 pb-12 last:pb-0"
            >
              {/* Dot */}
              <div className={`absolute left-3 top-1 w-3.5 h-3.5 rounded-full border-2 ${
                m.highlight
                  ? "bg-primary border-primary shadow-[0_0_12px_hsl(var(--primary)/0.5)]"
                  : "bg-background border-border"
              }`} />

              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-mono text-primary">{m.year}</span>
                {m.highlight && (
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                    Key Milestone
                  </span>
                )}
              </div>
              <h3 className="font-display text-display-sm mb-2">{m.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">{m.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
