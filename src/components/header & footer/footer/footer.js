import React from "react";
import "./footer.css";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";
import CountUp from "react-countup";
import brandLogo from "../../asssets/Header&Footer/logo.png";

function Footer() {
  return (
    <>
      <div className="container_fluid footerContainer">
        <div className="container">
          <div className="row pt-4">
            <div className="col-lg-4">
              <h3>Take a Peek on how your donations are used. </h3>
              <p className="mt-2 fst-italic">
                The funds that are collected from you through our cryptocurrency
                platform are used for treating the war victims and giving them a
                better and safer life.
              </p>
              <p className="text-decoration-underline">FIND OUT MORE  </p>
            </div>
            <div className="col-lg-1">&nbsp;</div>
            <div className="col-lg-2">
              <h1>
                {" "}
                <CountUp start={0} end={85} duration={5} />%
              </h1>
              <p>SOCIAL MISSION</p>
            </div>

            <div className="col-lg-2">
              <h1>
                {" "}
                <CountUp start={0} end={10} duration={4} />%
              </h1>
              <p>FUNDRAISING</p>
            </div>

            <div className="col-lg-3">
              <h1>
                {" "}
                <CountUp start={0} end={5} duration={3} />%
              </h1>
              <p>MANAGEMENT & GENERAL ADMIN</p>
            </div>
          </div>
          <hr class="horizontal-line" />
          <div className="row justify-content-around mt-5">
            <div className="col-lg-2">
              <img
                className="mt-1 ms-4"
                src={brandLogo}
                alt="brand-logo"
                width={100}
                height={100}
              />
              <h6 className=" mt-2 ms-5">
                Hands For <br></br>War victims
              </h6>
            </div>

            <div className="col-lg-2 mt-2">
              <h6 className="text-danger">EXPLORE</h6>
              <h6 className="mt-3">What we do</h6>
              <h6>Medical activities</h6>
              <h6>Crisis settings</h6>
              <h6>In focus</h6>
            </div>
      
            <div className="col-lg-2 ">
              <h6>&nbsp;</h6>
              <h6 className="mt-3 ">Where we work </h6>
              <h6>News</h6>
              <h6>Resource centre</h6>
              <h6>International Activity Report</h6>
            </div>
    
            <div className="col-lg-2 mt-2">
              <h6 className="text-danger">ABOUT MSF</h6>
              <h6 className="mt-3">Who we are</h6>
              <h6>How we're run</h6>
              <h6>How we work</h6>
              <h6>Contact us</h6>
            </div>

            <div className="col-lg-2 mt-2">
              <h6 className="text-danger">GET INVOLVED</h6>
              <h6 className="mt-3">Work with MSF</h6>
              <h6>Donate</h6>
            </div>
          </div>
          <div className="row pb-3 mt-5">
            <div className="col-lg-4">
              <p>Helping War victims</p>
              <p>
                140, Route de Ferney, 1202 Geneva, Switzerland <br></br>
                Federal identification number: UID CH-660.1.555.004-1
              </p>
            </div>
            <div className="col-lg-3">
              <p>PRIVACY POLICY</p>
            </div>
            <div className="col-lg-5 justify-content-between d-flex text-end">
              <a href="https://www.linkedin.com/company/cloudin-tech/mycompany/">
                <i className="footer-media">
                  <AiFillLinkedin size={40} />
                </i>
              </a>

              <a href="https://www.facebook.com/CloudinTechlabs/">
                <i className="footer-media">
                  <AiFillFacebook size={40} />
                </i>
              </a>

              <a href="https://www.instagram.com/cloudin_labs/">
                <i className="footer-media">
                  <AiFillInstagram size={40} />
                </i>
              </a>

              <a href="https://twitter.com/Cloudinlabs">
                <i className="footer-media">
                  <AiFillTwitterSquare size={40} />
                </i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
