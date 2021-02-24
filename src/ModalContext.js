import React, { useState } from "react";

const ModalContext = React.createContext();

function ModalContextProvider(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal() {
    setIsModalOpen((prevState) => !prevState);
  }
  return (
    <div>
      <ModalContext.Provider value={{ isModalOpen, openModal }}>
        {props.children}
      </ModalContext.Provider>
    </div>
  );
}

export { ModalContextProvider, ModalContext };
