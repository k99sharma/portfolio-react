// imports
import { Link } from "react-router-dom";

// importing components
import ProjectView from "../components/ProjectView";

// importing types
import { ProjectType } from "../types/types";

// projects
const projects: ProjectType[] = [
  {
    title: "Mount Pizza",
    description:
      "Mount Pizza is a pizza ordering application created using the MERN stack. User can create an account and add pizzas to cart from menu and proceed to checkout. Admin can add new toppings and create new pizzas for users. Admin can also access all user information.",
    tech: "ReactJs, JavaScript, ExpressJs, MongoDB, NodeJs, Tailwind CSS",
    thumbnail: "/project/pizza.png",
    github: "https://github.com/k99sharma/OIBSIP",
    live: "https://mountpizza.netlify.app/",
  },
  {
    title: "Bifrost",
    description:
      "Bifrost is a web application to locate and learn about different countries in the world. It provides an interactive way to locate countries.",
    tech: "HTML5, CSS3, Bootstrap 4, ThreeJs, REST API",
    thumbnail: "/project/bifrost.png",
    github: "https://github.com/k99sharma/bifrost",
    live: "https://ghost32-bifrost.netlify.app/",
  },
  {
    title: "Pokedex",
    description:
      "Pokedex is a web application created using ReactJs, it displays pokemons in the form of grid of cards. It also includes searching and filtering features.",
    tech: "ReactJs, Tailwind CSS, REST API",
    thumbnail: "/project/pokemon.png",
    github: "https://github.com/k99sharma/pokemon-react",
    live: "https://ghost32-pokemon.netlify.app/",
  },
  {
    title: "Planet Visualizer",
    description:
      "REST API created for Postman Student Summit Hackathon. You can fetch data about different planets in our Solar System.",
    tech: "HTML5, CSS3, Postman, ThreeJs",
    thumbnail: "/project/planet.png",
    github: "https://github.com/k99sharma/planets-api",
    live: "https://www.postman.com/ghost32/workspace/my-workspace/collection/13225438-fc6cdd38-795a-44a4-9db4-43abca2b0372?ctx=documentation",
  },
];

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

      <div className="project__view">
        {projects.length === 0 ? (
          <div className="text-neutral-6 text-2xl font-light">
            Working right now ...
          </div>
        ) : (
          projects.map((project) => (
            <ProjectView key={project.title} {...project} />
          ))
        )}
      </div>
    </div>
  );
}
