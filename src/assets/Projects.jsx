import ProjectCard from './ProjectCard.jsx'

function Projects({ projects }) {

  return (
    <section
      id="proyectos"
      className="section"
    >

      <div className="container">

        <p className="section-label">
          03 — PROYECTOS
        </p>

        <div className="section-heading">

          <h2>
            Trabajos que realicé
          </h2>

          <p>
            Estos son algunos de los proyectos
            realizados durante mi aprendizaje
            en programación.
          </p>

        </div>

        <div className="projects-grid">

          {projects.map((project, index) => (

            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              technology={project.technology}
              number={String(index + 1).padStart(2, '0')}
            />

          ))}

        </div>

      </div>

    </section>
  )
}

export default Projects