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
              <h3 className="about_title">Lend a Hand</h3>
              <h1 className="mt-3  about_h1">People support each other!!!</h1>

              <h6 className="about_content fw-bold fst-italic mt-3">
                "We take every probable and extraordinary step to ensure that
                every person gets the support they need."
              </h6>
              <p className="about_content mt-3">
                Welcome to (website name) a cryptocurrency-powered fundraising
                platform dedicated to providing support for victims of war and
                aiding displaced individuals in war-ravaged zones.We seek to
                support those whose lives have been impacted by conflicts and
                aid them in rebuilding them via the kindness of donors like you.
                Together, we can make a difference and bring hope to those in
                need.
              </p>

              <p className="about_content">
                XXX is initiated to support the war victims. Our objective is to
                become a leading charitable platform by utilizing the advantages
                of Blockchain technology to receive donations directly without
                the help of middlemen and support war victims around the globe.{" "}
              </p>

              <h6 className="about_content fw-bold fst-italic mt-3">
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
