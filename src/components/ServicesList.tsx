import { Server, Container, Shield, Cloud, Bug, Monitor, Workflow, Network, MonitorSmartphone, HardDrive } from "lucide-react";

const services = [
  { name: "Pi-Hole CT", icon: Shield, type: "CT" },
  { name: "NextCloud CT", icon: Cloud, type: "CT" },
  { name: "Docker CT", icon: Container, type: "CT" },
  { name: "CasaOS CT", icon: HardDrive, type: "CT" },
  { name: "Adguard CT", icon: Shield, type: "CT" },
  { name: "Pangolin CT", icon: Network, type: "CT" },
  { name: "Wazuh CT", icon: Bug, type: "CT" },
  { name: "Zabbix CT", icon: Monitor, type: "CT" },
  { name: "RustDesk CT", icon: MonitorSmartphone, type: "CT" },
  { name: "n8n CT", icon: Workflow, type: "CT" },
  { name: "OPNsense VM", icon: Network, type: "VM" },
  { name: "Windows 10 VM", icon: Server, type: "VM" },
  { name: "Zabbix VM", icon: Monitor, type: "VM" },
  { name: "TacticalRMM VM", icon: Server, type: "VM" },
];

export function ServicesList() {
  return (
    <ul className="space-y-1">
      {services.map((service) => (
        <li
          key={service.name}
          className="flex items-center gap-3 py-3 border-b border-border last:border-0 group transition-colors hover:bg-secondary/30 -mx-2 px-2 rounded"
        >
          <service.icon className="w-4 h-4 text-primary/70 group-hover:text-primary transition-colors" />
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
        </li>
      ))}
    </ul>
  );
}
