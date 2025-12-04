import { Server, Container, Globe, Activity, Database, AppWindow } from "lucide-react";

const services = [
  { name: "Dashboard / Homepage", icon: AppWindow },
  { name: "Docker Containers & Orchestration", icon: Container },
  { name: "Local DNS & Reverse Proxy", icon: Globe },
  { name: "Monitoring & System Health", icon: Activity },
  { name: "Backups & Storage", icon: Database },
  { name: "Self-hosted Applications", icon: Server },
];

export function ServicesList() {
  return (
    <ul className="space-y-1">
      {services.map((service, index) => (
        <li
          key={service.name}
          className="flex items-center gap-3 py-3 border-b border-border last:border-0 group transition-colors hover:bg-secondary/30 -mx-2 px-2 rounded"
        >
          <service.icon className="w-4 h-4 text-primary/70 group-hover:text-primary transition-colors" />
          <span className="text-foreground/90 group-hover:text-foreground transition-colors">
            {service.name}
          </span>
        </li>
      ))}
    </ul>
  );
}
