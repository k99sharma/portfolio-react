// importing components
import { useContext } from "react";
import IconButton from "../IconButton/IconButton";

// importing context
import ThemeContext from "../../context/ThemeContext";

// importing icon
import { FaGithub, FaGlobe } from "react-icons/fa";

// projects showcase type
type projectType = {
  title: string;
  description: string;
  thumbnail: string;
  tech: string;
  social: {
    github: string;
    live: string;
  };
};

// project card component
export default function ProjectCard(_props: { data: projectType }) {
  // destructuring props
  const { data } = _props;

  // theme context
  const themeCtx = useContext(ThemeContext);
  const { theme } = themeCtx;

  return (
    <div className="projectCard flex items-center mb-10">
      <div className="projectCard__thumbnail mb-10 md:mb-0">
        <img
          className="rounded-md w-28 h-28 md:w-36 md:h-36 border-2 border-neutral-900"
          src={data.thumbnail}
          alt={data.title}
        />
      </div>

      <div className="projectCard__details w-5/6 ml-10">
        <div
          className={`projectCard__details__title text-2xl heading mb-2 ${
            theme === "dark" ? "text-amber-500" : "text-sky-700"
          }`}
        >
          {data.title}
        </div>

        <div
          className={`projectCard__details__description text-lg mb-4 ${
            theme === "dark" ? "text-zinc-200" : ""
          }`}
        >
          {data.description}
        </div>

        <div className="projectCard__details__tech mb-3">
          <div
            className={`projectCard__details__tech__header mb-1 subheading font-semibold ${
              theme === "dark" ? "text-amber-500" : "text-cyan-700"
            }`}
          >
            Tech Used
          </div>

          <div
            className={`projectCard__details__tech__detail ${
              theme === "dark" ? "text-zinc-200" : ""
            }`}
          >
            {data.tech}
          </div>
        </div>

        <div className="projectCard__details__social flex">
          <div className="projectCard__details__social__github mr-1">
            <a href={data.social.github} target="_blank">
              <IconButton>
                <FaGithub
                  className={`${theme === "dark" ? "text-white" : ""} w-4 h-4`}
                />
              </IconButton>
            </a>
          </div>

          <div className="projectCard__details__social__live">
            <a href={data.social.live} target="_blank">
              <IconButton>
                <FaGlobe
                  className={`${theme === "dark" ? "text-white" : ""} w-4 h-4`}
                />
              </IconButton>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
