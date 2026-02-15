import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";

const navLinks = [
  { name: "Work", href: "#work" },
  { name: "Skills", href: "#skills" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          return;
        }
      }
      setActiveSection("");
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setIsOpen(false);
    const id = href.replace("#", "");
    if (!id) { window.scrollTo({ top: 0, behavior: "smooth" }); return; }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <ScrollProgress />
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          scrolled ? "glass rounded-full px-2 py-1 shadow-card" : "bg-transparent px-2 py-1"
        }`}
      >
        <nav className="flex items-center gap-1">
          <button onClick={() => scrollTo("")} className="px-4 py-2 font-display font-bold text-sm tracking-wide">
            S<span className="text-primary">.</span>
          </button>

          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.href)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-full ${
                  activeSection === link.href.replace("#", "") ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {activeSection === link.href.replace("#", "") && (
                  <motion.div layoutId="nav-indicator" className="absolute inset-0 bg-primary/10 rounded-full" transition={{ type: "spring", bounce: 0.2, duration: 0.5 }} />
                )}
                <span className="relative z-10">{link.name}</span>
              </button>
            ))}
          </div>

          <button
            onClick={() => window.print()}
            className="hidden md:flex items-center gap-1.5 ml-2 px-4 py-2 text-sm font-medium glass-card rounded-full hover:text-primary transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            Resume
          </button>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 ml-2" aria-label="Toggle menu">
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden bg-background/95 backdrop-blur-xl"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => scrollTo(link.href)}
                  className="text-3xl font-display font-bold hover:text-primary transition-colors"
                >
                  {link.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[2px]">
      <motion.div className="h-full bg-gradient-to-r from-primary to-accent" style={{ width: `${progress}%` }} />
    </div>
  );
}
