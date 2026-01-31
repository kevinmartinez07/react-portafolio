import Frontend from '../assets/Icons/Other/frontend.svg?react'
import Backend from '../assets/Icons/Other/backend.svg?react'
import SoftSkills from '../assets/Icons/Other/softskill.svg?react'
import CloudSkills from '../assets/Icons/Other/cloud.svg?react'
import DataSkills from '../assets/Icons/Other/database.svg?react'
import AIML from '../assets/Icons/Other/ai.svg?react'
import DevOps from '../assets/Icons/Other/devops.svg?react'

export const useSkillElement = () => {
  const dataToFill = [
    {
      icon: Frontend,
      title: 'Frontend',
      tech: [
        'React',
        'Next.js',
        'JavaScript',
        'TypeScript',
        'HTML5',
        'CSS3',
        'Material UI',
        'Bootstrap',
      ],
    },
    {
      icon: Backend,
      title: 'Backend',
      tech: [
        'Node.js',
        'C# .NET 8',
        'Java (Spring Boot)',
        'Flask (Python)',
        'REST APIs',
        'Microservicios',
        'Git & GitHub',
      ],
    },
    {
      icon: DataSkills,
      title: 'Bases de Datos',
      tech: [
        'PostgreSQL',
        'SQL Server',
        'Oracle 19c',
        'PostGIS',
      ],
    },
    {
      icon: AIML,
      title: 'AI / Machine Learning',
      tech: [
        'Clasificación de Imágenes',
        'Procesamiento de Texto',
        'Chatbots LLM',
        'Redes Neuronales',
        'Entrenamiento de modelos',
      ],
    },
    {
      icon: CloudSkills,
      title: 'Cloud',
      tech: [
        'Microsoft Azure',
        'Azure App Services',
        'Azure DataFactory',
        'Azure Pipelines',
        'Docker',
        'Kubernetes',
      ],
    },
    {
      icon: DevOps,
      title: 'DevOps',
      tech: [
        'CI/CD',
        'Pipelines en Azure DevOps',
        'Contenedores Docker',
        'Orquestación Kubernetes',
        'Despliegue en Azure Cloud',
      ],
    },
    {
      icon: SoftSkills,
      title: 'Soft Skills',
      tech: [
        'Comunicación efectiva',
        'Pensamiento lógico',
        'Proactividad',
        'Resolución de problemas complejos',
        'Trabajo en equipo',
        'Adaptabilidad',
      ],
    },
  ]

  return { dataToFill }
}
