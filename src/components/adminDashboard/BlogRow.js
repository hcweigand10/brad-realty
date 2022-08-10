import React from 'react'

const BlogRow = ({ blog, deleteBlog, setFeatureBlog }) => {
  
    return (
      <div
        className="row my-3 col-12 col-md-6 px-0 mx-0"
        style={{
          border: "1px solid lightgray",
          borderRadius: "1%",
          height: "140px"
        }}
      >
        <div className="col-3 px-0">
          <img
            src={blog.thumbnail}
            style={{ objectFit: "cover", width: "100%", height: "139px" }}
            alt="thumbnail"
          />
        </div>
        <div className="col-9 my-auto" style={{ lineHeight: "120%" }}>
          <p className="text-muted mb-0">{blog.date}</p>
          <h6 className="mb-1" style={{ fontWeight: "bold", color: "black" }}>{blog.title}</h6>
          <div className="col-12 mt-0">
            <p className="my-1">ID: {blog.id}</p>
          </div>
          <div className="justify-content-end">
            {blog.isFeatured ? <button className="btn btn-light text-muted me-2">Featured</button> : <button className="btn btn-primary me-2" onClick={() => setFeatureBlog(blog.id)}>Feature</button>}
            <button className="btn btn-danger" onClick={() => deleteBlog(blog.id)}>Delete</button>
          </div>
        </div>
      </div>
    );
  };

export default BlogRow