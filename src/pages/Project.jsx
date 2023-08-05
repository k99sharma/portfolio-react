// imports
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  GitHubLogoIcon,
  GlobeIcon,
} from "@radix-ui/react-icons";

// importing projects
import projects from "../utils/projects";

// project component
export default function Project() {
  // params
  const { id } = useParams();

  // count of available projects
  const count = projects.length;

  // project by id
  const project = projects[id];

  return (
    <div className="flex items-center justify-center md:justify-around">
      <div className="project__navigation hidden md:block">
        <Link to={`/projects/${(count + parseInt(id) - 1) % count}`}>
          <button
            className="hover:bg-blue-400 p-3 hover:rounded-full"
            type="button"
            role="navigation"
          >
            <ArrowLeftIcon className="h-5 w-5" />
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 md:w-5/6 lg:w-4/6 md:shadow-lg md:rounded-2xl">
        <div className="project-col-1 flex flex-col items-center justify-center">
          <div className="project__thumbnail mb-8">
            <img
              width={150}
              height={150}
              className="rounded-full"
              src={project.img}
              alt={project.label}
            />
          </div>

          <div className="project__name mb-5 text-4xl font-bold">
            {project.label}
          </div>

          <div className="project__social flex items-center justify-center mb-10">
            <a
              className="mx-3"
              href={project.social.github}
              target="_blank"
              rel="noreferrer"
            >
              <GitHubLogoIcon className="h-6 w-6" />
            </a>

            <a
              className="mx-3"
              href={project.social.live}
              target="_blank"
              rel="noreferrer"
            >
              <GlobeIcon className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div className="project-col-2 p-5 md:p-10">
          <div className="project__description mb-10">
            <div className="project__description__heading text-xl font-bold mb-5">
              Project Description
            </div>

            <div className="project__description__content text-lg">
              {project.description}
            </div>
          </div>

          <div className="project__description mb-10">
            <div className="project__description__heading text-xl font-bold mb-5">
              Project Tech
            </div>

            <div className="project__description__content text-lg">
              {project.tech}
            </div>
          </div>
        </div>
      </div>

      <div className="project__navigation hidden md:block">
        <Link to={`/projects/${(parseInt(id) + 1) % count}`}>
          <button
            className="hover:bg-blue-400 p-3 hover:rounded-full"
            type="button"
            role="navigation"
          >
            <ArrowRightIcon className="h-5 w-5" />
          </button>
        </Link>
      </div>
    </div>
  );
}
