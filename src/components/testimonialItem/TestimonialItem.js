import React, {useState} from "react";
import ReviewStars from "./ReviewStars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar, faPlus} from "@fortawesome/free-solid-svg-icons";


const TestimonialItem = ({ testimonialObj }) => {
  const [showMore, setShowMore] = useState(false)
  // const [title, setTitle] = useState("")

  const overallRating = (testimonialObj.subRatings.reduce((prev,current)=> prev+parseInt(current.amount), 0))/400;
  const date = `${testimonialObj.reviewMonth}/${testimonialObj.reviewDay}/${testimonialObj.reviewYear}`
  
  const reviewTitles = [
    "Will never recommend",
    "Might recommend",
    "Likely to recommend",
    "Highly likely to recommend"
  ]
  
  const title = overallRating === 5 ? reviewTitles[3] : reviewTitles[Math.floor(overallRating)-1]
  
  const reviewBody = testimonialObj.reviewBodyMain.concat(testimonialObj.reviewBodyExtra)

  // var getReviewTitle = () => {
    
  //   if (overallRating >= 4) {
  //     setTitle(reviewTitles[3])
  //   } else if (overallRating >= 3 && overallRating <4) {
  //     setTitle(reviewTitles[2])
  //   } else if (overallRating >= 2 && overallRating <3) {
  //     setTitle(reviewTitles[1])
  //   } else {
  //     setTitle(reviewTitles[0])
  //   }
  // }

  
  return (
    <div class="card mx-auto col-9 col-md-7 col-lg-6" >
      <div class="card-body">
        <div className="row mb-3">
          <h2 className="col-8 my-auto">{title}</h2>
          <span className="col-1 my-auto">|</span>
          <h5 className="col-3 my-auto" style={{textAlign: "end"}}>5.0 <FontAwesomeIcon icon={faStar} style={{color: "blue"}}/></h5>
        </div>
        <div className="mb-3" style={{lineHeight: "120%"}}>
          <p className="text-muted mb-1">{date} - {testimonialObj.reviewerDisplayName}</p>
          <p className="text-muted mb-1">{testimonialObj.revieweeWorkDone}</p>
        </div>
        <div>
          <ul className="ps-0" style={{listStyleType: "none"}}>
            <li className="mb-1"><ReviewStars rating={parseInt(testimonialObj.subRatings[0].amount)/100}/><span className="ms-3">Local Knowledge</span></li>
            <li className="mb-1"><ReviewStars rating={parseInt(testimonialObj.subRatings[0].amount)/100}/><span className="ms-3">Process Expertise</span></li>
            <li className="mb-1"><ReviewStars rating={parseInt(testimonialObj.subRatings[0].amount)/100}/><span className="ms-3">Responsiveness</span></li>
            <li className="mb-1"><ReviewStars rating={parseInt(testimonialObj.subRatings[0].amount)/100}/><span className="ms-3">Negotiation Skills</span></li>
          </ul>
        </div>
        <div>
          <p className="mb-1">
            {showMore ? reviewBody : `${reviewBody.substring(0, 250)}...`}
          </p>
          <button className="btn btn-primary" onClick={() => setShowMore(!showMore)}><FontAwesomeIcon icon={faPlus} className="me-1"/>Show more</button>
        </div>
        {/* <h4 class="card-title">
          <img src="https://img.icons8.com/ultraviolet/40/000000/quote-left.png" alt="quote"/>
        </h4>

        <div class="template-demo">
          <p>
            {testimonialObj.reviewBodyMain.concat(testimonialObj.reviewBodyExtra)}
          </p>
        </div>

        <hr />

        <div class="row">
          <div class="col-sm-2 my-auto">
            <h1 className="text-center">
              <FontAwesomeIcon icon={userIcons[Math.floor(Math.random()*userIcons.length)]} style={{color: colors[Math.floor(Math.random() * 5)]}}/>
            </h1>
          </div>

          <div class="col-sm-10 my-auto">
            <div class="profile my-auto">
              <h4 class="cust-name">{testimonialObj.reviewerDisplayName}</h4>
              <p class="cust-profession">{date}</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default TestimonialItem;
