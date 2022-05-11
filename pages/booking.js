import { Bookingform } from "../components/forms/BookingForm";
import Head from "next/head";
import Footer from "../components/layout/Footer";
import { Nav } from "../components/layout/Nav";

function booking() {
  return (
    <div>
      <Head>
        <title>Booking</title>
        <meta name="description" content="" />
      </Head>
      <header className="hotels">
        <Nav />
      </header>

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
  );
}

export default booking;
