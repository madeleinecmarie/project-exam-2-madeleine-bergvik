import { Icon } from "@iconify/react";
import { ContactForm } from "../contactform/ContactForm";

const Modal = ({ setIsOpen }) => {
  return (
    <>
      <div onClick={() => setIsOpen(false)} />
      <div className="modal-opacity-bgd">
        <div className="modal">
          <button className="modal__close-btn" onClick={() => setIsOpen(false)}>
            <Icon icon="ci:close-small" color="#f3ae54" height={46} />
          </button>
          <p className="modal__p">
            Send your questions directly to the hotel and they will get back to
            you shortly.
          </p>
          <div className="modal__form">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
