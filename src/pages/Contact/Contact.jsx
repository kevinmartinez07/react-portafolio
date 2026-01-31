import React from 'react'
import '../../styles/Contact.css'
import ContactForm from '../../components/ContactForm/ContactForm'
import GmailIcon from '../../assets/Icons/Logos/gmail.svg?react'
import LinkedinIcon from '../../assets/Icons/Logos/linkedin.svg?react'

const Contact = () => {
  return (
    <div className="section">
      <div className="name-section">
        <p className="section-subtitle">Quedo a su disposición</p>
        <p className="section-title">Contáctame</p>
      </div>
      <div className="contact-cont">
        <ContactForm />
      </div>
      <div className="contact-info">
        <div className="contact-section">
          <GmailIcon className="contact-icon" />
          <a className="contact-text" href="mailto:kevinmartinez0114@gmail.com">
            kevinmartinez0114@gmail.com
          </a>
        </div>
        <div className="contact-section">
          <LinkedinIcon className="contact-icon" />
          <a
            className="contact-text"
            href="http://linkedin.com/in/kevin-santiago-martinez-molina-b21a0b166"
          >
            Linkedin
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
