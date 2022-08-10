import React, { useState, useEffect } from "react";
import api from "../../utils/api";
import LoadingSpinner from "../loadingSpinner/LoadingSpinner";
import BlogRow from "./BlogRow";
import NewBlog from "./NewBlog";
import "./adminDashboard.css";


const AdminDashboard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [featuredId, setFeaturedId] = useState(null)
  const [viewAll, setView] = useState(true);

  useEffect(() => {
    const getBlogs = async () => {
      const blogsData = await api.getBlogs();
      if (!featuredId) {
        blogsData.forEach(element => {
          if (element.isFeatured) {
            setFeaturedId(element.id)
          }
        });
      }
      return blogsData;
    };
    setIsLoading(true);
    let mounted = true;
    getBlogs().then((data) => {
      if (mounted) {
        renderBlogs(data);
      }
      setIsLoading(false);
    });
    return () => (mounted = false);
  }, [featuredId]);


  const renderBlogs = (blogsData) => {
    setBlogs(blogsData);
  };

  const deleteBlog = async (blogId) => {
    if (window.confirm(`Are you sure you want to delete the blog with id: ${blogId}`)) {
      await api.deleteBlog(blogId)
      window.location.reload()
    }
  }

  const setFeatureBlog = async (newBlogId) => {
    setIsLoading(true)
    if (featuredId) {
      await api.removeFeatureBlog(featuredId)
    }
    await api.addFeatureBlog(newBlogId)
    setFeaturedId(newBlogId)
  }

  const postNewBlog = async (blogObj, paragraphs) => {
    const newBlog = await api.addBlog(blogObj)
    paragraphs.forEach((paragraphObj) => {
      paragraphObj.blogId = newBlog.id
      console.log(paragraphObj)
    })
    console.log(newBlog)
    postNewParagraphs(paragraphs)
    window.location.reload()
  }

  const postNewParagraphs = async (paragraphArray) => {
    for await (const paragraphObj of paragraphArray) {
      const res = await api.addParagraph(paragraphObj)
      console.log(res)
    }
  }


  const blogCards = blogs.map((blog) => {
    return <BlogRow blog={blog} deleteBlog={deleteBlog} setFeatureBlog={setFeatureBlog} key={blog.id}/>;
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
        <div>{viewAll ? <div className="row mx-0">{blogCards}</div> : 
          <div>
            <NewBlog postNewBlog={postNewBlog}/>
          </div>}
        </div>
      )}
    </div>
  );
};



export default AdminDashboard;
