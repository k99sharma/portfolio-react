// imports
import { useState } from "react";
import { Link } from "react-router-dom";

// importing components
import Banner from "../Banner";
import { Drawer } from "@mui/material";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

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
    <div className="navbarLinkButton text-lg mb-3 md:mb-0 md:text-sm md:mx-5 mx-2">
      <button type="button" role="navigation" aria-label={label}>
        <Link to={path}>{label}</Link>
      </button>
    </div>
  );
}

// navbar component
export default function Navbar() {
  // state
  const [open, setOpen] = useState(false);

  // toggle mobile menu
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="navbar w-4/5 flex items-center justify-between">
        <div className="navbar__banner">
          <Banner />
        </div>

        <div className="navbar__mobileMenuButton md:hidden">
          <button
            onClick={handleToggle}
            type="button"
            role="navigation"
            aria-label="navbar mobile button"
          >
            <HamburgerMenuIcon />
          </button>
        </div>

        <div className="navbar__navlinks hidden md:flex">
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

      {/* mobile view navbar links */}
      <Drawer anchor="top" open={open} onClose={handleToggle}>
        <div className="banner my-5 flex items-center justify-center">
          <img
            className="h-8 w-8"
            src="/assets/logo.png"
            alt="logo"
            aria-label="logo"
          />
        </div>

        <div className="flex flex-col items-center">
          {navbarLinks.map((link) => {
            return <NavbarLinkButton key={link.label} {...link} />;
          })}
        </div>

        <div className="navbar__navlinks__resume text-center text-lg mb-3 mx-2">
          <a
            href="https://drive.google.com/file/d/1ff2NvVi8MPCj65j92q5QRjwzVXJHd1Rn/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </div>
      </Drawer>
    </>
  );
}
