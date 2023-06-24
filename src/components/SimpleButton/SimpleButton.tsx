// importing components
import { Link } from "react-router-dom";

// simple button component
type optionsType = {
  label: string;
  path: string;
  isURL: boolean;
};

export default function SimpleButton(_props: { options: optionsType }) {
  // destructuring props
  const { options } = _props;

  return (
    <>
      {options.isURL ? (
        <button
          className="simpleButton mb-4 text-md font-extralight text-slate-600 hover:text-black"
          type="button"
          role="button"
        >
          <a href={options.path} target="_blank">
            {options.label}
          </a>
        </button>
      ) : (
        <Link to={options.path}>
          <button
            className="simpleButton mb-4 text-md font-extralight text-slate-600 hover:text-black"
            type="button"
            role="navigation"
          >
            {options.label}
          </button>
        </Link>
      )}
    </>
  );
}
