import "./Modal.css";

import ReactDOM from "react-dom";

const Modal = ({ children }) => {
  return ReactDOM.createPortal(children, document.getElementById("modal"));
};

export { Modal };
