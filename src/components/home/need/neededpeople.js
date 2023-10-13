import React from "react";
import "./neededpeople.css";

export default function Neededpeople() {
  return (
    <>
      <div className="container-fluid bgContainer pb-5 ">
        <div className="container peopleBg">
          <div className="row text-center">
            <h6 className="people_p">PLAY YOUR PART</h6>
            <h1 className="text-white">YOU CAN HELP MANY PEOPLE IN NEED </h1>
            <h5 className="text-white">Everyone can make a difference</h5>
            <div className="donateButton mt-2 mb-4">
              <button className="peopledonate ">Donate</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
