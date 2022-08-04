import React from "react"
import BlogItem from "../components/blogItem/BlogItem"
import BlogPreview from "../components/blogItem/BlogPreview"

const Blog = () => {

    const sampleBlog = {
        title:"Why House Hacking is the Superior Investing Strategy",
        subtitle:"A few weeks ago I posted a reel on this topic (see link below). This article goes into more detail on that video and how it can accelerate your path to FI", 
        link: {
            href:"https://www.instagram.com/reel/Cdq5KBZDdtx/?utm_source=ig_web_copy_link", 
            text:"Said Reel"
        },
        thumbnail: "https://assets.website-files.com/5746d4c4a3e009bb4d9ac858/59f7acb9eac5ea0001c28231_michael-discenza-331452%20(1).jpg",
        date: "July 31st, 2022",
        body: [
            {
                title: "paraheading-1",
                imgSrc: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F2.bp.blogspot.com%2F-_oHFm1NAF6o%2FT0kBb-N6e0I%2FAAAAAAAACf8%2FyQ0SlyJXgfQ%2Fs1600%2Ftree-picture-.jpg&f=1&nofb=1",
                text: "Cumque qui cumque exercitationem veniam vel temporibus. Enim itaque ex nulla velit eligendi. Dolor odit est laudantium harum eum. Corrupti odit quaerat id sed pariatur amet non modi. Tempora est voluptatum quisquam pariatur asperiores dolorem. Et molestias eum sequi neque consequatur."
            },
            {
                title: "paraheading-2",
                imgSrc: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.publicdomainpictures.net%2Fpictures%2F60000%2Fvelka%2Ftree-13821111661nN.jpg&f=1&nofb=1",
                text: "Cumque qui cumque exercitationem veniam vel temporibus. Enim itaque ex nulla velit eligendi. Dolor odit est laudantium harum eum. Corrupti odit quaerat id sed pariatur amet non modi. Tempora est voluptatum quisquam pariatur asperiores dolorem. Et molestias eum sequi neque consequatur."
            },
            {
                title: "paraheading-3",
                imgSrc: null,
                text: "Cumque qui cumque exercitationem veniam vel temporibus. Enim itaque ex nulla velit eligendi. Dolor odit est laudantium harum eum. Corrupti odit quaerat id sed pariatur amet non modi. Tempora est voluptatum quisquam pariatur asperiores dolorem. Et molestias eum sequi neque consequatur."
            },
        ]
    }

    const featurePreview = <BlogPreview feature={true} blog={sampleBlog}/>
    const preview1 = <BlogPreview feature={false} blog={sampleBlog}/>
    const preview2 = <BlogPreview feature={false} blog={sampleBlog}/>
    const preview3 = <BlogPreview feature={false} blog={sampleBlog}/>
    const preview4 = <BlogPreview feature={false} blog={sampleBlog}/>

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-3">
                    Welcome to the blog!
                </div>
                <div className="col-md-9 row">
                    <h3>Featured</h3>
                    {featurePreview}
                    <h3>More Posts</h3>
                    {preview1}
                    {preview2}
                    {preview3}
                    {preview4}
                </div>
            </div>
        </div>
    )
}

export default Blog