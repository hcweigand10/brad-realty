import React from 'react'
import Paragraph from './Paragraph'

const BlogItem = ({title, subtitle, link, body}) => {

    const paragraphs = body.map((para, index) => {
        return <Paragraph para={para} index={index}/>
    })

    return (
        <div className='container mt-4'>
            <div className='header text-center justify-content-center text-center col-md-7 col-lg-8 col-xl-6'>
                <img href="https://www.compass.com/ucfe-assets/mc-assets/2/email/Compass_Logo-Animated.gif" alt=""/>
                <h1>{title}</h1>
                <p>{subtitle}</p>
                {link ? (
                    <a className='btn btn-dark' href={link.href}>{link.text}</a>
                ) : (
                    null
                )}
            </div>
            <hr/>
            <div className='body'>
                {paragraphs}
            </div>
        </div>
    )
}



export default BlogItem