import React, { useEffect, useState } from "react";
import TestimonialItem from "../components/testimonialItem/TestimonialItem";
import LoadingSpinner from "../components/loadingSpinner/LoadingSpinner";
import api from "../utils/api";

const Testimonials = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getTestimonials();
  }, []);

  const getTestimonials = async () => {
    const testimonialsData = await api.getTestimonials();
    setTestimonials(testimonialsData)
    setIsLoading(false);
  };

  const testimonialItems = testimonials.map((testimonial,index) => {
    return (
        <TestimonialItem testimonialObj={testimonial} key={index}/>
    );
  });

  return (
    <div className="container mt-3 bg-light" >
      <h4 style={{fontFamily: "Compass Sans"}}>Zillow Ratings & Reviews ({testimonials.length})</h4>
      <h6 className="text-muted" style={{fontFamily: "Compass Sans"}}>Sorting by most recent</h6>
      <div className="my-2" style={{fontFamily: "Compass Sans"}}>
        <a href="https://www.zillow.com/reviews/write/?s=X1-ZU15wna48c227m1_6msnz" className="">Worked with me lately? Tell me how it went!</a>
        
      </div>
      <div className="my-4" style={{ minHeight: "260px" }}>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <div className="py-4 shadow-sm mx-auto">
            {testimonialItems}
          </div>
        )}
      </div>

    </div>
  );
};

export default Testimonials;
