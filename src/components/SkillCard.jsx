
function SkillCard({ name, level }) {
  return (
    <article className="skill-card">
      <h2>{name}</h2>
      <p>{level}</p>
    </article>
  );
}

export default SkillCard;
