import React from 'react'

const BlogPreview = ({ blog }) => {

    return (
        <a className={blog.isFeatured ? "col-12 my-3" : "col-md-4 my-3"} style={{textDecoration: "none", fontFamily: "Compass Sans"}} href={`/blog/${blog.id}}`}>
            {blog.isFeatured ? (
                <div className='card blog-card'>
                    <div className='row'>
                        <div className='col-lg-5'>
                            <img src={blog.thumbnail} alt="blog thumbnail" style={{maxHeight: "250px", minWidth: "95%", objectFit: "cover"}} className="mx-auto"/>
                        </div>
                        <div className='col-lg-7 my-auto'>
                            <div className='p-3'>
                                <h5 className='text-muted'>{blog.date}</h5>
                                <h2 style={{fontWeight: "bold", color: "black"}}>{blog.title}</h2>
                                <p style={{lineHeight: "110%", color: "gray"}}>{blog.subtitle}</p>

                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className='card blog-card' style={{height: "100%"}}>
                    <img src={blog.thumbnail} alt="blog thumbnail" style={{maxWidth: "100%", height: "55%"}}/>
                    <div className='p-3'>
                        <h6 className='text-muted'>{blog.date}</h6>
                        <h4 style={{fontWeight: "bold", color: "black"}}>{blog.title}</h4>
                        <p style={{lineHeight: "110%", color: "gray"}}>{blog.subtitle}</p>
                    </div>
                </div>
            )}
        </a>
    )
}

export default BlogPreview