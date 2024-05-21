import { JetBrains_Mono } from "next/font/google";
import projectsData from "@/app/api/projects.json";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import Link from "next/link";

const mono = JetBrains_Mono({ weight: ["400", "700"], subsets: ["latin"] });

export default function Projects() {
  const projects = projectsData;

  return (
    <main>
      <title>Projects</title>
      <h1 className={mono.className}>Projects</h1>
      {projects.map((project) => (
        <Link href={"/projects/" + project.slug}>
          <ProjectCard
            className={mono.className}
            key={project.id}
            project={project}
          />
        </Link>
      ))}
    </main>
  );
}
