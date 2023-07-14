// imports
import { Link } from "react-router-dom";

// importing components
import ProjectView from "../components/ProjectView";

// importing types
import { ProjectType } from "../types/types";

// projects
const projects: ProjectType[] = [];

// project page
export default function Project() {
  return (
    <div className="project">
      <div className="project__header mb-10">
        <div className="project__header__heading text-secondary-4 font-bold mb-2">
          STUFF THAT I'VE BUILT
        </div>

        <div className="project__header__subheading text-neutral-4 font-light">
          To checkout my open source contributions.{" "}
          <span>
            <Link className="text-secondary-4" to="/opensource">
              Click Me!
            </Link>
          </span>
        </div>
      </div>

      <div className="project__view grid grid-cols-1 md:grid-cols-2">
        {projects.length === 0 ? (
          <div className="text-neutral-6 text-2xl font-light">
            Working right now ...
          </div>
        ) : (
          projects.map((project) => <ProjectView {...project} />)
        )}
      </div>
    </div>
  );
}
