// Personal Information
export const PERSONAL_INFO = {
  name: 'Kevin Santiago Martinez Molina',
  shortName: 'Kevin Martinez',
  title: 'Desarrollador full stack',
  greeting: 'Hola, soy',
  company: 'Ofima S.A.S.',
  product: 'DomoNow',
  linkedin: 'http://linkedin.com/in/kevin-santiago-martinez-molina-b21a0b166',
  github: 'https://github.com/kevinmartinez07',
  cvPath: '/Documents/CV_Kevin_Martinez.pdf'
};

// Navigation items
export const NAV_ITEMS = [
  { id: 'about', label: 'Sobre mí' },
  { id: 'skills', label: 'Habilidades' },
  { id: 'projects', label: 'Proyectos' },
  { id: 'contact', label: 'Contacto' }
];

// About section description
export const ABOUT_DESCRIPTION = `Soy ${PERSONAL_INFO.name}, desarrollador de software full stack especializado en arquitecturas modernas y productos empresariales. Actualmente trabajo en ${PERSONAL_INFO.company} desarrollando microservicios en .NET (C#) y microfrontends en Angular para ${PERSONAL_INFO.product}, plataforma de gestión de propiedades horizontales. Aplico Clean Architecture, Hexagonal, DDD, SOLID y patrones de diseño con PostgreSQL y MongoDB. Experiencia previa en HYG Consultores con soluciones GIS corporativas. Me destaco por código limpio, arquitectura escalable y entrega consistente.`;

// About section - Optimized for recruiters
export const ABOUT_HEADLINE = "Full-Stack Developer construyendo productos empresariales en Ofima (DomoNow)";

export const ABOUT_HIGHLIGHTS = [
  "Actualmente en Ofima S.A.S.: desarrollo de microservicios en .NET (C#) y microfrontends en Angular para DomoNow (gestión de propiedades horizontales)",
  "Arquitectura y calidad: Clean/Hexagonal, DDD, SOLID, patrones de diseño, contratos API (DTOs), validaciones y manejo de errores",
  "Datos y escalabilidad: PostgreSQL y MongoDB, modelado y performance; integración con servicios cloud cuando aplica",
  "Experiencia previa (HYG): soluciones corporativas/GIS para entidades públicas y privadas, trabajo con clientes y despliegues"
];

export const ABOUT_STACK = ".NET (C#) • Angular • PostgreSQL • MongoDB • Azure DevOps • Docker";

// Stats Cards Data
export const ABOUT_STATS = [
  {
    icon: 'folder-code',
    number: '2+',
    label: 'Años experiencia',
    subtitle: 'Desarrollador Full-Stack',
    ctaText: 'Ver proyectos',
    ctaAction: 'scroll-projects'
  },
  {
    icon: 'clipboard-list',
    number: 'Micro',
    label: 'servicios',
    subtitle: 'Productos empresariales',
    ctaText: 'Ver stack',
    ctaAction: 'scroll-skills'
  },
  {
    icon: 'graduation-cap',
    number: '9°',
    label: 'semestre',
    subtitle: 'Ing. Sistemas - ITM',
    ctaText: 'Ver certificado',
    ctaAction: 'open-certificate'
  }
];
