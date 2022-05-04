import { Icon } from "@iconify/react";
import ContactForm from "../contactform/ContactForm";

const Modal = ({ setIsOpen }) => {
  return (
    <>
      <div onClick={() => setIsOpen(false)} />
      <div className="modal">
        <button className="modal__close-btn" onClick={() => setIsOpen(false)}>
          <Icon icon="ci:close-small" color="#f3ae54" height={46} />
        </button>
        <div className="modal__form">
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default Modal;
