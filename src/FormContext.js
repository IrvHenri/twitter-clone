import React, { useState } from "react";
import { db, fTimeStamp } from "./firebase";
const FormContext = React.createContext();

function FormContextProvider(props) {
  const [tweetPost, setTweetPost] = useState({
    tweetMessage: "",
    imageUrl: "",
    timeStamp: "",
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
      timeStamp: fTimeStamp,
    });
    setTweetPost({
      tweetMessage: "",
      imageUrl: "",
      timeStamp: "",
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
