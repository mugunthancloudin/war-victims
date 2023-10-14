import "./about.css";
import React from "react";
// import about from "../../asssets/about/about.jpg";

function Abouts() {
  return (
    <>
      <div className="container-fluid bgContainer p-5">
        <div className="container">
          <div className="row  ">
            {/* <div className="col-lg-1"></div> */}
            <div className="col-lg-6">
              <h3 className="about_title">About Us</h3>
              <h1 className="mt-4  about_h1">People support each other!!!</h1>

              <h6 className="about_content fw-bold fst-italic mt-4">
                "We do everything probable and incredible so that everyone can
                get the help they require"{" "}
              </h6>
              <p className="about_content mt-4">
                Welcome to (website name) a cryptocurrency-powered fundraising
                platform dedicated to providing support for victims of war and
                aiding displaced individuals in war-ravaged zones. Through the
                generosity of donors like you, we aim to assist those who have
                been affected by conflicts and help them rebuild their lives.
                Together, we can make a difference and bring hope to those in
                need.
              </p>

              <h6 className="about_content fw-bold fst-italic mt-4">
              “What you sow, you reap. It’s the law of nature.” – Bob Proctor
              </h6>

            </div>
            <div className="col-lg-6 mt-3 bg-white">
              <div className="m-5 aboutImg"></div>
              <h1 className="ms-5">JOIN OUR FOUNDATION!</h1>
              <h6 className="ms-5 mt-3 mb-5 text-danger">
                <u>BECOME A VOLUNTEER</u>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Abouts;
