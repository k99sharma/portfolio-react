// importing components
import SimpleButton from "../SimpleButton/SimpleButton";
import Banner from "../Banner/Banner";
import DarkModeButton from "../DarkModeButton/DarkModeButton";

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
];

// navbar component
export default function Navbar() {
  return (
    <div className="navbar flex items-center justify-between">
      <div className="navbar__banner">
        <Banner />
      </div>

      <div className="navbar__links flex items-center">
        <>
          {navLinks.map((link: linkType) => {
            return (
              <div key={link.label} className="mx-3">
                <SimpleButton options={link} />
              </div>
            );
          })}

          <div className="navbar__darkMode">
            <DarkModeButton />
          </div>
        </>
      </div>
    </div>
  );
}
