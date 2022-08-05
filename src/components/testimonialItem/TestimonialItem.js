import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserAstronaut,
  faUserSecret,
  faUserNinja,
  faUserDoctor,
  faUserGraduate,
  faUserShield,
  faUserNurse
} from "@fortawesome/free-solid-svg-icons";

const TestimonialItem = ({ testimonialObj }) => {
  const colors = ["#F8B195", "#F67280", "#C06C84", "#6C5B7B", "#355C7D"];
  
  const userIcons = [faUserAstronaut,
    faUserSecret,
    faUserNinja,
    faUserNurse,
    faUserDoctor,
    faUserShield,
    faUserDoctor,
    faUserGraduate,
  ]

  
  return (
    <div class="card mx-auto col-9 col-md-7 col-lg-6" >
      <div class="card-body">
        <h4 class="card-title">
          <img src="https://img.icons8.com/ultraviolet/40/000000/quote-left.png" alt="quote"/>
        </h4>

        <div class="template-demo">
          <p>
            {testimonialObj.review}
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
              <h4 class="cust-name">{testimonialObj.name}</h4>
              <p class="cust-profession">{testimonialObj.city}, {testimonialObj.state}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialItem;
