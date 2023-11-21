export function FormContacto() {
  return (
    <div className="col-md-12">
      {/* contact form works with formspree.io  */}
      {/* contact form activation doc: https://docs.themefisher.com/constra/contact-form/ */}
      <form
        id="contact-form"
        action="https://formspree.io/f/mbjvlrzd"
        method="post"
      >
        <div className="error-container" />
        <div className="row">
          <div className="col-md-4">
            <div className="form-group">
              <label>Nombre</label>
              <input
                className="form-control form-control-name"
                name="name"
                id="name"
                placeholder=""
                type="text"
                required=""
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label>Correo</label>
              <input
                className="form-control form-control-email"
                name="email"
                id="email"
                placeholder=""
                type="email"
                required=""
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label>Asunto</label>
              <input
                className="form-control form-control-subject"
                name="subject"
                id="subject"
                placeholder=""
                required=""
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <label>Mensaje</label>
          <textarea
            className="form-control form-control-message"
            name="message"
            id="message"
            placeholder=""
            rows={10}
            required=""
            defaultValue={""}
          />
        </div>
        <div className="text-right">
          <br />
          <button className="btn btn-primary solid blank" type="submit">
            Enviar mensaje
          </button>
        </div>
      </form>
    </div>
  );
}
