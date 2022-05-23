import Head from "next/head";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Link from "next/link";

// Components
import Filter from "../components/filter/Filter";
import Footer from "../components/layout/Footer";
import { Nav } from "../components/layout/Nav";
import Searchbar from "../components/searchbar/Searchbar";

//API Call
import { getHotels } from "../lib/apiCall";
import { BaseURL } from "../lib/apiUrl";

export async function getStaticProps() {
  const hotelsArray = await getHotels(BaseURL + "/hotels");

  return {
    props: { hotel: hotelsArray },
  };
}

const Stays = ({ hotel }) => {
  return (
    <>
      <Head>
        <title>Hotels</title>
        <meta
          name="description"
          content="Book hotelrooms in Stavanger. Holidaze.com official site. Best Price Guarantee and Bonus program. Find the perfect stay for your next adventure."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="hotels">
        <Nav />
      </header>
      <main>
        <section className="hotels__section-1">
          <div className="hotels__headline">
            <h3 className="text-white">Good day,</h3>
            <h1 className="hotels__h1">Find the best place for you to stay</h1>
          </div>
          <div className="hotels__searchbar">
            <Searchbar className="pt-10" />
          </div>
        </section>

        <div className="hotelsWrapper">
          <div className="hotels__h2-wrapper">
            <h2>Hotels</h2>
            <div className="filter">
              <Filter />
            </div>
          </div>

          {/* <div className="filter__sorting">
              <h4>Filter by</h4>
              <input type="checkbox" className="filter__input" />
              <label className="filter__label">Free cancellation</label>
            </div> */}
          {/* <div className="filter__rating"></div>
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
          </div> */}

          <div className="results__div">
            {hotel.map(
              ({
                id,
                name,
                short_description,
                stars,
                featured_img,
                price,
                amenities,
                free_cancellation,
                alt_featured_img,
              }) => {
                const myLoader = ({ width = 150 }) => {
                  return `${featured_img}?w=${width}
                  `;
                };

                return (
                  <div key={id} className="hotel">
                    <div className="hotel__line"></div>
                    <div className="hotel__wrapper">
                      <Image
                        alt={alt_featured_img}
                        src={featured_img}
                        loader={myLoader}
                        width={386}
                        height={230}
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

                        <p className="hotel__amenities">{amenities}</p>
                        <p className="hotel__p">{short_description}</p>

                        <div className="hotel__baseline">
                          <div>
                            {free_cancellation === true ? (
                              <p>Free cancellation</p>
                            ) : (
                              <div style={{ display: "none" }}></div>
                            )}

                            <p className="hotel__price">
                              {price} NOK /
                              <span className="hotel__span"> night</span>
                            </p>
                          </div>

                          <Link href={"/hotels/" + id} passHref>
                            <button className="blackBtn">Book room</button>
                          </Link>
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
    </>
  );
};

export default Stays;
