import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center editorial-container">
      <div className="w-full py-20 md:py-0">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8 tracking-wide"
        >
          Creative Technologist · 3D Generalist · AI-Native Designer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-display-hero max-w-[900px] mb-8 md:mb-10"
        >
          I Build Scalable 3D Systems With AI Leverage.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-base md:text-lg text-muted-foreground max-w-[560px] leading-relaxed mb-10 md:mb-14"
        >
          I build immersive visuals and video-to-3D systems that turn real-world
          footage into interactive 3D experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="flex flex-wrap gap-4"
        >
          <button
            onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
            className="px-7 py-3.5 bg-foreground text-background text-sm font-medium tracking-wide hover:opacity-80 transition-opacity"
          >
            View Work
            <ArrowDown className="inline-block ml-2 w-4 h-4" />
          </button>
          <button
            onClick={() => window.print()}
            className="px-7 py-3.5 border border-foreground text-foreground text-sm font-medium tracking-wide hover:bg-foreground hover:text-background transition-all flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </button>
        </motion.div>
      </div>
    </section>
  );
}
