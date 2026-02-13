import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const isLarge = index === 0 || index === 3;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={isLarge ? "md:col-span-2" : ""}
    >
      <Link
        to={`/project/${project.id}`}
        className="group block relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`relative overflow-hidden rounded-2xl glass-card ${
            isLarge ? "aspect-[16/9]" : "aspect-[4/3]"
          }`}
        >
          {/* Image */}
          <motion.div
            className="absolute inset-0"
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          >
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>

          {/* Dark overlay */}
          <div
            className={`absolute inset-0 transition-all duration-500 ${
              isHovered
                ? "bg-gradient-to-t from-background via-background/70 to-background/20"
                : "bg-gradient-to-t from-background/80 via-background/30 to-transparent"
            }`}
          />

          {/* Content */}
          <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
            {/* Category pill */}
            <motion.span
              animate={{ opacity: isHovered ? 1 : 0.7 }}
              className="inline-block self-start px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] rounded-full glass-card mb-3"
            >
              {project.category}
            </motion.span>

            {/* Title */}
            <motion.h3
              animate={{ y: isHovered ? -4 : 0 }}
              transition={{ duration: 0.3 }}
              className={`font-display font-bold leading-tight mb-2 ${
                isLarge ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"
              }`}
            >
              {project.title}
            </motion.h3>

            {/* Description on hover */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 8 }}
              transition={{ duration: 0.3 }}
              className="text-sm text-muted-foreground line-clamp-2 mb-4 max-w-lg"
            >
              {project.description}
            </motion.p>

            {/* Tech stack tags */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 8 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className="flex flex-wrap gap-2 mb-4"
            >
              {project.tools.slice(0, 4).map((tool) => (
                <span
                  key={tool}
                  className="px-2.5 py-1 text-[10px] font-medium bg-primary/10 text-primary rounded-full"
                >
                  {tool}
                </span>
              ))}
            </motion.div>

            {/* View link */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex items-center gap-2 text-sm font-medium text-primary"
            >
              <span>View Case Study</span>
              <ArrowUpRight className="w-4 h-4" />
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}