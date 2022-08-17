import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faUserAstronaut,
  faStar,
  faPen
} from "@fortawesome/free-solid-svg-icons";
import bradFace from "../images/brad-headshot.jpeg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-co" style={{ backgroundColor: "white", fontFamily: "Compass Sans" }}>
      <div class="px-4 py-5 text-light" id="home-background" >
        <div class="row flex-lg-row align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <img
              src={bradFace}
              class="d-block mx-lg-auto img-fluid"
              id="brad-headshot"
              alt="Bootstrap Themes"
              width="400"
              height="300"
              loading="lazy"
            />
          </div>
          <div class="col-lg-6">
            <h1 class="display-5 fw-bold lh-1 mb-3 home-title">Brad Dosch</h1>
            <h4 class="lead home-title">House Hacking Real Estate Agent</h4>
            <h6 class="lead home-title">House Hack Seattle | Compass </h6>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start"></div>
          </div>
        </div>
      </div>
      {/* <div class="container px-4 py-5" id="featured-3">
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
            </div> */}
      <div
        className="justify-content-center py-5"
        style={{ backgroundColor: "lightgray" }}
      >
        <div className="mb-1 pb-0 align-items-center container">
          <h2>
            <FontAwesomeIcon icon={faUserAstronaut} /> About Me
          </h2>
          <div className="my-4">
            <p>
              Hi, I’m Bradley Dosch and I am an agent on the house hack Seattle
              team. I have house hacked three times and my mission is to use
              that experience to help others do the same. House hacking is the
              most accessible way to get started in real estate investing and
              supercharge your path to financial independence (FI). FI is
              defined as when your passive income exceeds your expenses, making
              work optional. This allows you to get money out of the way and
              follow whatever path in life you so choose.
            </p>
            <p>
              House hack Seattle focuses working with people who want to house
              hack, land hack or invest in short term rentals. I’d love to meet
              with you in person or over the phone to learn more about your
              current situation, since everyone’s is unique.
            </p>
          </div>
        </div>
      </div>
      <div className="justify-content-center py-5">
        <div className="mb-1 pb-0 align-items-center container">
          <h2>
            <FontAwesomeIcon icon={faPen} /> Blog
          </h2>
          <div className="my-4">
            <p>
              Periodically, I'll upload blog posts that go over the househacking experience and what you could expect. Click below to read!
            </p>
          </div>
          <Link
            to="/"
            class="btn btn-white btn-custom-effect1"
            id="service-1-call"
            style={{ width: "150px" }}
          >
            Blog
          </Link>
        </div>
      </div>
      <div
        className="justify-content-center py-5"
        style={{ backgroundColor: "lightgray" }}
      >
        <div className="mb-1 pb-0 align-items-center container">
          <h2>
            <FontAwesomeIcon icon={faStar} /> Reviews
          </h2>
          <div className="my-4">
            <p>
              Interested to see how other people have experienced working with me? Checkout my Zillow reviews below.
            </p>
          </div>
          <Link
            to="/testimonials"
            class="btn btn-white btn-custom-effect1"
            id="service-1-call"
            style={{ width: "150px" }}
          >
            Reviews
          </Link>
        </div>
      </div>
      <div className="justify-content-center py-5">
        <div className="mb-1 pb-0 align-items-center container">
          <h2>
            <FontAwesomeIcon icon={faCoffee} /> So Let's Chat!
          </h2>
          <div className="my-4">
            <p>
              Click below to schedule a time to meet. I'm open to anything from
              a simple phone call to a cup of coffee.
            </p>
          </div>
          <a
            href="https://calendly.com/bradley-dosch/chat-with-bradley"
            target="_blank"
            rel="noreferrer"
            class="btn btn-white btn-custom-effect1"
            id="service-1-call"
            style={{ width: "150px" }}
          >
            Calendly
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
