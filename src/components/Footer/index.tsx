// importing types
import { NavLinkType } from "../../types/types";
import CustomLink from "../CustomLink";

// available options
const pagesOptions: NavLinkType[] = [
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

const skillsOptions: NavLinkType[] = [
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
  {
    label: "Contact",
    path: "/contact",
    isLink: false,
  },
];

const socialOptions = [
  {
    label: "Email",
    path: "mailto:kalash.strt@gmail.com",
    isLink: true,
  },
  {
    label: "GitHub",
    path: "#",
    isLink: true,
  },
  {
    label: "LinkedIn",
    path: "#",
    isLink: true,
  },
];

// footer component
export function Footer() {
  return (
    <div className="footer">
      <div className="footer__links flex justify-between mb-5">
        <div className="footer__pages">
          {pagesOptions.map((navLink: NavLinkType) => {
            return (
              <div key={navLink.label} className="navLink my-5">
                <CustomLink {...navLink} />
              </div>
            );
          })}
        </div>

        <div className="footer__skills">
          {skillsOptions.map((navLink: NavLinkType) => {
            return (
              <div key={navLink.label} className="navLink my-5">
                <CustomLink {...navLink} />
              </div>
            );
          })}
        </div>

        <div className="footer__social">
          {socialOptions.map((navLink: NavLinkType) => {
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
