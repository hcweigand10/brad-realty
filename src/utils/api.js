// const baseUrl = "http://localhost:3001"

const baseUrl = "https://brad-dosch-backend.herokuapp.com"

const api = {
    getTestimonials: async () => {
        const testimonials = await fetch(`${baseUrl}/api/testimonials`)
        return testimonials.json()
    },
    addTestimonial: async (testimonialObj) => {
        const res = await fetch(`${baseUrl}/api/testimonials`, {
            method: "POST",
            body: JSON.stringify(testimonialObj),
            headers: {
                "Content-Type": "application/json"
            }
        })
        return res.json()
    },
    getBlogs: async () => {
        const blogs = await fetch(`${baseUrl}/api/blogs`)
        return blogs.json()
    },
    getSingleBlog: async (id) => {
        const blog = await fetch(`${baseUrl}/api/blogs/${id}`)
        return blog.json()
    },
    addBlog: async (blogObj) => {
        const res = await fetch(`${baseUrl}/api/blogs`, {
            method: "POST",
            body: JSON.stringify(blogObj),
            headers: {
                "Content-Type": "application/json"
            }
        })
        return res.json()
    },
}

export default api