import { ABOUT_POINTS, IMPACT_METRICS } from '../../constants/data.js'

const About = () => (
  <section className="content-section" id="about" aria-labelledby="about-title">
    <div className="section-shell">
      <div className="section-heading split-heading">
        <div>
          <p className="section-index">01 / Perfil</p>
          <h2 id="about-title">El código es una parte de la solución.</h2>
        </div>
        <p>
          Antes de elegir una tecnología busco entender la operación, las restricciones
          y a las personas que van a mantener el producto después de entregarlo.
        </p>
      </div>

      <div className="principles-list">
        {ABOUT_POINTS.map((point, index) => (
          <article className="principle-card" key={point.title}>
            <span className="item-number" aria-hidden="true">0{index + 1}</span>
            <h3>{point.title}</h3>
            <p>{point.description}</p>
          </article>
        ))}
      </div>

      <dl className="metrics-grid" aria-label="Resumen profesional">
        {IMPACT_METRICS.map((metric, index) => (
          <div key={metric.label}>
            <span aria-hidden="true">A{index + 1}</span>
            <dt>{metric.value}</dt>
            <dd>{metric.label}</dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
)

export default About
