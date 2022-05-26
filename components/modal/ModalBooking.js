import { Icon } from "@iconify/react";
import { Bookingform } from "../forms/BookingForm";
import Image from "next/image";

const ModalBooking = ({
  setIsBooking,
  featured_img,
  name,
  location,
  price,
  amenities,
  alt_featured_img,
}) => {
  return (
    <>
      <div onClick={() => setIsBooking(false)} />
      <div className="modalBooking-opacity-bgd">
        <div className="modalBooking">
          <button
            className="modalBooking__close-btn"
            onClick={() => setIsBooking(false)}
          >
            <Icon icon="ci:close-small" color="#f3ae54" height={46} />
          </button>

          <div className="booking">
            <div>
              <h1 className="booking__h1">Booking</h1>
              <div>
                <Image
                  alt={alt_featured_img}
                  width={311}
                  height={193}
                  src={featured_img}
                  className="booking__img"
                ></Image>
                <h4 className="booking__h4">{name}</h4>
                <div className="booking__location">
                  <Icon
                    icon="akar-icons:location"
                    color="#1d282e"
                    height={20}
                  />
                  <p className="booking__location-text">{location}</p>
                </div>
                <p className="booking__amenities">{amenities}</p>
              </div>
              <div className="booking__line"></div>
              <div>
                <h4 className="booking__h4 booking__summary">Summary</h4>
                <div className="booking__summary-wrapper">
                  <p className="booking__dates">Booking dates:</p>
                  {/* <p className="booking__price">{price} NOK x nights</p> */}
                  <p className="booking__price">{price} NOK / per night</p>
                  <p>Bonus 15%</p>
                </div>
                <h3 className="booking__h3">Total</h3>
              </div>
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
