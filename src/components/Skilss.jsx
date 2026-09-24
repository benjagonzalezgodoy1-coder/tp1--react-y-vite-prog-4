function Skills({ habilidades }) {
  return (
    <section id="habilidades" className="section section-dark">
      <div className="container">
        <h2>Habilidades</h2>

        <div className="skills-container">
          {habilidades.map((habilidad) => (
            <div className="skill-card" key={habilidad}>
              {habilidad}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;