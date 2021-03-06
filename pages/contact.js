import Head from "next/head";
import { Icon } from "@iconify/react";

// Components
import { Nav } from "../components/layout/Nav";
import { ContactForm } from "../components/forms/ContactForm";
import Footer from "../components/layout/Footer";

export default function Contact() {
  return (
    <div className="contact">
      <Head>
        <title>Contact Holidaze</title>
        <meta
          name="description"
          content="Hi! Feel free to contact Holidaze whenever you need help with your bookings and our customer service will help you with any question or issue you might have"
        />
      </Head>
      <Nav />
      <div className="contact__text">
        <div className="contact__headline">
          <h1>Contact Holidaze</h1>
          <p className="contact__p">
            Send Holidaze a message with any question you might have regarding
            your bookings or any issues that might occur, and the agents will
            get back to you within 12 hours.
          </p>

          <div className="contact__socials">
            <h3>Find us on social media</h3>
            <div className="contact__icons">
              <Icon
                icon="ant-design:facebook-outlined"
                color="white"
                height={58}
              />
              <Icon
                icon="ant-design:instagram-outlined"
                color="white"
                height={58}
              />
              <Icon icon="ph:tiktok-logo" color="white" height={58} />
            </div>
          </div>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
      <Footer />
    </div>
  );
}
