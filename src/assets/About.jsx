import { useState } from 'react'

function About({ objective }) {

  const [showMore, setShowMore] = useState(false)

  return (
    <section
      id="sobre-mi"
      className="section"
    >

      <div className="container about-grid">

        <div>

          <p className="section-label">
            01 — SOBRE MÍ
          </p>

          <h2>
            Aprendiendo y creando con tecnología.
          </h2>

        </div>

        <div className="about-content">

          <p>
            Soy Benjamin Gonzalez Godoy,
            estudiante de programación.
            Este es mi primer trabajo realizado
            con React y forma parte de la materia
            Programación 4.
          </p>

          <p>
            Mi objetivo principal es seguir
            aprendiendo herramientas de desarrollo
            y llevar mis conocimientos a nuevos
            proyectos.
          </p>

          <button
            className="text-button"
            type="button"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? 'Ver menos' : 'Ver más'}
          </button>

          {showMore && (
            <div className="extra-info">

              <p>
                <strong>Objetivo:</strong>{' '}
                {objective}
              </p>

              <p>
                Este portfolio utiliza componentes
                reutilizables, props, renderizado
                dinámico y estado para demostrar
                los conceptos fundamentales de React.
              </p>

            </div>
          )}

        </div>

      </div>

    </section>
  )
}

export default About