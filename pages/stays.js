import Head from "next/head";
import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";
import Searchbar from "../components/searchbar/Searchbar";
import Image from "next/image";
import { Icon } from "@iconify/react";

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:1337/hotels");
  const data = await res.json();

  return {
    props: { hotel: data },
  };
};

const Stays = ({ hotel }) => {
  return (
    <div>
      <Head>
        <title>Stays</title>
        <meta
          name="description"
          content="Book hotelrooms in Stavanger. Holidaze.com official site. Best Price Guarantee and Bonus program. Find the perfect stay for your next adventure."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="stays">
        <Nav />
      </header>
      <main>
        <section className="stays__section-1">
          <div className="stays__headline">
            <h3 className="text-white">Good day,</h3>
            <h1>Find the best place for you to stay</h1>
          </div>
          <div className="stays__searchbar">
            <Searchbar className="pt-10" />
          </div>
        </section>

        <div className="hotels">
          <div className="filter">
            <h2>Hotels</h2>
            <div className="filter__sorting">
              <h4>Filter by</h4>
              <input type="checkbox" className="filter__input" />
              <label className="filter__label">Free cancellation</label>
            </div>
            <div className="filter__rating"></div>
            <h4>Star Rating</h4>
            <div className="inputs">
              <div>
                <input type="checkbox" className="" />
                <label className="inputs__label">1 stars</label>
              </div>
              <div>
                <input type="checkbox" className="" />
                <label className="inputs__label">2 stars</label>
              </div>
              <div>
                <input type="checkbox" className="" />
                <label className="inputs__label">3 stars</label>
              </div>
              <div>
                <input type="checkbox" className="" />
                <label className="inputs__label">4 stars</label>
              </div>
              <div>
                <input type="checkbox" className="" />
                <label className="inputs__label">5 stars</label>
              </div>
            </div>
          </div>

          <div className="results__div">
            {hotel.map(
              ({ id, name, short_description, stars, featured_img, price }) => {
                const myLoader = () => {
                  return featured_img;
                };

                return (
                  <div key={id} className="hotel">
                    <div className="hotel__line"></div>
                    <div className="hotel__wrapper">
                      <Image
                        alt="Hotelroom image"
                        src={featured_img}
                        loader={myLoader}
                        width={386}
                        height={240}
                        className="hotel__img"
                      ></Image>
                      <div className="hotel__inner">
                        <h4 className="hotel__h4">
                          {name}
                          <div className="hotel__starDiv">
                            <span className="hotel__stars">{stars}</span>
                            <Icon icon="fa:star" color="#f2d432" height={16} />
                          </div>
                        </h4>

                        <p className="hotel__p">{short_description}</p>
                        <div className="hotel__baseline">
                          <p className="hotel__price">
                            {price} NOK /
                            <span className="hotel__span"> night</span>
                          </p>
                          <button className="blackBtn">Book room</button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Stays;
