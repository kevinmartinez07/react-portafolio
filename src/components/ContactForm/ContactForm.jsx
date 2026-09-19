const ContactForm = () => (
  <form
    className="contact-form"
    action="https://formspree.io/f/xwpolepz"
    method="POST"
  >
    <input type="hidden" name="_subject" value="Contacto desde el portafolio" />
    <div className="honeypot" aria-hidden="true">
      <label htmlFor="company-site">No completar este campo</label>
      <input id="company-site" name="_gotcha" tabIndex="-1" autoComplete="off" />
    </div>

    <div className="form-field">
      <label htmlFor="name">Nombre</label>
      <input id="name" name="nombre" type="text" autoComplete="name" required />
    </div>
    <div className="form-field">
      <label htmlFor="email">Correo electrónico</label>
      <input id="email" name="email" type="email" autoComplete="email" required />
    </div>
    <div className="form-field">
      <label htmlFor="company">Empresa <span>(opcional)</span></label>
      <input id="company" name="empresa" type="text" autoComplete="organization" />
    </div>
    <div className="form-field">
      <label htmlFor="message">Mensaje</label>
      <textarea id="message" name="message" rows="6" required />
    </div>
    <p className="form-note">
      La información se utilizará únicamente para responder este mensaje.
    </p>
    <button className="button button-primary" type="submit">
      Enviar mensaje <span aria-hidden="true">↗</span>
    </button>
  </form>
)

export default ContactForm
