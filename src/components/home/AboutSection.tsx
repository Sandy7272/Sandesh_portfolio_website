import { motion } from "framer-motion";
import { ArrowRight, Award, Download } from "lucide-react";
import { experience, awards } from "@/data/projects";

const stats = [
  { value: "6+", label: "Years Experience" },
  { value: "154", label: "3D Products Shipped" },
  { value: "3×", label: "Best Employee Award" },
  { value: "500+", label: "Animations Created" },
];

export function AboutSection() {
  return (
    <section id="about" className="relative px-6 lg:px-12 py-32 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-primary mb-4 block">
            01 / About
          </span>
          <h2 className="font-display text-display-lg font-bold">
            Crafting Digital
            <br />
            <span className="text-gradient">Experiences</span>
          </h2>
        </motion.div>

        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              I'm a Senior{" "}
              <span className="text-foreground font-medium">VFX Artist & Motion Designer</span>{" "}
              focused on turning video into immersive 3D experiences, production-ready
              walkthroughs, and cinematic motion graphics.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Currently leading video-to-3D research at{" "}
              <span className="text-primary font-medium">MetaShop AI</span>, where I've pioneered
              NeRF-based conversion pipelines, shipped 154+ product models for Italica, and built
              hotel walkthroughs for Kesari Weddings — all while scaling daily output to 3-4
              production-ready models.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Previously at <span className="text-foreground font-medium">Byju's</span>, I
              produced 500+ educational animations and was recognized with the Best Employee award
              3 times for consistency and craft.
            </p>

            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 px-6 py-3 glass-card rounded-full text-sm font-medium hover:bg-secondary/50 transition-all duration-300"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </button>
          </motion.div>

          {/* Right: Photo + gradient border */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden gradient-border">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
                alt="Sandesh Gadakh"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
            {/* Decorative */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-3xl blur-2xl" />
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/10 rounded-full blur-xl" />
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-6 md:p-8 rounded-2xl glass-card text-center group hover:bg-secondary/30 transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl font-display font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Experience timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <h3 className="font-display text-display-sm font-bold mb-12">
            Experience
          </h3>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-6 md:p-8 rounded-2xl glass-card hover:bg-secondary/30 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                  <div>
                    <h4 className="text-lg font-semibold">{exp.role}</h4>
                    <p className="text-primary font-medium text-sm">{exp.company} · {exp.location}</p>
                  </div>
                  <span className="text-sm text-muted-foreground font-mono">{exp.period}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.highlights.slice(0, 3).map((h, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}