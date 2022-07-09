import React from "react"

const Contact = () => {

    return (
        <div className="container card bg-light mt-0 h-100 shadow-lg">
            
            {/* <!--Section: Contact v.2--> */}
            <section class="mb-4">

                {/* <!--Section heading--> */}
                <h2 class="h1-responsive font-weight-bold text-center my-4">Contact me</h2>
                {/* <!--Section description--> */}
                <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact me directly!</p>

                <div class="row justify-content-center">

                    {/* <!--Grid column--> */}
                    <div class="col-md-3 text-center">
                        <ul class="list-unstyled mb-0">
                            <li><i class="fas fa-map-marker-alt mt-4 fa-2x"></i>
                                <p>Seattle, WA 94126, USA</p>
                            </li>
                        </ul>
                    </div>
                    <div class="col-md-3 text-center">
                        <ul class="list-unstyled mb-0">
                            <li><i class="fas fa-phone mt-4 fa-2x"></i>
                                <p>+ 01 234 567 89</p>
                            </li>
                        </ul>
                    </div>
                    <div class="col-md-3 text-center">
                        <ul class="list-unstyled mb-0">
                            <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                                <p><a href="mailto:******" target="_blank" rel="noreferrer">contact@mdbootstrap.com</a></p>
                            </li>
                        </ul>
                    </div>

                </div>

            </section>
        </div>
    )
}

export default Contact