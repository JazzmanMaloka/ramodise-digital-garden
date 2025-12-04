import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface HomelabCardProps {
  title: string;
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function HomelabCard({ title, children, className, delay = 0 }: HomelabCardProps) {
  return (
    <div
      className={cn(
        "bg-card border border-border rounded-lg p-6 opacity-0 animate-fade-in-up transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_hsl(207_100%_65%/0.15)]",
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <h2 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
        <span className="text-primary/60">{">"}</span>
        {title}
      </h2>
      {children}
    </div>
  );
}
