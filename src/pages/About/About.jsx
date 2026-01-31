import React from 'react'
import '../../styles/About.css'
import AboutImg from '../../assets/Images/Kevin/about-img.webp'
import ExperienceElement from '../../components/ExperienceElement/ExperienceElement'
import { useExperienceElement } from '../../hooks/useExperienceElement'


const About = () => {
	const { dataToFill } = useExperienceElement()

	return (
		<div className='section'>
			<div className='name-section'>
				<p className='section-subtitle'>
					Conoce más
				</p>
				<p className='section-title'>
					Sobre Mí
				</p>
			</div>
			<div className='about-cont'>
				<div className='top-row'>
					<div className='about-img-section'>
						<img src={AboutImg} className='about-img' alt='about-img'/>
					</div>
						<div className='about-text-section'>
							<div className='experience-elements'>
								{dataToFill.map((element, index) => (
									<ExperienceElement 
										key={index}
										icon={element.icon}
										title={element.title}
										description={element.description}
										descriptionBold={element.descriptionBold}
										button={element.button}
										onclick={element.onclick}
									/>
								))}
							</div>
						</div>
					</div>
				<div className='bot-row'>
					<div className='experience-text'>
						<p className='text'>
              Soy <b>Kevin Santiago Martinez Molina</b>, desarrollador de software full stack, con experiencia en proyectos reales de soluciones geográficas corporativas para entidades públicas y privadas. Actualmente trabajo en HYG Consultores S.A.S., participando en el desarrollo de sistemas como SAU, SEPOT, SITCO Predial, MICI y Riesgos Geodinámicos, utilizando tecnologías como React, Next.js, .NET, Spring Boot, Python Flask, PostgreSQL, SQL Server y Azure. Me destaco por mi capacidad de aprendizaje continuo, trabajo en equipo, y enfoque en la creación de soluciones robustas y escalables. Siempre dispuesto a enfrentar nuevos desafíos y seguir mejorando.
            </p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About
