// importing components
import { Link } from "react-router-dom";

// brand component
export default function Banner() {
  return (
    <div className="banner text-lg">
      <Link className="flex items-center justify-center" to="/">
        <button
          className="bg-zinc-300 rounded-full p-1"
          type="button"
          role="button"
        >
          <img src="/assets/logo.png" height={30} width={30} alt="logo" />
        </button>
      </Link>
    </div>
  );
}
