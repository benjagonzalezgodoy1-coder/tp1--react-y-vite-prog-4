
const skills = [
  { id: 1, name: 'C#', level: 'Conocimientos básicos' },
  { id: 2, name: 'HTML', level: 'Conocimientos básicos' },
  { id: 3, name: 'CSS', level: 'Conocimientos básicos' },
  { id: 4, name: 'JavaScript', level: 'En aprendizaje' },
  { id: 5, name: 'React', level: 'En aprendizaje' },
  { id: 6, name: 'Git y GitHub', level: 'En aprendizaje' },
];

function Skills() {
  return (
    <section className="page">
      <h1>Mis habilidades</h1>

      <p>
        Estas son algunas de las tecnologías y
        herramientas con las que trabajo.
      </p>

      <div className="skills-grid">
        {skills.map((skill) => (
          <article className="skill-card" key={skill.id}>
            <h2>{skill.name}</h2>
            <p>{skill.level}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
