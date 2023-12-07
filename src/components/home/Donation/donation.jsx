import React from "react";
import Modal from "react-modal";
import image_bg from "../../asssets/Donation/Refugees.jpg";
import "./donation.css";

export default function Donation({ isOpen, onRequestClose }) {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Donation Popup"
      >
        <div className="modal-parent">
          <div className="modal-img">
            <img src={image_bg} alt="img" />
          </div>
          <div className="modal-content">
            <h2>Thanks for Donating!</h2>
            <p className="fw-bold pb-5">
              Solidarity in action speaks volumes!! Your donation of love
              fuels our mission to create positive change in everyone's lives we
              serve. With heartfelt appreciation, we express our deepest
              gratitude.
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
}
