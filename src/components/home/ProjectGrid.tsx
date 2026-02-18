import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/data/projects";

export function ProjectGrid() {
  return (
    <section id="work" className="editorial-container section-padding scroll-mt-20">
      <div className="divider mb-16" />
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-10"
      >
        Selected Work
      </motion.p>

      <div className="space-y-0">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
