import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border mt-16">
      <div className="max-w-4xl mx-auto px-6 py-8 text-center">
        <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
          © 2025 Ramodise Homelab. Self-hosted with{" "}
          <Heart className="w-4 h-4 text-primary fill-primary" />, always learning.
        </p>
      </div>
    </footer>
  );
}
