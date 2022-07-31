import React from 'react'

const TestimonialItem = ({testimonialObj}) => {

    const colors = [
        "#F8B195",
        "#F67280",
        "#C06C84",
        "#6C5B7B",
        "#355C7D",
    ]
    const getRandomColor = () => {
        return colors[Math.floor(Math.random()*5)]
    }


    return (
        <div class="col-6 col-md-4 mb-5 mb-md-2 d-flex align-items-stretch">
            <div class="card testimonial-card">
              <div class="card-up" style={{backgroundColor: getRandomColor(), height: "100px"}}>

              </div>
              <div class="card-body">
                <h4 class="mb-4">{testimonialObj.name}</h4>
                <hr />
                <p class="dark-grey-text mt-4">
                  <i class="fas fa-quote-left pe-2"></i>{testimonialObj.review}
                </p>
              </div>
            </div>
          </div>
    )
}

export default TestimonialItem