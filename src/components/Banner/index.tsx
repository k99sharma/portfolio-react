// imports
import { Link } from "react-router-dom";

// banner component
export default function Banner() {
  return (
    <div className="banner text-neutral-7">
      <button type="button" role="navigation" aria-label="banner">
        <Link to="/">
          <img width={40} height={40} src="/logo.png" alt="logo" />
        </Link>
      </button>
    </div>
  );
}
