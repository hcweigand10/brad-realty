import React, { useState } from "react";
import { Link  } from 'react-router-dom';
// import "./navbar.css"


const Navbar = () => {
  
  const [activePage, setActivePage] = useState((window.location.pathname.split("/")[1]))
  const [collapse, setCollapse] = useState(false)

  const handlePageChange = () => {
    setActivePage(window.location.pathname.split("/")[1])
  }

  const handleCollapse = () => {
    setCollapse(!collapse)
  }

  return (
    // <!-- Navbar -->
    <nav className="navbar navbar-expand-md navbar-dark bg-dark p-0 custom-nav">
      {/* <!-- Container wrapper --> */} 
      <div className="container-fluid bg-dark" style={{fontFamily: "Compass Sans", zIndex: "5"}}>
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
          <Link className="navbar-brand mt-md-0 p-2" to="/" onClick={() => handlePageChange("/home")}>
            Dosch Realty
          </Link>
        {/* <!-- Collapsible wrapper --> */}
        <div className={(collapse) ? "navbar-collapse" : "collapse navbar-collapse"} id="navbarSupportedContent">
          {/* <!-- Left links --> */}
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <Link className={(activePage==="home") ? "nav-link custom-link-active" : "nav-link custom-link"} to="/" onClick={() => handlePageChange()}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className={(activePage==="blog") ? "nav-link custom-link-active" : "nav-link custom-link"} to="/blog" onClick={() => handlePageChange()}>Blog</Link>
            </li>
            {/* <li className="nav-item">
              <Link className={(activePage==="tools") ? "nav-link custom-link-active" : "nav-link custom-link"} to="/tools" onClick={() => handlePageChange()}>Tools</Link>
            </li> */}
            <li className="nav-item">
              <Link className={(activePage==="testimonials") ? "nav-link custom-link-active" : "nav-link custom-link"} to="/testimonials" onClick={() => handlePageChange()}>Testimonials</Link>
            </li>
            <li className="nav-item">
              <Link className={(activePage==="contact") ? "nav-link custom-link-active" : "nav-link custom-link"} to="/contact" onClick={() => handlePageChange("/contact")}>Contact</Link>
            </li>
          </ul>
          {/* <!-- Left links --> */}
        </div>
        {/* <!-- Collapsible wrapper --> */}

      </div>
    </nav>

  );
}

export default Navbar;