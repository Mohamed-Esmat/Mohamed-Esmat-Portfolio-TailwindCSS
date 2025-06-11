import { createClient } from "contentful";
import { useState, useEffect } from "react";

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  environment: "master", // Default environment is 'master'
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
});

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);
  const [visibleCount, setVisibleCount] = useState(6);
  const increment = 3;
  const projectsLength = projects.length;

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => {
      const newCount = prevCount + increment;
      return newCount > projectsLength ? projectsLength : newCount;
    });
  };

  const visibleProjects = projects.slice(
    0,
    Math.min(visibleCount, projectsLength)
  );

  const fetchProjects = async () => {
    try {
      const response = await client.getEntries({
        content_type: "projects",
      });
      const projects = response.items.map((item) => {
        const newItem = {
          id: item.sys.id,
          title: item.fields.title,
          url: item.fields.url,
          image: item.fields?.image?.fields?.file?.url,
          description: item.fields.description,
          githubUrl: item.fields.githubUrl,
        };
        return newItem;
      });
      console.log("Fetched projects:", projects);

      setProjects(projects);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching projects:", error);
      setError(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return {
    loading,
    projects: visibleProjects,
    error,
    visibleCount,
    projectsLength,
    handleLoadMore,
  };
};
