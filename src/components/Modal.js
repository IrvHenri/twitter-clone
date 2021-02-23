import React from "react";
import CloseIcon from "@material-ui/icons/Close";

const Modal = () => {
  return (
    <div className="modal open-modal">
      <div className="modal-content">
        <div className="modal-header">
          <span className="modal-close-button">
            <CloseIcon fontSize="small" />
            Close
          </span>
        </div>
        <input
          className="modal-message"
          placeholder="What's Happening?"
          type="text"
        />
        <input
          className="modal-image-url"
          placeholder="Enter Image Url"
          type="text"
        />
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
