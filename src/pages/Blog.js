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
    <div style={{ fontFamily: "Compass Sans" }} className="container mt-5 pb-4">
      <div className="row">
        <div className="col-md-3 pb-3">
          <h2>Welcome to my blog!</h2>
          <p>
            Here I'll be posting updates on both my househacking journey and
            advice for entering the world of real estate investment
          </p>
        </div>
        <div className="col-md-9 mx-auto">
          {isLoading ? (
            <div>
              <LoadingSpinner />
            </div>
          ) : (
            <div className="row">
              <h4>Featured</h4>
              <BlogPreview blog={featureBlog} />
              {previews.length>0 &&<h4>More Posts</h4>}
              {previews}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
