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
    downloadReport1: "/projects/Breezy/breezy-rapport-soutenance",
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

    id: "big-data-health",
    title: "Plateforme Big Data Santé",
    shortDescription: "Architecture Data Lakehouse pour l'analyse de données hospitalières",
    description:
      "Mise en place d'une plateforme Big Data complète pour un groupe hospitalier (CHU) afin de créer un data warehouse. L'objectif était d'intégrer, stocker, analyser et visualiser des données hétérogènes (dossiers médicaux, flux patients) pour en extraire des informations stratégiques.",
    image: "/projects/image_test.jpg", // Placeholder until images are moved
    images: [
      "/projects/image_test.jpg",
    ],
    tags: ["Spark", "Airflow", "Superset", "Python", "Docker", "Hadoop"],
    category: "Ingénierie Data",
    link: "#",
    downloadReport1: "/projects/BigDataHealth/Bigdata_Livrable1.pdf",
    downloadReport2: "/projects/BigDataHealth/Bigdata_Livrable2.pdf",
    blocks: [
      {
        title: "Fonctionnalités Clés",
        groupId: "fonctionnalites",
        items: [
          "Intégration de données brutes (Bronze)",
          "Nettoyage et transformation (Silver)",
          "Agrégation pour l'analyse (Gold)",
          "Orchestration des tâches avec Airflow",
          "Traitement distribué avec Spark",
          "Visualisation interactive avec Superset"
        ]
      },
      {
        title: "Compétences développées",
        groupId: "resultats",
        items: [
          "Architecture Data Lakehouse",
          "Traitement de données massives (Big Data)",
          "Orchestration de flux de données",
          "Visualisation et Business Intelligence"
        ]
      }
    ]
  },
  {
    id: "easysave",
    title: "EasySave Backup Software",
    shortDescription: "Logiciel de sauvegarde sécurisé et performant pour professionnels",
    description:
      "Projet académique réalisé dans le cadre d'un éditeur logiciel fictif (ProSoft), visant à développer un logiciel de sauvegarde performant et évolutif destiné à des utilisateurs professionnels. L'objectif était de créer une solution fiable et simple d'utilisation, avec de fortes attentes en termes de performance et de maintenabilité du code.",
    image: "/projects/image_test.jpg", // Placeholder
    images: [
      "/projects/image_test.jpg",
    ],
    tags: ["C#", ".NET 8.0", "WPF", "MVC", "Scrum", "Git"],
    category: "Génie Logiciel",
    link: "https://github.com",
    downloadReport1: "/projects/EasySave/easysave-rapport.pdf",
    downloadPresentation: "/projects/EasySave/easysave-diapo.pdf",
    blocks: [
      {
        title: "Fonctionnalités Clés",
        groupId: "fonctionnalites",
        items: [
          "Interface graphique WPF moderne",
          "Sauvegardes complètes ou différentielles",
          "Chiffrement SHA-256 intégré",
          "Détection de logiciels métiers bloquants",
          "Sauvegardes en parallèle et gestion des priorités",
          "Console déportée (Sockets)"
        ]
      },
      {
        title: "Compétences développées",
        groupId: "resultats",
        items: [
          "Développement C#/.NET avancé",
          "Architecture logicielle MVC",
          "Gestion de projet agile (Scrum)",
          "Versioning Git et workflow collaboratif"
        ]
      }
    ]
  },
  {
    id: "route-optimization",
    title: "Optimisation de livraison - ADEME",
    shortDescription: "Optimisation de tournées de livraison (TSP variant) pour réduire l'empreinte carbone",
    description:
      "Projet universitaire en collaboration avec l'ADEME pour étudier l'optimisation des tournées de livraison, une variante complexe du problème du voyageur de commerce (TSP). Réponse à un appel à projets visant à réduire la consommation d'énergie et les émissions de CO2 liées au transport de marchandises.",
    image: "/projects/image_test.jpg", // Placeholder
    images: [
      "/projects/image_test.jpg",
    ],
    tags: ["Python", "Algorithmes Génétiques", "Recuit Simulé", "Colonie de Fourmis", "Optimisation", "Recherche Opérationnelle"],
    category: "Algorithmique",
    link: "https://github.com",
    downloadPresentation: "/projects/RouteOptimization/route-optimization-diapo.pdf",
    blocks: [
      {
        title: "Fonctionnalités Clés",
        groupId: "fonctionnalites",
        items: [
          "Modélisation de graphes",
          "Gestion de contraintes complexes (temps, circuits)",
          "Comparaison systématique des performances",
          "Génération de matrices aléatoires"
        ]
      },
      {
        title: "Compétences développées",
        groupId: "resultats",
        items: [
          "Modélisation Mathématique (NP-Difficile)",
          "Implémentation d'algorithmes complexes",
          "Analyse algorithmique comparative",
          "Programmation scientifique Python"
        ]
      },
      {
        title: "Méthodes d'Optimisation Implémentées",
        groupId: "methodes",
        items: [
          "Méthode Exacte (ILP)",
          "Métaheuristiques avancées : Recuit Simulé, Algorithme Génétique, Optimisation par Colonie de Fourmis"
        ]
      }
    ]
  },
  {
    id: "cloud-infrastructure",
    title: "Infrastructure Cloud avec OpenStack",
    shortDescription: "Déploiement et administration d'une infrastructure cloud privée complète",
    description:
      "Création d'une infrastructure cloud complète pour une petite structure utilisant OpenStack. Le but était de démontrer la capacité de concevoir, déployer et gérer un environnement virtualisé professionnel. L'infrastructure comprenait la configuration de serveurs virtuels (CentOS 8, Windows 10), d'un réseau privé sécurisé, et le déploiement de services essentiels.",
    image: "/projects/image_test.jpg", // Placeholder
    images: ["/projects/image_test.jpg"],
    tags: ["OpenStack", "CentOS 8", "Windows 10", "Apache", "MySQL", "Nextcloud", "Prometheus", "Grafana"],
    category: "Cloud & DevOps",
    link: "#",
    blocks: [
      {
        title: "Fonctionnalités Clés",
        groupId: "fonctionnalites",
        items: [
          "Réseau privé avec DHCP/DNS",
          "Routage inter-réseaux sécurisé",
          "Serveur web Apache + MySQL",
          "Stockage collaboratif Nextcloud",
          "Monitoring complet avec alertes automatisées"
        ]
      },
      {
        title: "Compétences développées",
        groupId: "resultats",
        items: [
          "Administration & Virtualisation OpenStack",
          "Configuration réseau avancée",
          "Déploiement & Gestion de services",
          "Monitoring & Observabilité"
        ]
      }
    ]
  },
  {
    id: "is-security",
    title: "Sécurité du SI & Hardening",
    shortDescription: "Conception et déploiement d'une infrastructure d'entreprise sécurisée (ANSSI)",
    description:
      "Projet ambitieux consistant à concevoir et déployer une infrastructure d'entreprise complète, en respectant scrupuleusement les recommandations de l'ANSSI. L'architecture incluait une DMZ pour isoler les services publics, un système d'information interne sécurisé et de multiples couches de protection avec des pare-feu redondants.",
    image: "/projects/image_test.jpg", // Placeholder
    images: ["/projects/image_test.jpg"],
    tags: ["ESXi 6.7", "Cisco", "WatchGuard", "StormShield", "Veeam", "PRTG", "Splunk", "Active Directory"],
    category: "Cybersécurité",
    link: "#",
    blocks: [
      {
        title: "Fonctionnalités Clés",
        groupId: "fonctionnalites",
        items: [
          "DMZ avec serveurs web publics",
          "Pare-feu WatchGuard et StormShield",
          "Active Directory avec GPO sécurisées",
          "Monitoring réseau via PRTG",
          "Analyse de logs avec Splunk",
          "Sauvegarde centralisée Veeam"
        ]
      },
      {
        title: "Compétences développées",
        groupId: "resultats",
        items: [
          "Architecture de sécurité d'entreprise",
          "Configuration Firewall & IDS/IPS",
          "Gestion des identités et accès (IAM)",
          "Surveillance et analyse de sécurité"
        ]
      }
    ]
  },
  {
    id: "data-processing",
    title: "Traitement des données avec Python",
    shortDescription: "Outil d'analyse et de visualisation de données pour fichiers CSV",
    description:
      "Ce projet consistait à développer un script Python sophistiqué pour analyser et traiter des données issues de fichiers de calendrier au format CSV. L'objectif était de créer un outil capable d'extraire, filtrer et présenter des informations spécifiques sur les événements et réunions. Le principal défi était de transformer des données brutes en informations exploitables, présentées sous forme de tableaux Markdown et de graphiques interactifs.",
    image: "/projects/image_test.jpg", // Placeholder
    images: ["/projects/image_test.jpg"],
    tags: ["Python", "Pandas", "Matplotlib", "CSV", "Markdown", "HTML/CSS", "Jupyter", "Numpy"],
    category: "Data Science",
    link: "https://github.com",
    blocks: [
      {
        title: "Fonctionnalités Clés",
        groupId: "fonctionnalites",
        items: [
          "Analyse automatique de fichiers CSV",
          "Filtrage intelligent par type et date",
          "Génération de graphiques Matplotlib",
          "Tableaux Markdown formatés",
          "Export HTML/CSS personnalisé"
        ]
      },
      {
        title: "Compétences développées",
        groupId: "resultats",
        items: [
          "Manipulation de données avec Pandas",
          "Visualisation avec Matplotlib",
          "Développement Python Orienté Objet",
          "Tests unitaires et Documentation"
        ]
      }
    ]
  },
]
