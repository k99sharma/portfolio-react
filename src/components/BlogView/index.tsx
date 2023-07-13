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
      <div className="blogView__header text-md tracking-wide text-secondary-4 font-semibold mb-2">
        WRITING
      </div>

      <div className="blogView__view">
        {error ? (
          <div className="blogView__view text-neutral-5">
            <img src="/blog-error.png" alt="blog error" />
          </div>
        ) : blogs.length === 0 ? (
          <div className="blogView__view text-neutral-5">
            <img width={100} height={100} src="/no-blog.png" alt="blog error" />
          </div>
        ) : (
          <div className="mt-10">
            {blogs.map((blog) => {
              return (
                <div key={blog.slug} className="blogView__view__blog flex mb-8">
                  <div className="blogView__view__blog__date text-base  text-neutral-4 font-montserrat font-thin w-16">
                    {getBlogDate(blog.dateAdded)}
                  </div>

                  <a
                    className=" text-neutral-7 text-sm md:text-md md:text-lg font-thin text-left"
                    href={`https://kalashsharma.hashnode.dev/${blog.slug}`}
                    target="_blank"
                    aria-label={`${blog.title} blog link`}
                  >
                    {blog.title}
                  </a>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
