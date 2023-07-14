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
    <div className="projectView mb-5 md:p-5 lg:p-10">
      <div className="projectView__thumnail mb-3">
        <img width={300} height={200} src={thumbnail} alt={title} />
      </div>

      <div className="projectView__header flex items-center justify-between">
        <div className="projectView__header__heading text-neutral-6 font-bold text-2xl mb-2">
          {title}
        </div>

        <div className="projectView__header__links flex items-center text-neutral-6">
          <div className="projectView__header__links__github mr-2">
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

      <div className="projectView__description text-neutral-6 font-montserrat">
        {description}
      </div>
    </div>
  );
}
