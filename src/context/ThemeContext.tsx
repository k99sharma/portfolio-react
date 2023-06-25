// importing components
import React, { ReactNode, useEffect, useState } from "react";

type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
};

// dark mode context
const ThemeContext = React.createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});

export function ThemeContextProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    const currentTheme: string | null = window.localStorage.getItem("theme");
    setTheme(currentTheme === null ? "light" : currentTheme);
  }, []);

  const setMode = (mode: string) => {
    // set theme in local storage
    window.localStorage.setItem("theme", mode);

    setTheme(mode); // set theme
  };

  const toggleHandler = () => {
    theme === "light" ? setMode("dark") : setMode("light");
  };

  // context value
  const contextValue = {
    theme: theme,
    toggleTheme: toggleHandler,
  };

  // returning theme context provider
  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
