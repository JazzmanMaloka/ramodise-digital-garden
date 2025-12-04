import piholeLogo from "@/assets/logos/pihole.png";
import nextcloudLogo from "@/assets/logos/nextcloud.png";
import dockerLogo from "@/assets/logos/docker.png";
import casaosLogo from "@/assets/logos/casaos.ico";
import adguardLogo from "@/assets/logos/adguard.ico";
import pangolinLogo from "@/assets/logos/pangolin.ico";
import wazuhLogo from "@/assets/logos/wazuh.png";
import zabbixLogo from "@/assets/logos/zabbix.ico";
import rustdeskLogo from "@/assets/logos/rustdesk.png";
import n8nLogo from "@/assets/logos/n8n.ico";
import opnsenseLogo from "@/assets/logos/opnsense.ico";
import windowsLogo from "@/assets/logos/windows.png";
import tacticalrmmLogo from "@/assets/logos/tacticalrmm.ico";

const services = [
  { name: "Pi-Hole", logo: piholeLogo, type: "CT" },
  { name: "NextCloud", logo: nextcloudLogo, type: "CT" },
  { name: "Docker", logo: dockerLogo, type: "CT" },
  { name: "CasaOS", logo: casaosLogo, type: "CT" },
  { name: "Adguard", logo: adguardLogo, type: "CT" },
  { name: "Pangolin", logo: pangolinLogo, type: "CT" },
  { name: "Wazuh", logo: wazuhLogo, type: "CT" },
  { name: "Zabbix", logo: zabbixLogo, type: "CT" },
  { name: "RustDesk", logo: rustdeskLogo, type: "CT" },
  { name: "n8n", logo: n8nLogo, type: "CT" },
  { name: "OPNsense", logo: opnsenseLogo, type: "VM" },
  { name: "Windows 10", logo: windowsLogo, type: "VM" },
  { name: "Zabbix", logo: zabbixLogo, type: "VM" },
  { name: "TacticalRMM", logo: tacticalrmmLogo, type: "VM" },
];

export function ServicesList() {
  return (
    <ul className="space-y-1">
      {services.map((service, index) => (
        <li
          key={`${service.name}-${service.type}-${index}`}
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
        </li>
      ))}
    </ul>
  );
}