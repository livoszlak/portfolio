export default function ProjectCard({ project }) {
  return (
    <div className="project-wrapper mono">
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <img src={project.image}></img>
    </div>
  );
}
