import BlogContainer from "../containers/Blog";

// blog page
export default function Blog() {
  return (
    <div className="blog lg:grid lg:grid-cols-2">
      <div className="blog__view">
        <BlogContainer />
      </div>

      <div className="blog__illustration hidden lg:flex lg:items-center lg:justify-center">
        <img src="/blogImg.svg" alt="blog" />
      </div>
    </div>
  );
}
