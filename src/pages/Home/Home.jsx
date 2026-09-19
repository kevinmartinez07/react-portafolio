import { ArrowRight, Download, Github, Linkedin, MapPin } from 'lucide-react'
import ProfileImage from '../../assets/Images/Kevin/profile-img.webp'
import { PERSONAL_INFO } from '../../constants/data.js'

const Home = () => (
  <section className="hero section-shell" id="home" aria-labelledby="hero-title">
    <div className="hero-copy">
      <p className="eyebrow">Hola, soy Kevin</p>
      <h1 id="hero-title">{PERSONAL_INFO.role}</h1>
      <p className="hero-stack">{PERSONAL_INFO.headline}</p>
      <p className="hero-summary">
        Construyo productos empresariales, APIs y soluciones cloud con una
        arquitectura clara, seguridad y foco en las necesidades reales del negocio.
      </p>

      <div className="availability-row">
        <span className="availability-dot" aria-hidden="true" />
        <span>{PERSONAL_INFO.availability}</span>
        <span className="location">
          <MapPin aria-hidden="true" /> {PERSONAL_INFO.location}
        </span>
      </div>

      <div className="hero-actions">
        <a className="button button-primary" href="#experience">
          Ver experiencia <ArrowRight aria-hidden="true" />
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
          <Github aria-hidden="true" /> GitHub
        </a>
        <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer">
          <Linkedin aria-hidden="true" /> LinkedIn
        </a>
      </div>
    </div>

    <div className="hero-visual" aria-label="Fotografía profesional de Kevin Martinez">
      <div className="portrait-frame">
        <img
          src={ProfileImage}
          alt="Kevin Santiago Martinez Molina, desarrollador full stack"
          width="452"
          height="596"
          fetchPriority="high"
        />
      </div>
      <div className="hero-note">
        <span>Experiencia empresarial</span>
        <strong>Frontend · Backend · Cloud</strong>
      </div>
    </div>
  </section>
)

export default Home
