// importing components
import { Link } from "react-router-dom";

// brand component
export default function Banner() {
  return (
    <div className="banner text-lg">
      <Link to="/">
        <button type="button" role="button">
          <img src="/assets/logo.png" height={40} width={40} alt="logo" />
        </button>
      </Link>
    </div>
  );
}
