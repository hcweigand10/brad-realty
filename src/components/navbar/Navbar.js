import React, { useState } from "react";
import { Link  } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import "./Navbar.css"


const Navbar = () => {
  
  const [activePage, setActivePage] = useState("home")
  const [collapse, setCollapse] = useState(false)
  
  // const styles = {

  //   brand: {
  //     color: (activePage === "home") ? "white" : "lightGray",

  //   },
  //   blogLink: {
  //     color: (activePage === "blog") ? "white" : "lightGray",
  //   },
  //   contactLink: {
  //     color: (activePage === "contact") ? "white" : "lightGray",
  //   },
  //   icon: {
  //     color: "lightGray",
  //   }
  // }

  const handlePageChange = (page) => {
    setActivePage(page)
  }

  const handleCollapse = () => {
    setCollapse(!collapse)
  }

  return (
    // <!-- Navbar -->
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-0 custom-nav">
      {/* <!-- Container wrapper --> */} 
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleCollapse}
        >
          <i className="fas fa-bars"></i>
        </button>
          {/* <!-- Navbar brand --> */}
          <Link className="navbar-brand mt-lg-0 p-2" to="/" onClick={() => handlePageChange("home")}>
            Dosch Realty
          </Link>
        {/* <!-- Collapsible wrapper --> */}
        <div className={(collapse) ? "navbar-collapse" : "collapse navbar-collapse"} id="navbarSupportedContent">
          {/* <!-- Left links --> */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={(activePage==="home") ? "nav-link custom-link-active" : "nav-link custom-link"} to="/" onClick={() => handlePageChange("home")}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className={(activePage==="blog") ? "nav-link custom-link-active" : "nav-link custom-link"} to="/blog" onClick={() => handlePageChange("blog")}>Blog</Link>
            </li>
            <li className="nav-item">
              <Link className={(activePage==="contact") ? "nav-link custom-link-active" : "nav-link custom-link"} to="/contact" onClick={() => handlePageChange("contact")}>Contact</Link>
            </li>
          </ul>
          {/* <!-- Left links --> */}
        </div>
        {/* <!-- Collapsible wrapper --> */}

        {/* <!-- Right elements --> */}
        <div className="d-flex align-items-center">

          {/* Socials */}
          <a className="text-reset me-3" href="https://instagram.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon className="custom-icon insta" icon={faInstagram}/>
          </a>
          <a className="text-reset me-3" href="https://twitter.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon className="custom-icon twitter" icon={faTwitter}/>
          </a>


          
        </div>

      </div>
    </nav>

  );
}

export default Navbar;