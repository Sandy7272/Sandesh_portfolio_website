import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, FlaskConical } from "lucide-react";
import { useEffect, useRef } from "react";

function Particles() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    for (let i = 0; i < 40; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.animationDuration = `${10 + Math.random() * 15}s`;
      particle.style.animationDelay = `${Math.random() * 12}s`;
      const size = 1 + Math.random() * 2.5;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      container.appendChild(particle);
    }
    return () => { container.innerHTML = ""; };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none" />;
}

const badges = [
  "VFX Artist",
  "3D Pipeline Engineer",
  "AI Researcher",
  "Creative Technologist",
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <Particles />

      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      {/* Cinematic glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/6 blur-[200px] pulse-glow" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-cyan/4 blur-[180px]" />
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] rounded-full bg-accent/3 blur-[160px]" />
      </div>

      <div className="section-container relative z-10 w-full">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
          </span>
          <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            Available for opportunities
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-hero tracking-tight leading-[0.95] mb-4"
        >
          <span className="block text-foreground">AI-Native</span>
          <span className="block text-gradient">Creative</span>
          <span className="block text-foreground">Technologist</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed"
        >
          I build systems that turn videos into interactive 3D worlds.
          <br className="hidden md:block" />
          Currently engineering scalable pipelines at{" "}
          <span className="text-foreground font-medium">MetaShop AI</span>.
        </motion.p>

        {/* Role badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {badges.map((badge, i) => (
            <motion.span
              key={badge}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 + i * 0.08 }}
              className="px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider glass-card-strong text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all cursor-default"
            >
              {badge}
            </motion.span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-wrap items-center gap-3"
        >
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="px-7 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-all hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.5)]"
          >
            View Projects
          </button>
          <button
            onClick={() => document.getElementById("lab")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full glass-card-strong text-sm font-semibold hover:border-cyan/30 hover:text-cyan transition-all"
          >
            <FlaskConical className="w-4 h-4" />
            Explore 3D Lab
          </button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full glass-card text-sm font-semibold hover:border-primary/30 transition-all"
          >
            <Mail className="w-4 h-4" />
            Contact
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={() => document.getElementById("clients")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 w-8 h-14 rounded-full border border-border/40 flex items-center justify-center"
      >
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ArrowDown className="w-3.5 h-3.5 text-muted-foreground" />
        </motion.div>
      </motion.button>
    </section>
  );
}
