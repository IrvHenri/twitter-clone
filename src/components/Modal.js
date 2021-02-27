import "../style/modal.css";
import { db, fTimeStamp } from "../firebase";
import React, { useState, useContext } from "react";

import { ModalContext } from "../ModalContext";
import CloseIcon from "@material-ui/icons/Close";
import Avatar from "@material-ui/core/Avatar";

const Modal = (props) => {
  const [tweetModalPost, setTweetModalPost] = useState({
    tweetMessage: "",
    imageUrl: "",
    timeStamp: "",
  });

  const { isModalOpen, toggleModal } = useContext(ModalContext);

  //Functions
  function handleModalChange(event) {
    const { name, value } = event.target;
    setTweetModalPost((prevTweetModalPost) => ({
      ...prevTweetModalPost,
      [name]: value,
    }));
  }

  function closeModal() {
    toggleModal();
    setTweetModalPost({
      tweetMessage: "",
      imageUrl: "",
      timeStamp: "",
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    db.collection("posts").add({
      tweetMessage: tweetModalPost.tweetMessage,
      imageUrl: tweetModalPost.imageUrl,
      timeStamp: fTimeStamp,
    });
    setTweetModalPost({
      tweetMessage: "",
      imageUrl: "",
      timeStamp: "",
    });
    toggleModal();
  }

  return (
    <div className={`modal ${isModalOpen ? "open-modal" : ""}`}>
      <div className="modal-content">
        <div className="modal-header">
          <span onClick={closeModal} className="modal-close-button">
            <CloseIcon className="close-icon" />
          </span>
        </div>
        <div className="modal-body">
          <Avatar
            alt="stock photo"
            src="https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
            className="modal-avatar"
          />
          <form onSubmit={handleSubmit}>
            <div className="modal-fields">
              <input
                className="modal-message"
                placeholder="What's happening?"
                type="text"
                name="tweetMessage"
                autoComplete="off"
                value={tweetModalPost.tweetMessage}
                onChange={handleModalChange}
              />
              <input
                className="modal-image-url"
                placeholder="Enter image url"
                type="text"
                name="imageUrl"
                value={tweetModalPost.imageUrl}
                onChange={handleModalChange}
              />
            </div>
            <div className="modal-footer">
              <button
                disabled={!tweetModalPost.tweetMessage}
                className="tweet-form-btn btn"
                type="submit"
              >
                Tweet
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
