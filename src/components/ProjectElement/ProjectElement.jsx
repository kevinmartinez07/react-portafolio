import React from 'react'

const ProjectElement = ({
  image,
  title,
  description,
  technologies,
  github,
  githubOnclick,
  link,
  linkOnclick,
  isDark,
  isInDevelopment = false,
}) => {
	const GithubIcon = isDark ? github.dark : github.light
	const LinkIcon = isDark ? link.dark : link.light


  return (
    <div className="project-element">
      <div className="project-img">
        <img src={image} className="img" alt={`${title} - proyecto`} />
        {isInDevelopment && (
          <div className="development-badge">
            <span>🚧 En Desarrollo</span>
          </div>
        )}
      </div>
      <div className="project-info-cont">
        <div className="project-title-cont">
          <h3 className="project-title">{title}</h3>
        </div>
        <div className="project-text">
          <p className="project-description">{description}</p>
          <div className="project-technologies">
            {technologies.map(({ light, dark }, i) => {
              const Icon = isDark ? dark : light
              return <Icon className="tech-icon" key={i} />
            })}
          </div>
          <div className="project-btns">
            <button 
              aria-label={`Ver repositorio de ${title} en GitHub`}
              className="btn" 
              onClick={githubOnclick}
            >
              <GithubIcon className="btn-text" />
            </button>
            <button 
              aria-label={isInDevelopment ? `${title} - En desarrollo` : `Ver demo de ${title}`}
              className="btn" 
              onClick={linkOnclick}
            >
              <LinkIcon className="btn-text" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectElement
