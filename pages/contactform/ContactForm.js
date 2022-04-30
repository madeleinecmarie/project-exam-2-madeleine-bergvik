function ContactForm() {
  return (
    <div>
      <form method="POST" />
      <div>
        <div className="flex justify-between">
          <div>
            <label htmlFor="first-name" className="block text-white">
              First name
            </label>
            <input
              type="text"
              name="first-name"
              id="first-name"
              placeholder="Ola"
              className="pl-3.5 mt-1 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm sm:text-sm border-gray-300 rounded-sm h-55 w-229"
            />
          </div>
          <div>
            <label htmlFor="last-name" className="block text-white">
              Last name
            </label>
            <input
              type="text"
              name="last-name"
              id="last-name"
              placeholder="Nordmann"
              className="pl-3.5 mt-1 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm sm:text-sm border-gray-300 rounded-sm h-55 w-229"
            />
          </div>
        </div>

        <label htmlFor="email" className="block text-white mt-5">
          Email
        </label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="example@email.com"
          className="pl-3.5 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-sm h-55 w-472"
        />

        <label htmlFor="email-address" className="block text-white mt-5">
          Subject
        </label>
        <input
          type="text"
          name="subject"
          id="subject"
          placeholder="Subject"
          className="pl-3.5 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-sm h-55 w-472"
        />

        <label htmlFor="message" className="block text-white mt-5">
          Message
        </label>
        <textarea
          name="comment"
          form="userform"
          className="pt-3.5 pl-3.5 w-472 rounded-sm h-165 resize-none text-black"
          placeholder="Write your message here"
        ></textarea>
      </div>

      <button className="formBtn md:mr-3 mt-2" type="submit" value="submit">
        Send message
      </button>
    </div>
  );
}

export default ContactForm;
