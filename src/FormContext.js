import React, { useState } from "react";

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

    setTweets((prevTweets) => [...prevTweets, tweetPost]);
    setTweetPost({
      tweetMessage: "",
      imageUrl: "",
    });
    console.log(tweets);
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
