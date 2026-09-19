import { EXPERIENCES } from '../../constants/data.js'

const Experience = () => (
  <section
    className="content-section muted-section"
    id="experience"
    aria-labelledby="experience-title"
  >
    <div className="section-shell">
      <div className="section-heading split-heading">
        <div>
          <p className="section-index">02 / Trayectoria</p>
          <h2 id="experience-title">Trabajo profesional, contado sin adornos.</h2>
        </div>
        <p>
          Tres contextos distintos: producto SaaS, soluciones empresariales y software
          geográfico. En todos, participación de extremo a extremo.
        </p>
      </div>

      <div className="timeline">
        {EXPERIENCES.map((experience, index) => (
          <article className="experience-card" key={experience.company}>
            <div className="experience-meta">
              <span className="item-number" aria-hidden="true">0{index + 1}</span>
              <time>{experience.dates}</time>
            </div>
            <div className="experience-body">
              <h3>{experience.role}</h3>
              <p className="experience-company">{experience.company}</p>
              <p className="experience-summary">{experience.summary}</p>
              <ul>
                {experience.achievements.map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>
              <div className="tag-list" aria-label={`Tecnologías en ${experience.company}`}>
                {experience.stack.join(' / ')}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default Experience
