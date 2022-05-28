import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Success from "../public/images/successimg.png";

// Components
import { Nav } from "../components/layout/Nav";
import Footer from "../components/layout/Footer";

export default function Contact() {
  return (
    <div className="contact">
      <Head>
        <title>Holidaze - success!</title>
        <meta
          name="description"
          content="Thank you for booking your next hotel in Stavanger with Holidaze! Feel free to contact Holidaze whenever you need help with your bookings and our customer service will help you with any question or issue you might have"
        />
      </Head>
      <Nav />
      <></>
      <main className="success">
        <h1 className="success__headline">
          Thank you for booking with Holidaze!
        </h1>
        <p>You will get a confirmation email with all the booking details.</p>
        <p>Travel safe!</p>
        <div className="success__img">
          <Image
            src={Success}
            alt="Success illustration"
            height={380}
            width={550}
          ></Image>
        </div>
        <div className="success__btn-wrapper">
          <Link href={"/"} passHref>
            <button type="submit" className="success__btn formBtn">
              Return to homepage
            </button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
