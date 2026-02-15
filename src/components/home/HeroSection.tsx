import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 80]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden animated-gradient-bg">
      {/* Ambient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/8 blur-[140px]"
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/6 blur-[120px]"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.div style={{ opacity, y }} className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              <span className="text-xs font-medium text-muted-foreground">Available for new projects</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="font-display font-extrabold text-display-xl mb-4"
            >
              Hi, I'm <span className="text-gradient">Sandesh.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-xl text-muted-foreground font-medium mb-6"
            >
              3D Artist • VFX Researcher • Motion Designer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-muted-foreground leading-relaxed max-w-lg mb-10"
            >
              I build immersive visuals and video-to-3D systems that turn real-world
              footage into interactive 3D experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
                className="px-7 py-3 bg-gradient-primary text-primary-foreground rounded-full font-semibold text-sm tracking-wide hover:opacity-90 transition-all glow-primary"
              >
                View Work
                <ArrowDown className="inline-block ml-2 w-4 h-4" />
              </button>
              <button
                onClick={() => window.print()}
                className="px-7 py-3 glass-card rounded-full font-semibold text-sm tracking-wide hover:bg-secondary/50 transition-all flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </button>
            </motion.div>
          </div>

          {/* Right: Floating gradient element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-80 h-80">
              <motion.div
                className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 via-accent/10 to-primary/5 blur-xl"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-4 rounded-2xl glass-card gradient-border"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute top-8 left-8 w-16 h-16 rounded-xl bg-primary/15 border border-primary/20"
                animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute bottom-12 right-8 w-12 h-12 rounded-full bg-accent/15 border border-accent/20"
                animate={{ y: [0, -10, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/25 to-accent/15"
                animate={{ rotate: [45, 50, 45], scale: [1, 1.05, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors"
      >
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.button>
    </section>
  );
}
