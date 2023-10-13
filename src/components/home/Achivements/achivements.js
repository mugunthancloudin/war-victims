import React from "react";
import "./achivements.css";
import { Carousel, CarouselItem } from "react-bootstrap";
import Achive1 from "../../asssets/achivements/Achive1.jpg";
import Achive2 from "../../asssets/achivements/Achive2.jpg";
import Achive3 from "../../asssets/achivements/Achive3.jpg";
import Achive4 from "../../asssets/achivements/Achive4.jpg";

export default function Achivements() {
  return (
    <>
      <div className="container-fluid aboutcontainer">
        <div className="container  ">
          <div className="row">
            <div className="col-md-6 pt-4">
              <div className="double-bg-header">
                <div className="about">ABOUT</div>
              </div>
              <div className="about-description mt-3">
                <div className="">
                  We bring more than 2 decades of real estate Excellence to
                  developing and building premium residential towers, gated
                  communities, and commercial properties. Guided by the simple,
                  yet profound, philosophy of ‘Creation, not construction’,
                  BigBang has become a leading name that is changing the
                  skylines of Coimbatore and poised to enter newer markets in
                  near future.
                </div>
                <div className="row align-items-center mt-3">
                  <div className="col-md-4">
                    <div className="number-stats-list counter-box">
                      <div className="number-stats-list-container">
                        <div>
                          <span
                            className="number-stats-list-number"
                            counter-value="20"
                            decimal-place="0"
                          >
                            20
                          </span>
                        </div>
                        <div className="">
                          Years of sustained growth
                        </div>
                      </div>
                      <div className="number-stats-list-">
                        <div className="number-stats-list-number">2</div>
                        <div className="">
                          Million sq.ft. delivered
                        </div>
                      </div>
                      <div className="number-stats-list-container">
                        <div>
                          <span className="number-stats-list-number">25</span>
                        </div>
                        <div className="">Landmark Projects</div>
                      </div>
                      <div className="number-stats-list-container">
                        <div className="number-stats-list-number">2000</div>
                        <div className="">Happy families</div>
                      </div>
                    </div>
                    <a className="icon-button mt-4 mb-4 d-md-none" href="#">
                      <div className="round-button">
                        <div className="circle"></div>
                        <i className="arima-icon-arrow-right"></i>
                      </div>{" "}
                      LEARN MORE
                    </a>
                  </div>
                  <div className="col-md-8 home_about_mid_image pt-4">
                    <img
                      className="d-block w-100"
                      src={Achive1}
                      alt="image1"
                      height={"300px"}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-5 pt-3">
              <Carousel>
                <CarouselItem>
                  <img
                    className="d-block w-100 mb-5"
                    src={Achive2}
                    alt="First slide"
                    height="495px"
                  />
                </CarouselItem>
                <CarouselItem>
                  <img
                    className="d-block w-100 mb-5"
                    src={Achive3}
                    alt="First slide"
                    height="495px"
                  />
                </CarouselItem>
                <CarouselItem>
                  <img
                    className="d-block w-100 mb-5"
                    src={Achive4}
                    alt="First slide"
                    height="495px"
                  />
                </CarouselItem>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
