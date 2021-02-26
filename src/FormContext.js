import React, { useState } from "react";
import db from "./firebase";
const FormContext = React.createContext();

function FormContextProvider(props) {
  const [tweetPost, setTweetPost] = useState({
    tweetMessage: "",
    imageUrl: "",
  });
  const [tweets, setTweets] = useState([]);

  function handleChange(event) {
    const { name, value } = event.target;
    setTweetPost((prevTweetPost) => ({ ...prevTweetPost, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    db.collection("posts").add({
      tweetMessage: tweetPost.tweetMessage,
      imageUrl: tweetPost.imageUrl,
    });
    setTweetPost({
      tweetMessage: "",
      imageUrl: "",
    });
  }
  return (
    <div>
      <FormContext.Provider
        value={{ tweetPost, tweets, handleChange, handleSubmit, setTweets }}
      >
        {props.children}
      </FormContext.Provider>
    </div>
  );
}

export { FormContextProvider, FormContext };
