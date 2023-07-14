// imports
import { Link } from "react-router-dom";

// importing types
import { NavLinkType } from "../../types/types";

// customm button component
export default function CustomLink({ label, path, isLink }: NavLinkType) {
  return isLink ? (
    <button
      className="customLink text-neutral-3 hover:text-neutral-6 text-sm md:text-base font-thin font-montserrat"
      type="button"
      role="button"
      aria-label={label}
    >
      <a href={path} target="_blank">
        {label}
      </a>
    </button>
  ) : (
    <button
      className="customButton text-neutral-3 hover:text-neutral-6 text-sm md:text-base font-thin font-montserrat"
      type="button"
      role="navigation"
      aria-label={label}
    >
      <Link to={path}>{label}</Link>
    </button>
  );
}
