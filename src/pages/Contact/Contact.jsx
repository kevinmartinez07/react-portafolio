import { Github, Linkedin, Mail } from 'lucide-react'
import ContactForm from '../../components/ContactForm/ContactForm.jsx'
import { PERSONAL_INFO } from '../../constants/data.js'

const Contact = () => (
  <section className="content-section" id="contact" aria-labelledby="contact-title">
    <div className="section-shell contact-layout">
      <div className="contact-copy">
        <p className="eyebrow">Conversemos</p>
        <h2 id="contact-title">¿Tienes una oportunidad o un proyecto?</h2>
        <p>
          Estoy disponible para conversar sobre desarrollo full stack, modernización de
          aplicaciones, integraciones y soluciones cloud.
        </p>

        <div className="contact-links">
          <a href={`mailto:${PERSONAL_INFO.email}`}>
            <Mail aria-hidden="true" /> {PERSONAL_INFO.email}
          </a>
          <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer">
            <Linkedin aria-hidden="true" /> LinkedIn
          </a>
          <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer">
            <Github aria-hidden="true" /> GitHub
          </a>
        </div>
      </div>
      <ContactForm />
    </div>
  </section>
)

export default Contact
