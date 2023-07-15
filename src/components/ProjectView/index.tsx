// imports
import { GitHubLogoIcon, GlobeIcon } from "@radix-ui/react-icons";

// importing types
import { ProjectType } from "../../types/types";

// project view component
export default function ProjectView({
  title,
  description,
  thumbnail,
  github,
  tech,
  live,
}: ProjectType) {
  return (
    <div className="projectView mb-10 grid grid-cols-1 md:grid-cols-2 p-3">
      <div className="projectView__thumnail flex items-center md:items-start justify-center">
        <img
          className="rounded-md"
          width={200}
          height={200}
          src={thumbnail}
          alt={title}
        />
      </div>

      <div className="projectView__detail mt-10 md:mt-0">
        <div className="projectView__header">
          <div className="projectView__header__heading text-neutral-6 font-bold text-2xl mb-5">
            {title}
          </div>

          <div className="projectView__header__links flex items-center text-neutral-6 mb-5">
            <div className="projectView__header__links__github mr-3">
              <a href={github} target="_blank">
                <GitHubLogoIcon height={25} width={25} />
              </a>
            </div>

            <div className="projectView__header__links__live">
              <a href={live} target="_blank">
                <GlobeIcon height={25} width={25} />
              </a>
            </div>
          </div>
        </div>

        <div className="projectView__description__tech text-neutral-4 font-thin mb-5">
          {tech}
        </div>

        <div className="projectView__description text-neutral-6 font-montserrat text-base">
          {description}
        </div>
      </div>
    </div>
  );
}
