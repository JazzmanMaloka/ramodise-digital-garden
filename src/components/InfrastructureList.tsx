import { Terminal, Box, Network, Cpu, Shield, Activity, Workflow, Monitor } from "lucide-react";

const infrastructure = [
  { name: "Proxmox Hypervisor", icon: Cpu, description: "Hosts entire homelab infrastructure" },
  { name: "LXC Containers", icon: Box, description: "Lightweight containerized services" },
  { name: "Virtual Machines", icon: Monitor, description: "Full OS virtualization for heavy workloads" },
  { name: "Firewall (OPNsense)", icon: Shield, description: "Network security and routing" },
  { name: "Monitoring (Zabbix, Wazuh)", icon: Activity, description: "Infrastructure & security monitoring" },
  { name: "Automation (n8n)", icon: Workflow, description: "Workflow and task automation" },
  { name: "Docker & Container Management", icon: Terminal, description: "Containerized application deployment" },
  { name: "Remote Access (RustDesk)", icon: Network, description: "Self-hosted remote desktop" },
];

export function InfrastructureList() {
  return (
    <div className="space-y-3">
      {infrastructure.map((item) => (
        <div key={item.name} className="flex items-start gap-3 text-foreground/80 group">
          <item.icon className="w-4 h-4 text-primary/60 mt-1 flex-shrink-0" />
          <div>
            <span className="font-medium text-foreground/90">{item.name}</span>
            <p className="text-sm text-foreground/60">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
