import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Link from "next/link";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Firstname is too short")
    .max(50, "Firstname is way too long")
    .required("Firstname is required"),
  lastName: Yup.string()
    .min(2, "Lastname is too short")
    .max(50, "Lastname is way too long")
    .required("Lastname is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: Yup.string()
    .min(2, "Phonenumber must be over 6 letters")
    .max(16, "Phonenumber needs to be less than 16 letters")
    .required("Phonenumber is required"),
  cardNumber: Yup.string()
    .min(4, "Cardnumber too short")
    .max(16, "Cardnumber must be 16 letters long")
    .required("Cardnumber is required"),
  expireDate: Yup.string()
    .min(2, "Expiredate do not match the cardnumber")
    .max(12, "Date too long")
    .required("Expire date is required"),
  cvcCode: Yup.string()
    .min(1, "Security code too short")
    .max(3, "Security code must be 3 letters long")
    .required("CVC is required"),
});

export const Bookingform = () => (
  <div>
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        cardNumber: "",
        expireDate: "",
        cvcCode: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <div className="bookingform">
            <div className="bookingform__wrapper">
              <div className="contactform bookingform__form">
                <div>
                  <label htmlFor="first-name" className="contactform__label">
                    Firstname
                  </label>
                  <Field
                    name="firstName"
                    className="contactform__inputShort"
                    placeholder="Firstname"
                    type="text"
                  />
                  {errors.firstName && touched.firstName ? (
                    <div className="input__error">{errors.firstName}</div>
                  ) : null}
                </div>

                <div className="contactform__lastname">
                  <label htmlFor="last-name" className="contactform__label">
                    Last name
                  </label>
                  <Field
                    name="lastName"
                    className="contactform__inputShort"
                    placeholder="Lastname"
                    type="text"
                  />
                  {errors.lastName && touched.lastName ? (
                    <div className="input__error">{errors.lastName}</div>
                  ) : null}
                </div>
              </div>
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
                <div className="input__error">{errors.email}</div>
              ) : null}
              <label htmlFor="phone" className="contactform__label">
                Phone Number
              </label>
              <Field
                name="phoneNumber"
                type="text"
                className="contactform__input"
                placeholder="+ 47"
              />
              {errors.phoneNumber && touched.phoneNumber ? (
                <div className="input__error">{errors.phoneNumber}</div>
              ) : null}
              <div className="cardInfo">
                <label htmlFor="cardnumber" className="contactform__label">
                  Card Number
                </label>
                <Field
                  name="cardNumber"
                  className="contactform__input"
                  type="text"
                  placeholder="---- ---- ---- ----"
                />
                {errors.cardNumber && touched.cardNumber ? (
                  <div className="input__error">{errors.cardNumber}</div>
                ) : null}

                <div className="form__date-code-div">
                  <label htmlFor="expireDate" className="contactform__label">
                    Expires
                  </label>
                  <Field
                    name="expireDate"
                    type="date"
                    className="contactform__input"
                    placeholder="MM/YY"
                  />
                  {errors.expireDate && touched.expireDate ? (
                    <div className="input__error">{errors.expireDate}</div>
                  ) : null}
                  <label htmlFor="CVC" className="contactform__label">
                    CVC/CVV
                  </label>
                  <Field
                    name="cvcCode"
                    type="text"
                    className="contactform__input"
                    placeholder="Code"
                  />
                  {errors.cvcCode && touched.cvcCode ? (
                    <div className="input__error">{errors.cvcCode}</div>
                  ) : null}
                </div>
              </div>

              <div className="contactform__BtnDiv bookingform__btn">
                {/* <Link href={"/"} passHref> */}
                <button type="submit" className="formBtn">
                  Send booking
                </button>
                {/* </Link> */}
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  </div>
);
