import type { Project3D } from "@/types/project-3d"

export const PROJECTS_3D: Project3D[] = [
  {
    id: "breezy",
    title: "Breezy",
    description:
      "Built a machine learning-based IDS using Python and Scikit-learn to detect anomalous network traffic patterns with 95% accuracy.",
    image: "/projects/image_test.jpg",
    tags: ["Python", "Scikit-learn", "Wireshark", "TCP/IP"],
    category: "Cybersecurity",
    link: "https://github.com",
  },
  {
    id: "secure-chat",
    title: "Secure Chat Application",
    description:
      "Developed an end-to-end encrypted messaging app implementing AES-256 encryption and RSA key exchange protocols.",
    image: "/projects/image_test.jpg",
    tags: ["Go", "WebSockets", "Cryptography", "React"],
    category: "Security Engineering",
    link: "https://example.com",
  },
  {
    id: "vuln-scanner",
    title: "Vulnerability Scanner",
    description:
      "Created an automated web application security scanner that identifies OWASP Top 10 vulnerabilities with detailed reporting.",
    image: "/projects/image_test.jpg",
    tags: ["Python", "BeautifulSoup", "SQLMap", "OWASP"],
    category: "AppSec",
    link: "https://github.com",
  },
  {
    id: "ransomware-lab",
    title: "Ransomware Analysis Lab",
    description:
      "Set up an isolated environment for analyzing ransomware behavior, documenting encryption methods and IOCs.",
    image: "/projects/image_test.jpg",
    tags: ["VMs", "IDA Pro", "Malware", "Reverse Engineering"],
    category: "Malware Research",
    link: "https://github.com",
  },
]
