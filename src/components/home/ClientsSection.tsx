import { motion } from "framer-motion";

const clients = [
  { name: "MetaShop AI", industry: "3D Commerce" },
  { name: "L&T Realty", industry: "Real Estate" },
  { name: "Kesari Weddings", industry: "Hospitality" },
  { name: "Autologue", industry: "Automotive" },
  { name: "Italica", industry: "E-Commerce" },
  { name: "BYJU'S", industry: "Ed-Tech" },
];

export function ClientsSection() {
  return (
    <section id="clients" className="section-container py-20 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground">
          Trusted by leading brands
        </p>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
        {clients.map((client, i) => (
          <motion.div
            key={client.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="group flex flex-col items-center justify-center p-5 rounded-xl glass-card-hover cursor-default"
          >
            <span className="font-display font-bold text-sm text-muted-foreground group-hover:text-foreground transition-colors text-center">
              {client.name}
            </span>
            <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground/50 mt-1">
              {client.industry}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
