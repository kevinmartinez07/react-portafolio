import Angular from '../assets/Icons/Logos/angular_gradient.svg?react'
import Css from '../assets/Icons/Logos/css.svg?react'
import Html from '../assets/Icons/Logos/html5.svg?react'
import JavaScript from '../assets/Icons/Logos/javascript.svg?react'
import Postgresql from '../assets/Icons/Logos/postgresql.svg?react'
import Python from '../assets/Icons/Logos/python.svg?react'
import TypeScript from '../assets/Icons/Logos/typescript.svg?react'
import GithubIconLight from '../assets/Icons/Other/github-white.svg?react'
import GithubIcon from '../assets/Icons/Other/github.svg?react'
import LinkIconWhite from '../assets/Icons/Other/link-white.svg?react'
import LinkIcon from '../assets/Icons/Other/link.svg?react'
import ChatbotImg from '../assets/Images/Projects/chatbot-project.png'
import ClassifierImg from '../assets/Images/Projects/classifier-project.png'
import FinanzAppImg from '../assets/Images/Projects/finanz-app-img.png'
import SpaceShooterImg from '../assets/Images/Projects/space-shooter-img.png'

export const useProjectElement = () => {
  const techIcon = (icon) => ({ light: icon, dark: icon })

  const dataToFill = [
    {
      image: ClassifierImg,
      title: 'Clasificador de Imágenes - Supermercado',
      description:
        'Sistema de clasificación de productos de supermercado utilizando Deep Learning con Python. Modelo entrenado con 98% de precisión que permite subir imágenes y clasificarlas automáticamente. Interface web desarrollada con Flask para una experiencia de usuario intuitiva.',
      technologies: [
        techIcon(Python),
        techIcon(Html),
        techIcon(Css),
      ],
      github: { light: GithubIcon, dark: GithubIconLight },
      githubOnclik: () =>
        window.open('https://github.com/kevinmartinez07/Clasificador_de_imagenes'),
      link: { light: LinkIcon, dark: LinkIconWhite },
      linkOnclick: () => window.open('https://clasificador-de-imagenes-kb9d.onrender.com/'),
      isInDevelopment: true,
    },
    {
      image: ChatbotImg,
      title: 'Chatbot IA - HYG Consultores',
      description:
        'Asistente virtual inteligente desarrollado con Large Language Models (LLM) para HYG Consultores S.A.S. Permite consultar información corporativa, realizar búsquedas y obtener respuestas contextuales sobre servicios y proyectos de la empresa.',
      technologies: [
        techIcon(Python),
        techIcon(JavaScript),
        techIcon(Html),
        techIcon(Css),
      ],
      github: { light: GithubIcon, dark: GithubIconLight },
      githubOnclik: () =>
        window.open('https://github.com/kevinmartinez07/chatbot'),
      link: { light: LinkIcon, dark: LinkIconWhite },
      linkOnclick: () => window.open('https://chatbot-test-1-xsfq.onrender.com/'),
    },
    {
      image: SpaceShooterImg,
      title: 'Space Shooter - Videojuego Angular',
      description:
        'Juego de naves espaciales desarrollado en Angular con backend en C# .NET siguiendo Arquitectura Limpia. Sistema completo con gestión de puntuaciones, usuarios y PostgreSQL como base de datos. Actualmente en fase de reorganización y optimización del código.',
      technologies: [
        techIcon(Angular),
        techIcon(TypeScript),
        // techIcon(Csharp),
        // techIcon(Postgresql),
      ],
      github: { light: GithubIcon, dark: GithubIconLight },
      githubOnclik: () =>
        window.open('https://github.com/kevinmartinez07/space-shooter'),
      link: { light: LinkIcon, dark: LinkIconWhite },
      linkOnclick: () => window.open('https://space-shooter-web-seven.vercel.app/'),
      isInDevelopment: true,
    },
    {
      image: FinanzAppImg,
      title: 'Finanz App - Sistema de ingresos y egresos',
      description:
        'Sistema fullstack empresarial para la gestión de movimientos financieros con arquitectura escalable y mantenible. Construido con Next.js 15, TypeScript, Prisma ORM, Better Auth siguiendo principios de Clean Architecture y Domain-Driven Design (DDD).',
      technologies: [
        // techIcon(Nextjs),
        techIcon(TypeScript),
        // techIcon(Prisma),
        // techIcon(BetterAuth),
        // techIcon(CleanArchitecture),
        // techIcon(DDD),
        techIcon(Postgresql),
      ],
      github: { light: GithubIcon, dark: GithubIconLight },
      githubOnclik: () =>
        window.open('https://github.com/kevinmartinez07/sistema-gestion-ingresos'),
      link: { light: LinkIcon, dark: LinkIconWhite },
      linkOnclick: () => window.open('https://sistema-gestion-ingresos.vercel.app/'),
      isInDevelopment: true,
    },
  ]

  const reverseData = dataToFill.reverse()

  return { reverseData }
}
