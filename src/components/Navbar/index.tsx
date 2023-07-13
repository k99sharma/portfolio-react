// importing types
import { NavLinkType } from "../../types/types";
import Banner from "../Banner";
import CustomLink from "../CustomLink";

// nav links
const navLinks: NavLinkType[] = [
  {
    label: "About",
    path: "/about",
    isLink: false,
  },
  {
    label: "Contact",
    path: "/contact",
    isLink: false,
  },
];

// nav link component
function NavLinks() {
  return (
    <div className="navlinks flex items-center">
      {navLinks.map((navLink: NavLinkType) => {
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
export function Navbar() {
  return (
    <div className="navbar flex items-center justify-between my-10">
      <Banner />

      <NavLinks />
    </div>
  );
}
