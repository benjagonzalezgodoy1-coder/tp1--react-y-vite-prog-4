
import ProjectCard from '../components/ProjectCard.jsx';

const projects = [
  {
    id: 1,
    nombre: 'Portfolio personal',
    descripcion: 'Mi portfolio web desarrollado como parte de mis trabajos de programación.',
    tecnologias: 'React, JavaScript y CSS',
  },
  {
    id: 2,
    nombre: 'Página web en C#',
    descripcion: 'Proyecto web realizado utilizando C#.',
    tecnologias: 'C#',
  },
  {
    id: 3,
    nombre: 'Control de stock',
    descripcion: 'Aplicación para gestionar y controlar el stock de productos.',
    tecnologias: 'C#',
  },
];

function Projects() {
  return (
    <section className="page">
      <h1>Mis proyectos</h1>
      <p>Estos son algunos de los proyectos que realicé durante mi aprendizaje.</p>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            nombre={project.nombre}
            descripcion={project.descripcion}
            tecnologias={project.tecnologias}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
