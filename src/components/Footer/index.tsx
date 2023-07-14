// importing types
import { LinkType } from "../../types/types";
import CustomLink from "../CustomLink";

// available options
const pagesOptions: LinkType[] = [
  {
    label: "Home",
    path: "/",
    isLink: false,
  },
  {
    label: "Blog",
    path: "/blog",
    isLink: false,
  },
  {
    label: "About",
    path: "/about",
    isLink: false,
  },
];

const skillsOptions: LinkType[] = [
  {
    label: "Projects",
    path: "/projects",
    isLink: false,
  },
  {
    label: "Resume",
    path: "#",
    isLink: true,
  },
];

const socialOptions: LinkType[] = [
  {
    label: "Email",
    path: "mailto:kalash.strt@gmail.com",
    isLink: true,
  },
  {
    label: "GitHub",
    path: "https://github.com/k99sharma",
    isLink: true,
  },
  {
    label: "LinkedIn",
    path: "https://www.linkedin.com/in/kalashsharma99/",
    isLink: true,
  },
];

// footer component
export default function Footer() {
  return (
    <div className="footer mb-5">
      <div className="footer__links flex justify-between mb-5">
        <div className="footer__pages">
          {pagesOptions.map((navLink: LinkType) => {
            return (
              <div key={navLink.label} className="navLink my-5">
                <CustomLink {...navLink} />
              </div>
            );
          })}
        </div>

        <div className="footer__skills">
          {skillsOptions.map((navLink: LinkType) => {
            return (
              <div key={navLink.label} className="navLink my-5">
                <CustomLink {...navLink} />
              </div>
            );
          })}
        </div>

        <div className="footer__social">
          {socialOptions.map((navLink: LinkType) => {
            return (
              <div key={navLink.label} className="navLink my-5">
                <CustomLink {...navLink} />
              </div>
            );
          })}
        </div>
      </div>

      <div className="footer__copyright text-neutral-4 text-xs font-light">
        Copyright 2023 © Kalash Sharma
      </div>
    </div>
  );
}
