// importing hooks
import { useContext } from "react";
import IconButton from "../IconButton/IconButton";

// importing context
import ThemeContext from "../../context/ThemeContext";

// dark mode button
export default function DarkModeButton() {
  // theme context
  const themeCtx = useContext(ThemeContext);

  return (
    <div className="darkModeButton relative mb-4">
      <IconButton eventHandler={themeCtx.toggleTheme}>
        <img
          height={24}
          width={24}
          src={
            themeCtx.theme === "light"
              ? "/assets/light.png"
              : "/assets/dark.png"
          }
          alt="dark-mode-button"
        />
      </IconButton>
    </div>
  );
}
