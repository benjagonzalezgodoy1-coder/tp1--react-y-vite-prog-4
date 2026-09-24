import { useState } from "react";

function Projects({ proyectos }) {
  const [mostrarDescripcion, setMostrarDescripcion] = useState(false);

  function cambiarDescripcion() {
    setMostrarDescripcion(!mostrarDescripcion);
  }

  return (
    <section id="proyectos" className="section">
      <div className="container">
        <h2>Mis proyectos</h2>

        <div className="projects-container">
          {proyectos.map((proyecto) => (
            <div className="project-card" key={proyecto.id}>
              <h3>{proyecto.titulo}</h3>

              {mostrarDescripcion && (
                <p>{proyecto.descripcion}</p>
              )}
            </div>
          ))}
        </div>

        <button
          className="button"
          onClick={cambiarDescripcion}
        >
          {mostrarDescripcion
            ? "Ocultar información"
            : "Ver información"}
        </button>
      </div>
    </section>
  );
}

export default Projects;