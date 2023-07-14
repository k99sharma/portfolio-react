// importing types
import { LinkType } from "../../types/types";
import Banner from "../Banner";
import CustomLink from "../CustomLink";

// nav links
const navLinks: LinkType[] = [
  {
    label: "About",
    path: "/about",
    isLink: false,
  },
  {
    label: "Projects",
    path: "/projects",
    isLink: false,
  },
];

// nav link component
function NavLinks() {
  return (
    <div className="navlinks flex items-center">
      {navLinks.map((navLink: LinkType) => {
        return (
          <div key={navLink.label} className="navLink mx-2 md:mx-5">
            <CustomLink {...navLink} />
          </div>
        );
      })}
    </div>
  );
}

// navbar component
export default function Navbar() {
  return (
    <div className="navbar flex items-center justify-between my-10">
      <Banner />

      <NavLinks />
    </div>
  );
}
