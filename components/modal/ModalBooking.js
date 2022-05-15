import { Icon } from "@iconify/react";
import { Bookingform } from "../../components/forms/BookingForm";

const ModalBooking = ({ setIsOpen }) => {
  return (
    <>
      <div onClick={() => setIsOpen(false)} />
      <div className="modalBooking-opacity-bgd">
        <div className="modalBooking">
          <button
            className="modalBooking__close-btn"
            onClick={() => setIsOpen(false)}
          >
            <Icon icon="ci:close-small" color="#f3ae54" height={46} />
          </button>

          <div className="booking">
            <div>
              <h1 className="booking__h1">Booking</h1>
            </div>

            <div>
              <h4 className="booking__h4">Checkout details</h4>
              <Bookingform />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalBooking;
