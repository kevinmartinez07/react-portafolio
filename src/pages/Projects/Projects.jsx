import { ExternalLink, Github } from 'lucide-react'
import { PROJECTS } from '../../constants/data.js'

const Projects = () => (
  <section className="content-section" id="projects" aria-labelledby="projects-title">
    <div className="section-shell">
      <div className="section-heading split-heading">
        <div>
          <p className="eyebrow">Trabajo seleccionado</p>
          <h2 id="projects-title">Proyectos con contexto técnico</h2>
        </div>
        <p>
          Una selección que evidencia desarrollo de producto, arquitectura, experiencia
          de usuario y entrega de soluciones funcionales.
        </p>
      </div>

      <div className="projects-grid">
        {PROJECTS.map((project) => (
          <article
            className="project-card"
            key={project.id}
            style={{ '--project-accent': project.accent }}
          >
            <div className="project-cover">
              <span>{project.category}</span>
              <strong>{project.title}</strong>
              <small>{project.status}</small>
            </div>
            <div className="project-content">
              <p>{project.description}</p>
              <ul>
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <div className="tag-list">
                {project.stack.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.repository} target="_blank" rel="noreferrer">
                  <Github aria-hidden="true" /> Código
                </a>
                {project.secondaryRepository && (
                  <a
                    href={project.secondaryRepository}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github aria-hidden="true" /> API
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    <ExternalLink aria-hidden="true" /> Demo
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default Projects
