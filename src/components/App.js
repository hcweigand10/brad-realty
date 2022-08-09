import React, {useState, useEffect} from "react";
import {Routes, Route} from "react-router-dom"
import Navbar from "./navbar/Navbar.js"
import Footer from "./footer/Footer.js"
import Home from "../pages/Home"
import Contact from "../pages/Contact"
import Blog from "../pages/Blog"
import Tools from "../pages/Tools"
import Testimonials from "../pages/Testimonials"
import Admin from "../pages/Admin"
import BlogItem from "./blogItem/BlogItem.js";
import api from "../utils/api.js";
    


const App = () => {
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

    const [loginInfo, setLoginInfo] = useState({
        email:"",
        password:""
    })
    const [token, setToken] = useState("");
    const [loggedIn, setLoggedIn] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
          api.getTokenData(token)
          .then(data => {
              if (data.err) {
                console.log(data.err)
                localStorage.removeItem("token")
              } else {
                setToken(token);
                setLoggedIn(true)
            }
        })
        .catch(err => {
            console.log("bad token")
            console.log(err);
        });
    }
}, );

const logMeIn = async (e) => {
    console.log("LOGGING IN!", loginInfo)
    e.preventDefault()
    try {
        const data = await api.login(loginInfo.email, loginInfo.password)
        console.log(data)
        if (data.token) {
            setLoggedIn(true)
            setToken(data.token);
            localStorage.setItem("token", data.token);
            window.location.replace("/")
          } else {
            alert("Invalid Login Credentials")
            setLoginInfo({
              username: "",
              password: ""
            })
          }
    
        } catch (err) {
          console.log(err);
        };
      };

      const handleInputChange = (e) => {
        setLoginInfo({
            ...loginInfo,
            [e.target.name]:e.target.value
          })
          console.log(loginInfo)
      }


    return (
        <>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/blog/:id" element={<BlogItem blog={sampleBlog}/>}/>
            <Route path="/tools" element={<Tools/>}/>
            <Route path="/testimonials" element={<Testimonials/>}/>
            <Route path="/contact" element={<Contact/>}/>            
            <Route path="/admin" element={<Admin loginInfo={loginInfo} handleInputChange={handleInputChange} logMeIn={logMeIn} loggedIn={loggedIn}/>}/>
        </Routes>
        <Footer/>  
        </>
    )
}

export default App