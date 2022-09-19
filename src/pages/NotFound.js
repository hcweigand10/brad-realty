import React from 'react'
import { Link } from "react-router-dom"


const NotFound = () => {

    return (
        <div
      className="container mt-4 mb-3"
      style={{ fontFamily: "Compass Sans" }}
    >
        <h2 className='text-center p-4'>This page doesn't exist!</h2>
        <Link className='d-block text-center' to="/"><h4>Return Home</h4></Link>
    </div>
    )
}

export default NotFound