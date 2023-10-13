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
                <p className="victims_p">VICTIMS OF WAR</p>
                <h1 className="victims_h1">
                  GIVE A  CHANCE FOR WAR VICTIMS TO SURVIVE
                </h1>
                <h6 className="victims_h6 mt-3">
                  Our goal is to help the War Victims, who were able to
                  escape from the city under siege.
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
