import { Building2, CalendarDays } from 'lucide-react'
import { EXPERIENCES } from '../../constants/data.js'

const Experience = () => (
  <section
    className="content-section muted-section"
    id="experience"
    aria-labelledby="experience-title"
  >
    <div className="section-shell">
      <div className="section-heading">
        <p className="eyebrow">Trayectoria</p>
        <h2 id="experience-title">Experiencia profesional</h2>
        <p>
          Participación en productos y soluciones empresariales a lo largo de todo el
          ciclo de desarrollo.
        </p>
      </div>

      <div className="timeline">
        {EXPERIENCES.map((experience) => (
          <article className="experience-card" key={experience.company}>
            <div className="experience-meta">
              <span>
                <CalendarDays aria-hidden="true" /> {experience.dates}
              </span>
            </div>
            <div className="experience-body">
              <p className="experience-company">
                <Building2 aria-hidden="true" /> {experience.company}
              </p>
              <h3>{experience.role}</h3>
              <p className="experience-summary">{experience.summary}</p>
              <ul>
                {experience.achievements.map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>
              <div className="tag-list" aria-label={`Tecnologías en ${experience.company}`}>
                {experience.stack.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default Experience
