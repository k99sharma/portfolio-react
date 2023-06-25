// importing components
import Divider from "../components/Divider/Divider.jsx";
import BlogList from "../components/BlogList/BlogList.js";
import { useContext } from "react";

// importing context
import ThemeContext from "../context/ThemeContext.js";

// blog page
export default function Blog() {
  // theme context
  const themeCtx = useContext(ThemeContext);
  const { theme } = themeCtx;

  return (
    <div className="blog">
      <div
        className={`blog__header font-bold heading text-xl ${
          theme === "dark" ? "text-amber-500" : "text-cyan-700"
        }`}
      >
        BLOGS
      </div>
      <div className="blog__subheader my-2 subheading text-sm text-slate-600">
        Insights and Perspectives from personal adventures
      </div>
      <div className="blog__blog-list my-8">
        <BlogList count={-1} />
      </div>
      <div className="blog__end">
        <Divider />
      </div>
    </div>
  );
}
