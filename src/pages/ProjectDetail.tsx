import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, ExternalLink, Calendar, Users, Building2 } from "lucide-react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/layout/PageTransition";
import { projects } from "@/data/projects";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const currentIndex = projects.findIndex((p) => p.id === id);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <PageTransition>
      <Navigation />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/20" />

          <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-12">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to projects
                </Link>
                <span className="block px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] glass-card rounded-full w-fit mb-4">
                  {project.category}
                </span>
                <h1 className="font-display text-display-lg font-bold max-w-4xl">
                  {project.title}
                </h1>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Meta */}
        <section className="px-6 lg:px-12 py-16">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <p className="text-xl text-foreground leading-relaxed mb-8">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-6">
                {project.company && (
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>{project.company}</span>
                  </div>
                )}
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>{project.year}</span>
                </div>
                {project.teamSize && (
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Users className="w-4 h-4" />
                    <span>{project.teamSize}</span>
                  </div>
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-6 p-6 rounded-2xl glass-card"
            >
              <div>
                <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Role</h4>
                <p className="font-medium text-sm">{project.role}</p>
              </div>
              {project.duration && (
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Duration</h4>
                  <p className="font-medium text-sm">{project.duration}</p>
                </div>
              )}
              <div>
                <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Tech</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span key={tool} className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              {project.links?.map((link) => (
                <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary text-sm hover:underline">
                  {link.label} <ExternalLink className="w-3 h-3" />
                </a>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Challenge / Solution */}
        <section className="px-6 lg:px-12 py-16">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl glass-card"
            >
              <span className="text-2xl mb-4 block">🎯</span>
              <h3 className="font-display text-xl font-bold mb-4">The Challenge</h3>
              <p className="text-muted-foreground leading-relaxed">{project.overview.problem}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-2xl glass-card"
            >
              <span className="text-2xl mb-4 block">💡</span>
              <h3 className="font-display text-xl font-bold mb-4">The Solution</h3>
              <p className="text-muted-foreground leading-relaxed">{project.overview.solution}</p>
            </motion.div>
          </div>
        </section>

        {/* Contributions */}
        {project.contributions && (
          <section className="px-6 lg:px-12 py-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-display text-display-sm font-bold mb-8">What I Did</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.contributions.map((c, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-secondary/30 transition-colors"
                  >
                    <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm flex-shrink-0">
                      {i + 1}
                    </span>
                    <p className="text-sm text-foreground pt-1">{c}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Gallery */}
        <section className="px-6 lg:px-12 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-display-sm font-bold mb-8">Project Visuals</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {project.gallery.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="aspect-square overflow-hidden rounded-2xl group"
                >
                  <img src={img} alt={`${project.title} ${i + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="px-6 lg:px-12 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-display-sm font-bold mb-8">Key Outcomes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.results.map((r, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-2xl glass-card text-center"
                >
                  <div className="text-4xl font-display font-bold text-gradient mb-2">{r.metric}</div>
                  <div className="text-sm font-medium mb-1">{r.value}</div>
                  {r.description && <div className="text-xs text-muted-foreground">{r.description}</div>}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Next project */}
        <section className="px-6 lg:px-12 py-16 border-t border-border/50">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm">
              <ArrowLeft size={16} /> All projects
            </Link>
            <Link to={`/project/${nextProject.id}`} className="group flex items-center gap-4">
              <div className="text-right">
                <span className="text-xs text-muted-foreground block">Next</span>
                <span className="text-sm font-medium group-hover:text-primary transition-colors">{nextProject.shortTitle}</span>
              </div>
              <div className="w-14 h-14 rounded-xl overflow-hidden">
                <img src={nextProject.thumbnail} alt={nextProject.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <ArrowUpRight className="w-4 h-4 text-primary" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </PageTransition>
  );
};

export default ProjectDetail;