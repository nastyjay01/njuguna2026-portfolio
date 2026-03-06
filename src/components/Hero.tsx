import React, { useState } from 'react';  // ADD useState HERE
import { ChevronDown, Download, X } from 'lucide-react';  // ADD X HERE
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const [showCVPreview, setShowCVPreview] = useState(false);  // ADD THIS LINE

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownload = () => {  // ADD THIS FUNCTION
    const link = document.createElement('a');
    link.href = '/documents/cv.pdf';
    link.download = 'cv.pdf';
    link.click();
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
            onClick={() => setShowCVPreview(true)}  // CHANGE THIS LINE
          >
            <Download className="mr-2 h-5 w-5" />
            {t('hero.downloadCV')}
          </Button>
        </div>
      </div>

      {/* CV Preview Modal - ADD THIS ENTIRE SECTION */}
      {showCVPreview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="relative bg-white rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col">
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900">CV Preview</h2>
              <button
                onClick={() => setShowCVPreview(false)}
                className="p-1 hover:bg-gray-100 rounded-lg transition"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            {/* PDF Viewer */}
            <div className="flex-1 overflow-auto bg-gray-50">
              <iframe
                src="/documents/cv.pdf#toolbar=0"
                className="w-full h-full"
                title="CV Preview"
              />
            </div>

            {/* Footer */}
            <div className="flex justify-end gap-3 p-6 border-t border-gray-200 bg-gray-50">
              <Button
                variant="outline"
                onClick={() => setShowCVPreview(false)}
                className="font-semibold"
              >
                Close
              </Button>
              <Button
                onClick={handleDownload}
                className="bg-portfolio-accent hover:bg-portfolio-accent/90 text-white font-semibold"
              >
                <Download className="mr-2 h-4 w-4" />
                Download
              </Button>
            </div>
          </div>
        </div>
      )}

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