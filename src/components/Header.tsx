import { Server } from "lucide-react";

export function Header() {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-6 py-12 text-center">
        <div className="flex justify-center mb-6 opacity-0 animate-fade-in-up">
          <div className="p-4 bg-primary/10 rounded-xl border border-primary/20 animate-pulse-glow">
            <Server className="w-10 h-10 text-primary" />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3 opacity-0 animate-fade-in-up animation-delay-100">
          Jazzman's <span className="text-gradient">Homelab</span>
        </h1>
        <p className="text-lg text-muted-foreground opacity-0 animate-fade-in-up animation-delay-200">
          Self-hosted services, automation, and infrastructure.
        </p>
      </div>
    </header>
  );
}
