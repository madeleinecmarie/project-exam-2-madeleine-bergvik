import Head from "next/head";
import Image from "next/image";

// Images
import event from "../public/images/event.png";
import loyaltyCard from "../public/images/loyaltycard.png";
import card from "../public/images/card.png";
import headset from "../public/images/headset.png";

// Components
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

// API Call
import { getHotels } from "../lib/apiCall";
import { BaseURL } from "../lib/apiUrl";

export async function getStaticProps() {
  const attractionArray = await getHotels(BaseURL + "/attractions");

  return {
    props: { attraction: attractionArray },
  };
}

export default function Home({ attraction }) {
  return (
    <>
      <Head>
        <title>Holidaze</title>
        <meta
          name="description"
          content="Hi, and welcome to Holidaze! We believe in easy booking and great customer service. We are here for the customers, and we also offer the best bonus program. Find your next stay in Stavanger at Holidaze.com"
        />
      </Head>
      <Header />

      <main>
        <div className="home">
          <h1 className="home__h1">Why use Holidaze for your booking?</h1>

          <div className="home__section-1">
            <div className="home__icons">
              <div>
                <Image
                  src={event}
                  alt="Event icon"
                  height={110}
                  width={123}
                ></Image>
                <h3 className="home__h3">
                  Free cancellation
                  <span className="home__span">on most of the hotels*</span>
                </h3>
              </div>
              <div>
                <Image
                  src={loyaltyCard}
                  alt="Loyaltycard icon"
                  height={112}
                  width={112}
                ></Image>
                <h3 className="home__h3">15% Bonus</h3>
              </div>
              <div className="card-icon">
                <Image
                  src={card}
                  alt="Card icon"
                  height={112}
                  width={112}
                ></Image>
                <h3 className="home__h3">Safe payment</h3>
              </div>
              <div>
                <Image
                  src={headset}
                  alt="Headset icon"
                  height={116}
                  width={116}
                ></Image>
                <h3 className="home__h3">24/7 chat</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="attractions">
          <h2 className="attractions__headline">
            Top Attractions in Stavanger
          </h2>

          <div className="attractions__inner">
            {attraction.map(({ id, image, headline, description, alt }) => {
              const myLoader = ({ width = 150 }) => {
                return `${image}?w=${width}
            `;
              };

              return (
                <div key={id} className="attractions__card">
                  <Image
                    src={image}
                    alt={alt}
                    loader={myLoader}
                    height={320}
                    width={345}
                    className="attractions__img"
                  ></Image>
                  <h3 className="attractions__subheadline">{headline}</h3>
                  <p className="attractions__description">{description}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="newsletter">
          <h2 className="newsletter__h2">Subscribe to see Secret Deals</h2>
          <h4 className="newsletter__h4">
            Prices drop the moment you sign up!
          </h4>
          <div className="newsletter__email">
            <input
              type="email"
              className="newsletter__emailInput"
              placeholder="Email"
            />
            <button className="newsletter__btn">Subscribe</button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
