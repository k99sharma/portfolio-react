// importing components
import { Link } from "react-router-dom";

// brand component
export default function Brand() {
  return (
    <div className="brand">
      <Link to="/">
        <button type="button" role="button">
          Brand
        </button>
      </Link>
    </div>
  );
}
