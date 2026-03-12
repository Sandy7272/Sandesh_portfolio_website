import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Building2, Package, Clock, Award } from "lucide-react";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const startTime = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const metrics = [
  { icon: Building2, value: 50, suffix: "+", label: "Hotels Converted to 3D", color: "text-primary" },
  { icon: Package, value: 1500, suffix: "+", label: "Products Digitized", color: "text-cyan" },
  { icon: Clock, value: 5, suffix: "+", label: "Years Creative Technology", color: "text-accent" },
  { icon: Award, value: 3, suffix: "×", label: "Best Employee at BYJU'S", color: "text-primary" },
];

export function ImpactSection() {
  return (
    <section className="section-container section-padding scroll-mt-20 relative">
      <div className="absolute inset-0 dot-bg opacity-30 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-16 relative z-10"
      >
        <p className="text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground mb-4">
          Measurable Impact
        </p>
        <h2 className="font-display text-display-lg text-foreground">
          Numbers that speak
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
        {metrics.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="group p-6 md:p-8 rounded-2xl glass-card-hover text-center"
          >
            <m.icon className={`w-6 h-6 ${m.color} mx-auto mb-4 group-hover:scale-110 transition-transform`} />
            <div className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
              <AnimatedCounter target={m.value} suffix={m.suffix} />
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">{m.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
