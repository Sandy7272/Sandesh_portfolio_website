import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";

export function ProjectGrid() {
  const featured = projects.slice(0, 4);

  return (
    <section id="projects" className="section-container section-padding scroll-mt-20 relative">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 mb-16"
      >
        <p className="text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground mb-4">
          Featured Work
        </p>
        <div className="flex items-baseline justify-between">
          <h2 className="font-display text-display-lg">Selected Projects</h2>
          <span className="text-sm text-muted-foreground hidden sm:block font-mono">
            {String(featured.length).padStart(2, "0")} projects
          </span>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        {featured.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.7 }}
          >
            <Link to={`/project/${project.id}`} className="group block">
              <div className="relative overflow-hidden rounded-2xl aspect-[16/10] mb-5 glass-card">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider glass-card-strong text-foreground/80">
                    {project.category}
                  </span>
                </div>

                {/* Arrow */}
                <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 backdrop-blur-sm">
                  <ArrowUpRight className="w-5 h-5 text-primary-foreground" />
                </div>

                {/* Bottom overlay content */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-display text-lg font-bold text-foreground mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-foreground/60 line-clamp-2">{project.description}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tools.slice(0, 4).map((tool) => (
                  <span key={tool} className="text-[10px] font-mono px-3 py-1 rounded-full bg-secondary text-secondary-foreground uppercase tracking-wider">
                    {tool}
                  </span>
                ))}
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
