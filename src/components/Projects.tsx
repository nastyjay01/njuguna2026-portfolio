import React, { useState } from 'react';
import { Play, FileText, Server, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

type FilterType = 'all' | 'video' | 'pdf' | 'lab';

const gradientColors = [
  'from-blue-500 to-blue-700',
  'from-green-500 to-green-700',
  'from-red-500 to-red-700',
  'from-purple-500 to-purple-700',
  'from-orange-500 to-orange-700',
  'from-teal-500 to-teal-700',
];

const Projects: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const { ref, isVisible } = useScrollAnimation();

  const filters: { key: FilterType; label: string }[] = [
    { key: 'all', label: t('projects.filters.all') },
    { key: 'video', label: t('projects.filters.video') },
    { key: 'pdf', label: t('projects.filters.pdf') },
    { key: 'lab', label: t('projects.filters.lab') },
  ];

  // Get projects from translations
  const projects = (translations: any) => {
    const items = language === 'en' 
      ? [
          { category: 'video', title: 'Network Configuration Tutorial', description: 'Step-by-step guide to configuring enterprise network infrastructure using Cisco Packet Tracer.', tools: ['Cisco Packet Tracer'] },
          { category: 'video', title: 'Linux Server Setup Guide', description: 'Complete tutorial on setting up and configuring Linux servers in a virtual environment.', tools: ['VirtualBox', 'Linux', 'Tutorial'] },
          { category: 'pdf', title: 'Network Architecture Documentation', description: 'Comprehensive documentation of network topology and configuration best practices.', tools: ['Technical Writing', 'Network Diagrams'] },
          { category: 'pdf', title: 'System Configuration Guide', description: 'Detailed guide on system configuration and deployment procedures.', tools: ['Documentation', 'Configuration'] },
          { category: 'lab', title: 'VLAN & Routing Lab', description: 'Hands-on lab exercise covering VLAN configuration and inter-VLAN routing.', tools: ['Cisco Packet Tracer', 'Routing', 'VLANs'] },
          { category: 'lab', title: 'Network Security Lab', description: 'Security-focused lab implementing firewall rules and network protection.', tools: ['VirtualBox', 'Network Security'] },
        ]
      : [
          { category: 'video', title: 'Tutoriel Configuration Réseau', description: "Guide étape par étape pour configurer une infrastructure réseau d'entreprise avec Cisco Packet Tracer.", tools: ['Cisco Packet Tracer'] },
          { category: 'video', title: 'Guide Installation Serveur Linux', description: "Tutoriel complet sur l'installation et la configuration de serveurs Linux en environnement virtuel.", tools: ['VirtualBox', 'Linux', 'Tutoriel'] },
          { category: 'pdf', title: 'Documentation Architecture Réseau', description: 'Documentation complète de la topologie réseau et des meilleures pratiques de configuration.', tools: ['Rédaction Technique', 'Schémas Réseau'] },
          { category: 'pdf', title: 'Guide de Configuration Système', description: 'Guide détaillé sur la configuration système et les procédures de déploiement.', tools: ['Documentation', 'Configuration'] },
          { category: 'lab', title: 'Lab VLAN & Routage', description: 'Exercice pratique couvrant la configuration VLAN et le routage inter-VLAN.', tools: ['Cisco Packet Tracer', 'Routage', 'VLANs'] },
          { category: 'lab', title: 'Lab Sécurité Réseau', description: 'Lab axé sur la sécurité implémentant des règles de pare-feu et la protection réseau.', tools: ['VirtualBox', 'Sécurité Réseau'] },
        ];
    return items;
  };

  const allProjects = projects(null);
  const filteredProjects = activeFilter === 'all' 
    ? allProjects 
    : allProjects.filter(p => p.category === activeFilter);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'video':
        return <Play className="h-4 w-4" />;
      case 'pdf':
        return <FileText className="h-4 w-4" />;
      case 'lab':
        return <Server className="h-4 w-4" />;
      default:
        return null;
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'video':
        return language === 'en' ? 'Video' : 'Vidéo';
      case 'pdf':
        return 'PDF';
      case 'lab':
        return 'Lab';
      default:
        return category;
    }
  };

  const getActionButton = (category: string) => {
    switch (category) {
      case 'video':
        return t('projects.viewProject');
      case 'pdf':
        return t('projects.downloadPDF');
      case 'lab':
        return t('projects.viewDetails');
      default:
        return t('projects.viewDetails');
    }
  };

  return (
    <section
      id="projects"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 bg-white"
    >
      <div className={`container mx-auto px-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-text mb-4">
            {t('projects.title')}
          </h2>
          <p className="text-lg text-portfolio-text/70 max-w-2xl mx-auto">
            {t('projects.intro')}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.key}
              variant={activeFilter === filter.key ? 'default' : 'outline'}
              onClick={() => setActiveFilter(filter.key)}
              className={
                activeFilter === filter.key
                  ? 'bg-portfolio-accent hover:bg-portfolio-accent/90'
                  : 'border-portfolio-text/30 text-portfolio-text hover:bg-portfolio-accent/10'
              }
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-portfolio-text/10"
            >
              {/* Thumbnail */}
              <div className={`relative h-48 bg-gradient-to-br ${gradientColors[index % gradientColors.length]}`}>
                <Badge
                  className="absolute top-3 right-3 bg-white/90 text-portfolio-text hover:bg-white"
                >
                  {getCategoryIcon(project.category)}
                  <span className="ml-1">{getCategoryLabel(project.category)}</span>
                </Badge>
              </div>

              <CardHeader className="pb-2">
                <h3 className="text-xl font-semibold text-portfolio-text group-hover:text-portfolio-accent transition-colors">
                  {project.title}
                </h3>
              </CardHeader>

              <CardContent className="pb-4">
                <p className="text-portfolio-text/70 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, toolIndex) => (
                    <Badge
                      key={toolIndex}
                      variant="secondary"
                      className="text-xs bg-portfolio-light text-portfolio-text/80"
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter>
                <Button
                  className="w-full bg-portfolio-primary hover:bg-portfolio-primary/90"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  {getActionButton(project.category)}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
