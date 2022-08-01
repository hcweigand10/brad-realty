import React from 'react'
import bradPic from "../../images/brad-headshot.jpeg"

const BlogPreview = ({feature, blog}) => {

    return (
        <a className={feature ? "col-12 my-3 blog-card" : "col-4 my-3 blog-card"} style={{fontDecoration: "none"}} href={`/blog/s4}`}>
            {feature ? (
                <div className='card'>
                    <div className='row'>
                        <div className='col-6'>
                            <img src={blog.thumbnail} alt="blog thumbnail" style={{maxWidth: "100%"}}/>
                        </div>
                        <div className='col-6 p-2 my-auto'>
                        <h5 className='text-muted'>{blog.date}</h5>
                            <h2 style={{fontWeight: "bold"}}>{blog.title}</h2>
                            <p style={{lineHeight: "110%", color: "gray"}}>{blog.subtitle}</p>
                            {/* <div className='row'>
                                <img src={bradPic} alt="brad pic" style={{width: "60px", borderRadius: "50%"}}/>
                                <p className='my-auto p-0' style={{maxWidth:"200px", fontWeight: "bold"}}>Brad Dosch</p>
                            </div> */}
                        </div>
                    </div>
                </div>
            ) : (
                <div className='card'>
                    <img src={blog.thumbnail} alt="blog thumbnail" style={{maxWidth: "100%"}}/>
                    <div className='p-3'>
                        <h6 className='text-muted'>{blog.date}</h6>
                        <h4 style={{fontWeight: "bold"}}>{blog.title}</h4>
                        <p style={{lineHeight: "110%", color: "gray"}}>{blog.subtitle}</p>
                    </div>
                        {/* <div className='row d-flex'>
                            <img src={bradPic} alt="brad pic" style={{width: "50px", borderRadius: "50%"}}/>
                            <p className='' style={{maxWidth: "300px"}}>Brad Dosch</p>
                        </div> */}
                </div>
            )}
        </a>
    )
}

export default BlogPreview