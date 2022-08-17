import React from "react"
import { faEnvelope, faPhone, faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./footer.css"


const Footer = () => {



    return (
        
        <footer class="footer mt-auto">
             <div class="container col-10 col-md-10 col-lg-8 col-xl-6 p-3 pb-0" style={{fontFamily: "Compass Sans"}}>
            {/* <!-- Section: Links --> */}
            <section class="">
                {/* <!--Grid row--> */}
                <div class="row">
                {/* <!-- Grid column --> */}

                {/* <hr class="w-100 clearfix d-md-none" /> */}

                {/* <!-- Grid column --> */}
                <div class="mx-auto mb-2">
                    <h4 class="text-uppercase text-center mb-2 font-weight-bold">
                    Contact
                    </h4>
                    <ul class="text-center list-unstyled align-items-center">
                        <li className="mb-1"><FontAwesomeIcon icon={faHome}/> Seattle, WA, US</li>
                        <li className="mb-1"><FontAwesomeIcon icon={faEnvelope}/> bradley.dosch@compass.com</li>
                        <li className="mb-1"><FontAwesomeIcon icon={faPhone}/> +1 (714) 767-8699</li>
                    </ul>
                </div>
                {/* <!-- Grid column --> */}
                </div>
                {/* <!--Grid row--> */}
            </section>
            {/* <!-- Section: Links --> */}
            </div>
            {/* <!-- Grid container --> */}

            {/* <!-- Copyright --> */}
            {/* <div
                class="text-center p-3"
                style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}
                >
            © 2022 Copyright: &nbsp;
            <a class="text-white" href="https://henryweigand.com/" style={{textIndent: "10px"}}>henryweigand.com</a>
            </div> */}
        </footer>
    )
}


export default Footer