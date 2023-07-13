// importing components
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";

// importing types
import { LayoutPropType } from "../../types/types";

// layout component
export default function Layout({ children }: LayoutPropType) {
  return (
    <div className="layout">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
