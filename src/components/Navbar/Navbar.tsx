// importing components
import SimpleButton from "../SimpleButton/SimpleButton";
import Brand from "../../Brand/Brand";

// link type
type linkType = {
  label: string;
  path: string;
  isURL: boolean;
};

// navlinks
const navLinks: linkType[] = [
  {
    label: "Blog",
    path: "/blog",
    isURL: false,
  },
  {
    label: "About",
    path: "/about",
    isURL: false,
  },
  {
    label: "dark-mode",
    path: "#",
    isURL: false,
  },
];

// navbar component
export default function Navbar() {
  return (
    <div className="navbar flex justify-between">
      <div className="navbar__brand">
        <Brand />
      </div>

      <div className="navbar__links flex">
        {navLinks.map((link: linkType) => {
          return (
            <div key={link.label} className="mx-3">
              <SimpleButton options={link} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
