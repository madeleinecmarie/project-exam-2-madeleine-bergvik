// import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { Icon } from "@iconify/react";
import React, { useState } from "react";

// Components
import { Nav } from "../../components/layout/Nav";
import Footer from "../../components/layout/Footer";
import Modal from "../../components/modal/Modal";
import ModalBooking from "../../components/modal/ModalBooking";

//API Call
import { BaseURL } from "../../lib/apiUrl";

// Slider
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

export const getStaticPaths = async () => {
  const res = await fetch(BaseURL + "/hotels");
  const data = await res.json();

  console.log(data);

  const paths = data.map((hotel) => {
    return {
      params: { id: hotel.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("http://localhost:1337/hotels/" + id);
  const data = await res.json();

  return {
    props: { hotel: data },
  };
};

const Details = ({
  hotel: {
    id,
    name,
    short_description,
    featured_img,
    stars,
    price,
    description_1,
    description_2,
    description_3,
    description_4,
    property_surroundings_1,
    property_surroundings_2,
    property_surroundings_3,
    free_cancellation,
    location,
    location_img,
    reviews,
    slider,
    free_wifi,
    queen_size_bed,
    non_smoking_rooms,
    parking,
    bar,
    pets_allowed,
    swimming_pool,
    shower_only,
    free_parking,
  },
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBooking, setIsBooking] = useState(false);

  const myLoader_2 = ({ width = 150, quality = 50 }) => {
    return `${location_img}?w=${width}&q=${quality || 75}
    `;
  };
  return (
    <>
      <Head>
        <title>{name}</title>
        <meta
          name="description"
          content={`Book a stay at ${name} in the amazing Stavanger! Holidaze makes booking easier. Feel free to contact the hotel directly or Holidaze admin if you have any questions regarding your bookings.`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="hotels">
        <Nav />
      </header>
      <div className="bg"></div>
      <div className="details">
        <div className="details__sliderDiv">
          <Swiper
            loop
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {slider.map(({ id, image }) => {
              const myLoader = ({ width = 150, quality = 50 }) => {
                return `${image}?w=${width}&q=${quality || 75}
                `;
              };
              return (
                <SwiperSlide key={id}>
                  <Image
                    src={image}
                    loader={myLoader}
                    width={625}
                    height={371}
                    alt={`Images of ${name} rooms and amenities`}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="details__inner">
          <h1 className="details__headline">
            {name}
            <div className="hotel__starDiv">
              <span className="hotel__stars">{stars}</span>
              <Icon icon="fa:star" color="#f2d432" height={16} />
            </div>
          </h1>
          <p className="details__p">{short_description}</p>

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
            <p className="hotel__amenities-text">{bar === true ? "Bar" : ""}</p>
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

          <div className="details__baseline">
            <p>{free_cancellation === true ? "Free cancellation" : ""}</p>

            <p className="hotel__price">
              {price} NOK /<span className="hotel__span"> night</span>
            </p>
          </div>

          <div className="details__btns">
            <button
              onClick={() => setIsOpen(true)}
              className="smallBtn details__transparent-btn"
            >
              Contact hotel
            </button>
            {isOpen && <Modal setIsOpen={setIsOpen} />}

            <button
              onClick={() => setIsBooking(true)}
              className="smallBtn details__orange-btn"
            >
              Book room
            </button>
            {isBooking && (
              <ModalBooking
                setIsBooking={setIsBooking}
                featured_img={featured_img}
                name={name}
                location={location}
                price={price}
                free_cancellation={free_cancellation}
                free_wifi={free_wifi}
                queen_size_bed={queen_size_bed}
                non_smoking_rooms={non_smoking_rooms}
                parking={parking}
                bar={bar}
                pets_allowed={pets_allowed}
                swimming_pool={swimming_pool}
                shower_only={shower_only}
                free_parking={free_parking}
              />
            )}
          </div>
        </div>
      </div>
      <div className="details__hotel-info">
        <div className="details__info-wrapper">
          <div className="details__icons-wrapper">
            <h3>What this place offers</h3>
            <div className="details__icons">
              <div className="details__icons-div">
                <Icon
                  icon="akar-icons:wifi"
                  color="#1d282e"
                  width={42}
                  height={42}
                />
                <p className="details__icons-p">Free WiFi</p>
              </div>
              <div className="details__icons-div">
                <Icon icon="gg:gym" color="#1d282e" width={42} height={42} />
                <p className="details__icons-p">Gym</p>
              </div>
              <div className="details__icons-div">
                <Icon
                  icon="fa-solid:parking"
                  color="#1d282e"
                  width={42}
                  height={42}
                />
                <p className="details__icons-p">Parking</p>
              </div>
              <div className="details__icons-div">
                <Icon
                  icon="ic:round-restaurant"
                  color="#1d282e"
                  width={42}
                  height={42}
                />
                <p className="details__icons-p">Restaurant</p>
              </div>
              <div className="details__icons-div">
                <Icon icon="bxs:drink" color="#1d282e" width={42} height={42} />
                <p className="details__icons-p">Bar</p>
              </div>
            </div>
            <div className="details__description-wrapper">
              <p className="details__p">{description_1}</p>
              <p className="details__p">{description_2}</p>
              <p className="details__p">{description_3}</p>
              <p className="details__p">{description_4}</p>
            </div>
          </div>
          <div className="details__location">
            <h3>Location</h3>
            <div className="details__location-text">
              <Icon icon="akar-icons:location" color="#1d282e" height={20} />
              <p className="details__location-p">{location}</p>
            </div>
            <Image
              src={location_img}
              alt="Image of location"
              height={312}
              width={572}
              loader={myLoader_2}
              className="details__location-img"
            ></Image>
          </div>
        </div>
        <div className="details__property-wrapper">
          <h3 className="details__property-headline">Property surroundings</h3>
          <div className="details__property-inner">
            <div className="details__property_1">
              <h4 className="details__property-h2">Main amenities</h4>
              <p className="details__property-bodytext">
                {property_surroundings_1}
              </p>
            </div>
            <div className="details__property_2">
              <h4 className="details__property-h2">Room amenities</h4>
              <p className="details__property-bodytext">
                {property_surroundings_2}
              </p>
            </div>
            <div className="details__property_3">
              <h4 className="details__property-h2">What’s around</h4>
              <p className="details__property-bodytext">
                {property_surroundings_3}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="reviewsHeadline">
        <h3>4,9/5 Reviews</h3>
        <p>900 verified Holidaze guest reviews</p>
      </div>
      <div className="reviewsDiv">
        {reviews.map(({ id, title, headline, date, description, image }) => {
          const myLoader_3 = ({ width = 150, quality = 50 }) => {
            return `${image}?w=${width}&q=${quality || 75}
              `;
          };
          return (
            <div key={id} className="reviews">
              <div className="reviews__wrapper">
                <Image
                  src={image}
                  alt={`Image of ${title} avatar`}
                  height={82}
                  width={82}
                  loader={myLoader_3}
                ></Image>
                <div className="reviews__headline-wrapper">
                  <h4 className="reviews__title">{title}</h4>
                  <p>{date}</p>
                </div>
              </div>
              <div className="reviews__body">
                <h4 className="reviews__title">{headline}</h4>
                <p className="reviews__description">{description}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <p className="reviewsLink">See all 900 reviews</p>
      </div>
      <Footer />
    </>
  );
};

export default Details;
