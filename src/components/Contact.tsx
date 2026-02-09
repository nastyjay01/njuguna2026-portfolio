import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { z } from 'zod';

const Contact: React.FC = () => {
  const { t, language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const contactSchema = z.object({
    name: z.string().min(1, t('contact.form.errors.nameRequired')),
    email: z.string().min(1, t('contact.form.errors.emailRequired')).email(t('contact.form.errors.emailInvalid')),
    subject: z.string().optional(),
    message: z.string().min(10, t('contact.form.errors.messageMin')),
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    try {
      contactSchema.parse(formData);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(newErrors);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: t('contact.info.email'),
      value: 'earnestnjuguna001@gmail.com',
      href: 'mailto:earnestnjuguna001@gmail.com',
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: t('contact.info.phone'),
      value: '0781334420',
      href: 'tel:+33781334420',
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      label: t('contact.info.location'),
      value: t('contact.info.locationValue'),
      href: null,
    },
  ];

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 bg-portfolio-light"
    >
      <div className={`container mx-auto px-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-text mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-portfolio-text/70 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Form */}
          <Card className="border-portfolio-text/10">
            <CardContent className="p-6">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
                  <p className="text-xl font-semibold text-portfolio-text mb-2">
                    {t('contact.form.success')}
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4"
                  >
                    {language === 'en' ? 'Send Another Message' : 'Envoyer un autre message'}
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t('contact.form.name')} *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={errors.name ? 'border-red-500' : ''}
                    />
                    {errors.name && (
                      <p className="text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">{t('contact.form.email')} *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={errors.email ? 'border-red-500' : ''}
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">{t('contact.form.subject')}</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">{t('contact.form.message')} *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className={errors.message ? 'border-red-500' : ''}
                    />
                    {errors.message && (
                      <p className="text-sm text-red-500">{errors.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-portfolio-accent hover:bg-portfolio-accent/90"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    {t('contact.form.submit')}
                  </Button>

                  <p className="text-xs text-portfolio-text/50 text-center">
                    {t('contact.form.note')}
                  </p>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <Card key={index} className="border-portfolio-text/10">
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-portfolio-accent/10 text-portfolio-accent">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm text-portfolio-text/60">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-portfolio-text font-medium hover:text-portfolio-accent transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-portfolio-text font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Social Links */}
            <Card className="border-portfolio-text/10">
              <CardContent className="p-4">
                <p className="text-sm text-portfolio-text/60 mb-3">
                  {language === 'en' ? 'Connect with me' : 'Connectez-vous avec moi'}
                </p>
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
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
