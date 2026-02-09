import React from 'react';
import { Linkedin, Github, Mail, Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { id: 'home', label: t('nav.home') },
    { id: 'projects', label: t('nav.projects') },
    { id: 'about', label: t('nav.about') },
    { id: 'contact', label: t('nav.contact') },
  ];

  return (
    <footer className="bg-portfolio-primary text-white">
      <div className="container mx-auto px-4">
        {/* Top Section - Navigation */}
        <div className="py-8 border-b border-white/10">
          <div className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="hover:text-portfolio-accent transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-sm text-white/70">
              {t('footer.copyright')}
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/earnest-njuguna-syre"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-portfolio-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/njuguna2026"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-portfolio-accent transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="mailto:earnestnjuguna001@gmail.com"
                className="hover:text-portfolio-accent transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>

            {/* Built With */}
            <p className="text-sm text-white/70 flex items-center gap-1">
              Built with <Heart className="h-4 w-4 text-red-400 fill-red-400" /> using React and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
