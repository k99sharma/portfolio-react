// importing types
import { BlogType } from "../../types/types";

// importing utils
import { getBlogDate } from "../../utils/helper";

// blog view component
export default function BlogView({
  blogs,
  error,
}: {
  blogs: BlogType[];
  error: boolean;
}) {
  return (
    <div className="blogView">
      <div className="blogView__header text-md tracking-wide text-secondary-4 font-semibold mb-12">
        WRITING
      </div>

      <div className="blogView__view">
        {error
          ? "Error"
          : blogs.map((blog) => {
              return (
                <div key={blog.slug} className="blogView__view__blog flex mb-8">
                  <div className="blogView__view__blog__date text-base font-thin text-neutral-4 font-montserrat w-16">
                    {getBlogDate(blog.dateAdded)}
                  </div>

                  <button
                    className="blogView__view__blog__title text-neutral-7 font-thin text-sm md:text-md md:text-lg text-left"
                    type="button"
                    role="button"
                    aria-label={`${blog.title} blog link`}
                  >
                    <a
                      href={`https://kalashsharma.hashnode.dev/${blog.slug}`}
                      target="_blank"
                    >
                      {blog.title}
                    </a>
                  </button>
                </div>
              );
            })}
      </div>
    </div>
  );
}
