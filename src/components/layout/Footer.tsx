import { ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="px-6 lg:px-12 py-10 border-t border-border/30">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground/60">
          Designed & Built by Sandesh © {new Date().getFullYear()}
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          Back to top
          <ArrowUp className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </footer>
  );
}
