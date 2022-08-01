import React from 'react'
import bradPic from "../../images/brad-headshot.jpeg"

const BlogPreview = ({feature, blog}) => {

    return (
        <div className='card'>
            {feature ? (
                <div className='row'>
                    <div className='col-4'>
                        <img src={blog.thumbnail} alt="blog thumbnail" style={{maxWidth: "100%"}}/>
                    </div>
                    <div className='col-8 p-3'>
                    <h6 className='text-muted'>{blog.date}</h6>
                        <h3>{blog.title}</h3>
                        <p>{blog.subtitle}</p>
                        <div className='row'>
                            <div className='' style={{width: "60px"}}>
                                <img src={bradPic} alt="brad pic" style={{width: "50px", borderRadius: "50%"}}/>
                            </div>
                            <div className='d-flex'>
                                <p className=''>Brad Dosch</p>
                            </div>
                        </div>
                    </div>

                </div>
            ) : (
                <div>
                    <img src={blog.thumbnail} alt="blog thumbnail" style={{maxWidth: "100%"}}/>
                    <h6 className='text-muted'>{blog.date}</h6>
                        <h3>{blog.title}</h3>
                        <p>{blog.subtitle}</p>
                        <div className='row d-flex'>
                            <img src={bradPic} alt="brad pic" style={{width: "50px", borderRadius: "50%"}}/>
                            <p className='' style={{maxWidth: "300px"}}>Brad Doosch</p>
                        </div>
                </div>
            )}
        </div>
    )
}

export default BlogPreview