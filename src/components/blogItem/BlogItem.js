import React, {useState, useEffect} from 'react'
// import { useSearchParams } from "react-router-dom"

import Paragraph from './Paragraph'
import api from "../../utils/api"

const BlogItem = () => {
    const [blog, setBlog] = useState({})
    const [paragraphs, setParagraphs] = useState([])
    
    useEffect(() => {
        const blog_id = window.location.pathname.split("/")[2].split("%")[0]
        fetchBlog(blog_id)
    }, [])
    

    const fetchBlog = async (blog_id) => {
        const blogRaw = await api.getSingleBlog(blog_id)
        setBlog(blogRaw)
        setParagraphs(blogRaw.paragraphs.map((para, index) => {
            return <Paragraph para={para} index={index} key={index}/>
        }))
    }

    return (
        <div className='pt-2' style={{fontFamily: "Compass Sans"}}>
            <div className='container justify-content-center'>
                <div className='' style={{position: "relative", top: "50px", left: "0"}}>
                    <a className='go-back-link' href='/blog' style={{color: "black", textDecoration: "underline"}}><i className="fas fa-arrow-left me-1"></i>Go Back</a>
                </div>
                <div className='text-center col-md-8 col-lg-6 col-xl-5 mx-auto mt-5'>
                    <img href="https://www.compass.com/ucfe-assets/mc-assets/2/email/Compass_Logo-Animated.gif" alt=""/>
                    <h1>{blog.title}</h1>
                    <p>{blog.subtitle}</p>
                    {blog.link ? (
                        <a className='btn btn-dark' href={blog.link.href}>{blog.link.text}</a>
                    ) : (
                        null
                    )}
                </div>
                <hr className='w-50 mx-auto mt-4'/>
                <div className='body'>
                    {paragraphs}
                </div>
            </div>
        </div>
    )
}



export default BlogItem