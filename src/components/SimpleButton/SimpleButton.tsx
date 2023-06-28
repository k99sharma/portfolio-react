// importing components
import { Link } from "react-router-dom";
import { useContext } from "react";

// context
import ThemeContext from "../../context/ThemeContext";

// simple button component
type optionsType = {
  label: string;
  path: string;
  isURL: boolean;
};

export default function SimpleButton(_props: { options: optionsType }) {
  // destructuring props
  const { options } = _props;

  // theme context
  const themeCtx = useContext(ThemeContext);
  const { theme } = themeCtx;

  return (
    <>
      {options.isURL ? (
        <button
          className={`simpleButton mb-4 text-md font-extralight ${
            theme === "light"
              ? "text-slate-600 hover:text-neutral-900"
              : "text-gray-500 hover:text-slate-300"
          }`}
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
            className={`simpleButton mb-4 text-md font-extralight ${
              theme === "light"
                ? "text-slate-600 hover:text-neutral-900"
                : "text-gray-500 hover:text-slate-300"
            }`}
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
