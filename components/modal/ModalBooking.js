import { Icon } from "@iconify/react";
import { Bookingform } from "../forms/BookingForm";
import Image from "next/image";

const ModalBooking = ({
  setIsBooking,
  featured_img,
  name,
  location,
  price,
  free_cancellation,
  free_wifi,
  queen_size_bed,
  non_smoking_rooms,
  parking,
  bar,
  pets_allowed,
  swimming_pool,
  shower_only,
  free_parking,
}) => {
  const myLoader = ({ width = 150, quality = 50 }) => {
    return `${featured_img}?w=${width}&q=${quality || 75}
    `;
  };

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
                  alt="Image of hotelroom"
                  width={311}
                  height={193}
                  src={featured_img}
                  className="booking__img"
                  loader={myLoader}
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
                <div className="hotel__amenities">
                  <p className="hotel__amenities-text">
                    {free_wifi === true ? "Free WiFi" : ""}
                  </p>
                  <p className="hotel__amenities-text">
                    {queen_size_bed === true ? "Queen size bed" : ""}
                  </p>
                  <p className="hotel__amenities-text">
                    {non_smoking_rooms === true ? "Non smoking rooms" : ""}
                  </p>
                  <p className="hotel__amenities-text">
                    {parking === true ? "Parking" : ""}
                  </p>
                  <p className="hotel__amenities-text">
                    {bar === true ? "Bar" : ""}
                  </p>
                  <p className="hotel__amenities-text">
                    {pets_allowed === true ? "Pets allowed" : ""}
                  </p>
                  <p className="hotel__amenities-text">
                    {swimming_pool === true ? "Swimming pool" : ""}
                  </p>
                  <p className="hotel__amenities-text">
                    {shower_only === true ? "Shower only" : ""}
                  </p>
                  <p className="hotel__amenities-text">
                    {free_parking === true ? "Free parking" : ""}
                  </p>
                </div>
              </div>
              <div className="booking__line"></div>
              <div>
                <h4 className="booking__h4 booking__summary">Summary</h4>

                <div className="booking__summary-wrapper">
                  <p>{free_cancellation === true ? "Free cancellation" : ""}</p>
                  <p className="booking__price">{price} NOK / per night</p>
                  <p>Bonus 15%</p>
                </div>
                <h3 className="booking__h3">Total: {price} NOK</h3>
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
