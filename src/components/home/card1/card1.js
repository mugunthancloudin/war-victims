import React from "react";
import img01 from "../../asssets/cards/cards01/image_01.jpg";
import img02 from "../../asssets/cards/cards01/image_02.jpg";
import img03 from "../../asssets/cards/cards01/image_03.jpg";
import "./card1.css";
export default function Card1() {
  return (
    <>
      <div className="container-fluid cardBg01">
        <div className="container pt-5 pb-5">
          <div className="row ">
            <div className="card-group">
              <div className="col-lg-4 col-md-4 mt-2 ps-2">
                <div className="card ">
                  <img src={img01} className="card" alt="donate" />
                  <div className="card-img-overlay text-white">
                    <h3 className="cardo1_h">SEND DONATION WAR VICTIMS</h3>
                    <p className="mt-3">
                      The simplest way to assist others is by offering financial
                      support to those in need. One of the most straightforward
                      and impactful methods to create a positive impact and
                      uplift individuals is by providing a generous contribution
                      explicitly designed for those in need.
                    </p>
                    <p className="mt-5"><u>SEND DONATION</u></p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 mt-2 ps-2">
                <div className="card ">
                  <img src={img02} className="card" alt="donate" />
                  <div className="card-img-overlay text-white">
                    <h3 className="cardo1_h">GET INVOLVED IN HELPING WAR VICTIMS</h3>
                    <p className="mt-3">
                      Join our team to save lives! We help people all over the
                      world and participate in educational programs. Come and be
                      a part of our team, where we can make a difference by
                      saving lives together! We have the incredible opportunity
                      to assist individuals around the globe and actively engage
                      in educational initiatives.
                    </p>
                    <p className="mt-4"><u>BECOME A VOLUNTEER</u></p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 mt-2 ps-2">
                <div className="card ">
                  <img src={img03} className="card" alt="donate" />
                  <div className="card-img-overlay text-white">
                    <h3 className="cardo1_h pb-3">CHARITY CAMPAIGNS</h3>
                    <p className="mt-5 pb-3">
                      You can choose the campaign that resonates with you the
                      most from a wide variety of projects we work with. Select
                      the initiative that genuinely connects with your values
                      and interests among the diverse projects we collaborate
                      on.
                    </p>
                    <p className="mt-5"><u>WATCH CAMPAIGNS</u></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
