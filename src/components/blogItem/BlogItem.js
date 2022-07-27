import React from 'react'
import Paragraph from './Paragraph'

const BlogItem = ({title, subtitle, link, body}) => {

    const paragraphs = body.map((para, index) => {
        return <Paragraph para={para} index={index}/>
    })

    return (
        <div className='container mt-4 justify-content-center'>
            <div className='text-center col-md-8 col-lg-6 col-xl-5 mx-auto'>
                <img href="https://www.compass.com/ucfe-assets/mc-assets/2/email/Compass_Logo-Animated.gif" alt=""/>
                <h1>{title}</h1>
                <p>{subtitle}</p>
                {link ? (
                    <a className='btn btn-dark' href={link.href}>{link.text}</a>
                ) : (
                    null
                )}
            </div>
            <hr className='w-50 mx-auto mt-4'/>
            <div className='body'>
                {paragraphs}
            </div>
        </div>
    )
}



export default BlogItem