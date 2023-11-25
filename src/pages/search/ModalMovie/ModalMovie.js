import React from "react";
import ReactDOM from "react-dom";
import ModalDetail from "./ModalDetail";

const Modal = (props) => {
  return (
    <>
      <ModalDetail dataMovie={props.dataMovie} keyMovie={props.keyMovie} />
    </>
  );
};

const ModalMovie = (props) => {
  const elementPortal = document.getElementById("overlay-movie");

  return (
    <>
      {ReactDOM.createPortal(
        <Modal dataMovie={props.dataMovie} keyMovie={props.keyMovie} />,
        elementPortal
      )}
    </>
  );
};

export default ModalMovie;
