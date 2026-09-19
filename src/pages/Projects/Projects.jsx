import { ExternalLink, Github } from 'lucide-react'
import { PROJECTS } from '../../constants/data.js'

const Projects = () => (
  <section className="content-section" id="projects" aria-labelledby="projects-title">
    <div className="section-shell">
      <div className="section-heading split-heading">
        <div>
          <p className="section-index">03 / Trabajo seleccionado</p>
          <h2 id="projects-title">Casos donde las decisiones importan.</h2>
        </div>
        <p>
          Una selección que evidencia desarrollo de producto, arquitectura, experiencia
          de usuario y entrega de soluciones funcionales.
        </p>
      </div>

      <div className="projects-grid">
        {PROJECTS.map((project, index) => (
          <article className="project-card" key={project.id}>
            <div className="project-aside">
              <span className="project-number" aria-hidden="true">0{index + 1}</span>
              <p>{project.category}</p>
              <small>{project.status}</small>
            </div>
            <div className="project-content">
              <div className="project-title-row">
                <h3>{project.title}</h3>
                <div className="project-links">
                  <a href={project.repository} target="_blank" rel="noreferrer">
                    <Github aria-hidden="true" /> Código
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer">
                      <ExternalLink aria-hidden="true" /> Ver sitio
                    </a>
                  )}
                </div>
              </div>
              <p className="project-description">{project.description}</p>
              <ul>
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <div className="tag-list">
                {project.stack.join(' / ')}
              </div>
              {project.secondaryRepository && (
                <div className="secondary-link">
                  <a
                    href={project.secondaryRepository}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github aria-hidden="true" /> API
                  </a>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default Projects
