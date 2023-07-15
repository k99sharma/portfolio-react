// imports
import { useState, useEffect } from "react";

// importing types
import { BlogType } from "../../types/types";

// importing components
import BlogView from "../../components/BlogView";
import Spinner from "../../components/Spinner";

// blog container
export default function BlogContainer({ count = -1 }: { count?: number }) {
  // states
  const [blogsData, setBlogsData] = useState<{
    blogs: BlogType[];
    error: boolean;
  }>({ blogs: [], error: false });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  useEffect(() => {
    try {
      // fetching data
      setIsSubmitting(true);

      // query for hashnode api
      const query = `
            query GetUserArticles($page: Int!) {
                user(username: "kalashsharma99") {
                    publication {
                        posts(page: $page) {
                            title
                            brief
                            slug
                            coverImage
                            dateAdded
                        }
                    }
                }
            }
        `;

      // variables for hashnode api
      const variables: { page: number } = { page: 0 };

      // function to fetch blogs
      fetch("https://api.hashnode.com/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query,
          variables,
        }),
      })
        .then((res) => res.json())
        .then((res) => res.data.user.publication.posts)
        .then((data: BlogType[]) => {
          // if no count is provided
          if (count !== -1) {
            const blogs = data.slice(0, count);
            setBlogsData({ blogs: blogs, error: false });
          } else {
            setBlogsData({ blogs: data, error: false }); // set blogs data
          }

          setIsSubmitting(false); // not fetching
        })
        .catch((err) => {
          throw err;
        });
    } catch (err) {
      setBlogsData({ blogs: [], error: true }); // set blogs to empty
      setIsSubmitting(false); // not fetching
    }
  }, []);

  return isSubmitting ? <Spinner /> : <BlogView {...blogsData} />;
}
