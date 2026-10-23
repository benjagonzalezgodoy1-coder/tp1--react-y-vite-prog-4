
const projects = [
  {
    id: 1,
    name: 'Portfolio personal',
    description: 'Mi portfolio desarrollado con React.',
    technologies: 'React, JavaScript y CSS',
  },
  {
    id: 2,
    name: 'Página web en C#',
    description: 'Proyecto web realizado anteriormente.',
    technologies: 'C# y desarrollo web',
  },
  {
    id: 3,
    name: 'Control de stock',
    description: 'Sistema para administrar productos y stock.',
    technologies: 'C#',
  },
];

function Projects() {
  return (
    <section className="page">
      <h1>Mis proyectos</h1>

      <p>Estos son algunos de mis trabajos.</p>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.id}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <p>
              <strong>Tecnologías:</strong> {project.technologies}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
