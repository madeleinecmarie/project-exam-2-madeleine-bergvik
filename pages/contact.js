import Head from "next/head";
import { Nav } from "../components/layout/Nav";
import ContactForm from "./contactform/ContactForm";
import { Icon } from "@iconify/react";

export default function Contact() {
  return (
    <div className="contact">
      <Head>
        <title>Contact Holidaze</title>
        <meta
          name="description"
          content="Feel free to contact Holidaze whenever you need help with booking or issues that may occur."
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
    </div>
  );
}
