import { JetBrains_Mono } from "next/font/google";
import projects from "@/app/api/projects.json";
import ProjectCard from "@/app/components/ProjectCard/ProjectCard";

const mono = JetBrains_Mono({ weight: ["400", "700"], subsets: ["latin"] });

export default async function Project({ params }) {
  const projectTitle = params.slug.toLowerCase();

  const matchingProject = projects.find(
    (project) => project.slug.toLowerCase() === projectTitle
  );

  console.log(matchingProject);

  if (!matchingProject) {
    return <div>Loading...</div>;
  }

  const getProducts = async () => {
    const res = await fetch("https://dummyjson.com/recipes");
    return res.json();
  };

  const data = await getProducts();

  if (!data) {
    console.log("no");
  }

  console.log(data);

  return (
    <main>
      <title>{matchingProject.title}</title>
      <h1 className={mono.className}>{matchingProject.title}</h1>
      <ProjectCard project={matchingProject} />
    </main>
  );
}
