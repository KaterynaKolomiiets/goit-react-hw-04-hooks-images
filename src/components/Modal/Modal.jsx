import { useEffect } from "react";
import PropTypes from "prop-types";

import s from "./Modal.module.css";

const Modal = ({ onClose, src }) => {
  const handleKeyDown = ({ code }) => {
    if (code === "Escape") {
      onClose();
    }
  };
  const handleBackDropClick = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      onClose();
    }
  };
useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
  return () => window.removeEventListener("keydown", handleKeyDown);
},
  [handleKeyDown]);
  
  return (
    <div className={s.overlay} onClick={handleBackDropClick}>
      <div className={s.modal}>
        <img src={src} alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  onClick: PropTypes.func,
  src: PropTypes.string,
};
export default Modal;
