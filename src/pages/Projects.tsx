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
    description:
      "Pokedex application created using React library, tailwind CSS, and official pokemon API. It shows pokemon in form of cards with features including pokemon searching and filtering based on regions.",
    thumbnail: "/assets/projects/pokedex.png",
    tech: "ReactJS, Tailwind CSS, JavaScript",
    social: {
      github: "https://github.com/k99sharma/pokemon-react",
      live: "https://ghost32-pokemon.netlify.app/",
    },
  },
  {
    title: "Bifrost",
    description:
      "Bifrost is a web application to visualize and locate different countries on 3D globe model. Globe is created in Three.js library and country data is fetched from a REST API.",
    thumbnail: "/assets/projects/bifrost.png",
    tech: "HTML5, CSS3, JavaScript, Bootstrap5, ThreeJs",
    social: {
      github: "https://github.com/k99sharma/bifrost",
      live: "https://ghost32-bifrost.netlify.app/",
    },
  },
  {
    title: "Planet Visualizer",
    description:
      "Planet Visualizer is a project created for Postman Visualization Hackathon. It uses the Postman Visualizer feature to visualize different planet information with an integrated 3D model. It fetches data from custom-built API.",
    thumbnail: "/assets/projects/planet.png",
    tech: "HTML5, CSS3, JavaScript, Postman, ThreeJs",
    social: {
      github: "https://github.com/k99sharma/planets-api",
      live: "https://www.postman.com/winter-shuttle-180342/workspace/planet-visualizer/collection/13225438-fc6cdd38-795a-44a4-9db4-43abca2b0372?ctx=documentation",
    },
  },
  {
    title: "Mount Pizza",
    description:
      " Mount Pizza is a pizza ordering application created using the MERN stack. User can create an account and add pizzas to cart from menu and proceed to checkout. Admin can add new toppings and create new pizzas for users. Admin can also access all user information.",
    thumbnail: "/assets/projects/pizza.png",
    tech: "JavaScript, ReactJs, ExpressJs, NodeJs, MongoDB, Tailwind",
    social: {
      github: "https://github.com/k99sharma/OIBSIP",
      live: "https://mountpizza.netlify.app/",
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
        className={`projects__header font-bold heading text-2xl ${
          theme === "dark" ? "text-red-600" : "text-cyan-700"
        }`}
      >
        My Recent Work
      </div>
      <div
        className={`projects__subheader my-2 subheading text-md ${
          theme === "dark" ? "text-slate-300" : "text-slate-600"
        }`}
      >
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
