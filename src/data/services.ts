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
import uptimekumaLogo from "@/assets/logos/uptimekuma.png";
import portainerLogo from "@/assets/logos/portainer.ico";

export interface Service {
  name: string;
  slug: string;
  logo: string;
  type: "CT" | "VM";
  description: string;
  usedFor: string;
  whyUseful: string;
  skills: string;
}

export const services: Service[] = [
  {
    name: "Pi-Hole",
    slug: "pihole",
    logo: piholeLogo,
    type: "CT",
    description: "Pi-hole is a network-wide ad blocker that acts as a DNS sinkhole, blocking advertisements and tracking domains at the network level before they reach your devices.",
    usedFor: "Blocking ads, trackers, and malicious domains across my entire network. It serves as a DNS server for all devices, providing cleaner browsing and faster page loads.",
    whyUseful: "Essential for any homelab as it improves privacy, reduces bandwidth consumption, and provides network-wide protection without installing software on each device.",
    skills: "DNS configuration, Linux administration, network troubleshooting, whitelist/blacklist management, DHCP integration, and log analysis for network security monitoring."
  },
  {
    name: "AdGuard",
    slug: "adguard",
    logo: adguardLogo,
    type: "CT",
    description: "AdGuard Home is a network-wide software for blocking ads and tracking with a modern web interface, DNS-over-HTTPS support, and parental controls.",
    usedFor: "Secondary DNS filtering with advanced features like DNS-over-HTTPS/TLS encryption, per-client settings, and detailed query logging.",
    whyUseful: "Provides redundancy alongside Pi-hole and offers more granular control over DNS filtering with encrypted DNS protocols for enhanced privacy.",
    skills: "Encrypted DNS protocols (DoH/DoT), advanced DNS filtering rules, network security hardening, and high-availability DNS architecture."
  },
  {
    name: "NextCloud",
    slug: "nextcloud",
    logo: nextcloudLogo,
    type: "CT",
    description: "Nextcloud is a self-hosted productivity platform providing file sync, sharing, calendar, contacts, and collaboration tools as an alternative to cloud services like Google Drive or Dropbox.",
    usedFor: "Personal cloud storage, file synchronization across devices, document collaboration, calendar and contact management.",
    whyUseful: "Gives complete control over personal data while providing the convenience of cloud services. Critical for data sovereignty and privacy.",
    skills: "PHP/Apache administration, database management (MySQL/MariaDB), SSL certificate configuration, WebDAV protocols, and storage optimization."
  },
  {
    name: "Docker",
    slug: "docker",
    logo: dockerLogo,
    type: "CT",
    description: "Docker is a containerization platform that packages applications and their dependencies into isolated containers for consistent deployment across environments.",
    usedFor: "Running containerized applications, microservices architecture, and rapid deployment of self-hosted services.",
    whyUseful: "Fundamental for modern infrastructure. Enables quick deployment, easy updates, resource isolation, and reproducible environments.",
    skills: "Container orchestration, Dockerfile creation, docker-compose, networking between containers, volume management, and container security best practices."
  },
  {
    name: "CasaOS",
    slug: "casaos",
    logo: casaosLogo,
    type: "CT",
    description: "CasaOS is a simple, elegant home cloud system built on Docker that provides a beautiful dashboard for managing self-hosted applications.",
    usedFor: "Simplified Docker container management through a user-friendly web interface, making it easy to deploy and manage applications.",
    whyUseful: "Lowers the barrier to self-hosting by providing one-click app installation and an intuitive interface for container management.",
    skills: "Docker management, application deployment, system monitoring, and user-friendly infrastructure management."
  },
  {
    name: "Pangolin",
    slug: "pangolin",
    logo: pangolinLogo,
    type: "CT",
    description: "Pangolin is a secure tunneling solution that enables secure access to internal services from external networks without exposing ports directly to the internet.",
    usedFor: "Secure remote access to homelab services, creating encrypted tunnels for safe connectivity from anywhere.",
    whyUseful: "Essential for accessing homelab resources securely while traveling or working remotely without compromising network security.",
    skills: "VPN/tunnel configuration, network security, firewall rules, secure remote access architecture, and encryption protocols."
  },
  {
    name: "Wazuh",
    slug: "wazuh",
    logo: wazuhLogo,
    type: "CT",
    description: "Wazuh is an open-source security platform providing unified XDR and SIEM protection, including intrusion detection, log analysis, and compliance monitoring.",
    usedFor: "Security monitoring, threat detection, log analysis, file integrity monitoring, and vulnerability assessment across all homelab systems.",
    whyUseful: "Provides enterprise-grade security monitoring for homelabs, helping detect threats, maintain compliance, and understand security posture.",
    skills: "SIEM administration, security event analysis, rule creation, agent deployment, threat hunting, and incident response procedures."
  },
  {
    name: "Zabbix",
    slug: "zabbix",
    logo: zabbixLogo,
    type: "CT",
    description: "Zabbix is an enterprise-class open-source monitoring solution for networks, servers, virtual machines, and cloud services.",
    usedFor: "Infrastructure monitoring, alerting, performance tracking, and capacity planning across all homelab resources.",
    whyUseful: "Critical for maintaining homelab health. Provides early warning of issues, tracks performance trends, and ensures service availability.",
    skills: "Monitoring architecture design, SNMP configuration, custom templates, trigger creation, alerting workflows, and performance analysis."
  },
  {
    name: "RustDesk",
    slug: "rustdesk",
    logo: rustdeskLogo,
    type: "CT",
    description: "RustDesk is an open-source remote desktop software that provides a self-hosted alternative to TeamViewer or AnyDesk.",
    usedFor: "Remote desktop access to homelab machines and providing remote support to family/friends without relying on third-party services.",
    whyUseful: "Enables secure remote access while maintaining complete control over the relay infrastructure and connection data.",
    skills: "Remote desktop protocols, relay server administration, network configuration, cross-platform support, and secure remote access."
  },
  {
    name: "n8n",
    slug: "n8n",
    logo: n8nLogo,
    type: "CT",
    description: "n8n is a workflow automation tool that connects apps and services to automate tasks with a visual node-based interface.",
    usedFor: "Automating repetitive tasks, integrating services, creating custom workflows for notifications, data processing, and system management.",
    whyUseful: "Dramatically reduces manual work by automating homelab tasks like backups, notifications, data syncing, and system maintenance.",
    skills: "Workflow design, API integration, webhook configuration, JavaScript/Python scripting, and process automation."
  },
  {
    name: "OPNsense",
    slug: "opnsense",
    logo: opnsenseLogo,
    type: "VM",
    description: "OPNsense is an open-source firewall and routing platform based on FreeBSD, featuring a web-based interface for managing network security.",
    usedFor: "Network firewall, routing, VPN gateway, intrusion detection/prevention, and traffic shaping for the entire homelab network.",
    whyUseful: "The security backbone of any serious homelab. Provides enterprise-grade network security, segmentation, and monitoring capabilities.",
    skills: "Firewall rule management, VPN configuration (OpenVPN/WireGuard), IDS/IPS tuning, network segmentation, traffic analysis, and high availability."
  },
  {
    name: "Windows 10",
    slug: "windows10",
    logo: windowsLogo,
    type: "VM",
    description: "Windows 10 virtual machine for running Windows-specific applications and testing Windows environments.",
    usedFor: "Running Windows-only software, testing, Active Directory lab environments, and compatibility testing.",
    whyUseful: "Provides flexibility to run Windows applications within a primarily Linux homelab without dedicated hardware.",
    skills: "Windows Server administration, Active Directory, Group Policy, PowerShell scripting, and virtualization optimization."
  },
  {
    name: "Zabbix Server",
    slug: "zabbix-server",
    logo: zabbixLogo,
    type: "VM",
    description: "Dedicated Zabbix server VM for centralized monitoring infrastructure with enhanced resources for large-scale data collection.",
    usedFor: "Central monitoring hub with database backend, processing monitoring data from all agents and proxies across the infrastructure.",
    whyUseful: "Separating the Zabbix server on a VM provides better resource allocation and isolation for critical monitoring infrastructure.",
    skills: "Database optimization (PostgreSQL/MySQL), high-performance monitoring, distributed monitoring architecture, and capacity planning."
  },
  {
    name: "TacticalRMM",
    slug: "tacticalrmm",
    logo: tacticalrmmLogo,
    type: "VM",
    description: "Tactical RMM is an open-source remote monitoring and management tool for managing Windows, Linux, and macOS endpoints.",
    usedFor: "Centralized endpoint management, remote script execution, patch management, and automated maintenance tasks.",
    whyUseful: "Essential for managing multiple machines efficiently. Provides MSP-grade tools for system administration and automation.",
    skills: "RMM administration, PowerShell/Bash scripting, patch management, endpoint security, and automated remediation."
  },
  {
    name: "Uptime Kuma",
    slug: "uptime-kuma",
    logo: uptimekumaLogo,
    type: "CT",
    description: "Uptime Kuma is a self-hosted monitoring tool with a beautiful UI for tracking website and service availability.",
    usedFor: "Monitoring uptime of all homelab services, external websites, and APIs with instant notifications when services go down.",
    whyUseful: "Simple yet powerful uptime monitoring with support for multiple notification channels. Essential for knowing when services fail.",
    skills: "Service monitoring, alerting configuration, status page creation, and notification integration (Discord, Slack, email)."
  },
  {
    name: "Portainer",
    slug: "portainer",
    logo: portainerLogo,
    type: "CT",
    description: "Portainer is a container management platform providing a web UI for Docker, Kubernetes, and other container environments.",
    usedFor: "Managing Docker containers, images, networks, and volumes through an intuitive web interface across multiple hosts.",
    whyUseful: "Simplifies container management with visual tools for deployment, monitoring, and troubleshooting containerized applications.",
    skills: "Container orchestration, Docker Swarm, stack deployment, resource management, and multi-host container administration."
  }
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(service => service.slug === slug);
};
