import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import Avatar from "@material-ui/core/Avatar";

const Modal = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <div className={`modal ${isModalOpen ? "open-modal" : ""}`}>
      <div className="modal-content">
        <div className="modal-header">
          <span
            onClick={(e) => setIsModalOpen((prevState) => !prevState)}
            className="modal-close-button"
          >
            <CloseIcon fontSize="medium" className="close-icon" />
          </span>
        </div>
        <div className="modal-body">
          <Avatar
            alt="stock photo"
            src="/imgs/sampleAvi.jpg"
            className="modal-avatar"
          />
          <div className="modal-fields">
            <input
              className="modal-message"
              placeholder="What's happening?"
              type="text"
            />
            <input
              className="modal-image-url"
              placeholder="Enter image url"
              type="text"
            />
          </div>
        </div>

        <div className="modal-footer">
          <button className="tweet-form-btn btn" type="submit">
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
