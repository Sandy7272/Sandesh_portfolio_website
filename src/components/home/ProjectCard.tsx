import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
    >
      <Link
        to={`/project/${project.id}`}
        className="group block py-8 md:py-10 border-b border-border"
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs text-muted-foreground">{project.year}</span>
              <span className="text-muted-foreground">·</span>
              <span className="text-xs text-muted-foreground">{project.category}</span>
            </div>
            <h3 className="text-display-lg group-hover:opacity-60 transition-opacity duration-300">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground mt-2 max-w-[500px] leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tools.slice(0, 4).map((tool) => (
                <span key={tool} className="text-[11px] text-muted-foreground border border-border px-2.5 py-1">
                  {tool}
                </span>
              ))}
            </div>
          </div>
          <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300 flex-shrink-0" />
        </div>
      </Link>
    </motion.div>
  );
}
