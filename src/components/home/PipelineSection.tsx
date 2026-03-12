import { motion } from "framer-motion";
import { Video, Layers, Brain, Sparkles, Globe } from "lucide-react";

const steps = [
  {
    icon: Video,
    title: "Video Capture",
    description: "High-quality video footage captured with standardized protocols",
    color: "text-foreground",
  },
  {
    icon: Layers,
    title: "Frame Extraction",
    description: "Automated frame extraction and preprocessing pipeline",
    color: "text-primary",
  },
  {
    icon: Brain,
    title: "AI Training",
    description: "Neural radiance field training using Nerfstudio",
    color: "text-cyan",
  },
  {
    icon: Sparkles,
    title: "Gaussian Splats",
    description: "3D Gaussian splatting for real-time rendering",
    color: "text-accent",
  },
  {
    icon: Globe,
    title: "Web Deployment",
    description: "Interactive 3D viewer deployed to production",
    color: "text-primary",
  },
];

export function PipelineSection() {
  return (
    <section id="pipeline" className="section-container section-padding scroll-mt-20 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20 relative z-10"
      >
        <p className="text-xs font-mono uppercase tracking-[0.25em] text-primary mb-4">
          AI + 3D Pipeline
        </p>
        <h2 className="font-display text-display-lg mb-4">
          Video → 3D World
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          End-to-end pipeline converting standard video into interactive 3D experiences
        </p>
      </motion.div>

      {/* Pipeline visualization */}
      <div className="relative z-10">
        {/* Connection line */}
        <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] -translate-y-1/2 h-px">
          <div className="data-flow-line w-full h-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="relative"
            >
              <div className="p-6 rounded-2xl glass-card-hover text-center relative z-10">
                {/* Step number */}
                <span className="text-[10px] font-mono text-muted-foreground/40 mb-3 block">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className={`w-10 h-10 rounded-xl glass-card-strong flex items-center justify-center mx-auto mb-4`}>
                  <step.icon className={`w-5 h-5 ${step.color}`} />
                </div>

                <h3 className="font-display text-sm font-bold mb-2">{step.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
              </div>

              {/* Arrow for mobile */}
              {i < steps.length - 1 && (
                <div className="md:hidden flex justify-center py-2">
                  <div className="w-px h-6 bg-border" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
