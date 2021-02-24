import React, { useContext } from "react";
import { ModalContext } from "../ModalContext";
import CloseIcon from "@material-ui/icons/Close";
import Avatar from "@material-ui/core/Avatar";
import { ModalContextConsumer } from "../ModalContext";

const Modal = (props) => {
  const { isModalOpen, openModal } = useContext(ModalContext);
  return (
    <div className={`modal ${isModalOpen ? "open-modal" : ""}`}>
      <div className="modal-content">
        <div className="modal-header">
          <span onClick={openModal} className="modal-close-button">
            <CloseIcon fontSize="medium" className="close-icon" />
          </span>
        </div>
        <div className="modal-body">
          <Avatar
            alt="stock photo"
            src="https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
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
