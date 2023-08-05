// projects data
const projects = [
  {
    id: 0,
    label: "Pokedex",
    description:
      "Pokedex application created using React library, tailwind CSS, and official pokemon API. It shows pokemon in form of cards with features including pokemon searching and filtering based on regions",
    social: {
      github: "https://github.com/k99sharma/pokemon-react",
      live: "https://ghost32-pokemon.netlify.app/",
    },
    img: "/projects/pokedex.png",
    tech: "JavaScript, ReactJs, Tailwind CSS",
  },
  {
    id: 1,
    label: "Bifrost",
    description:
      "Bifrost is a web application to visualize and locate different countries on 3D globe model. Globe is created in Three.js library and country data is fetched from a REST API",
    social: {
      github: "https://github.com/k99sharma/bifrost",
      live: "https://ghost32-bifrost.netlify.app/",
    },
    img: "/projects/bifrost.png",
    tech: "HTML5, CSS3, Bootstrap 4, ThreeJs, JavaScript, Country API",
  },
  {
    id: 2,
    label: "Planet Visualizer",
    description:
      "Planet Visualizer is a project created for Postman Visualization Hackathon. It uses the Postman Visualizer feature to visualize different planet information with an integrated 3D model. It fetches data from custom-built API",
    social: {
      github: "https://github.com/k99sharma/planets-api",
      live: "https://www.postman.com/winter-shuttle-180342/workspace/planet-visualizer/collection/13225438-fc6cdd38-795a-44a4-9db4-43abca2b0372?ctx=documentation",
    },
    img: "/projects/planet.png",
    tech: "HTML5, CSS3, JavaScript, Postman, ThreeJs",
  },
  {
    id: 3,
    label: "Mount Pizza",
    description:
      "Mount Pizza is a pizza ordering application created using the MERN stack. User can create an account and add pizzas to cart from menu and proceed to checkout. Admin can add new toppings and create new pizzas for users. Admin can also access all user information",
    social: {
      github: "https://github.com/k99sharma/OIBSIP",
      live: "https://mountpizza.netlify.app/",
    },
    img: "/projects/pizza.png",
    tech: "JavaScript, ReactJs, ExpressJs, NodeJs, MongoDB, Tailwind CSS",
  },
];

export default projects;
