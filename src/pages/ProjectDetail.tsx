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

  if (!project) return <Navigate to="/" replace />;

  const currentIndex = projects.findIndex((p) => p.id === id);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <PageTransition>
      <Navigation />
      <main className="pt-24">
        {/* Header */}
        <section className="editorial-container mb-16">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex flex-wrap items-center gap-3 mb-4 text-sm text-muted-foreground">
              <span>{project.category}</span>
              <span>·</span>
              <span>{project.year}</span>
              {project.company && (
                <>
                  <span>·</span>
                  <span>{project.company}</span>
                </>
              )}
            </div>
            <h1 className="text-display-hero max-w-[800px] mb-6">{project.title}</h1>
            <p className="text-lg text-muted-foreground max-w-[600px] leading-relaxed">{project.description}</p>
          </motion.div>
        </section>

        {/* Hero Image */}
        <section className="editorial-container mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="aspect-[16/9] overflow-hidden"
          >
            <img src={project.heroImage} alt={project.title} className="w-full h-full object-cover" />
          </motion.div>
        </section>

        {/* Meta Grid */}
        <section className="editorial-container mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
            {[
              { label: "Role", value: project.role },
              { label: "Duration", value: project.duration || project.year },
              { label: "Team", value: project.teamSize || "Solo" },
              { label: "Tools", value: project.tools.slice(0, 3).join(", ") },
            ].map((item) => (
              <div key={item.label} className="bg-background p-6">
                <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2">{item.label}</p>
                <p className="text-sm font-medium">{item.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Challenge / Solution */}
        <section className="editorial-container mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-background p-8 md:p-12"
            >
              <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-4">Challenge</p>
              <p className="text-foreground/80 leading-relaxed">{project.overview.problem}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-background p-8 md:p-12"
            >
              <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-4">Solution</p>
              <p className="text-foreground/80 leading-relaxed">{project.overview.solution}</p>
            </motion.div>
          </div>
        </section>

        {/* Contributions */}
        {project.contributions && (
          <section className="editorial-container mb-20">
            <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-8">Contributions</p>
            <div className="space-y-4">
              {project.contributions.map((c, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="text-foreground/80 leading-relaxed pl-6 border-l-2 border-border"
                >
                  {c}
                </motion.p>
              ))}
            </div>
          </section>
        )}

        {/* Gallery */}
        <section className="editorial-container mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {project.gallery.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="aspect-square overflow-hidden"
              >
                <img src={img} alt={`${project.title} ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Results */}
        <section className="editorial-container mb-20">
          <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-8">Outcomes</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
            {project.results.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-background p-8"
              >
                <div className="text-3xl font-bold mb-1">{r.metric}</div>
                <div className="text-sm text-muted-foreground">{r.value}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Next */}
        <section className="editorial-container py-16 border-t border-border">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft size={16} /> All projects
            </Link>
            <Link to={`/project/${nextProject.id}`} className="group flex items-center gap-3">
              <div className="text-right">
                <span className="text-xs text-muted-foreground block">Next</span>
                <span className="text-sm font-medium group-hover:opacity-60 transition-opacity">{nextProject.shortTitle}</span>
              </div>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </PageTransition>
  );
};

export default ProjectDetail;
