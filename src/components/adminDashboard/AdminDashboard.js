import React, { useState, useEffect } from "react";
import api from "../../utils/api";
import LoadingSpinner from "../loadingSpinner/LoadingSpinner";
import BlogRow from "./BlogRow";
import NewBlog from "./NewBlog";
import "./adminDashboard.css";
import moment from "moment";

const AdminDashboard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [featuredId, setFeaturedId] = useState(null);
  const [viewAll, setView] = useState(true);

  useEffect(() => {
    const getBlogs = async () => {
      const blogsData = await api.getBlogs();
      if (!featuredId) {
        blogsData.forEach((element) => {
          if (element.isFeatured) {
            setFeaturedId(element.id);
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
    if (
      window.confirm(
        `Are you sure you want to delete the blog with id: ${blogId}`
      )
    ) {
      await api.deleteBlog(blogId);
      window.location.reload();
    }
  };

  const setFeatureBlog = async (newBlogId) => {
    setIsLoading(true);
    if (featuredId) {
      await api.removeFeatureBlog(featuredId);
    }
    await api.addFeatureBlog(newBlogId);
    setFeaturedId(newBlogId);
  };

  const postNewBlog = async (blogObj, paragraphs) => {
    const newBlog = await api.addBlog(blogObj);
    paragraphs.forEach((paragraphObj) => {
      paragraphObj.blogId = newBlog.id;
      console.log(paragraphObj);
    });
    console.log(newBlog);
    await postNewParagraphs(paragraphs);
    window.location.reload();
  };

  const postNewParagraphs = async (paragraphArray) => {
    for await (const paragraphObj of paragraphArray) {
      const res = await api.addParagraph(paragraphObj);
      console.log(res);
    }
  };

  const checkZillowId = (reviewId, testimonialArr) => {
    let foundFlag = false
    testimonialArr.forEach((testimonial) => {
      if (testimonial.zillow_id === reviewId) {
        foundFlag = true
      }
    });
    return foundFlag;
  };

  const updateZillowReviews = async () => {
    setIsLoading(true);
    const currentTestimonials = await api.getTestimonials();
    const zillowInfo = await api.getZillowAgentInfo();
    const zillowReviews = zillowInfo.reviewsData.reviews;
    const newReviews = zillowReviews.filter((review) => {
      return !checkZillowId(parseInt(review.reviewId), currentTestimonials);
    });
    if (newReviews.length > 0) {
      for await (const review of newReviews) {
        const dateString = `${review.reviewMonth}/${review.reviewDay}/${review.reviewYear}`;
        const datePretty = moment(dateString, "MM/DD/YYYY").format(
          "MMMM Do, YYYY"
        );
        const reviewObj = {
          zillow_id: review.reviewId,
          name: review.reviewerDisplayName,
          date: datePretty,
          work_done: review.revieweeWorkDone,
          review_body: review.reviewBodyMain.concat(review.reviewBodyExtra),
          local_knowledge: review.subRatings[0].amount / 100,
          process_expertise: review.subRatings[1].amount / 100,
          responsiveness: review.subRatings[2].amount / 100,
          negotiation_skills: review.subRatings[3].amount / 100,
        };
        const res = await api.addTestimonial(reviewObj);
        console.log(res);
      }
    }
    setIsLoading(false);
    localStorage.setItem("last-updated", moment().format("MMMM Do, YYYY"));
  };

  const lastUpdatedDate = localStorage.getItem("last-updated");

  const blogCards = blogs.map((blog) => {
    return (
      <BlogRow
        blog={blog}
        deleteBlog={deleteBlog}
        setFeatureBlog={setFeatureBlog}
        key={blog.id}
      />
    );
  });

  return (
    <div className="" id="admin-dashboard">
      <ul className="nav nav-tabs mb-3" id="ex-with-icons" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className={viewAll ? "nav-link active p-2" : "nav-link p-2"}
            id="dashboard-tab-link-1"
            onClick={() => {
              setView(true);
            }}
          >
            <i className="fas fa-chart-pie fa-fw me-2"></i>All Posts
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={!viewAll ? "nav-link active p-2" : "nav-link p-2"}
            id="dashboard-tab-link-2"
            onClick={() => {
              setView(false);
            }}
          >
            <i className="fas fa-chart-line fa-fw me-2"></i>Create New Post
          </button>
        </li>
      </ul>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div>
          <div>
            {viewAll ? (
              <div>
                <div className="row mx-0">{blogCards}</div>
                <hr/>
                <div>
                  <button
                    className="btn btn-primary"
                    onClick={updateZillowReviews}
                  >
                    Fetch New Zillow Reviews
                  </button>
                  <p className="text-muted">
                    Last updated from this device: {lastUpdatedDate}
                  </p>
                </div>
              </div>
            ) : (
              <div>
                <NewBlog postNewBlog={postNewBlog} />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
