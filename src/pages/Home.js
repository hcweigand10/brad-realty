import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faBook, faSign } from '@fortawesome/free-solid-svg-icons'
import bradFace from "../images/brad-headshot.jpeg"


const Home = () => {
    
    return (
        <div className="home-co" style={{backgroundColor: "lightgray"}}>
            <div class="px-4 py-5 text-light" id="home-background">
                <div class="row flex-lg-row align-items-center g-5 py-5">
                    <div class="col-10 col-sm-8 col-lg-6">
                        <img src={bradFace} class="d-block mx-lg-auto img-fluid" id="brad-headshot" alt="Bootstrap Themes" width="400" height="300" loading="lazy"/>
                        
                    </div>
                    <div class="col-lg-6">
                        <h1 class="display-5 fw-bold lh-1 mb-3 home-title">Brad Dosch</h1>
                        <h4 class="lead home-title">House Hacking Real Estate Agent</h4>
                        <h6 class="lead home-title">House Hack Seattle | Compass </h6>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                        </div>
                    </div>
                </div>
            </div>
            <div class="container px-4 py-5" id="featured-3">
                <div class="row g-5 py-5 row-cols-1 row-cols-lg-3">
                    <div class="col">
                        <div className="card card-hover rounded-5 shadow-lg p-3">
                            <div className="mb-1 pb-0 align-items-center">
                                <div className="">
                                    <h2><FontAwesomeIcon icon={faSign}/> Service #1</h2>
                                </div>
                            </div>
                            <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                            <a href="/" class="btn btn-white btn-custom-effect1" id="service-1-call" >
                            Learn More  
                            </a>
                        </div>
                    </div>
                    <div class="col">
                        <div className="card card-hover rounded-5 shadow-lg p-3">
                            <div className="mb-1 pb-0 align-items-center">
                                <div className="">
                                    <h2><FontAwesomeIcon icon={faBook}/> Service #2</h2>
                                </div>
                            </div>
                            <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                            <a href="/" class="btn btn-white btn-custom-effect1" id="service-1-call" >
                            Learn More  
                            </a>
                        </div>
                    </div>
                    <div class="col">
                        <div className="card card-hover rounded-5 shadow-lg p-3">
                            <div className="mb-1 pb-0 align-items-center">
                                <div className="">
                                    <h2><FontAwesomeIcon icon={faCoffee}/> Service #3</h2>
                                </div>
                            </div>
                            <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                            <a href="/" class="btn btn-white btn-custom-effect1" id="service-1-call" >
                            Learn More  
                            </a>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="bg-white">
                <div className="w-100 shadow-sm">
                    <div className="card-title">
                        <h2><FontAwesomeIcon icon={faSign}/> Service #1</h2>
                    </div>
                    <div className="card-body">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home