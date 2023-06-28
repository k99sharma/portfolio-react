// importing components
import BlogList from "../components/BlogList/BlogList.js";
import Divider from "../components/Divider/Divider.jsx";
import IconButton from "../components/IconButton/IconButton.js";
import { useContext } from "react";

// import context
import ThemeContext from "../context/ThemeContext.js";

// importing icons
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFeather } from "react-icons/fa";

// home component
export default function Home() {
  const themeCtx = useContext(ThemeContext);
  const { theme } = themeCtx;

  return (
    <div className="home">
      <div className="home__header">
        <div
          className={`${
            theme === "dark" ? "text-zinc-200" : ""
          } home__header__heading text-5xl mb-1 heading font-bold`}
        >
          Kalash Sharma
        </div>
        <div
          className={`home__header__subheading mb-2 ${
            theme === "dark" ? "text-slate-600" : ""
          }`}
        >
          developer · mentor · blogger
        </div>
        <div
          className={`home__header__introduction text-lg my-5 subheading ${
            theme === "dark" ? "text-zinc-200" : ""
          }`}
        >
          I <span className="text-red-600">❤</span> to develop & build things.
        </div>
      </div>

      <div className="home__social flex mb-10">
        <div className="socialButton mr-5">
          <a
            href="https://github.com/k99sharma"
            aria-label="github"
            target="_blank"
          >
            <IconButton>
              <FaGithub
                className={`${theme === "dark" ? "text-zinc-200" : ""} w-5 h-5`}
              />
            </IconButton>
          </a>
        </div>

        <div className="socialButton mr-5">
          <a
            href="https://www.linkedin.com/in/kalashsharma99/"
            aria-label="linkedin"
            target="_blank"
          >
            <IconButton>
              <FaLinkedin
                className={`${theme === "dark" ? "text-zinc-200" : ""} w-5 h-5`}
              />
            </IconButton>
          </a>
        </div>

        <div className="socialButton mr-5">
          <a
            href="https://kalashsharma.hashnode.dev/"
            aria-label="blog"
            target="_blank"
          >
            <IconButton>
              <FaFeather
                className={`${theme === "dark" ? "text-white" : ""} w-5 h-5`}
              />
            </IconButton>
          </a>
        </div>
      </div>

      <div className="home__blog">
        <div
          className={`${
            theme === "dark" ? "text-red-600" : "text-cyan-700"
          } home__blog__header my-5 font-semibold heading text-2xl`}
        >
          LATEST BLOGS
        </div>

        <div className="home__blog__list">
          <BlogList count={3} />
        </div>
      </div>

      <div className="home__end">
        <Divider />
      </div>
    </div>
  );
}
