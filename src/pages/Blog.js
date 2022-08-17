import React, { useState, useEffect } from "react";
import BlogPreview from "../components/blogItem/BlogPreview";
import LoadingSpinner from "../components/loadingSpinner/LoadingSpinner";
import api from "../utils/api";

const Blog = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [featureBlog, setFeatureBlog] = useState({});
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    let mounted = true;
    getBlogs().then((data) => {
      if (mounted) {
        renderBlogs(data);
      }
      setIsLoading(false);
    });
    return () => (mounted = false);
  }, []);

  const getBlogs = async () => {
    const blogsData = await api.getBlogs();
    return blogsData;
  };

  const renderBlogs = (blogs) => {
    if (blogs.length > 0) {
      setBlogs(blogs.filter((blog) => !blog.isFeatured));
      const featureBlogTest = blogs.filter((blog) => blog.isFeatured);
      if (featureBlogTest.length > 0) {
        setFeatureBlog(featureBlogTest[0]);
      } else {
        setFeatureBlog(blogs[0]);
      }
    }
  };

  const previews = blogs.map((blog, index) => (
    <BlogPreview blog={blog} key={index} />
  ));

  return (
    <div style={{ fontFamily: "Compass Sans" }} className="container mt-5">
      <div className="row">
        <div className="col-md-3">
          <h3>Welcome to my blog!</h3>
          <p>
            Here I'll be posting updates on both my househacking journey and
            advice for entering the world of real estate investment.
          </p>
        </div>
        <div className="col-md-9">
          {isLoading ? (
            <div>
              <LoadingSpinner />
            </div>
          ) : (
            <div className="row">
              <h3>Featured</h3>
              <BlogPreview blog={featureBlog} />
              <h3>More Posts</h3>
              {previews}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
