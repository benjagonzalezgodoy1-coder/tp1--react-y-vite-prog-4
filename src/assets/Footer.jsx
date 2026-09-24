function Footer({ email, course }) {

  return (
    <footer
      id="contacto"
      className="footer"
    >

      <div className="container footer-content">

        <div>

          <p className="section-label">
            04 — CONTACTO
          </p>

          <h2>
            ¿Querés contactarme?
          </h2>

          <a
            className="email-link"
            href={`mailto:${email}`}
          >
            {email}
          </a>

        </div>

        <div className="footer-info">

          <p>
            {course}
          </p>

          <p>
            Benjamin Gonzalez Godoy
          </p>

          <p>
            © 2026
          </p>

        </div>

      </div>

    </footer>
  )
}

export default Footer