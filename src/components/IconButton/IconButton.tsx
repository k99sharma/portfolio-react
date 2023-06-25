// importing components
import { ReactNode, useContext } from "react";

// importing context
import ThemeContext from "../../context/ThemeContext";

// icon button component
type IconButtonPropType = {
  children: ReactNode;
  eventHandler?: () => void;
};

export default function IconButton({
  children,
  eventHandler,
}: IconButtonPropType) {
  const themeCtx = useContext(ThemeContext);
  const { theme } = themeCtx;

  return (
    <button
      onClick={eventHandler}
      role="button"
      type="button"
      className={`iconButton md:p-2 hover:rounded-md ${
        theme === "light" ? "hover:bg-neutral-300" : "hover:bg-neutral-700"
      }`}
    >
      {children}
    </button>
  );
}
