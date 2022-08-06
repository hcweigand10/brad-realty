import React, { useState, useEffect } from "react";
import api from "../../utils/api";
import LoadingSpinner from "../loadingSpinner/LoadingSpinner";
import BlogRow from "./BlogRow";
import "./adminDashboard.css";

const AdminDashboard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [featuredId, setFeaturedId] = useState(null)
  const [viewAll, setView] = useState(true);

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

  const renderBlogs = (blogsData) => {
    console.log(blogsData);
    setBlogs(blogsData);
  };


  const blogCards = blogs.map((blog) => {
    return <BlogRow blog={blog} featuredId={featuredId} />;
  });

  return (
    <div className="" id="admin-dashboard">
      <ul class="nav nav-tabs mb-3" id="ex-with-icons" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class={viewAll ? "nav-link active p-2" : "nav-link p-2"}
            id="dashboard-tab-link-1"
            onClick={() => {
              setView(true);
            }}
          >
            <i class="fas fa-chart-pie fa-fw me-2"></i>All Posts
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class={!viewAll ? "nav-link active p-2" : "nav-link p-2"}
            id="dashboard-tab-link-2"
            onClick={() => {
              setView(false);
            }}
          >
            <i class="fas fa-chart-line fa-fw me-2"></i>Create New Post
          </button>
        </li>
      </ul>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div>{viewAll ? <div className="row mx-0">{blogCards}</div> : <div></div>}</div>
      )}
    </div>
  );
};



export default AdminDashboard;
