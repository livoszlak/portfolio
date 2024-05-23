import { JetBrains_Mono } from "next/font/google";
import ProjectCard from "@/app/components/ProjectCard/ProjectCard";
import { fetchProject } from "@/app/api/projects";

const mono = JetBrains_Mono({ weight: ["400", "700"], subsets: ["latin"] });

export default async function Project({ params }) {
  const projectTitle = params.slug.toLowerCase();

  const matchingProject = await fetchProject(projectTitle);

  console.log(matchingProject);

  if (!matchingProject) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <title>{matchingProject.title}</title>
      <h1 className={mono.className}>{matchingProject.title}</h1>
      <ProjectCard project={matchingProject} />
    </main>
  );
}
