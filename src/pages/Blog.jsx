// importing components
import Spinner from "../components/Spinner";

// importing custom hooks
import useBlog from "../hooks/blogHook";

// no blog view component
function NoBlogsView() {
  return (
    <div className="noBlogsView text-xl">Stay tuned for upcoming blogs!</div>
  );
}

// blog view component
function BlogsView({ blogs }) {
  // format publish date
  const getPublishDate = (dateAdded) => {
    const date = new Date(dateAdded);
    const publishDate = new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(date);
    return publishDate;
  };

  return (
    <div className="blogsView">
      {blogs.map((blog) => {
        return (
          <div key={blog.title} className="blogView mb-8">
            <div className="blogView__date text-sm text-zinc-600 mb-2">
              {getPublishDate(blog.dateAdded)}
            </div>

            <div className="blogView__blog inline-block text-xl hover:text-primary hover:underline hover:underline-offset-4">
              <a
                href={`https://kalashsharma.hashnode.dev/${blog.slug}`}
                target="_blank"
                rel="noreferrer"
              >
                {blog.title}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// blog page
export default function Blog() {
  const { blogs, isSubmitting } = useBlog();

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="blog w-4/5">
        <div className="blog__header mb-10">
          <div className="blog__header__heading font-bold text-2xl mb-3 text-primary">
            Writing
          </div>

          <div className="blog__header__subheading text-lg font-zinc-600">
            Diving into the Tech Ocean, One Pixel at a Time
          </div>
        </div>

        <div className="blog__view">
          {isSubmitting ? (
            <Spinner />
          ) : blogs.length === 0 ? (
            <NoBlogsView />
          ) : (
            <BlogsView blogs={blogs} />
          )}
        </div>
      </div>
    </div>
  );
}
