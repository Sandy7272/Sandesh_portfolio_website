import { motion } from "framer-motion";
import { Cpu, Box, Zap, Film, Settings, Gamepad2, Video, TrendingUp } from "lucide-react";

const skills = [
  { icon: Settings, label: "Operations Management", desc: "Scalable team & process systems" },
  { icon: Box, label: "3D Production", desc: "End-to-end asset creation" },
  { icon: Cpu, label: "AI Visual Workflows", desc: "NeRF & Gaussian pipelines" },
  { icon: Film, label: "Motion Graphics", desc: "Cinematic animation design" },
  { icon: Zap, label: "Pipeline Automation", desc: "Python-driven batch processing" },
  { icon: Gamepad2, label: "Unreal Engine", desc: "Real-time environments" },
  { icon: Video, label: "Video-to-3D Systems", desc: "Automated conversion pipelines" },
  { icon: TrendingUp, label: "Workflow Optimization", desc: "80% efficiency improvements" },
];

export function ExpertiseSection() {
  return (
    <section id="expertise" className="section-container section-padding scroll-mt-20 relative">
      <div className="absolute inset-0 dot-bg opacity-20 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 relative z-10"
      >
        <p className="text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground mb-4">
          Core Expertise
        </p>
        <h2 className="font-display text-display-lg">What I Do</h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="group p-6 rounded-2xl glass-card-hover cursor-default"
          >
            <skill.icon className="w-5 h-5 text-primary mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-sm font-bold mb-1">{skill.label}</h3>
            <p className="text-xs text-muted-foreground">{skill.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
