import React,{useState} from "react";
import "./neededpeople.css";
import Donation from "../../home/Donation/donation";


export default function Neededpeople() {

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
      <div className="container-fluid bgContainer pt-5 pb-5 ">
        <div className="container peopleBg">
          <div className="row text-center">
            <h6 className="people_p">Lend a Hand</h6>
            <h1 className="text-white">
              Mend a Life Help War Victims Recover.
            </h1>
            <h5 className="text-white">Together We Make a Difference!!</h5>
            <div className="donateButton mt-2 mb-4">
              <button className="peopledonate"  onClick={handleDonation}>Donate</button>
              {isPopupOpen && <Donation isOpen={isPopupOpen} onRequestClose={closePopup} />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
