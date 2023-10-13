import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "./design.css";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import pic1 from "./images/dominion.svg";
import pic2 from "./images/orient.png";
import pic3 from "./images/interdev.png";
import pic4 from "./images/mbuzz.png";
import pic5 from "./images/alfa.png";
import pic6 from "./images/cutquote.png";
import pic7 from "./images/malabar.webp";
import pic8 from "./images/gba.webp";
import pic9 from "./images/international assurance.webp";
import pic10 from "./images/myflight.jpg";
import pic11 from "./images/prtrocoat.png";
import pic12 from "./images/jax.jpg";

function Clients() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 900 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 900, min: 600 },
      items: 3,
    },
    max_mobile: {
      breakpoint: { max: 600, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      
    },
  };

  return (
    <>
      <div className="client_bg_color container-fluid ">
        <div className="row">
          <div className="col-12">
            <h4 className=" client_title text-center mt-5 mb-5">
              Our Happy Clients
            </h4>
          </div>
          <div className="col-12 mb-5">
            <div>
              <Carousel
                responsive={responsive}
                autoPlay={true}
                autoPlaySpeed={2000}
                infinite={true}
              >
                <div className="client_image">
                  <img src={pic1} className="client_image01" />
                </div>
                <div className="client_image">
                  <img src={pic2} className="client_image01" />
                </div>
                <div className=" client_image">
                  <img src={pic3} className="client_image01" />
                </div>
                <div className="client_image">
                  <img src={pic4} className="client_image01" />
                </div>
                <div className="client_image">
                  <img src={pic5} className="client_image01_alfa" />
                </div>
              </Carousel>

              <div>&nbsp;</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Clients;
