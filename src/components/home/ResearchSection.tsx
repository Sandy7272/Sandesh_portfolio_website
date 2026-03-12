import { motion } from "framer-motion";
import { Beaker, Atom, Eye, Wand2 } from "lucide-react";

const experiments = [
  {
    icon: Atom,
    title: "AI Video-to-3D",
    description: "Experimental pipeline converting casual smartphone video into photorealistic 3D scenes using custom NeRF training configurations",
    tags: ["Nerfstudio", "Python", "CUDA"],
    status: "Ongoing",
  },
  {
    icon: Eye,
    title: "Gaussian Splat Optimization",
    description: "Research into optimal capture patterns and training parameters for high-fidelity Gaussian splatting results",
    tags: ["3DGS", "Point Clouds", "WebGL"],
    status: "Active",
  },
  {
    icon: Wand2,
    title: "3D Viewer Prototypes",
    description: "Building next-gen web-based 3D viewers with real-time material editing and AR placement capabilities",
    tags: ["Three.js", "React", "WebXR"],
    status: "Beta",
  },
  {
    icon: Beaker,
    title: "AI Creative Tools",
    description: "Exploring generative AI integration for automated texture generation and scene composition",
    tags: ["Stable Diffusion", "ComfyUI", "Python"],
    status: "Experimental",
  },
];

export function ResearchSection() {
  return (
    <section id="research" className="section-container section-padding scroll-mt-20 relative">
      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 relative z-10"
      >
        <div className="flex items-center gap-3 mb-4">
          <Beaker className="w-4 h-4 text-accent" />
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-accent">
            Research Lab
          </p>
        </div>
        <h2 className="font-display text-display-lg mb-4">Experiments & R&D</h2>
        <p className="text-muted-foreground max-w-lg">
          Active research into next-generation 3D capture, AI-driven creative tools, and real-time rendering.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
        {experiments.map((exp, i) => (
          <motion.div
            key={exp.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group p-7 rounded-2xl glass-card-hover"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 rounded-xl glass-card-strong flex items-center justify-center">
                <exp.icon className="w-5 h-5 text-primary group-hover:text-cyan transition-colors" />
              </div>
              <span className={`text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full ${
                exp.status === "Ongoing" ? "bg-accent/15 text-accent"
                : exp.status === "Active" ? "bg-primary/15 text-primary"
                : exp.status === "Beta" ? "bg-cyan/15 text-cyan"
                : "bg-muted text-muted-foreground"
              }`}>
                {exp.status}
              </span>
            </div>

            <h3 className="font-display text-display-sm mb-2">{exp.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">{exp.description}</p>

            <div className="flex flex-wrap gap-2">
              {exp.tags.map((tag) => (
                <span key={tag} className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground uppercase tracking-wider">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
