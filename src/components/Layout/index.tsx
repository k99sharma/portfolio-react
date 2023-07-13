// importing components
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";

// importing types
import { LayoutPropType } from "../../types/types";

// layout component
export default function Layout({ children }: LayoutPropType) {
  return (
    <div className="layout flex justify-center bg-gradient-to-b from-bg-1 to-bg-2 min-h-screen font-opensans">
      <div className="w-5/6 md:w-3/6">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
}
