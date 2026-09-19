import { CheckCircle2 } from 'lucide-react'
import { ABOUT_POINTS, IMPACT_METRICS } from '../../constants/data.js'

const About = () => (
  <section className="content-section" id="about" aria-labelledby="about-title">
    <div className="section-shell">
      <div className="section-heading split-heading">
        <div>
          <p className="eyebrow">Perfil profesional</p>
          <h2 id="about-title">Tecnología con contexto, no solo código</h2>
        </div>
        <p>
          Soy desarrollador full stack y estudiante de Ingeniería de Sistemas. Mi
          experiencia combina productos empresariales, sistemas distribuidos,
          modernización de aplicaciones y soluciones geográficas.
        </p>
      </div>

      <div className="about-grid">
        {ABOUT_POINTS.map((point) => (
          <article className="principle-card" key={point.title}>
            <CheckCircle2 aria-hidden="true" />
            <h3>{point.title}</h3>
            <p>{point.description}</p>
          </article>
        ))}
      </div>

      <dl className="metrics-grid" aria-label="Resumen profesional">
        {IMPACT_METRICS.map((metric) => (
          <div key={metric.label}>
            <dt>{metric.value}</dt>
            <dd>{metric.label}</dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
)

export default About
