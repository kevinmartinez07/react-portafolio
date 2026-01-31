import DesarrolloWeb  from '../assets/Icons/Other/folder-code.svg?react'
import Consultores from '../assets/Icons/Other/clipboard-list.svg?react'
import Educacion from '../assets/Icons/Other/graduation-cap.svg?react'

export const useExperienceElement = () => {
  const dataToFill = [
    {
      icon: DesarrolloWeb,
      title: 'Experiencia en Desarrollo de Software',
      description: 'Desarrollador en',
      descriptionBold: 'HYG Consultores S.A.S.',
      button: 'Proyectos',
      onclick: () =>
        window.open(
          '/Documents/Proyectos_HYG_Consultores_KevinMartinez.pdf'
        ),
    },
    {
      icon: Consultores,
      title: 'Proyectos Profesionales',
      description: 'Colaboración en sistemas GIS y soluciones empresariales para',
      descriptionBold: 'ISA, Área Metropolitana, Alcaldía de Medellín',
      button: 'Detalle',
      onclick: () =>
        window.open(
          '/Documents/Proyectos_GIS_Experiencia_KevinMartinez.pdf'
        ),
    },
    {
      icon: Educacion,
      title: 'Educación',
      description: 'Institución Universitaria ITM',
      descriptionBold: 'Ingeniería de Sistemas (8° semestre)',
      button: 'Certificado',
      onclick: () =>
        window.open(
          '/Documents/Certificado_tecnolgia_desarrollo_de_software.pdf'
        ),
    },
  ]

  return { dataToFill }
}
