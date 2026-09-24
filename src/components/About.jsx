function About({ objetivo }) {
  return (
    <section id="sobre-mi" className="section">
      <div className="container">
        <h2>Sobre mí</h2>

        <p>
          Soy Benjamin Gonzalez Godoy, estudiante de programación de la Universidad Tecnologica Nacional, y tambien soy estudiante de RRHH del instituto ICE.
          Este portfolio es mi primer trabajo realizado utilizando
          React.
        </p>

        <p>
          Mi objetivo es {objetivo}
        </p>
      </div>
    </section>
  );
}

export default About;