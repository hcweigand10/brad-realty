const baseUrl = "http://localhost:3001"

// const baseUrl = "https://brad-dosch-backend.herokuapp.com"

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
    deleteBlog: async (blogId) => {
        const res = await fetch(`${baseUrl}/api/blogs/${blogId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        return res.json()
    },
    addFeatureBlog: async (blogId) => {
        const res = await fetch(`${baseUrl}/api/blogs/${blogId}`, {
            method: "PUT",
            body: JSON.stringify({
                isFeatured: true
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        return res.json()
    },
    removeFeatureBlog: async (blogId) => {
        const res = await fetch(`${baseUrl}/api/blogs/${blogId}`, {
            method: "PUT",
            body: JSON.stringify({
                isFeatured: false
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        return res.json()
    },
    addParagraph: async (paragraphObj) => {
        const res = await fetch(`${baseUrl}/api/paragraphs`, {
            method: "POST",
            body: JSON.stringify(paragraphObj),
            headers: {
                "Content-Type": "application/json"
            }
        })
        return res.json()
    },
    login: async (email, password) => {
        const res = await fetch(`${baseUrl}/api/users/login`, {
            method: "POST",
            body: JSON.stringify({
                email,
                password
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        return res.json()
    },
    getTokenData: (token) => {
        return fetch(`${baseUrl}/api/users/gettokendata`, {
          method: "POST",
          headers: {
            authorization: `Bearer ${token}`
          }
        })
          .then(res => res.json())
      },

}

export default api