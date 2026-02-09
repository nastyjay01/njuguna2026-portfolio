export const translations = {
  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      skills: 'Skills',
      about: 'About',
      contact: 'Contact',
    },
    hero: {
      title: 'NJUGUNA Earnest',
      subtitle: 'Network Engineering Student | System Administrator | Technical Content Creator',
      tagline: 'Connecting the world, one packet at a time',
      viewProjects: 'View My Projects',
      downloadCV: 'Download My CV',
    },
    projects: {
      title: 'My Projects & Work',
      intro: 'Explore my work in network engineering, documentation, and educational content.',
      filters: {
        all: 'All Projects',
        video: 'Video Tutorials',
        pdf: 'PDF Documentation',
        lab: 'Network Labs',
      },
      viewProject: 'View Project',
      downloadPDF: 'Download PDF',
      viewDetails: 'View Details',
      items: [
        {
          category: 'video',
          title: 'Network Configuration Tutorial',
          description: 'Step-by-step guide to configuring enterprise network infrastructure using Cisco Packet Tracer.',
          tools: ['Cisco Packet Tracer'],
        },
        {
          category: 'video',
          title: 'Linux Server Setup Guide',
          description: 'Complete tutorial on setting up and configuring Linux servers in a virtual environment.',
          tools: ['VirtualBox', 'Linux', 'Tutorial'],
        },
        {
          category: 'pdf',
          title: 'Network Architecture Documentation',
          description: 'Comprehensive documentation of network topology and configuration best practices.',
          tools: ['Technical Writing', 'Network Diagrams'],
        },
        {
          category: 'pdf',
          title: 'System Configuration Guide',
          description: 'Detailed guide on system configuration and deployment procedures.',
          tools: ['Documentation', 'Configuration'],
        },
        {
          category: 'lab',
          title: 'VLAN & Routing Lab',
          description: 'Hands-on lab exercise covering VLAN configuration and inter-VLAN routing.',
          tools: ['Cisco Packet Tracer', 'Routing', 'VLANs'],
        },
        {
          category: 'lab',
          title: 'Network Security Lab',
          description: 'Security-focused lab implementing firewall rules and network protection.',
          tools: ['VirtualBox', 'Network Security'],
        },
      ],
    },
    skills: {
      title: 'Technical Skills',
      intro: 'Technologies and tools I work with regularly',
      categories: {
        networking: {
          title: 'Networking',
          skills: ['TCP/IP & OSI Model', 'Routing & Switching', 'Network Security', 'VLAN Configuration'],
        },
        tools: {
          title: 'Tools & Platforms',
          skills: ['Cisco Packet Tracer', 'VirtualBox', 'VMware', 'Wireshark'],
        },
        os: {
          title: 'Operating Systems',
          skills: ['Linux (Ubuntu)', 'pfSense', 'Windows Server', 'Command Line Interface'],
        },
        additional: {
          title: 'Additional Skills',
          skills: ['Technical Documentation', 'Video Tutorial Creation', 'Network Troubleshooting', 'IT Support'],
        },
      },
    },
    about: {
      title: 'About Me',
      greeting: "Hello, I'm Earnest NJUGUNA",
      bio: [
        "Passionate about networking, driven by curiosity and innovation. My journey in IT began with a simple fascination: how do systems communicate with each other? This curiosity led me to explore network architecture, virtualization, and cybersecurity in depth. I've spent countless hours configuring virtual environments, troubleshooting connectivity issues, and automating repetitive tasks with Python scripts. What excites me about networking isn't just making things work, but understanding why they work and how to optimize them. From deploying DNS servers with BIND9 to orchestrating cross-platform communications between Linux and Windows systems, I thrive on designing robust and secure infrastructures.",
        "From Kenya to France: a global perspective on technology. With diverse experience in hospitality, digital marketing, and administrative support in Kenya and France, I've developed a unique combination of technical skills and interpersonal intelligence. My English proficiency (C2) and customer-facing experience have taught me that an excellent IT professional doesn't just solve technical problems: they translate complex solutions into clear, actionable recommendations for diverse audiences. Currently enrolled in BTS SIO (IT Services for Organizations) at CCI Campus Mulhouse for the 2026 intake, and actively pursuing CCNA and Microsoft certifications, I'm building the expertise needed to excel as a network and systems technician.",
        "Looking ahead: building tomorrow's infrastructure. I'm seeking an apprenticeship that will allow me to contribute to real IT infrastructure challenges while continuing to learn alongside experienced professionals. Whether implementing network protocols, optimizing system performance, or documenting best practices for team efficiency, I bring rigor, adaptability, and a genuine passion for continuous learning. My goal is clear: to become a trusted technical professional, then systems administrator, who doesn't just maintain infrastructures but anticipates needs, prevents problems, and drives innovation.",
      ],
      education: {
        title: 'Education',
        school: 'CCI Campus Mulhouse',
        degree: 'BTS SIO (IT Services for Organizations)',
        years: '2026 - 2028',
      },
      certifications: {
        title: 'Certifications',
        items: ['CCNA (In Progress)', 'Microsoft Certification (In Progress)'],
      },
    },
    contact: {
      title: 'Get In Touch',
      subtitle: 'Have a question or want to work together? Let\'s connect!',
      form: {
        name: 'Name',
        email: 'Email',
        subject: 'Subject',
        message: 'Message',
        submit: 'Send Message',
        success: "Thank you! I'll get back to you soon.",
        note: 'Form submission is currently for display only. Contact me directly via email or LinkedIn below.',
        errors: {
          nameRequired: 'Name is required',
          emailRequired: 'Email is required',
          emailInvalid: 'Please enter a valid email address',
          messageRequired: 'Message is required',
          messageMin: 'Message must be at least 10 characters',
        },
      },
      info: {
        email: 'Email',
        phone: 'Phone',
        location: 'Location',
        locationValue: 'Colmar, 68000 France',
      },
    },
    footer: {
      copyright: '© 2026 NJUGUNA EARNEST. All rights reserved.',
      builtWith: 'Built with ❤️ using React and Tailwind CSS',
    },
  },
  fr: {
    nav: {
      home: 'Accueil',
      projects: 'Projets',
      skills: 'Compétences',
      about: 'À Propos',
      contact: 'Contact',
    },
    hero: {
      title: 'NJUGUNA Earnest',
      subtitle: 'Étudiant en Ingénierie Réseau | Administrateur Système | Créateur de Contenu Technique',
      tagline: 'Connecter le monde, un paquet à la fois',
      viewProjects: 'Voir Mes Projets',
      downloadCV: 'Télécharger Mon CV',
    },
    projects: {
      title: 'Mes Projets & Travaux',
      intro: 'Découvrez mon travail en ingénierie réseau, documentation et contenu éducatif.',
      filters: {
        all: 'Tous les Projets',
        video: 'Tutoriels Vidéo',
        pdf: 'Documentation PDF',
        lab: 'Labs Réseau',
      },
      viewProject: 'Voir le Projet',
      downloadPDF: 'Télécharger le PDF',
      viewDetails: 'Voir les Détails',
      items: [
        {
          category: 'video',
          title: 'Tutoriel Configuration Réseau',
          description: 'Guide étape par étape pour configurer une infrastructure réseau d\'entreprise avec Cisco Packet Tracer.',
          tools: ['Cisco Packet Tracer'],
        },
        {
          category: 'video',
          title: 'Guide Installation Serveur Linux',
          description: 'Tutoriel complet sur l\'installation et la configuration de serveurs Linux en environnement virtuel.',
          tools: ['VirtualBox', 'Linux', 'Tutoriel'],
        },
        {
          category: 'pdf',
          title: 'Documentation Architecture Réseau',
          description: 'Documentation complète de la topologie réseau et des meilleures pratiques de configuration.',
          tools: ['Rédaction Technique', 'Schémas Réseau'],
        },
        {
          category: 'pdf',
          title: 'Guide de Configuration Système',
          description: 'Guide détaillé sur la configuration système et les procédures de déploiement.',
          tools: ['Documentation', 'Configuration'],
        },
        {
          category: 'lab',
          title: 'Lab VLAN & Routage',
          description: 'Exercice pratique couvrant la configuration VLAN et le routage inter-VLAN.',
          tools: ['Cisco Packet Tracer', 'Routage', 'VLANs'],
        },
        {
          category: 'lab',
          title: 'Lab Sécurité Réseau',
          description: 'Lab axé sur la sécurité implémentant des règles de pare-feu et la protection réseau.',
          tools: ['VirtualBox', 'Sécurité Réseau'],
        },
      ],
    },
    skills: {
      title: 'Compétences Techniques',
      intro: 'Technologies et outils avec lesquels je travaille régulièrement',
      categories: {
        networking: {
          title: 'Réseaux',
          skills: ['TCP/IP & Modèle OSI', 'Routage & Commutation', 'Sécurité Réseau', 'Configuration VLAN'],
        },
        tools: {
          title: 'Outils & Plateformes',
          skills: ['Cisco Packet Tracer', 'VirtualBox', 'VMware', 'Wireshark'],
        },
        os: {
          title: 'Systèmes d\'Exploitation',
          skills: ['Linux (Ubuntu)', 'pfSense', 'Windows Server', 'Interface en Ligne de Commande'],
        },
        additional: {
          title: 'Compétences Additionnelles',
          skills: ['Documentation Technique', 'Création de Tutoriels Vidéo', 'Dépannage Réseau', 'Support IT'],
        },
      },
    },
    about: {
      title: 'À Propos de Moi',
      greeting: 'Bonjour, je suis Earnest NJUGUNA',
      bio: [
        "Passionné de réseaux, animé par la curiosité et l'innovation. Mon parcours dans l'informatique a débuté par une fascination simple : comment les systèmes communiquent-ils entre eux ? Cette curiosité m'a conduit à explorer en profondeur l'architecture réseau, la virtualisation et la cybersécurité. J'ai consacré d'innombrables heures à configurer des environnements virtuels, résoudre des problèmes de connectivité et automatiser des tâches répétitives avec des scripts Python. Ce qui me passionne dans les réseaux, ce n'est pas seulement de faire fonctionner les choses, mais de comprendre pourquoi elles fonctionnent et comment les optimiser. Du déploiement de serveurs DNS avec BIND9 à l'orchestration de communications multiplateformes entre systèmes Linux et Windows, je m'épanouis dans la conception d'infrastructures robustes et sécurisées.",
        "Du Kenya à la France : une perspective mondiale sur la technologie. Fort d'une expérience variée dans l'hôtellerie, le marketing digital et l'assistance administrative au Kenya et en France, j'ai développé une combinaison unique de compétences techniques et d'intelligence relationnelle. Ma maîtrise de l'anglais (C2) et mon expérience en contact client m'ont appris qu'un excellent professionnel de l'informatique ne se contente pas de résoudre des problèmes techniques : il traduit des solutions complexes en recommandations claires et concrètes pour des publics diversifiés. Actuellement inscrit en BTS SIO (Services Informatiques aux Organisations) au CCI Campus de Mulhouse pour la rentrée 2026, et activement engagé dans la préparation des certifications CCNA et Microsoft, je construis l'expertise nécessaire pour exceller en tant que technicien réseaux et systèmes.",
        "Vers l'avenir : bâtir l'infrastructure de demain. Je recherche une alternance qui me permettra de contribuer à des défis concrets d'infrastructure informatique tout en continuant à apprendre aux côtés de professionnels expérimentés. Que ce soit pour implémenter des protocoles réseau, optimiser les performances système ou documenter les bonnes pratiques pour l'efficacité d'équipe, j'apporte rigueur, adaptabilité et une véritable passion pour l'apprentissage continu. Mon objectif est clair : devenir un professionnel technique de confiance, puis administrateur systèmes, qui ne se contente pas de maintenir les infrastructures, mais anticipe les besoins, prévient les problèmes et stimule l'innovation.",
      ],
      education: {
        title: 'Formation',
        school: 'CCI Campus Mulhouse',
        degree: 'BTS SIO (Services Informatiques aux Organisations)',
        years: '2026 - 2028',
      },
      certifications: {
        title: 'Certifications',
        items: ['CCNA (En cours)', 'Certification Microsoft (En cours)'],
      },
    },
    contact: {
      title: 'Me Contacter',
      subtitle: 'Une question ou envie de collaborer ? Connectons-nous !',
      form: {
        name: 'Nom',
        email: 'Email',
        subject: 'Sujet',
        message: 'Message',
        submit: 'Envoyer le Message',
        success: 'Merci ! Je vous répondrai bientôt.',
        note: 'Le formulaire est actuellement en mode démonstration. Contactez-moi directement par email ou LinkedIn ci-dessous.',
        errors: {
          nameRequired: 'Le nom est requis',
          emailRequired: 'L\'email est requis',
          emailInvalid: 'Veuillez entrer une adresse email valide',
          messageRequired: 'Le message est requis',
          messageMin: 'Le message doit contenir au moins 10 caractères',
        },
      },
      info: {
        email: 'Email',
        phone: 'Téléphone',
        location: 'Localisation',
        locationValue: 'Colmar, 68000 France',
      },
    },
    footer: {
      copyright: '© 2026 NJUGUNA EARNEST. Tous droits réservés.',
      builtWith: 'Créé avec ❤️ en utilisant React et Tailwind CSS',
    },
  },
};
