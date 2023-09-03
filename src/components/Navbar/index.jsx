// imports
import { Link } from "react-router-dom";

// importing components
import Banner from "../Banner";

// navbar links
const navbarLinks = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Blog",
    path: "/blog",
  },
  {
    label: "Contact",
    path: "/contact",
  },
];

// navbar link button component
export function NavbarLinkButton({ label, path }) {
  return (
    <div className="navbarLinkButton text-sm mx-2 md:mx-5">
      <button type="button" role="navigation" aria-label={label}>
        <Link to={path}>{label}</Link>
      </button>
    </div>
  );
}

// navbar component
export default function Navbar() {
  return (
    <div className="navbar w-4/5 flex items-center justify-between">
      <div className="navbar__banner">
        <Banner />
      </div>

      <div className="navbar__navlinks flex">
        {navbarLinks.map((link) => {
          return <NavbarLinkButton key={link.label} {...link} />;
        })}

        <div className="navbar__navlinks__resume text-sm mx-2 md:mx-5">
          <a
            href="https://drive.google.com/file/d/1ff2NvVi8MPCj65j92q5QRjwzVXJHd1Rn/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}
