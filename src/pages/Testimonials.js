import React, { useEffect, useState } from "react";
import { Carousel, Col, Form, Row } from "react-bootstrap";
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
    const testimonialsRaw = await api.getTestimonials();
    console.log(testimonialsRaw);
    setTestimonials(testimonialsRaw);
    setIsLoading(false);
  };
  const testimonialItems = testimonials.map((testimonial) => {
    return (
      <Carousel.Item className="justify-content-center" key={testimonial.id}>
        <TestimonialItem testimonialObj={testimonial}/>
      </Carousel.Item>
    );
  });

  return (
    <div className="container mt-3">
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
        <h3 className="">Worked with Brad lately? Tell us how it went!</h3>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Ash Ketchum" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email <span className="text-muted" style={{fontStyle: "italic"}}>(We won't send you anything)</span></Form.Label>
              <Form.Control
                type="email"
                placeholder="ash.ketchum@pokemon.com"
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="Elwynn Forrest" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Select defaultValue="Choose...">
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
            <Form.Control as="textarea" rows={4} placeholder="'Holy smokes this guy is good...'"/>
          </Form.Group>
          <button className="btn btn-primary" type="submit">
        Submit
      </button>
        </Form>
      </div>
    </div>
  );
};

export default Testimonials;
