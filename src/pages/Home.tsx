// importing components
import BlogList from "../components/BlogList/BlogList.js";
import Divider from "../components/Divider/Divider.jsx";
import IconButton from "../components/IconButton/IconButton.js";

const socials = [
  {
    label: "github",
    path: "https://github.com/k99sharma",
    img: "/assets/github.png",
  },
  {
    label: "linkedin",
    path: "https://www.linkedin.com/in/kalashsharma99/",
    img: "/assets/linkedin.png",
  },
  {
    label: "blog",
    path: "https://kalashsharma.hashnode.dev/",
    img: "/assets/blog.png",
  },
];

// home component
export default function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__header__heading text-4xl font-bold mb-1">
          Kalash Sharma
        </div>
        <div className="home__header__subheading mb-2">
          developer · mentor · blogger
        </div>
        <div className="home__header__introduction text-lg my-5">
          I 💚 to develop & build things.
        </div>
      </div>

      <div className="home__social flex mb-10">
        {socials.map((social) => {
          return (
            <div className="socialButton mr-5" key={social.label}>
              <IconButton>
                <a href={social.path} target="_blank">
                  <img
                    width={18}
                    height={18}
                    src={social.img}
                    alt={social.label}
                  />
                </a>
              </IconButton>
            </div>
          );
        })}
      </div>

      <div className="home__blog">
        <div className="home__blog__header my-5 font-semibold">
          LATEST BLOGS
        </div>

        <div className="home__blog__">
          <BlogList count={3} />
        </div>
      </div>

      <div className="home__end">
        <Divider />
      </div>
    </div>
  );
}
