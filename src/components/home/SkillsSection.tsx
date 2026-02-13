import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skills } from "@/data/projects";

const categories = [
  {
    id: "technical",
    label: "Technical Skills",
    icon: "⚡",
    items: skills.technical,
  },
  {
    id: "tools",
    label: "Tools & Software",
    icon: "🛠️",
    items: skills.tools.map((t) => ({ name: t, level: 0 })),
  },
  {
    id: "soft",
    label: "Soft Skills",
    icon: "🤝",
    items: skills.soft.map((s) => ({ name: s, level: 0 })),
  },
];

export function SkillsSection() {
  const [activeTab, setActiveTab] = useState("technical");
  const activeCategory = categories.find((c) => c.id === activeTab)!;

  return (
    <section id="skills" className="relative px-6 lg:px-12 py-32 scroll-mt-20">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-mesh pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-primary mb-4 block">
            03 / Skills
          </span>
          <h2 className="font-display text-display-lg font-bold">
            Arsenal of <span className="text-gradient">Expertise</span>
          </h2>
        </motion.div>

        {/* Tab buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === cat.id
                  ? "bg-gradient-primary text-primary-foreground"
                  : "glass-card text-muted-foreground hover:text-foreground"
              }`}
            >
              <span className="mr-2">{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === "technical" ? (
              <div className="space-y-6 max-w-3xl">
                {activeCategory.items.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08 }}
                    className="group"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-sm">
                        {skill.name}
                        {"note" in skill && (skill as any).note && (
                          <span className="ml-2 text-[10px] text-primary px-2 py-0.5 bg-primary/10 rounded-full">
                            {(skill as any).note}
                          </span>
                        )}
                      </span>
                      <span className="text-xs text-muted-foreground font-mono">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="relative h-2 rounded-full bg-secondary overflow-hidden">
                      <motion.div
                        className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-primary to-accent"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1.2,
                          delay: 0.2 + index * 0.1,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="flex flex-wrap gap-3">
                {activeCategory.items.map((item, index) => (
                  <motion.span
                    key={item.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.04 }}
                    className="px-5 py-2.5 glass-card rounded-full text-sm font-medium hover:bg-secondary/30 hover:-translate-y-0.5 transition-all duration-300 cursor-default"
                  >
                    {item.name}
                  </motion.span>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}