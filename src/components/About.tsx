import React from 'react';
import { Linkedin, Github, Mail, GraduationCap, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const About: React.FC = () => {
  const { t, language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  const bio = language === 'en' 
    ? [
        "Passionate about networking, driven by curiosity and innovation. My journey in IT began with a simple fascination: how do systems communicate with each other? This curiosity led me to explore network architecture, virtualization, and cybersecurity in depth. I've spent countless hours configuring virtual environments, troubleshooting connectivity issues, and automating repetitive tasks with Python scripts. What excites me about networking isn't just making things work, but understanding why they work and how to optimize them. From deploying DNS servers with BIND9 to orchestrating cross-platform communications between Linux and Windows systems, I thrive on designing robust and secure infrastructures.",
        "From Kenya to France: a global perspective on technology. With diverse experience in hospitality, digital marketing, and administrative support in Kenya and France, I've developed a unique combination of technical skills and interpersonal intelligence. My English proficiency (C2) and customer-facing experience have taught me that an excellent IT professional doesn't just solve technical problems: they translate complex solutions into clear, actionable recommendations for diverse audiences. Currently enrolled in BTS SIO (IT Services for Organizations) at CCI Campus Mulhouse for the 2026 intake, and actively pursuing CCNA and Microsoft certifications, I'm building the expertise needed to excel as a network and systems technician.",
        "Looking ahead: building tomorrow's infrastructure. I'm seeking an apprenticeship that will allow me to contribute to real IT infrastructure challenges while continuing to learn alongside experienced professionals. Whether implementing network protocols, optimizing system performance, or documenting best practices for team efficiency, I bring rigor, adaptability, and a genuine passion for continuous learning. My goal is clear: to become a trusted technical professional, then systems administrator, who doesn't just maintain infrastructures but anticipates needs, prevents problems, and drives innovation.",
      ]
    : [
        "Passionné de réseaux, animé par la curiosité et l'innovation. Mon parcours dans l'informatique a débuté par une fascination simple : comment les systèmes communiquent-ils entre eux ? Cette curiosité m'a conduit à explorer en profondeur l'architecture réseau, la virtualisation et la cybersécurité. J'ai consacré d'innombrables heures à configurer des environnements virtuels, résoudre des problèmes de connectivité et automatiser des tâches répétitives avec des scripts Python. Ce qui me passionne dans les réseaux, ce n'est pas seulement de faire fonctionner les choses, mais de comprendre pourquoi elles fonctionnent et comment les optimiser. Du déploiement de serveurs DNS avec BIND9 à l'orchestration de communications multiplateformes entre systèmes Linux et Windows, je m'épanouis dans la conception d'infrastructures robustes et sécurisées.",
        "Du Kenya à la France : une perspective mondiale sur la technologie. Fort d'une expérience variée dans l'hôtellerie, le marketing digital et l'assistance administrative au Kenya et en France, j'ai développé une combinaison unique de compétences techniques et d'intelligence relationnelle. Ma maîtrise de l'anglais (C2) et mon expérience en contact client m'ont appris qu'un excellent professionnel de l'informatique ne se contente pas de résoudre des problèmes techniques : il traduit des solutions complexes en recommandations claires et concrètes pour des publics diversifiés. Actuellement inscrit en BTS SIO (Services Informatiques aux Organisations) au CCI Campus de Mulhouse pour la rentrée 2026, et activement engagé dans la préparation des certifications CCNA et Microsoft, je construis l'expertise nécessaire pour exceller en tant que technicien réseaux et systèmes.",
        "Vers l'avenir : bâtir l'infrastructure de demain. Je recherche une alternance qui me permettra de contribuer à des défis concrets d'infrastructure informatique tout en continuant à apprendre aux côtés de professionnels expérimentés. Que ce soit pour implémenter des protocoles réseau, optimiser les performances système ou documenter les bonnes pratiques pour l'efficacité d'équipe, j'apporte rigueur, adaptabilité et une véritable passion pour l'apprentissage continu. Mon objectif est clair : devenir un professionnel technique de confiance, puis administrateur systèmes, qui ne se contente pas de maintenir les infrastructures, mais anticipe les besoins, prévient les problèmes et stimule l'innovation.",
      ];

  const certifications = language === 'en'
    ? ['CCNA (In Progress)', 'Microsoft Certification (In Progress)']
    : ['CCNA (En cours)', 'Certification Microsoft (En cours)'];

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 bg-white"
    >
      <div className={`container mx-auto px-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-text mb-4">
            {t('about.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Left Column - Photo & Social Links */}
          <div className="flex flex-col items-center">
            {/* Photo Placeholder */}
            <div className="w-64 h-64 rounded-full bg-gradient-to-br from-portfolio-primary to-portfolio-accent flex items-center justify-center mb-6 shadow-xl">
              <span className="text-white text-6xl font-bold">EN</span>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-portfolio-primary text-portfolio-primary hover:bg-portfolio-primary hover:text-white"
                asChild
              >
                <a
                  href="https://www.linkedin.com/in/earnest-njuguna-syre"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-portfolio-primary text-portfolio-primary hover:bg-portfolio-primary hover:text-white"
                asChild
              >
                <a
                  href="https://github.com/njuguna2026"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-portfolio-primary text-portfolio-primary hover:bg-portfolio-primary hover:text-white"
                asChild
              >
                <a
                  href="mailto:earnestnjuguna001@gmail.com"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right Column - Bio & Info */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-portfolio-text">
              {t('about.greeting')}
            </h3>

            {/* Bio Paragraphs */}
            <div className="space-y-4">
              {bio.map((paragraph, index) => (
                <p key={index} className="text-portfolio-text/80 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Education & Certifications */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              <Card className="border-portfolio-text/10">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <GraduationCap className="h-5 w-5 text-portfolio-accent" />
                    {t('about.education.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-portfolio-text">
                    {language === 'en' ? 'CCI Campus Mulhouse' : 'CCI Campus Mulhouse'}
                  </p>
                  <p className="text-sm text-portfolio-text/70">
                    {language === 'en' ? 'BTS SIO (IT Services for Organizations)' : 'BTS SIO (Services Informatiques aux Organisations)'}
                  </p>
                  <p className="text-sm text-portfolio-accent font-medium mt-1">
                    2026 - 2028
                  </p>
                </CardContent>
              </Card>

              <Card className="border-portfolio-text/10">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Award className="h-5 w-5 text-portfolio-accent" />
                    {t('about.certifications.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {certifications.map((cert, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-portfolio-light text-portfolio-text"
                      >
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
