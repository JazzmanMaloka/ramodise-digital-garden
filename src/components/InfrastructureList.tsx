import { Terminal, Box, Network, Cpu, Cog } from "lucide-react";

const infrastructure = [
  { name: "Linux VM hosts", icon: Terminal },
  { name: "Docker & containerized apps", icon: Box },
  { name: "Internal DNS and routing", icon: Network },
  { name: "Proxmox (optional)", icon: Cpu },
  { name: "Automation tools and scripts", icon: Cog },
];

export function InfrastructureList() {
  return (
    <div className="space-y-3">
      {infrastructure.map((item) => (
        <div key={item.name} className="flex items-center gap-3 text-foreground/80">
          <item.icon className="w-4 h-4 text-primary/60" />
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  );
}
