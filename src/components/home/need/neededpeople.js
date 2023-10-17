import React from "react";
import "./neededpeople.css";

export default function Neededpeople() {
  return (
    <>
      <div className="container-fluid bgContainer pt-5 pb-5 ">
        <div className="container peopleBg">
          <div className="row text-center">
            <h6 className="people_p">Lend a Hand</h6>
            <h1 className="text-white">
              Mend a Life Help War Victims Recover.
            </h1>
            <h5 className="text-white">Together We Make a Difference!!</h5>
            <div className="donateButton mt-2 mb-4">
              <button className="peopledonate ">Donate</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
