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
                {/* <h1 className="banner_h1 ">
                  CHARITY AND SPONSORSHIP{" "}
                  <spam className="bannerSpam">FUND</spam> <br></br> WE HELP WAR
                  VICTIMS
                </h1> */}

                <h1 className="banner_h1 ">
                  Pouring Love to the War{" "}
                  <span className="bannerSpam">Victims!!!</span>
                </h1>
                <p className="banner_p">
                  Join us and let us together show the war victims that we are
                  here to take care of them. Our main commitment is to save war
                  victims all over the world.
                </p>
              </div>

              <div className="bannerDonateButton">
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
              </div>
              {/* <div className="row">
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
                
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
