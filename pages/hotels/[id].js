// import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { Nav } from "../../components/layout/Nav";
import Footer from "../../components/layout/Footer";
import Modal from "../../components/modal/Modal";
import React, { useState } from "react";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:1337/hotels");
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
    stars,
    price,
    amenities,
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
    alt_img,
    reviews,
    slider,
  },
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Head>
        <title>{name}</title>
        <meta
          name="description"
          content="Book hotelrooms in Stavanger. Holidaze.com official site. Best Price Guarantee and Bonus program. Find the perfect stay for your next adventure."
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
            // key={id}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {slider.map(({ id, image }) => {
              const myLoader = () => {
                return image;
              };
              return (
                <SwiperSlide key={id}>
                  <Image
                    src={image}
                    loader={myLoader}
                    width={625}
                    height={371}
                    alt=""
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

          <p className="hotel__amenities">{amenities}</p>
          <p className="details__p">{short_description}</p>

          <div className="details__baseline">
            {free_cancellation === true ? (
              <p>Free cancellation</p>
            ) : (
              <div style={{ display: "none" }}></div>
            )}

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
            <Link href="/booking">
              <button className="smallBtn details__orange-btn">
                Book room
              </button>
            </Link>
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
            <img
              src={location_img}
              alt={alt_img}
              height={312}
              width={572}
              className="details__location-img"
            ></img>
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
      <div className="reviewsDiv">
        {reviews.map(({ id, title, headline, date, description, image }) => {
          return (
            <div key={id} className="reviews">
              <div className="reviews__wrapper">
                <img
                  src={image}
                  alt="Avatar image"
                  height={82}
                  width={82}
                ></img>
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
      <Footer />
    </>
  );
};

export default Details;
