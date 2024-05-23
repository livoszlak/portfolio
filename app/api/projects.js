import client from "../lib/contentful";

const baseUrl = "https://cdn.contentful.com";

export const fetchProjects = async () => {
  const res = await client.getEntries();
  console.log(res);
  const projects = res.items.map((item) => item.fields);
  return projects;
};

export const fetchProject = async (slug) => {
  const res = await client.getEntries({
    content_type: "projects",
    "fields.slug": slug,
  });
  return res.items[0].fields;
};
