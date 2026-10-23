
function ProjectCard({ nombre, descripcion, tecnologias }) {
  return (
    <article className="project-card">
      <h2>{nombre}</h2>
      <p>{descripcion}</p>
      <p className="project-technologies">
        <strong>Tecnologías:</strong> {tecnologias}
      </p>
    </article>
  );
}

export default ProjectCard;
