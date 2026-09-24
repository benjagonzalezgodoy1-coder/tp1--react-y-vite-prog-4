function Skills({ skills }) {

  return (
    <section
      id="habilidades"
      className="section section-alt"
    >

      <div className="container">

        <p className="section-label">
          02 — HABILIDADES
        </p>

        <div className="section-heading">

          <h2>
            Tecnologías que conozco
          </h2>

          <p>
            Algunas de las herramientas y tecnologías
            que fui incorporando durante mi formación.
          </p>

        </div>

        <div className="skills-grid">

          {skills.map((skill) => (

            <article
              className="skill-card"
              key={skill}
            >

              <span className="skill-number">
                {String(
                  skills.indexOf(skill) + 1
                ).padStart(2, '0')}
              </span>

              <h3>
                {skill}
              </h3>

            </article>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Skills