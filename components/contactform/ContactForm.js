import axios from "axios";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useState } from "react";

const SignupSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(2, "Firstname is too short")
    .max(50, "Firstname is way too long")
    .required("Required"),
  lastname: Yup.string()
    .min(2, "Lastname is too short")
    .max(50, "Lastname is way too long")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  subject: Yup.string()
    .min(2, "Subject is too short")
    .max(15, "Subject needs to be less than 15 characters")
    .required("Required"),
  message: Yup.string()
    .min(2, "Message is too short")
    .max(200, "Message is way too long")
    .required("Required"),
});

export const ContactForm = () => {
  const [error, setError] = useState(false);

  const HandleSubmit = async (values) => {
    try {
      await axios.post("http://localhost:1337/messages", values);
      setError(false);
    } catch (err) {
      console.log(err.response.data.messages);
      setError(true);
    }
  };

  return (
    <div>
      <Formik
        initialValues={{
          firstname: "",
          lastname: "",
          email: "",
          subject: "",
          message: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          HandleSubmit(values);
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="contactform">
              <div>
                <label htmlFor="firstname" className="contactform__label">
                  Firstname
                </label>
                <Field
                  name="firstname"
                  className="contactform__inputShort"
                  placeholder="Firstname"
                />
                {errors.firstname && touched.firstname ? (
                  <div style={{ color: "red" }}>{errors.firstname}</div>
                ) : null}
              </div>

              <div className="contactform__lastname">
                <label htmlFor="lastname" className="contactform__label">
                  Last name
                </label>
                <Field
                  name="lastname"
                  className="contactform__inputShort"
                  placeholder="Lastname"
                />
                {errors.lastname && touched.lastname ? (
                  <div style={{ color: "red" }}>{errors.lastname}</div>
                ) : null}
              </div>
            </div>
            <div>
              <label htmlFor="email" className="contactform__label">
                Email
              </label>
              <Field
                name="email"
                type="email"
                className="contactform__input"
                placeholder="example@gmail.com"
              />
              {errors.email && touched.email ? (
                <div style={{ color: "red" }}>{errors.email}</div>
              ) : null}
            </div>
            <div>
              <label htmlFor="subject" className="contactform__label">
                Subject
              </label>
              <Field
                name="subject"
                type="text"
                className="contactform__input"
                placeholder="Subject"
              />
              {errors.subject && touched.subject ? (
                <div style={{ color: "red" }}>{errors.subject}</div>
              ) : null}
            </div>
            <div>
              <label htmlFor="message" className="contactform__label">
                Message
              </label>
              <Field
                name="message"
                type="text"
                className="contactform__messagefield"
                placeholder="Write your message here"
                component="textarea"
              />
              {errors.message && touched.message ? (
                <div style={{ color: "red" }}>{errors.message}</div>
              ) : null}
            </div>
            <div className="contactform__BtnDiv">
              <button type="submit" className="formBtn">
                Send message
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
