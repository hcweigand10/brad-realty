import React from "react"
import { faEnvelope, faPhone, faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./footer.css"


const Footer = () => {



    return (
        
        <footer class="footer mt-auto">
             <div class="container col-10 col-md-10 col-lg-8 col-xl-6 p-3 pb-0">
            {/* <!-- Section: Links --> */}
            <section class="">
                {/* <!--Grid row--> */}
                <div class="row">
                {/* <!-- Grid column --> */}
                {/* <div class="col-md-5 col-lg-5 col-xl-5 mx-auto mb-2">
                    <h4 class="text-uppercase text-center mb-2 font-weight-bold">
                    Connect
                    </h4>
                    <div className="">
                        <ul class="nav list-unstyled d-flex justify-content-center align-items-center">
                            <li class="mx-2"> 
                                <a
                                    class="btn btn-floating m-2 btn-custom"
                                    style={{backgroundColor: "#0072b1"}}
                                    href="https://www.linkedin.com/in/henryweigand/"
                                    target="_blank"
                                    rel="noreferrer"
                                    role="button">
                                    <FontAwesomeIcon icon={faLinkedin}/>
                                </a>
                            </li>
                            <li class="mx-2">
                                <a
                                    class="btn btn-floating m-2 btn-custom"
                                    style={{backgroundColor: "black", color: "white"}}
                                    href="https://github.com/hcweigand10/"
                                    target="_blank"
                                    rel="noreferrer"
                                    role="button">
                                    <FontAwesomeIcon icon={faGithub}/>
                                </a>
                            </li>
                            <li class="mx-2">
                                <a
                                    class="btn btn-floating m-2 btn-custom"
                                    style={{backgroundColor: "red", color: "white"}}
                                    href="mailto:henryweigand10@gmail.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    role="button">
                                    <FontAwesomeIcon icon={faEnvelope}/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div> */}
                {/* <!-- Grid column --> */}

                {/* <hr class="w-100 clearfix d-md-none" /> */}

                {/* <!-- Grid column --> */}
                <div class="mx-auto mb-2">
                    <h4 class="text-uppercase text-center mb-2 font-weight-bold">
                    Contact
                    </h4>
                    <ul class="text-center list-unstyled align-items-center">
                        <li className="mb-1"><FontAwesomeIcon icon={faHome}/> Seattle, WA, US</li>
                        <li className="mb-1"><FontAwesomeIcon icon={faEnvelope}/> henryweigand10@gmail.com</li>
                        <li className="mb-1"><FontAwesomeIcon icon={faPhone}/> +1 206-349-9260</li>
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