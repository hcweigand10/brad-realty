import React, { useEffect, useState } from "react";
import TestimonialItem from "../components/testimonialItem/TestimonialItem";
import api from "../utils/api";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    const testimonialsRaw = await api.getTestimonials();
    console.log(testimonialsRaw);
    setTestimonials(testimonialsRaw);
  };
  const testimonialItems = testimonials.map((testimonial) => {
    return <TestimonialItem testimonialObj={testimonial} key={testimonial.id}/>;
  });

  return (
    <div className="container">
      <section>
        <div class="row d-flex justify-content-center">
          <div class="col-md-10 col-xl-8 text-center">
            <h3 class="mb-4">Testimonials</h3>
            <p class="mb-4 pb-2 mb-md-5 pb-md-0">
              See what others have had to say about working with Bradley!
            </p>
          </div>
        </div>

        <div class="row text-center d-flex align-items-stretch">
          {testimonialItems}
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
