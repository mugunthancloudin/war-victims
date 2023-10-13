import React from "react";
import "./banner.css";

export default function Banner() {
  return (
    <>
      <div className="container-fluid  bannerBgBody">
        <div className="container bannerBg">
          <div className="row">
            <div className="col-lg-10 text-center  text-white ">
              <div className="row">
                <h1 className="banner_h1 ">
                  CHARITY AND SPONSORSHIP{" "}
                  <spam className="bannerSpam">FUND</spam> <br></br> WE HELP WAR
                  VICTIMS
                </h1>
                <p className="banner_p">
                  Our main goal is fidelity to save people all over the world.
                  <br></br> The organization's primary goal is to promote and
                  ensure fidelity to assist and support people worldwide.{" "}
                </p>
              </div>
{/* 
              <div className=" row text-center">
              <button className="btn-53">
                  <div className="original">DONATE</div>
                  <div className="letters">
                    <span>D</span>
                    <span>O</span>
                    <span>N</span>
                    <span>A</span>
                    <span>T</span>
                    <span>E</span>
                  </div>
                </button>

              </div> */}
              <div className="row">
                <div className="col-lg-5">&nbsp;</div>
                <div className="col-lg-2"><button className="btn-53">
                  <div className="original">DONATE</div>
                  <div className="letters">
                    <span>D</span>
                    <span>O</span>
                    <span>N</span>
                    <span>A</span>
                    <span>T</span>
                    <span>E</span>
                  </div>
                </button></div>
                <div className="col-lg-5">&nbsp;</div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
