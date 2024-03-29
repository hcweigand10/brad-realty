import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./navbar/Navbar.js";
import Footer from "./footer/Footer.js";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Blog from "../pages/Blog";
// import Tools from "../pages/Tools";
import Reviews from "../pages/Reviews";
import Admin from "../pages/Admin";
import NotFound from "../pages/NotFound.js";
import BlogItem from "./blogItem/BlogItem.js";
import api from "../utils/api.js";

const App = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const [token, setToken] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);


  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      api
        .getTokenData(token)
        .then((data) => {
          if (data.err) {
            console.log(data.err);
            localStorage.removeItem("token");
          } else {
            setToken(token);
            setLoggedIn(true);
          }
        })
        .catch((err) => {
          console.log("bad token");
          console.log(err);
        });
    } else {
      checkBlogs()
    }
  }, []);

  const checkBlogs = async () => {
    const blogs = await api.getBlogs()
    console.log(blogs.length)
}

  const logMeIn = async (e) => {
    console.log(token)
    console.log("LOGGING IN!", loginInfo);
    e.preventDefault();
    try {
      const data = await api.login(loginInfo.email, loginInfo.password);
      console.log(data);
      if (data.token) {
        setLoggedIn(true);
        setToken(data.token);
        localStorage.setItem("token", data.token);
      } else {
        alert("Invalid Login Credentials");
        setLoginInfo({
          username: "",
          password: "",
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleInputChange = (e) => {
    setLoginInfo({
      ...loginInfo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogItem />} />
        {/* <Route path="/tools" element={<Tools />} /> */}
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/admin"
          element={
            <Admin
            loginInfo={loginInfo}
            handleInputChange={handleInputChange}
            logMeIn={logMeIn}
            loggedIn={loggedIn}
            />
          }
        />
          <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
