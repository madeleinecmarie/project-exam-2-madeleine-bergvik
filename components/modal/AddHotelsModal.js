import { Icon } from "@iconify/react";
import { Formik, Form, Field, FieldArray, getIn } from "formik";
import * as Yup from "yup";
import React from "react";

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
    .min(5, "Description 1 is too short")
    .max(20, "Description 1 is too long")
    .required("Description 1 is required"),
  description_2: Yup.string()
    .min(5, "Description 2 is too short")
    .max(20, "Description 2 is too long")
    .required("Description 2 is required"),
  description_3: Yup.string()
    .min(5, "Description 3 is too short")
    .max(20, "Description 3 is too long")
    .required("Description 3 is required"),
  description_4: Yup.string()
    .min(5, "Description  4 is too short")
    .max(20, "Description 4 is too long")
    .required("Description 4 is required"),
  property_surroundings_1: Yup.string()
    .min(5, "Property surroundings 1 too short")
    .max(30, "Property surroundings 1 too long")
    .required("Property surroundings 1 is required"),
  property_surroundings_2: Yup.string()
    .min(1, "Property surroundings 2 is too short")
    .max(3, "Property surroundings 2 is too long")
    .required("Property surroundings 2 is required"),
  property_surroundings_3: Yup.string()
    .min(1, "Property surroundings 3 too short")
    .max(3, "Property surroundings 3 is too long")
    .required("Property surroundings 3 is required"),
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
  id: Yup.string().required("ID is required"),
  stars: Yup.string()
    .min(1, "Stars must be longer than 1")
    .max(5, "Stars can not be longer than 5")
    .required("Stars is required"),
  alt_img: Yup.string()
    .min(5, "Alt text must be longer than 5 letters")
    .max(30, "Alt text are way too long")
    .required("Alt text is required"),
  slider: Yup.array()
    .of(
      Yup.object().shape({
        image: Yup.string()
          .required("Image required")
          .min(4, "Image link must be longer")
          .matches(
            /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
            "Enter correct image url"
          ),
      })
    )
    .required("You must add images")
    .min(4, "Minimum of 4 image urls"),
});

const ErrorMessage = ({ image }) => (
  <Field name={image}>
    {({ form }) => {
      const error = getIn(form.errors, image);
      const touch = getIn(form.touched, image);
      return touch || error ? (
        <div className="input__error">{error}</div>
      ) : null;
    }}
  </Field>
);

