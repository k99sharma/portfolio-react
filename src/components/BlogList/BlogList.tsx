// prop type
type blogListPropType = {
  count: number;
};

// blog info type
type blogInfo = {
  publishDate: string;
  title: string;
  url: string;
};

const dummyBlogs: blogInfo[] = [
  {
    publishDate: "Jan 29",
    title: "This is my first Blog",
    url: "#",
  },
  {
    publishDate: "Jan 30",
    title: "This is my second Blog",
    url: "#",
  },
];

// blog list component
export default function BlogList({ count }: blogListPropType) {
  return (
    <div className="blogList">
      <BlogView blogs={dummyBlogs} />
    </div>
  );
}

// blog view prop type
type blogViewPropType = {
  blogs: blogInfo[];
};

// blog view component
function BlogView({ blogs }: blogViewPropType) {
  return (
    <div className="blogView">
      {blogs.map((blog) => {
        return (
          <div key={blog.title} className="blog flex items-center my-5">
            <div className="blog__date text-zinc-400 font-thin">
              {blog.publishDate}
            </div>

            <div className="blog__button mx-5 font-semibold">
              <button role="button" type="button">
                <a target="_blank" href={blog.url}>
                  {blog.title}
                </a>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
