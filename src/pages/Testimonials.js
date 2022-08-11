import React, { useEffect, useState } from "react";
import { Carousel} from "react-bootstrap";
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
    const agentInfo = await api.getZillowAgentInfo();
    console.log(agentInfo);
    setTestimonials(agentInfo.reviewsData.reviews)
    setIsLoading(false);
  };

  // const postNewTestimonial = async (e) => {
  //   e.preventDefault()
  //   const testimonialObj = {
  //     name: document.getElementById("testimonial-name").value,
  //     email: document.getElementById("testimonial-email").value,
  //     city: document.getElementById("testimonial-city").value,
  //     state: document.getElementById("testimonial-state").value,
  //     review: document.getElementById("testimonial-review").value,
  //   }
  //   await api.addTestimonial(testimonialObj)
  //   window.location.reload()
  // }

  const testimonialItems = testimonials.map((testimonial,index) => {
    return (
      <Carousel.Item className="justify-content-center" key={index}>
        <TestimonialItem testimonialObj={testimonial}/>
      </Carousel.Item>
    );
  });

  return (
    <div className="container mt-3">
      <h4>Zillow Ratings & Reviews ({testimonials.length})</h4>
      <h6 className="text-muted">Sorting by most recent</h6>
      <div className="my-5" style={{ minHeight: "260px" }}>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <Carousel fade variant="dark" indicators={false} className="my-3">
            {testimonialItems}
          </Carousel>
        )}
      </div>

      <div className="mt-5">
        <a href="https://www.zillow.com/reviews/write/?s=X1-ZU15wna48c227m1_6msnz" className="">Worked with Brad lately? Tell us how it went!</a>
        
        {/* <Form onSubmit={postNewTestimonial}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Name</Form.Label>
              <Form.Control id="testimonial-name" type="text" placeholder="Ash Ketchum" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email <span className="text-muted" style={{fontStyle: "italic"}}>(We won't send you anything)</span></Form.Label>
              <Form.Control
                id="testimonial-email"
                type="email"
                placeholder="ash.ketchum@pokemon.com"
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control id="testimonial-city" type="text" placeholder="Elwynn Forest" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Select id="testimonial-state" defaultValue="Choose...">
                <option>Choose...</option>
                <option>AL</option>
                <option>AK</option>
                <option>AZ</option>
                <option>AR</option>
                <option>CA</option>
                <option>CO</option>
                <option>CT</option>
                <option>DE</option>
                <option>FL</option>
                <option>GA</option>
                <option>HI</option>
                <option>ID</option>
                <option>IL</option>
                <option>IN</option>
                <option>IA</option>
                <option>KS</option>
                <option>KY</option>
                <option>LA</option>
                <option>ME</option>
                <option>MD</option>
                <option>MA</option>
                <option>MI</option>
                <option>MN</option>
                <option>MS</option>
                <option>MO</option>
                <option>MT</option>
                <option>NE</option>
                <option>NV</option>
                <option>NH</option>
                <option>NJ</option>
                <option>NM</option>
                <option>NY</option>
                <option>NC</option>
                <option>ND</option>
                <option>OH</option>
                <option>OK</option>
                <option>OR</option>
                <option>PA</option>
                <option>RI</option>
                <option>SC</option>
                <option>SD</option>
                <option>TN</option>
                <option>TX</option>
                <option>UT</option>
                <option>VT</option>
                <option>VA</option>
                <option>WA</option>
                <option>WV</option>
                <option>WI</option>
                <option>WY</option>
              </Form.Select>
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridText">
            <Form.Label>Your Review</Form.Label>
            <Form.Control id="testimonial-review" as="textarea" rows={4} placeholder="'Holy smokes this guy is good...'"/>
          </Form.Group>
          <button className="btn btn-primary" type="submit">
        Submit
      </button>
        </Form> */}
      </div>
    </div>
  );
};

export default Testimonials;
