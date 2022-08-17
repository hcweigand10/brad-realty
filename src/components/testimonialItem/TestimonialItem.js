import React, {useState} from "react";
import ReviewStars from "./ReviewStars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar, faPlus} from "@fortawesome/free-solid-svg-icons";


const TestimonialItem = ({ testimonialObj }) => {
  const [showMore, setShowMore] = useState(false)
  // const [title, setTitle] = useState("")

  const overallRating = (testimonialObj.local_knowledge + testimonialObj.process_expertise + testimonialObj.responsiveness + testimonialObj.negotiation_skills)/4;

  
  const reviewTitles = [
    "Will never recommend",
    "Might recommend",
    "Likely to recommend",
    "Highly likely to recommend"
  ]
  
  const title = overallRating === 5 ? reviewTitles[3] : reviewTitles[Math.floor(overallRating)-1]
  

 

  
  return (
    <div class="card mx-auto col-11 col-md-10 col-lg-8 mb-4" >
      <div class="card-body p-3">
        <div className="row w-100 mb-3 mx-auto">
          <h3 className="col-8 my-auto p-0">{title}</h3>
          <h5 className="col-4 my-auto p-0" style={{textAlign: "end"}}>5.0 <FontAwesomeIcon icon={faStar} style={{color: "blue"}}/></h5>
        </div>
        <div className="mb-3" style={{lineHeight: "120%"}}>
          <p className="text-muted mb-1">{testimonialObj.date} - {testimonialObj.name}</p>
          <p className="text-muted mb-1">{testimonialObj.work_done}</p>
        </div>
        <div>
          <ul className="ps-0" style={{listStyleType: "none"}}>
            <li className="mb-1"><ReviewStars rating={testimonialObj.local_knowledge}/><span className="ms-3">Local Knowledge</span></li>
            <li className="mb-1"><ReviewStars rating={testimonialObj.process_expertise}/><span className="ms-3">Process Expertise</span></li>
            <li className="mb-1"><ReviewStars rating={testimonialObj.responsiveness}/><span className="ms-3">Responsiveness</span></li>
            <li className="mb-1"><ReviewStars rating={testimonialObj.negotiation_skills}/><span className="ms-3">Negotiation Skills</span></li>
          </ul>
        </div>
        <div>
          <p className="mb-1">
            {showMore ? testimonialObj.review_body : `${testimonialObj.review_body.substring(0, 250)}...`}
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
