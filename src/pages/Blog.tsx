// importing components
import Divider from "../components/Divider/Divider.jsx";
import BlogList from "../components/BlogList/BlogList.js";

// blog page
export default function Blog() {
  return (
    <div className="blog">
      <div className="blog__header font-bold heading text-2xl">BLOGS</div>
      <div className="blog__subheader my-2 subheading text-sm">
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
