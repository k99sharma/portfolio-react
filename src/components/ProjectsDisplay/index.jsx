// imports
import { Link } from "react-router-dom";

// importing projects
import projects from "../../utils/projects";

// project card component
function ProjectCard(_props) {
  return (
    <div className="projectCard p-5 flex items-center justify-center">
      <Link to={`/projects/${_props.id}`}>
        <button
          className="projectCard__modal__button hover:shadow-lg"
          aria-labelledby={`${_props.label} modal button`}
        >
          <img
            className="rounded-lg"
            height={250}
            width={250}
            src={_props.img}
            alt={_props.label}
          />
        </button>
      </Link>
    </div>
  );
}

// projects display component
export default function ProjectsDisplay() {
  return (
    <div className="projectsDisplay grid md:grid-cols-3 lg:grid-cols-4">
      {projects.map((project) => {
        return <ProjectCard key={project.id} {...project} />;
      })}
    </div>
  );
}
