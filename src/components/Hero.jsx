function Hero({ nombre, presentacion }) {
  return (
    <section id="inicio" className="hero">
      <div className="container hero-content">
        <p className="hero-small">Hola, soy</p>

        <h2>{nombre}</h2>

        <p className="hero-text">{presentacion}</p>

        <a href="#proyectos" className="button">
          Ver mis proyectos
        </a>
      </div>
    </section>
  );
}

export default Hero;