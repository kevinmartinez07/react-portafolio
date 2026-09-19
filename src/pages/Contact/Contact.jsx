import { Github, Linkedin, Mail } from 'lucide-react'
import ContactForm from '../../components/ContactForm/ContactForm.jsx'
import { PERSONAL_INFO } from '../../constants/data.js'

const Contact = () => (
  <section className="content-section" id="contact" aria-labelledby="contact-title">
    <div className="section-shell contact-layout">
      <div className="contact-copy">
        <p className="section-index">05 / Contacto</p>
        <h2 id="contact-title">Hablemos con contexto.</h2>
        <p>
          Si estás construyendo un producto, modernizando una aplicación o buscando a
          alguien que pueda moverse entre frontend, backend y cloud, escríbeme.
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
