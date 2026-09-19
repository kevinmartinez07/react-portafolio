export const SITE_URL = 'https://react-portafolio-beige.vercel.app'

export const PERSONAL_INFO = {
  name: 'Kevin Santiago Martinez Molina',
  shortName: 'Kevin Martinez',
  role: 'Full-Stack Engineer',
  headline: 'Producto digital, APIs y plataformas cloud',
  location: 'Medellín, Colombia',
  email: 'kevinmartinez0114@gmail.com',
  availability: 'Disponible para oportunidades remotas e híbridas',
  linkedin:
    'https://linkedin.com/in/kevin-santiago-martinez-molina-b21a0b166',
  github: 'https://github.com/kevinmartinez07',
  cvPath: '/Documents/CV_Kevin_Martinez.pdf',
}

export const NAV_ITEMS = [
  { id: 'about', label: 'Perfil' },
  { id: 'experience', label: 'Experiencia' },
  { id: 'projects', label: 'Proyectos' },
  { id: 'skills', label: 'Stack' },
  { id: 'contact', label: 'Contacto' },
]

export const IMPACT_METRICS = [
  { value: '2023→', label: 'construyendo software profesional' },
  { value: '3', label: 'equipos y contextos empresariales' },
  { value: '9.º', label: 'semestre de Ingeniería de Sistemas' },
]

export const ABOUT_POINTS = [
  {
    title: 'Primero entiendo la operación',
    description:
      'Antes de proponer código pregunto cómo funciona el proceso, quién lo usa y qué problema debe dejar de existir. Esa conversación evita construir funcionalidades correctas para el problema equivocado.',
  },
  {
    title: 'Diseño para que otro continúe',
    description:
      'Me importan los límites claros, los nombres útiles y las decisiones documentadas. Uso arquitectura limpia, hexagonal o DDD cuando simplifican el mantenimiento, no para llenar diagramas.',
  },
  {
    title: 'Entrego y vuelvo a observar',
    description:
      'Puedo seguir una funcionalidad desde la interfaz hasta el dato y el despliegue. Después de publicar reviso el comportamiento real y ajusto lo que la implementación no permitió anticipar.',
  },
]

export const EXPERIENCES = [
  {
    company: 'PrevalentWare S.A.S.',
    role: 'Desarrollador Full Stack',
    dates: 'Marzo 2026 - Septiembre 2026',
    summary:
      'Desarrollo de soluciones full stack y servicios cloud para productos empresariales, con foco en seguridad, mantenibilidad y automatización.',
    achievements: [
      'Desarrollo con Next.js, TypeScript, Node.js/Bun y PostgreSQL.',
      'Implementación en AWS con Lambda, API Gateway, S3, RDS, ECS/Fargate, Cognito e IAM.',
      'Autenticación y autorización con Cognito y Casbin, incorporando IA al análisis, código y documentación.',
    ],
    stack: ['Next.js', 'Node.js', 'PostgreSQL', 'AWS', 'Cognito', 'Casbin'],
  },
  {
    company: 'Ofima S.A.S.',
    role: 'Desarrollador de Software',
    dates: 'Agosto 2025 - Marzo 2026',
    summary:
      'Construcción de DomoNow, plataforma para la gestión de propiedades horizontales basada en microservicios y microfrontends.',
    achievements: [
      'Microservicios en .NET y microfrontends en Angular con contratos DTO y manejo consistente de errores.',
      'Aplicación de arquitectura limpia y hexagonal, DDD, SOLID y mensajería asíncrona.',
      'Persistencia con PostgreSQL y MongoDB, CI/CD y trabajo colaborativo en Azure DevOps.',
    ],
    stack: ['.NET', 'Angular', 'PostgreSQL', 'MongoDB', 'RabbitMQ', 'Azure DevOps'],
  },
  {
    company: 'HYG Consultores S.A.S.',
    role: 'Desarrollador de Software',
    dates: 'Agosto 2023 - Julio 2025',
    summary:
      'Desarrollo, soporte y evolución de soluciones corporativas y geográficas para organizaciones públicas y privadas.',
    achievements: [
      'Trabajo con Java, .NET, React, Node.js y aplicaciones legacy desplegadas en JBoss.',
      'Integraciones con PostgreSQL, SQL Server y Oracle; reportes con JasperReports y componentes GIS.',
      'Atención de incidencias, despliegues y adaptación de módulos según necesidades de clientes.',
    ],
    stack: ['Java', '.NET', 'React', 'PostgreSQL', 'Oracle', 'GIS'],
  },
]

