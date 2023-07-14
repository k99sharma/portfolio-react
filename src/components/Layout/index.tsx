// importing components
import Navbar from "../Navbar";
import Footer from "../Footer";
import Divider from "../Divider";

// importing types
import { LayoutPropType } from "../../types/types";

// layout component
export default function Layout({ children }: LayoutPropType) {
  return (
    <div className="layout flex justify-center bg-gradient-to-b from-bg-1 to-bg-2 min-h-screen user-select:text-red-300">
      <div className="w-5/6 md:w-4/6 lg:w-3/6">
        <Navbar />
        {children}
        {/* divider */}
        <Divider />
        <Footer />
      </div>
    </div>
  );
}
