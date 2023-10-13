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
              <h1 className="mt-4  about_h1">WE HELP PEOPLE ACROSS THE GLOBE</h1>
              <p className="about_content mt-4">
                The "Helping War Victims" Foundation, initially dedicated to
                aiding refugees in finding new homes, has expanded its
                operations into diverse activities. We're now establishing
                global offices and collaborating with international
                organizations like the International Red Cross, UNICEF, Doctors
                without Borders, and other civil society organizations. Our
                primary areas of engagement encompass humanitarian assistance,
                refugee support, and fundraising for individuals in dire
                circumstances.
              </p>
             
            </div>
            <div className="col-lg-6 mt-3 bg-white">
              <div className="m-5 aboutImg">
              </div>
              <h1 className="ms-5">JOIN OUR FOUNDATION!</h1>
              <h6 className="ms-5 mt-3 mb-5 text-danger"><u>BECOME A VOLUNTEER</u></h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Abouts;
