import { Layers3 } from 'lucide-react'
import { SKILL_GROUPS } from '../../constants/data.js'

const Skills = () => (
  <section
    className="content-section muted-section"
    id="skills"
    aria-labelledby="skills-title"
  >
    <div className="section-shell">
      <div className="section-heading">
        <p className="eyebrow">Capacidades</p>
        <h2 id="skills-title">Stack técnico</h2>
        <p>
          Tecnologías agrupadas por el tipo de problemas que puedo resolver, separando
          el stack principal de la experiencia complementaria.
        </p>
      </div>

      <div className="skills-grid">
        {SKILL_GROUPS.map((group) => (
          <article className="skill-card" key={group.title}>
            <Layers3 aria-hidden="true" />
            <h3>{group.title}</h3>
            <p>{group.description}</p>
            <h4>Experiencia principal</h4>
            <div className="tag-list primary-tags">
              {group.primary.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <h4>Experiencia adicional</h4>
            <p className="additional-skills">{group.additional.join(' · ')}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default Skills
