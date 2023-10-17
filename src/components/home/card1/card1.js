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
                      Bombs continue to fall on civilians. They are living in
                      unimaginable situations and desperately need our help.
                      There is absolutely no end to such plights. Let’s join the
                      cause and donate to rebuild the lives of the war victims.
                      To help the victims of the most horrific crimes known to
                      mankind, we need your voice, your support, and your
                      resources. You can help make a difference.
                    </p>
                    <p className="mt-5">
                      <u>SEND DONATION</u>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 mt-2 ps-2">
                <div className="card ">
                  <img src={img02} className="card" alt="donate" />
                  <div className="card-img-overlay text-white">
                    <h3 className="cardo1_h">
                      GET INVOLVED IN HELPING WAR VICTIMS
                    </h3>
                    <p className="mt-3">
                      We are stronger together. Conflicts affect civilians
                      across the globe, and to date, millions have been forced
                      to leave their homes because of this. With your support,
                      we can reach war victims as early as possible and support
                      them through their recovery. Get involved with XXX by
                      becoming a volunteer. Help us ensure a safe future for
                      every war victim living through war.
                    </p>
                    <p className="mt-5">
                      <u>BECOME A VOLUNTEER</u>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 mt-2 ps-2">
                <div className="card ">
                  <img src={img03} className="card" alt="donate" />
                  <div className="card-img-overlay text-white">
                    <h3 className="cardo1_h pb-3">CHARITY CAMPAIGNS</h3>
                    <p className="mt-5 pb-3">
                      Bombing over citizens isn’t war, it is a crime. At XXX, we
                      want to put an end to the bombing of our fellow humans and
                      stop innocent people from being injured and killed by
                      these indiscriminate acts of violence. Join your charity
                      campaigns to support the war victims. You can help us
                      support the war-torn countries by donating through your
                      cryptocurrency project.
                    </p>
                    <p className="mt-5">
                      <u>WATCH CAMPAIGNS</u>
                    </p>
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
