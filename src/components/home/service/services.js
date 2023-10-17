import "./services.css";
import React from "react";

function Victims() {
  return (
    <>
      <div className="container-fluid  victimsBg" id="/"> 
        <div className="container ">
          <div className="row">
            <div className="col-lg-6">&nbsp;</div>
            <div className="col-lg-6   text-white ">
              <div className="row">
                <p className="victims_p">Donate for War Victims</p>
                <h1 className="victims_h1">
                Lend a Hand, Make a Stand: Support War Victims <span className="text-danger">Today.</span>
                </h1>
                <h6 className="victims_h6 mt-3">
                You can help us in our work from wherever you are. We believe that the smallest deed can make a change. 
                </h6>
                <h1 className="mt-3">GOAL <spam className="victimSpam">$190000</spam></h1>
                <p className="victims_p1">LEARN MORE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Victims;
