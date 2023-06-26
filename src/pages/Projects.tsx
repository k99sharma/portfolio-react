// importing components
import Divider from "../components/Divider/Divider.jsx";
import ProjectCard from "../components/ProjectCard/ProjectCard.js";
import { useContext } from "react";

// importing context
import ThemeContext from "../context/ThemeContext.js";

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

// projects showcase
const projects: projectType[] = [
  {
    title: "Pokedex",
    description: "Pokedex is a pokemon desc",
    thumbnail: "/assets/projects/pokedex.png",
    tech: "ReactJS, Tailwind CSS, JavaScript",
    social: {
      github: "",
      live: "",
    },
  },
  {
    title: "Bifrost",
    description: "Pokedex is a pokemon desc",
    thumbnail: "/assets/projects/bifrost.png",
    tech: "HTML5, CSS3, JavaScript, Bootstrap5, ThreeJs",
    social: {
      github: "",
      live: "",
    },
  },
];

// project page
export default function Projects() {
  // theme context
  const themeCtx = useContext(ThemeContext);
  const { theme } = themeCtx;

  return (
    <div className="blog">
      <div
        className={`projects__header font-bold heading text-xl ${
          theme === "dark" ? "text-amber-500" : "text-cyan-700"
        }`}
      >
        My Recent Work
      </div>
      <div className="projects__subheader my-2 subheading text-sm text-slate-600">
        Here are few projects I've worked on recently
      </div>

      <div className="projects__showcase my-10">
        {projects.map((project) => {
          return <ProjectCard key={project.title} data={project} />;
        })}
      </div>

      <div className="projects__end">
        <Divider />
      </div>
    </div>
  );
}