const AddHotelsModal = ({ setIsOpen }) => {
  //   const [checked, setChecked] = React.useState(true);
  return (
    <>
      <div onClick={() => setIsOpen(false)} />
      <div className="modal-opacity-bgd">
        <div className="modal addmodal">
          <button className="modal__close-btn" onClick={() => setIsOpen(false)}>
            <Icon icon="ci:close-small" color="#f3ae54" height={46} />
          </button>
          <h2 className="addmodal__headline">Add a new hotel</h2>
          {/* <div className="modal__form"> */}
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
              id: "",
              stars: "",
              free_cancellation: false,
              slider: [],
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ errors, touched, values }) => (
              <Form>
                <div className="addhotelsform">
                  <div className="addhotelsform__wrapper">
                    <div className="addhotelsform__flex">
                      <div>
                        <label htmlFor="name" className="contactform__label">
                          Hotelname
                        </label>
                        <Field
                          name="name"
                          className="addhotelsform__input"
                          type="text"
                        />
                        {errors.name && touched.name ? (
                          <div className="input__error">{errors.name}</div>
                        ) : null}
                      </div>
                      <div>
                        <label htmlFor="id" className="contactform__label">
                          ID
                        </label>
                        <Field
                          name="id"
                          className="addhotelsform__input addhotelsform__input-short"
                          type="text"
                        />
                        {errors.id && touched.id ? (
                          <div className="input__error">{errors.id}</div>
                        ) : null}
                      </div>
                      <div>
                        <label htmlFor="price" className="contactform__label">
                          Price/NOK
                        </label>
                        <Field
                          name="price"
                          className="addhotelsform__input addhotelsform__input-short"
                          type="text"
                        />
                        {errors.price && touched.price ? (
                          <div className="input__error">{errors.price}</div>
                        ) : null}
                      </div>

                      <div>
                        <label htmlFor="stars" className="contactform__label">
                          Stars
                        </label>
                        <Field
                          name="stars"
                          className="addhotelsform__input addhotelsform__input-short"
                          type="text"
                        />
                        {errors.stars && touched.stars ? (
                          <div className="input__error">{errors.stars}</div>
                        ) : null}
                      </div>
                    </div>

                    <div className="addhotelsform__flex">
                      <div>
                        <label htmlFor="name" className="contactform__label">
                          Short description
                        </label>
                        <Field
                          name="short_description"
                          className="addhotelsform__input"
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
                          className="addhotelsform__input"
                          type="text"
                        />
                        {errors.location && touched.location ? (
                          <div className="input__error">{errors.location}</div>
                        ) : null}
                      </div>
                    </div>
                    <h3 className="addhotelsform__h3">Descriptions</h3>
                    <p>Write 4 smaller sections of text</p>
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
                          className="addhotelsform__input addhotelsform__input-height"
                          type="text"
                          component="textarea"
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
                          className="addhotelsform__input addhotelsform__input-height"
                          type="text"
                          component="textarea"
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
                          className="addhotelsform__input addhotelsform__input-height"
                          type="text"
                          component="textarea"
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
                          className="addhotelsform__input addhotelsform__input-height"
                          type="text"
                          component="textarea"
                        />
                        {errors.description_4 && touched.description_4 ? (
                          <div className="input__error">
                            {errors.description_4}
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <h3 className="addhotelsform__h3">Property surroundings</h3>
                    <div className="addhotelsform__flex">
                      <div>
                        <label
                          htmlFor="property_surroundings_1"
                          className="contactform__label"
                        >
                          Property surroundings 1
                        </label>
                        <Field
                          name="property_surroundings_1"
                          className="addhotelsform__input addhotelsform__input-height"
                          type="text"
                          component="textarea"
                        />
                        {errors.property_surroundings_1 &&
                        touched.property_surroundings_1 ? (
                          <div className="input__error">
                            {errors.property_surroundings_1}
                          </div>
                        ) : null}
                      </div>
                      <div>
                        <label
                          htmlFor="property_surroundings_2"
                          className="contactform__label"
                        >
                          Property surroundings 2
                        </label>
                        <Field
                          name="property_surroundings_2"
                          className="addhotelsform__input addhotelsform__input-height"
                          type="text"
                          component="textarea"
                        />
                        {errors.property_surroundings_2 &&
                        touched.property_surroundings_2 ? (
                          <div className="input__error">
                            {errors.property_surroundings_2}
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <div className="addhotelsform__flex">
                      <div>
                        <label
                          htmlFor="property_surroundings_3"
                          className="contactform__label"
                        >
                          Property surroundings 3
                        </label>
                        <Field
                          name="property_surroundings_3"
                          className="addhotelsform__input addhotelsform__input-height"
                          type="text"
                          component="textarea"
                        />
                        {errors.property_surroundings_3 &&
                        touched.property_surroundings_3 ? (
                          <div className="input__error">
                            {errors.property_surroundings_3}
                          </div>
                        ) : null}
                      </div>
                      <div></div>
                    </div>
                    <h3 className="addhotelsform__h3">
                      Alt text images & hotel amenities
                    </h3>
                    <div className="addhotelsform__flex">
                      <div>
                        <label htmlFor="alt_img" className="contactform__label">
                          Location image alt
                        </label>
                        <Field
                          name="alt_img"
                          className="addhotelsform__input"
                          type="text"
                        />
                        {errors.alt_img && touched.alt_img ? (
                          <div className="input__error">{errors.alt_img}</div>
                        ) : null}
                      </div>
                      <div>
                        <div>
                          <label
                            htmlFor="amenities"
                            className="contactform__label"
                          >
                            Amenities
                          </label>
                          <Field
                            name="amenities"
                            className="addhotelsform__input"
                            type="text"
                          />
                          {errors.amenities && touched.amenities ? (
                            <div className="input__error">
                              {errors.amenities}
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="addhotelsform__checkbox-wrapper">
                    <h3>Does the hotel have free cancellation?</h3>
                    <label>
                      <Field
                        name="free_cancellation"
                        type="checkbox"
                        //   defaultChecked={!checked}
                        //   onChange={() => setChecked(!checked)}
                      />
                      <span className="addhotelsform__checkbox-span">
                        Free cancellation
                      </span>
                    </label>
                  </div>
                  <div>
                    <h3 className="addhotelsform__h3">Add slider images</h3>

                    <div>
                      <FieldArray
                        name="slider"
                        render={(arrayHelpers) => (
                          <div>
                            {values.slider && values.slider.length > 0 ? (
                              values.slider.map((value, index) => (
                                <div key={index}>
                                  <Field
                                    name={`slider.${index}.image`}
                                    className="addhotelsform__input"
                                  />
                                  <ErrorMessage
                                    image={`slider.[${index}].image`}
                                  />
                                  <div className="addhotelsform__btn-wrapper">
                                    <div>
                                      <button
                                        type="button"
                                        className="addhotelsform__btn"
                                        onClick={() =>
                                          arrayHelpers.insert(index, "")
                                        }
                                      >
                                        Add another image
                                      </button>
                                    </div>
                                    <div>
                                      <button
                                        type="button"
                                        className="addhotelsform__btn addhotelsform__btn-remove"
                                        onClick={() =>
                                          arrayHelpers.remove(index)
                                        }
                                      >
                                        Remove image
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              ))
                            ) : (
                              <button
                                type="button"
                                onClick={() => arrayHelpers.push("")}
                                className="addhotelsform__btn"
                              >
                                Add slider image
                              </button>
                            )}
                            <div>
                              <button type="submit">Submit</button>
                            </div>
                          </div>
                        )}
                      />
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default AddHotelsModal;

// Need to add:

// free_cancellation
