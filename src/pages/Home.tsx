// imports
import { Link } from "react-router-dom";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  Pencil2Icon,
} from "@radix-ui/react-icons";

// importing containers
import BlogContainer from "../containers/Blog";

// home page
export default function Home() {
  return (
    <div className="home my-10">
      {/* header */}
      <div className="home__header mb-10">
        <div className="home__header__heading text-neutral-7 text-4xl md:text-5xl font-bold mb-1">
          Kalash Sharma
        </div>
        <div className="home__header__subheading text-neutral-4 font-thin text-xs md:text-base mb-10">
          developer . blogger . open source enthusiast
        </div>

        <div className="home__tagline text-md md:text-xl text-neutral-5">
          I 💛 to develop &{" "}
          <span className="hover:border-b-2 text-secondary-5 text-bold">
            <Link to="/projects">build</Link>
          </span>{" "}
          things and sometimes I{" "}
          <span className="hover:border-b-2 text-secondary-5 text-bold">
            <Link to="/projects">write</Link>
          </span>{" "}
          too.
        </div>
      </div>

      {/* social links */}
      <div className="home__social flex items-center mb-10">
        <div className="home__social__link mr-5 text-neutral-5">
          <a href="#" target="_blank" aria-label="GitHub">
            <GitHubLogoIcon height={20} width={20} />
          </a>
        </div>

        <div className="home__social__link mr-5 text-neutral-5">
          <a href="#" target="_blank" aria-label="LinkedIn">
            <LinkedInLogoIcon height={20} width={20} />
          </a>
        </div>

        <div className="home__social__link mr-5 text-neutral-5">
          <a href="#" target="_blank" aria-label="LinkedIn">
            <Pencil2Icon height={20} width={20} />
          </a>
        </div>
      </div>

      {/* blog section */}
      <BlogContainer count={3} />
    </div>
  );
}
