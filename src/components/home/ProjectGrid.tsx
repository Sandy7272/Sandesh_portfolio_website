import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/data/projects";

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

export function ProjectGrid() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filtered = activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="work" className="relative px-6 lg:px-12 py-28 scroll-mt-20 bg-section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-primary mb-4 block">
            Selected Work
          </span>
          <h2 className="font-display text-display-lg font-bold mb-4">
            Selected <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === cat
                  ? "bg-gradient-primary text-primary-foreground"
                  : "glass-card text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
