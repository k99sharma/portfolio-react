// importing components
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

// importing type
import { ReactNode, useContext } from "react";

// importing context
import ThemeContext from "../../context/ThemeContext";

// prop type
type LayoutProp = {
  children: ReactNode;
};

// layout function
export default function Layout({ children }: LayoutProp) {
  // theme context
  const themeCtx = useContext(ThemeContext);
  const { theme } = themeCtx;

  return (
    <div
      className={`layout flex justify-center items-center content select-none min-h-full ${
        theme === "dark"
          ? "bg-gradient-to-b bg-neutral-950"
          : "bg-gradient-to-b from-zinc-50 to-neutral-200"
      }`}
    >
      <div className="w-full sm:w-3/4 md:w-2/4 p-5">
        <div className="layout__navbar mb-10">
          <Navbar />
        </div>
        {children}
        <div className="layout__footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}
