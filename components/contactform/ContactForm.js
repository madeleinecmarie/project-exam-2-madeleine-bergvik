function ContactForm() {
  return (
    <div>
      <form method="POST" />
      <div>
        <div className="contactform">
          <div>
            <label htmlFor="first-name" className="contactform__label">
              First name
            </label>
            <input
              type="text"
              name="first-name"
              id="first-name"
              placeholder="Ola"
              className="contactform__inputShort"
            />
          </div>
          <div>
            <label htmlFor="last-name" className="contactform__label">
              Last name
            </label>
            <input
              type="text"
              name="last-name"
              id="last-name"
              placeholder="Nordmann"
              className="contactform__inputShort contactform__lastname"
            />
          </div>
        </div>

        <label htmlFor="email" className="contactform__label">
          Email
        </label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="example@email.com"
          className="contactform__input"
        />

        <label htmlFor="subject" className="contactform__label">
          Subject
        </label>
        <input
          type="text"
          name="subject"
          id="subject"
          placeholder="Subject"
          className="contactform__input"
        />

        <label htmlFor="message" className="contactform__label">
          Message
        </label>
        <textarea
          name="comment"
          form="userform"
          className="contactform__messagefield"
          placeholder="Write your message here"
        ></textarea>
      </div>

      <button className="formBtn" type="submit" value="submit">
        Send message
      </button>
    </div>
  );
}

export default ContactForm;
