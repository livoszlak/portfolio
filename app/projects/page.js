import Link from "next/link";
import { fetchProjects } from "../api/projects";
import ProjectCard from "../components/ProjectCard/ProjectCard";

export default async function Projects({ projects }) {
  const data = await fetchProjects();

  return (
    <main>
      <title>Projects</title>
      <h1 className="mono">Projects</h1>
      {data.map((project, index) => (
        <Link href={"/projects/" + project.slug} key={index}>
          <ProjectCard className="mono" project={project} key={index} />
        </Link>
      ))}
    </main>
  );
}
