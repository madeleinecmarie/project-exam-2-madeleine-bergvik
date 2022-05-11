import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const regExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Firstname is too short")
    .max(50, "Firstname is way too long")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Lastname is too short")
    .max(50, "Lastname is way too long")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phoneNumber: Yup.string()
    .matches(regExp, "The phonenumber is not valid")
    .required("Required"),
  cardNumber: Yup.string()
    .matches(regExp, "Invalid cardnumber")
    .required("Required"),
  expireDate: Yup.string()
    .min(2, "Expiredate do not match the cardnumber")
    .max(8, "Date too short")
    .required("Required"),
  cvcCode: Yup.string()
    .min(2, "Security code not valid")
    .max(4, "Security code must be 3 numbers long")
    .required("Required"),
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
              <div className="contactform">
                <div>
                  <label htmlFor="first-name" className="contactform__label">
                    Firstname
                  </label>
                  <Field
                    name="firstName"
                    className="contactform__inputShort"
                    placeholder="Firstname"
                  />
                  {errors.firstName && touched.firstName ? (
                    <div style={{ color: "red" }}>{errors.firstName}</div>
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
                  />
                  {errors.lastName && touched.lastName ? (
                    <div style={{ color: "red" }}>{errors.lastName}</div>
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
                <div style={{ color: "red" }}>{errors.email}</div>
              ) : null}
              <label htmlFor="phone" className="contactform__label">
                Phone Number
              </label>
              <Field
                name="phone"
                type="number"
                className="contactform__input"
                placeholder="+ 47"
              />
              {errors.phoneNumber && touched.phoneNumber ? (
                <div style={{ color: "red" }}>{errors.phoneNumber}</div>
              ) : null}
              <div className="cardInfo">
                <label htmlFor="cardnumber" className="contactform__label">
                  Card Number
                </label>
                <Field
                  name="cardnumber"
                  type="number"
                  className="contactform__input"
                  placeholder="---- ---- ---- ----"
                />
                {errors.cardNumber && touched.cardNumber ? (
                  <div style={{ color: "red" }}>{errors.cardNumber}</div>
                ) : null}

                <div className="form__date-code-div">
                  <label htmlFor="expireDate" className="contactform__label">
                    Expires
                  </label>
                  <Field
                    name="expireDate"
                    type="date"
                    className="contactform__input"
                    placeholder="MM / YY"
                  />
                  {errors.expireDate && touched.expireDate ? (
                    <div style={{ color: "red" }}>{errors.email}</div>
                  ) : null}
                  <label htmlFor="CVC" className="contactform__label">
                    CVC/CVV
                  </label>
                  <Field
                    name="CVC"
                    type="number"
                    className="contactform__input"
                    placeholder="Code"
                  />
                  {errors.cvcCode && touched.cvcCode ? (
                    <div style={{ color: "red" }}>{errors.cvcCode}</div>
                  ) : null}
                </div>
              </div>

              <div className="contactform__BtnDiv bookingform__btn">
                <button type="submit" className="formBtn">
                  Send booking
                </button>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  </div>
);