export const PROJECTS = [
  {
    id: 'hi-ibiza',
    category: 'Producto para cliente',
    title: 'HI Ibiza - Menú digital QR',
    description:
      'Menú web móvil para bares, diseñado para facilitar el descubrimiento de productos desde códigos QR y reducir la fricción al consultar la carta.',
    highlights: [
      'Catálogo responsive con búsqueda, categorías y estados vacíos.',
      'Optimización de imágenes, metadatos sociales, SEO técnico y despliegue.',
    ],
    stack: ['React', 'TypeScript', 'Vite', 'UX/UI', 'SEO'],
    repository: 'https://github.com/kevinmartinez07/hi-ibiza-menu',
    demo: 'https://ibiza-glow-menu.lovable.app/',
    status: 'En producción',
    accent: '#8b5cf6',
  },
  {
    id: 'smartlogistics',
    category: 'Arquitectura distribuida',
    title: 'SmartLogistics',
    description:
      'Plataforma académica de logística distribuida para practicar decisiones reales de arquitectura, comunicación entre servicios y observabilidad.',
    highlights: [
      'Microservicios con comunicación REST y eventos asíncronos mediante RabbitMQ.',
      'API Gateway, JWT, Redis, MongoDB, PostgreSQL y observabilidad distribuida.',
    ],
    stack: ['Java 21', 'Spring Boot', 'Next.js', 'RabbitMQ', 'Docker'],
    repository: 'https://github.com/kevinmartinez07/smartlogistics-practice',
    demo: null,
    status: 'Caso técnico',
    accent: '#0ea5e9',
  },
  {
    id: 'finanz-app',
    category: 'Aplicación full stack',
    title: 'Finanz App',
    description:
      'Sistema para administrar ingresos y egresos con una separación clara entre dominio, casos de uso, persistencia y experiencia de usuario.',
    highlights: [
      'Autenticación, operaciones financieras y persistencia tipada con Prisma.',
      'Estructura inspirada en arquitectura limpia y Domain-Driven Design.',
    ],
    stack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Better Auth'],
    repository: 'https://github.com/kevinmartinez07/sistema-gestion-ingresos',
    demo: 'https://sistema-gestion-ingresos.vercel.app/',
    status: 'Proyecto personal',
    accent: '#3b82f6',
  },
  {
    id: 'space-shooter',
    category: 'Frontend y API',
    title: 'Space Shooter',
    description:
      'Videojuego web con gestión de usuarios y puntuaciones, dividido en una aplicación Angular y una API construida con .NET.',
    highlights: [
      'Frontend interactivo en Angular y TypeScript.',
      'Backend en C#/.NET, arquitectura limpia y PostgreSQL.',
    ],
    stack: ['Angular', 'TypeScript', 'C#', '.NET', 'PostgreSQL'],
    repository: 'https://github.com/kevinmartinez07/space-shooter-web',
    secondaryRepository: 'https://github.com/kevinmartinez07/space-shooter-api',
    demo: 'https://space-shooter-web-seven.vercel.app/',
    status: 'En optimización',
    accent: '#6366f1',
  },
]

export const SKILL_GROUPS = [
  {
    title: 'Frontend',
    description: 'Interfaces mantenibles, accesibles y orientadas a producto.',
    primary: ['React', 'Next.js', 'Angular', 'TypeScript'],
    additional: ['JavaScript', 'HTML5', 'CSS3', 'Material UI', 'Bootstrap'],
  },
  {
    title: 'Backend y APIs',
    description: 'Servicios, integraciones y reglas de negocio empresariales.',
    primary: ['C# / .NET', 'Java / Spring Boot', 'Node.js', 'REST'],
    additional: ['GraphQL', 'Python / Flask', 'RabbitMQ', 'DTOs y validación'],
  },
  {
    title: 'Datos y arquitectura',
    description: 'Modelado relacional, NoSQL y diseño evolutivo.',
    primary: ['PostgreSQL', 'SQL Server', 'MongoDB', 'Clean / Hexagonal'],
    additional: ['Oracle', 'DDD', 'SOLID', 'Patrones de diseño'],
  },
  {
    title: 'Cloud y entrega',
    description: 'Despliegue, seguridad y automatización del ciclo de desarrollo.',
    primary: ['AWS', 'Azure', 'Docker', 'CI/CD'],
    additional: ['Azure DevOps', 'Cognito', 'IAM', 'ECS / Fargate'],
  },
]
