import React from 'react';
import { Network, Wrench, Monitor, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const skillLevels = [90, 85, 80, 75]; // Progress percentages for visual display

const Skills: React.FC = () => {
  const { t, language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  const categories = [
    {
      key: 'networking',
      icon: <Network className="h-8 w-8" />,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
      title: language === 'en' ? 'Networking' : 'Réseaux',
      skills: language === 'en' 
        ? ['TCP/IP & OSI Model', 'Routing & Switching', 'Network Security', 'VLAN Configuration']
        : ['TCP/IP & Modèle OSI', 'Routage & Commutation', 'Sécurité Réseau', 'Configuration VLAN'],
    },
    {
      key: 'tools',
      icon: <Wrench className="h-8 w-8" />,
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
      title: language === 'en' ? 'Tools & Platforms' : 'Outils & Plateformes',
      skills: ['Cisco Packet Tracer', 'VirtualBox', 'VMware', 'Wireshark'],
    },
    {
      key: 'os',
      icon: <Monitor className="h-8 w-8" />,
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
      title: language === 'en' ? 'Operating Systems' : "Systèmes d'Exploitation",
      skills: language === 'en'
        ? ['Linux (Ubuntu)', 'pfSense', 'Windows Server', 'Command Line Interface']
        : ['Linux (Ubuntu)', 'pfSense', 'Windows Server', 'Interface en Ligne de Commande'],
    },
    {
      key: 'additional',
      icon: <Award className="h-8 w-8" />,
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10',
      title: language === 'en' ? 'Additional Skills' : 'Compétences Additionnelles',
      skills: language === 'en'
        ? ['Technical Documentation', 'Video Tutorial Creation', 'Network Troubleshooting', 'IT Support']
        : ['Documentation Technique', 'Création de Tutoriels Vidéo', 'Dépannage Réseau', 'Support IT'],
    },
  ];

  return (
    <section
      id="skills"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 bg-portfolio-light"
    >
      <div className={`container mx-auto px-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-text mb-4">
            {t('skills.title')}
          </h2>
          <p className="text-lg text-portfolio-text/70 max-w-2xl mx-auto">
            {t('skills.intro')}
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {categories.map((category, categoryIndex) => (
            <Card
              key={category.key}
              className="group hover:shadow-lg transition-all duration-300 border-portfolio-text/10"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg ${category.bgColor} ${category.color}`}>
                    {category.icon}
                  </div>
                  <CardTitle className="text-xl text-portfolio-text">
                    {category.title}
                  </CardTitle>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-portfolio-text/80">{skill}</span>
                      <span className={`font-medium ${category.color}`}>
                        {skillLevels[skillIndex]}%
                      </span>
                    </div>
                    <Progress
                      value={isVisible ? skillLevels[skillIndex] : 0}
                      className="h-2 bg-portfolio-text/10"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
