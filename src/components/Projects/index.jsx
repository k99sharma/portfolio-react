// imports
import projects from "../../utils/projects";

// importing components
import ProjectsDisplay from "../ProjectsDisplay";

function NoProjectDisplay() {
  return (
    <div className="noProjectDisplay text-center font-bold text-lg">
      Currently working ...
    </div>
  );
}

// projects component
export default function Projects() {
  return (
    <div className="projects mt-20">
      <div className="projects__header text-center">
        <div className="projects__header__heading mb-5 text-2xl font-semibold">
          Stuff that I've built
        </div>

        <div className="projects__header__subheading text-lg mb-10">
          Here are a few projects I've worked on recently
        </div>
      </div>

      <div className="projects__display">
        {projects.length === 0 ? <NoProjectDisplay /> : <ProjectsDisplay />}
      </div>
    </div>
  );
}
