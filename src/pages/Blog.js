import React, { useState, useEffect } from "react";
import BlogPreview from "../components/blogItem/BlogPreview";
import LoadingSpinner from "../components/loadingSpinner/LoadingSpinner";
import api from "../utils/api";

const Blog = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [featureBlog, setFeatureBlog] = useState({
    id: 1,
    title: "Why househacking",
    subtitle: "subtitle",
    date: "August 1st, 2022",
    thumbnail: "https://assets.website-files.com/5746d4c4a3e009bb4d9ac858/59f7acb9eac5ea0001c28231_michael-discenza-331452%20(1).jpg"
});
  const [blogs, setBlogs] = useState([{
    id: 1,
    title: "Why househacking",
    subtitle: "subtitle",
    date: "August 1st, 2022",
    thumbnail: "https://assets.website-files.com/5746d4c4a3e009bb4d9ac858/59f7acb9eac5ea0001c28231_michael-discenza-331452%20(1).jpg"
}]);

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
    const feature = blogs.shift();
    setFeatureBlog(feature);
    setBlogs(blogs);
  };

  const featurePreview = <BlogPreview feature={true} blog={featureBlog} />;
  const previews = blogs.map((blog) => (
    <BlogPreview feature={false} blog={blog} />
  ));

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-3">Welcome to the blog!</div>
        <div className="col-md-9">
          {isLoading ? (
            <div>
              <LoadingSpinner/>
            </div>
          ) : (
            <div className="row">
              <h3>Featured</h3>
              {featurePreview}
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
