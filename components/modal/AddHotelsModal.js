import { Icon } from "@iconify/react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name is too short")
    .max(30, "Name is way too long")
    .required("Name is required"),
  short_description: Yup.string()
    .min(10, "Description is too short")
    .max(200, "Description is way too long")
    .required("Description is required"),
  price: Yup.string()
    .min(200, "Price is too low")
    .max(6000, "Price is too high")
    .required("Price is required"),
  location: Yup.string()
    .min(4, "Location is too short")
    .max(40, "Location is too long")
    .required("Location is required"),
  description_1: Yup.string()
    .min(5, "Description is too short")
    .max(20, "Security code must be 3 letters long")
    .required("Description is required"),
  description_2: Yup.string()
    .min(5, "Description is too short")
    .max(20, "Description is too long")
    .required("Description is required"),
  description_3: Yup.string()
    .min(5, "Description is too short")
    .max(20, "Description is too long")
    .required("Description is required"),
  description_4: Yup.string()
    .min(5, "Description is too short")
    .max(20, "Description is too long")
    .required("Description is required"),
  property_surroundings_1: Yup.string()
    .min(5, "Property surroundings too short")
    .max(30, "Property surroundings too long")
    .required("Property surroundings is required"),
  property_surroundings_2: Yup.string()
    .min(1, "Property surroundings too short")
    .max(3, "Property surroundings too long")
    .required("Property surroundings is required"),
  property_surroundings_3: Yup.string()
    .min(1, "Property surroundings too short")
    .max(3, "Security code must be 3 letters long")
    .required("Property surroundings is required"),
  alt_featured_img: Yup.string()
    .min(5, "Alt text must be longer than 5 letters")
    .max(30, "Alt text are way too long")
    .required("Alt text is required"),
  alt_img: Yup.string()
    .min(5, "Alt text must be longer than 5 letters")
    .max(30, "Alt text are way too long")
    .required("Alt text is required"),
  amenities: Yup.string()
    .min(5, "Amenities must be longer than 5 letters")
    .max(50, "Amenities are way too long")
    .required("Amenities is required"),
});

const AddHotelsModal = ({ setIsOpen }) => {
  return (
    <>
      <div onClick={() => setIsOpen(false)} />
      <div className="modal-opacity-bgd addmodal__opacity">
        <div className="addmodal">
          <div className="modal addmodal__wrapper">
            <button
              className="modal__close-btn"
              onClick={() => setIsOpen(false)}
            >
              <Icon icon="ci:close-small" color="#f3ae54" height={46} />
            </button>
            <h2 className="addmodal__headline">Add hotels</h2>
            <div className="modal__form">
              <Formik
                initialValues={{
                  name: "",
                  short_description: "",
                  price: "",
                  location: "",
                  description_1: "",
                  description_2: "",
                  description_3: "",
                  description_4: "",
                  property_surroundings_1: "",
                  property_surroundings_2: "",
                  property_surroundings_3: "",
                  alt_featured_img: "",
                  amenities: "",
                  alt_img: "",
                }}
                validationSchema={SignupSchema}
                onSubmit={(values) => {
                  console.log(values);
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                    <div className="addhotelsform">
                      <div className="addhotelsform__wrapper">
                        <div className="addhotelsform__flex">
                          <div>
                            <label
                              htmlFor="name"
                              className="contactform__label"
                            >
                              Hotelname
                            </label>
                            <Field
                              name="name"
                              className="contactform__input"
                              type="text"
                            />
                            {errors.name && touched.name ? (
                              <div className="input__error">{errors.name}</div>
                            ) : null}
                          </div>
                          <div>
                            <label
                              htmlFor="price"
                              className="contactform__label"
                            >
                              Price/NOK
                            </label>
                            <Field
                              name="price"
                              className="contactform__input"
                              type="text"
                            />
                            {errors.price && touched.price ? (
                              <div className="input__error">{errors.price}</div>
                            ) : null}
                          </div>
                        </div>

                        <div className="addhotelsform__flex">
                          <div>
                            <label
                              htmlFor="name"
                              className="contactform__label"
                            >
                              Short description
                            </label>
                            <Field
                              name="short_description"
                              className="contactform__input"
                              type="text"
                            />
                            {errors.short_description &&
                            touched.short_description ? (
                              <div className="input__error">
                                {errors.short_description}
                              </div>
                            ) : null}
                          </div>
                          <div>
                            <label
                              htmlFor="location"
                              className="contactform__label"
                            >
                              Location
                            </label>
                            <Field
                              name="location"
                              className="contactform__input"
                              type="text"
                            />
                            {errors.location && touched.location ? (
                              <div className="input__error">
                                {errors.location}
                              </div>
                            ) : null}
                          </div>
                        </div>
                        <h3>Descriptions</h3>
                        <div className="addhotelsform__flex">
                          <div>
                            <label
                              htmlFor="description_1"
                              className="contactform__label"
                            >
                              Description 1
                            </label>
                            <Field
                              name="description_1"
                              className="contactform__input"
                              type="text"
                            />
                            {errors.description_1 && touched.description_1 ? (
                              <div className="input__error">
                                {errors.description_1}
                              </div>
                            ) : null}
                          </div>
                          <div>
                            <label
                              htmlFor="description_2"
                              className="contactform__label"
                            >
                              Description 2
                            </label>
                            <Field
                              name="description_2"
                              className="contactform__input"
                              type="text"
                            />
                            {errors.description_2 && touched.description_2 ? (
                              <div className="input__error">
                                {errors.description_2}
                              </div>
                            ) : null}
                          </div>
                        </div>
                        <div className="addhotelsform__flex">
                          <div>
                            <label
                              htmlFor="description_3"
                              className="contactform__label"
                            >
                              Description 3
                            </label>
                            <Field
                              name="description_3"
                              className="contactform__input"
                              type="text"
                            />
                            {errors.description_3 && touched.description_3 ? (
                              <div className="input__error">
                                {errors.description_3}
                              </div>
                            ) : null}
                          </div>
                          <div>
                            <label
                              htmlFor="description_4"
                              className="contactform__label"
                            >
                              Description 4
                            </label>
                            <Field
                              name="description_4"
                              className="contactform__input"
                              type="text"
                            />
                            {errors.description_4 && touched.description_4 ? (
                              <div className="input__error">
                                {errors.description_4}
                              </div>
                            ) : null}
                          </div>
                        </div>
                        <div className="addhotelsform__flex">
                          <div></div>
                          <div></div>
                        </div>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddHotelsModal;

{
  /* <h3>About the hotel</h3> */
}
