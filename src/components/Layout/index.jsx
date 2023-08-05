// importing components
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import GoToTopButton from "../GoToTopButton";

// scroll to top
function ScrollToTopOnMount() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// layout component
export default function Layout({ children }) {
  return (
    <div className="layout font-sans">
      <ScrollToTopOnMount />
      <GoToTopButton />
      <div className="layout__navbar flex items-center justify-center py-5 mb-10">
        <Navbar />
      </div>
      {children}
      <div className="layout__footer">
        <Footer />
      </div>
    </div>
  );
}
