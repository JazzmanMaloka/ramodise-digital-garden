import { Link } from "react-router-dom";
import { services } from "@/data/services";
import { ChevronRight } from "lucide-react";

export function ServicesList() {
  return (
    <ul className="space-y-1">
      {services.map((service, index) => (
        <li key={`${service.slug}-${index}`}>
          <Link
            to={`/services/${service.slug}`}
            className="flex items-center gap-3 py-3 border-b border-border last:border-0 group transition-colors hover:bg-secondary/30 -mx-2 px-2 rounded"
          >
            <img 
              src={service.logo} 
              alt={`${service.name} logo`} 
              className="w-5 h-5 object-contain"
            />
            <span className="text-foreground/90 group-hover:text-foreground transition-colors flex-1">
              {service.name}
            </span>
            <span className={`text-xs px-2 py-0.5 rounded font-mono ${
              service.type === "VM" 
                ? "bg-accent/20 text-accent" 
                : "bg-primary/20 text-primary"
            }`}>
              {service.type}
            </span>
            <ChevronRight className="w-4 h-4 text-foreground/40 group-hover:text-primary transition-colors" />
          </Link>
        </li>
      ))}
    </ul>
  );
}
