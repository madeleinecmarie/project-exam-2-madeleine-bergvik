import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  identifier: Yup.string()
    .email("Invalid username")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "You need more then 6 letters in your password")
    .max(30, "Your password is too long.")
    .required("Password is required"),
});

const LoginComponent = () => {
  const router = useRouter();
  const [error, setError] = useState(false);

  const handleSubmit = async (values) => {
    try {
      await axios.post("/api/login", { ...values });
      router.push("/admin");
      setError(false);
    } catch (err) {
      console.log(err.response.data);
      setError(true);
    }
  };

  return (
    <div>
      <Formik
        initialValues={{
          identifier: "",
          password: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          handleSubmit(values);
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="login">
              <div className="login__wrapper">
                <h1 className="login__headline">Log in</h1>
                <div>
                  <label
                    htmlFor="identifier"
                    className="contactform__label login__label"
                  >
                    Email
                  </label>
                  <Field
                    className="contactform__input"
                    // placeholder="Username"
                    type="text"
                    name="identifier"
                  />
                  {errors.identifier && touched.identifier ? (
                    <span className="login__error">{errors.identifier}</span>
                  ) : null}
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="contactform__label login__password-label"
                  >
                    Password
                  </label>
                  <Field
                    className="contactform__input"
                    // placeholder="Password"
                    type="password"
                    name="password"
                  />
                  {errors.password && touched.password ? (
                    <span className="login__error">{errors.password}</span>
                  ) : null}

                  <div>
                    {error ? (
                      <span className="login__error">
                        Username or password is wrong
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="contactform__BtnDiv login__btn">
                  <button type="submit" className="formBtn">
                    Log in
                  </button>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginComponent;
