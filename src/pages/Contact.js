import React from "react";


const Contact = () => {
  return (
    <div
      className="container mt-4 mb-3"
      style={{ fontFamily: "Compass Sans" }}
    >
      <div className="card bg-light shadow-lg h-100">
        <section className="h-100">
          <div className="row justify-content-center h-100 w-100 mx-auto">
            <div className="col-md-6 p-1">
              <h1 className="h1-responsive font-weight-bold text-center my-4">
                Contact me
              </h1>
              <p className="text-center w-responsive mb-4 mx-4">
                Do you have any questions? Please do not hesitate to contact me
                directly!
              </p>
              <div className="text-center">
                <ul className="list-unstyled mb-0">
                  <li>
                    <i className="fas fa-map-marker-alt mt-4 fa-2x"></i>
                    <p>Seattle, WA 94126, USA</p>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <ul className="list-unstyled mb-0">
                  <li>
                    <i className="fas fa-phone mt-4 fa-2x"></i>
                    <p>+1 (714) 767-8699</p>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <ul className="list-unstyled mb-0">
                  <li>
                    <i className="fas fa-envelope mt-4 fa-2x"></i>
                    <p>
                      <a
                        href="mailto:bradley.dosch@compass.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        bradley.dosch@compass.com
                      </a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 p-0" style={{ }}>
              <img
                src="https://iili.io/gxiQp9.jpg"
                // src="https://c1.wallpaperflare.com/preview/67/385/187/greem-leaf-plant-minimal.jpg"
                style={{objectFit: "cover", width: "100%", maxHeight: "50vw", minHeight: "100%"}}
                alt="pretty leaves"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
