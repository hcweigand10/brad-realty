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
    setTestimonials(testimonialsData);
    setIsLoading(false);
  };

  const testimonialItems = testimonials.map((testimonial, index) => {
    return <TestimonialItem testimonialObj={testimonial} key={index} />;
  });

  return (
    <div className="container mt-3 bg-light">
      <div className="row">
        <div className="col-md-4 mt-5">
          <h2 style={{ fontFamily: "Compass Sans" }}>
            Zillow Ratings & Reviews ({testimonials.length})
          </h2>
          <div className="my-2" style={{ fontFamily: "Compass Sans" }}>
            <a
              href="https://www.zillow.com/reviews/write/?s=X1-ZU15wna48c227m1_6msnz"
              className=""
              target="_blank"
              rel="noreferrer"
            >
              Worked with me lately? Tell me how it went!
            </a>
          </div>
        </div>

          <div className="mt-5 col-md-8" style={{ minHeight: "260px" }}>
            {isLoading ? (
              <LoadingSpinner />
            ) : (
              <div className="pb-4 mx-auto">
          <h4 className="text-muted text-center" style={{ fontFamily: "Compass Sans" }}>
            Sorting by most recent
          </h4>
                {testimonialItems}
                </div>
            )}
          </div>

      </div>
    </div>
  );
};

export default Testimonials;
