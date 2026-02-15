import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <Link
        to={`/project/${project.id}`}
        className="group block"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden rounded-2xl glass-card aspect-[16/9] transition-shadow duration-500 hover:shadow-card-hover">
          <motion.div
            className="absolute inset-0"
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>

          <div
            className={`absolute inset-0 transition-all duration-500 ${
              isHovered
                ? "bg-gradient-to-t from-background via-background/60 to-transparent"
                : "bg-gradient-to-t from-background/70 via-background/20 to-transparent"
            }`}
          />

          <div className="absolute inset-0 p-5 flex flex-col justify-end">
            <span className="inline-block self-start px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] glass-card rounded-full mb-2">
              {project.category}
            </span>
            <motion.h3
              animate={{ y: isHovered ? -3 : 0 }}
              transition={{ duration: 0.3 }}
              className="font-display font-bold text-lg leading-tight mb-1"
            >
              {project.title}
            </motion.h3>
            <motion.p
              animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 6 }}
              transition={{ duration: 0.3 }}
              className="text-sm text-muted-foreground line-clamp-2 mb-3"
            >
              {project.description}
            </motion.p>
            <motion.div
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className="flex flex-wrap gap-1.5 mb-3"
            >
              {project.tools.slice(0, 3).map((tool) => (
                <span key={tool} className="px-2 py-0.5 text-[10px] font-medium bg-primary/10 text-primary rounded-full">
                  {tool}
                </span>
              ))}
            </motion.div>
            <motion.div
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex items-center gap-1.5 text-sm font-medium text-primary"
            >
              View Case Study <ArrowUpRight className="w-3.5 h-3.5" />
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
