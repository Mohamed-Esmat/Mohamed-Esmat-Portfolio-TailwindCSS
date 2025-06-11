import { useFetchProjects } from "../hooks/fetchProjects";
import ProjectsCard from "./ProjectsCard";
import SectionTitle from "./SectionTitle";

const Projects = () => {
  const {
    projects,
    loading,
    error,
    projectsLength,
    handleLoadMore,
    visibleCount,
  } = useFetchProjects();

  if (loading) {
    return (
      <section className="py-20 align-element" id="projects">
        <SectionTitle title="web creations" />
        <div className="py-16 text-center">
          <p className="text-xl text-gray-500">Loading projects...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 align-element" id="projects">
        <SectionTitle title="Projects" />
        <div className="py-16 text-center">
          <p className="text-xl text-gray-500">Loading projects...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 align-element" id="projects">
        <SectionTitle title="Projects" />
        <div className="py-16 text-center">
          <p className="text-xl text-red-500">
            Error loading projects: {error}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 align-element" id="projects">
      <SectionTitle title="Projects" />
      <div className="py-16 flex flex-wrap gap-8 justify-center">
        {projects.map((project) => (
          <ProjectsCard key={project.id} {...project} />
        ))}
      </div>
      {visibleCount < projectsLength && (
        <div className="text-center mt-8">
          <button
            onClick={handleLoadMore}
            className="px-6 py-2 bg-emerald-500 text-white rounded hover:bg-emerald-600 transition-colors cursor-pointer"
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;
