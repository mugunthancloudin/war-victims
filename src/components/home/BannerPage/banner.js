import React,{useState} from "react";
import "./banner.css";
import Donation from "../../home/Donation/donation";


export default function Banner() {

  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleDonation = (event) => {
    event.preventDefault();
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

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
<h3 className="banner_h1">Join the Cause</h3>
                <h1 className="bannerFont ">
                 Donate to Rebuild War-Torn
                  <span className="bannerSpam"> Lives.</span>
                </h1>
                <p className="banner_p">
                <span className="fw-bold">Epizóntes</span> is a community-run charity cryptocurrency project that
                  helps war victims and supports <br></br>the well-being of people in
                  need!
                </p>
              </div>

              <div className="bannerDonateButton">
                <button className="btn-53">
                  <div className="original">DONATE</div>
                  <div className="letters"  onClick={handleDonation}>
                    <span>D</span>
                    <span>O</span>
                    <span>N</span>
                    <span>A</span>
                    <span>T</span>
                    <span>E</span>
                  </div>
                </button>
                {isPopupOpen && <Donation isOpen={isPopupOpen} onRequestClose={closePopup} />}
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
