import React from 'react';
import { ChevronDown, Download } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-primary via-portfolio-primary to-portfolio-accent/40" />

      {/* Network Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="network" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="1.5" fill="white" />
              <circle cx="0" cy="0" r="1.5" fill="white" />
              <circle cx="100" cy="0" r="1.5" fill="white" />
              <circle cx="0" cy="100" r="1.5" fill="white" />
              <circle cx="100" cy="100" r="1.5" fill="white" />
              <line x1="50" y1="50" x2="0" y2="0" stroke="white" strokeWidth="0.5" opacity="0.3" />
              <line x1="50" y1="50" x2="100" y2="0" stroke="white" strokeWidth="0.5" opacity="0.3" />
              <line x1="50" y1="50" x2="0" y2="100" stroke="white" strokeWidth="0.5" opacity="0.3" />
              <line x1="50" y1="50" x2="100" y2="100" stroke="white" strokeWidth="0.5" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#network)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
          {t('hero.title')}
        </h1>

        <p className="text-lg md:text-xl text-white/90 mb-4 max-w-2xl mx-auto">
          {t('hero.subtitle')}
        </p>

        <p className="text-xl md:text-2xl text-portfolio-accent font-medium mb-8 italic">
          "{t('hero.tagline')}"
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={scrollToProjects}
            className="bg-portfolio-accent hover:bg-portfolio-accent/90 text-white font-semibold px-8 py-6 text-lg"
          >
            {t('hero.viewProjects')}
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-portfolio-primary font-semibold px-8 py-6 text-lg"
          >
            <Download className="mr-2 h-5 w-5" />
            {t('hero.downloadCV')}
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToProjects}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll to projects"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
};

export default Hero;
