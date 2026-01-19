import type { Project3D } from "@/types/project-3d"

export const PROJECTS_3D: Project3D[] = [
  {
    id: "breezy",
    title: "Breezy",
    shortDescription: "Un réseau social léger et réactif inspiré de Twitter/X",
    description:
      "Ce projet concernait le développement d'un réseau social léger et réactif, inspiré de Twitter/X, conçu pour fonctionner efficacement dans des environnements à faibles ressources et avec une connectivité limitée.",
    image: "/projects/Breezy/Breezy_connexion.png",
    images: [
      "/projects/Breezy/Breezy_connexion.png",
      "/projects/Breezy/Breezy_inscription.png",
      "/projects/Breezy/fil_actu.png",
      "/projects/Breezy/profil.png",
    ],
    tags: ["Node.js", "Next.js", "Express", "MongoDB", "React", "Tailwind CSS", "Docker", "Traefik", "JWT", "Microservices"],
    category: "Web",
    link: "https://github.com",
    blocks: [
        {
        title: "Gestion des publications",
        groupId: "fonctionnalites",
        items: [
          "Messages courts (280 caractères)",
          "Fil d'actualité chronologique",
          "Système de commentaires et réponses",
        ]
      },
      {
        title: "Interactions sociales",
        groupId: "fonctionnalites",
        items: [
          "Système de likes",
          "Suivi d'utilisateurs",
          "Profils personnalisés avec bio",
        ]
      },
      {
        title: "Architecture - Backend",
        groupId: "architecture",
        items: [
          "Services indépendants : auth, users, posts, feed",
          "Node.js + Express pour chaque microservice",
          "MongoDB avec Mongoose pour la persistance",
          "Authentification JWT avec refresh tokens",
          "Traefik comme API Gateway et Load Balancer"
        ]
      },
      {
        title: "Architecture - Frontend",
        groupId: "architecture",
        items: [
          "React.js et Next.js pour le SSR",
          "Tailwind CSS avec approche mobile-first",
          "Communication API via Axios",
          "Gestion des sessions et routes protégées"
        ]
      },
      {
        title: "Realisations",
        groupId: "resultats",
        items: [
          "Création d'un réseau social fonctionnel et extensible",
          "Expérience utilisateur fluide, optimisée mobile",
          "Architecture scalable et maintenable",
          "Pipeline CI/CD avec ESLint et Snyk pour la sécurité",
        ]
      },
      {
        title: "Compétences développées",
        groupId: "resultats",
        items: [
          "Architecture microservices et conteneurisation",
          "Sécurisation avec JWT et gestion des sessions",
          "Développement full-stack moderne",
          "Intégration continue et DevOps",
          "Optimisation des interfaces utilisateur",
        ]
      }
    ]
  },
  {
    id: "secure-chat",
    title: "Secure Chat Application",
    shortDescription: "Application de messagerie avec chiffrement de bout en bout",
    description:
      "Developed an end-to-end encrypted messaging app implementing AES-256 encryption and RSA key exchange protocols.",
    image: "/projects/image_test.jpg",
    images: [
      "/projects/image_test.jpg",
    ],
    tags: ["Go", "WebSockets", "Cryptography", "React"],
    category: "Security Engineering",
    link: "https://example.com",
    blocks: [
      {
        title: "Encryption",
        content: "AES-256 for message encryption and RSA 4096-bit for key exchange, ensuring military-grade security."
      },
      {
        title: "Real-time Communication",
        content: "WebSocket implementation for low-latency message delivery with automatic reconnection handling."
      }
    ]
  },
  {
    id: "vuln-scanner",
    title: "Vulnerability Scanner",
    shortDescription: "Scanner automatisé des vulnérabilités web OWASP Top 10",
    description:
      "Created an automated web application security scanner that identifies OWASP Top 10 vulnerabilities with detailed reporting.",
    image: "/projects/image_test.jpg",
    images: [
      "/projects/image_test.jpg",
    ],
    tags: ["Python", "BeautifulSoup", "SQLMap", "OWASP"],
    category: "AppSec",
    link: "https://github.com",
  },
  {
    id: "ransomware-lab",
    title: "Ransomware Analysis Lab",
    shortDescription: "Environnement isolé pour l'analyse du comportement des rançongiciels",
    description:
      "Set up an isolated environment for analyzing ransomware behavior, documenting encryption methods and IOCs.",
    image: "/projects/image_test.jpg",
    images: [
      "/projects/image_test.jpg",
    ],
    tags: ["VMs", "IDA Pro", "Malware", "Reverse Engineering"],
    category: "Malware Research",
    link: "https://github.com",
  },
]
