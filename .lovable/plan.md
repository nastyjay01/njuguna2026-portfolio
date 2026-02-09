

# Bilingual Professional Portfolio Website for NJUGUNA Earnest

## Overview
A modern, production-ready single-page portfolio website for a network engineering student with full English/French language support. Built with React, Tailwind CSS, and professional animations.

---

## Language System
- **Language Toggle**: Button in navigation header to switch between English 🇬🇧 and French 🇫🇷
- **Context-based translations**: All text content available in both languages
- **Persistent preference**: Language choice saved to localStorage
- **Default language**: French (with easy toggle to English)

---

## Design System
- **Color Palette**: 
  - Primary: #1a365d (dark blue)
  - Accent: #3182ce (bright blue)
  - Background: #ffffff (white)
  - Text: #2d3748 (dark gray)
- **Typography**: Inter font family with professional hierarchy
- **Visual Elements**: Gradient backgrounds, subtle shadows, 8px card radius, smooth 0.3s transitions
- **Responsive**: Mobile-first with breakpoints at 640px, 1024px

---

## Page Sections

### 1. Fixed Navigation Header
- Sticky navigation with dark blue semi-transparent background
- Logo: "NJUGUNA Earnest" 
- Navigation links with smooth scroll: Home | Projects | Skills | About | Contact
- **Language toggle button** (EN/FR flag icons)
- Mobile hamburger menu with animated slide-out drawer
- Active section highlighting

### 2. Hero Section
- Full-screen gradient background (dark blue → lighter blue)
- Animated network pattern background (subtle SVG)
- Large heading: "NJUGUNA Earnest"
- Subheading (bilingual): "Network Engineering Student | System Administrator | Technical Content Creator"
- French tagline: "Connecter le monde, un paquet à la fois" / English: "Connecting the world, one packet at a time"
- Two CTA buttons:
  - "Voir Mes Projets" / "View My Projects" → scrolls to projects
  - "Télécharger Mon CV" / "Download My CV" → PDF link (placeholder)
- Entrance animations with fade-in and scale effects

### 3. Projects Section
- Section title (bilingual): "Mes Projets & Travaux" / "My Projects & Work"
- Intro text in both languages
- **Filter buttons** with active state styling:
  - All Projects / Tous les Projets
  - Video Tutorials / Tutoriels Vidéo
  - PDF Documentation / Documentation PDF
  - Network Labs / Labs Réseau
- Responsive grid (3 cols desktop → 2 tablet → 1 mobile)
- 6 project cards with:
  - Gradient placeholder thumbnails (blue, green, red, purple, orange, teal)
  - Category badges (Video/PDF/Lab)
  - Bilingual titles and descriptions
  - Technology tags
  - Action buttons with hover lift effects

### 4. Skills Section
- Section title: "Compétences Techniques" / "Technical Skills"
- Four skill categories in responsive grid:
  - **Networking**: TCP/IP, Routing & Switching, Security, VLANs
  - **Tools & Platforms**: Packet Tracer, VirtualBox, VMware, Wireshark
  - **Operating Systems**: Linux, pfSense, Windows Server, CLI
  - **Additional Skills**: Documentation, Tutorials, Troubleshooting, Support
- Circular progress indicators with percentages
- Hover effects with skill descriptions
- Color-coded category cards with icons

### 5. About Section
- Two-column layout (stacks on mobile)
- **Left Column**:
  - Circular photo placeholder (400x400px)
  - Social media links: LinkedIn, GitHub, Email
- **Right Column**:
  - Bilingual heading: "Bonjour, je suis Earnest NJUGUNA" / "Hello, I'm Earnest NJUGUNA"
  - Three bio paragraphs (French primary, English translation available)
  - Education: CCI Campus Mulhouse, BTS SIO (2026-2028)
  - Certifications: CCNA & Microsoft (in progress)

### 6. Contact Section
- Light gray background for visual separation
- Section title: "Me Contacter" / "Get In Touch"
- Two-column layout:
  - **Contact Form**: Name, Email (validated), Subject, Message with Zod validation
  - Success message on submission (display-only note)
  - **Contact Info**: Email, LinkedIn, GitHub, Phone (0781334420), Location (Colmar, France)

### 7. Footer
- Dark blue background with white text
- Quick navigation links
- Social media icons
- Copyright: "© 2026 NJUGUNA EARNEST. All rights reserved."
- Attribution: "Built with ❤️ using React and Tailwind CSS"

---

## Technical Implementation

### Language Context System
- React Context for language state management
- Translation JSON files for EN/FR content
- useTranslation hook for easy access
- Language toggle persisted in localStorage

### Animations & Interactions
- Intersection Observer for scroll-triggered fade-in animations
- Smooth scroll behavior for navigation
- Hover lift effects on cards (translateY + shadow)
- Mobile menu slide animation
- Progress bar animations on skills

### Form Validation
- Zod schema validation
- Required fields: Name, Email, Message (min 10 chars)
- Email format validation
- Error message display
- Success state with thank you message

### SEO & Accessibility
- Meta tags for title, description, keywords (bilingual)
- Proper heading hierarchy (h1 → h2 → h3)
- ARIA labels on interactive elements
- Alt text on all images
- Keyboard navigation support
- Focus indicators

---

## File Structure
- `src/contexts/LanguageContext.tsx` - Language state management
- `src/data/translations.ts` - EN/FR translation strings
- `src/components/Navigation.tsx` - Header with language toggle
- `src/components/Hero.tsx` - Hero section
- `src/components/Projects.tsx` - Projects grid with filtering
- `src/components/Skills.tsx` - Skills with progress indicators
- `src/components/About.tsx` - About section
- `src/components/Contact.tsx` - Contact form and info
- `src/components/Footer.tsx` - Footer component
- `src/hooks/useScrollAnimation.ts` - Intersection Observer hook
- Updated `index.html` with SEO meta tags
- Updated `tailwind.config.ts` with custom colors

