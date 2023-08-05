// imports
import { useState, useEffect } from "react";

// blog hook
const useBlog = () => {
  // states
  const [blogs, setBlogs] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // fetch blog data
  useEffect(() => {
    // start fetching
    setIsSubmitting(true);

    // blog fetching function
    async function fetchBlogs() {
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
      const variables = { page: 0 };

      try {
        const res = await fetch("https://api.hashnode.com/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query,
            variables,
          }),
        });

        const data = await res.json();
        setBlogs(data.data.user.publication.posts);
      } catch (e) {
        console.log(e);
        setBlogs([]);
      }
    }

    fetchBlogs(); // fetch blogs
    setIsSubmitting(false);
  }, []);

  return { blogs, isSubmitting };
};

export default useBlog;
