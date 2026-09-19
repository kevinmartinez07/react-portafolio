import { ArrowDownRight, Download, Github, Linkedin } from 'lucide-react'
import ProfileImage from '../../assets/Images/Kevin/profile-img.webp'
import { PERSONAL_INFO } from '../../constants/data.js'

const Home = () => (
  <section className="hero section-shell" id="home" aria-labelledby="hero-title">
    <div className="hero-copy">
      <p className="eyebrow">Kevin Martinez — Medellín, CO</p>
      <h1 id="hero-title">
        Construyo software
        <span>que conecta producto y sistemas.</span>
      </h1>
      <p className="hero-stack">{PERSONAL_INFO.role} · {PERSONAL_INFO.headline}</p>
      <p className="hero-summary">
        He trabajado en producto, soluciones empresariales y sistemas geográficos.
        Me muevo con naturalidad entre la interfaz, el backend, los datos y la nube.
      </p>

      <div className="availability-row">
        <span className="availability-dot" aria-hidden="true" />
        <span>{PERSONAL_INFO.availability}</span>
      </div>

      <div className="hero-actions">
        <a className="button button-primary" href="#experience">
          Recorrer mi trabajo <ArrowDownRight aria-hidden="true" />
        </a>
        <a
          className="button button-secondary"
          href={PERSONAL_INFO.cvPath}
          target="_blank"
          rel="noreferrer"
        >
          Descargar CV <Download aria-hidden="true" />
        </a>
      </div>

      <div className="social-links" aria-label="Perfiles profesionales">
        <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer">
          <Github aria-hidden="true" /> GitHub <span aria-hidden="true">↗</span>
        </a>
        <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer">
          <Linkedin aria-hidden="true" /> LinkedIn <span aria-hidden="true">↗</span>
        </a>
      </div>
    </div>

    <figure className="hero-visual">
      <div className="portrait-frame" aria-label="Fotografía profesional de Kevin Martinez">
        <img
          src={ProfileImage}
          alt="Kevin Santiago Martinez Molina, desarrollador full stack"
          width="452"
          height="596"
          fetchPriority="high"
        />
      </div>
      <figcaption>
        <span>01 — PERFIL</span>
        <span>Full stack / 2026</span>
      </figcaption>
    </figure>
  </section>
)

export default Home
