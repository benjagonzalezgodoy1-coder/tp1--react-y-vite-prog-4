function Hero({ name, presentation }) {
  return (
    <section
      id="inicio"
      className="hero"
    >

      <div className="container hero-content">

        <p className="eyebrow">
          PORTFOLIO • REACT
        </p>

        <h1>
          Hola, soy <span>{name}</span>
        </h1>

        <p className="hero-text">
          {presentation}
        </p>

        <div className="hero-actions">

          <a
            className="button button-primary"
            href="#proyectos"
          >
            Ver mis proyectos
          </a>

          <a
            className="button button-secondary"
            href="#contacto"
          >
            Contactarme
          </a>

        </div>

      </div>

    </section>
  )
}

export default Hero