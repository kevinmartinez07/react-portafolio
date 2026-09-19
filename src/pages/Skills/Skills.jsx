import { SKILL_GROUPS } from '../../constants/data.js'

const Skills = () => (
  <section
    className="content-section muted-section"
    id="skills"
    aria-labelledby="skills-title"
  >
    <div className="section-shell">
      <div className="section-heading split-heading">
        <div>
          <p className="section-index">04 / Herramientas</p>
          <h2 id="skills-title">Un stack amplio, organizado por propósito.</h2>
        </div>
        <p>
          No es una nube de logos. Es el conjunto de herramientas que he usado para
          construir interfaces, servicios, datos e infraestructura.
        </p>
      </div>

      <div className="skills-grid">
        {SKILL_GROUPS.map((group, index) => (
          <article className="skill-card" key={group.title}>
            <div className="skill-heading">
              <span className="item-number" aria-hidden="true">0{index + 1}</span>
              <h3>{group.title}</h3>
            </div>
            <div className="skill-content">
              <p>{group.description}</p>
              <p className="primary-skills">{group.primary.join(' · ')}</p>
              <p className="additional-skills">También: {group.additional.join(' · ')}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default Skills
