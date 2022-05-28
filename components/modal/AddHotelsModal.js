import { Icon } from "@iconify/react";
import { Formik, Form, Field, FieldArray, getIn } from "formik";
import * as Yup from "yup";
import React from "react";
import axios from "axios";
import { BaseURL } from "../../lib/apiUrl";
import { useRouter } from "next/router";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name is too short")
    .max(30, "Name is way too long")
    .required("Name is required"),
  short_description: Yup.string()
    .min(10, "Description is too short")
    .max(400, "Description is way too long")
    .required("Description is required"),
  price: Yup.string().required("Price is required"),
  location: Yup.string()
    .min(4, "Location is too short")
    .max(40, "Location is too long")
    .required("Location is required"),
  description_1: Yup.string()
    .min(5, "Description 1 is too short")
    .max(200, "Description 1 is too long")
    .required("Description 1 is required"),
  description_2: Yup.string()
    .min(5, "Description 2 is too short")
    .max(200, "Description 2 is too long")
    .required("Description 2 is required"),
  description_3: Yup.string()
    .min(5, "Description 3 is too short")
    .max(200, "Description 3 is too long")
    .required("Description 3 is required"),
  description_4: Yup.string()
    .min(5, "Description  4 is too short")
    .max(200, "Description 4 is too long")
    .required("Description 4 is required"),
  property_surroundings_1: Yup.string()
    .min(5, "Main amenities too short")
    .max(100, "Main amenities too long")
    .required("Main amenities is required"),
  property_surroundings_2: Yup.string()
    .min(1, "Room amenities is too short")
    .max(100, "Room amenities is too long")
    .required("Room amenities is required"),
  property_surroundings_3: Yup.string()
    .min(1, "What's around is too short")
    .max(100, "What's around is too long")
    .required("What's around is required"),
  stars: Yup.string()
    .min(0, "Need to add stars")
    .max(1, "Stars can only be 1-5")
    .required("Stars is required"),
  location_img: Yup.string()
    .required("Location image is required")
    .min(4, "Image link must be longer")
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      "Enter correct image url"
    ),
  featured_img: Yup.string()
    .required("Featured image is required")
    .min(4, "Image link must be longer")
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      "Enter correct image url"
    ),
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
    .min(3, "Minimum of 3 image urls"),
  reviews: Yup.array()
    .of(
      Yup.object().shape({
        title: Yup.string()
          .min(4, "Title is too short")
          .max(20, "Title is too long")
          .required("Title is required"),
        headline: Yup.string()
          .min(4, "Headline is too short")
          .max(20, "Headline is too long")
          .required("Headline is required"),
        description: Yup.string()
          .min(4, "Description is too short")
          .max(100, "Description is too long")
          .required("Description is required"),
        date: Yup.string()
          .min(4, "Date is too short")
          .max(30, "Date is too long")
          .required("Date is required"),
        image: Yup.string()
          .required("Image required")
          .min(1, "Image link must be longer")
          .matches(
            /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
            "Enter correct image url"
          ),
      })
    )
    .required("You must have reviews")
    .min(3, "Minimum 3 reviews"),
});

const ErrorMessage = ({ item }) => (
  <Field name={item}>
    {({ form }) => {
      const error = getIn(form.errors, item);
      const touch = getIn(form.touched, item);
      return touch || error ? (
        <div className="input__error">{error}</div>
      ) : null;
    }}
  </Field>
);

const AddHotelsModal = ({ setIsOpen, JWT }) => {
  const router = useRouter();

  return (
    <>
      <div onClick={() => setIsOpen(false)} />
      <div className="modal-opacity-bgd">
        <div className="modal addmodal">
          <button className="modal__close-btn" onClick={() => setIsOpen(false)}>
            <Icon icon="ci:close-small" color="#f3ae54" height={46} />
          </button>
          <h2 className="addmodal__headline">Add a new hotel</h2>

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
              stars: "",
              location_img: "",
              featured_img: "",
              free_cancellation: false,
              free_wifi: false,
              queen_size_bed: false,
              non_smoking_rooms: false,
              bar: false,
              pets_allowed: false,
              swimming_pool: false,
              shower_only: false,
              free_parking: false,
              slider: [],
              reviews: [],
            }}
            validationSchema={SignupSchema}
            onSubmit={(newHotel) => {
              console.log(newHotel);
              console.log(JWT);
              async function postNewHotel(newHotel) {
                let res = await axios.post(`${BaseURL}hotels/`, newHotel, {
                  headers: {
                    Authorization: `Bearer ${JWT}`,
                  },
                });
                console.log("res", res);
                alert("Nice! A new hotel is added");
                router.replace(router.asPath);
              }
              postNewHotel(newHotel);
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
                          id="name"
                          name="name"
                          className="addhotelsform__input"
                          type="text"
                        />
                        {errors.name && touched.name ? (
                          <div className="input__error">{errors.name}</div>
                        ) : null}
                      </div>
                      <div>
                        <label htmlFor="price" className="contactform__label">
                          Price/NOK
                        </label>
                        <Field
                          id="price"
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
                          Stars (1-5)
                        </label>
                        <Field
                          id="stars"
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
                          Featured image
                        </label>
                        <Field
                          id="featured_img"
                          name="featured_img"
                          className="addhotelsform__input"
                          type="text"
                        />
                        {errors.featured_img && touched.featured_img ? (
                          <div className="input__error">
                            {errors.featured_img}
                          </div>
                        ) : null}
                      </div>
                      <div>
                        <label htmlFor="name" className="contactform__label">
                          Short description
                        </label>
                        <Field
                          id="short_description"
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
                    </div>
                    <h3 className="addhotelsform__h3">Location</h3>
                    <div className="addhotelsform__flex">
                      <div>
                        <label
                          htmlFor="location"
                          className="contactform__label"
                        >
                          Location
                        </label>
                        <Field
                          id="location"
                          name="location"
                          className="addhotelsform__input"
                          type="text"
                        />
                        {errors.location && touched.location ? (
                          <div className="input__error">{errors.location}</div>
                        ) : null}
                      </div>
                      <div>
                        <label
                          htmlFor="location_img"
                          className="contactform__label"
                        >
                          Location image
                        </label>
                        <Field
                          id="location_img"
                          name="location_img"
                          className="addhotelsform__input"
                        ></Field>
                        {errors.location_img && touched.location_img ? (
                          <div className="input__error">
                            {errors.location_img}
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <h3 className="addhotelsform__h3">Descriptions</h3>
                    <p>Write 4 smaller sections of text about the hotel</p>

                    <div className="addhotelsform__flex">
                      <div>
                        <label
                          htmlFor="description_1"
                          className="contactform__label"
                        >
                          Description 1
                        </label>
                        <Field
                          id="description_1"
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
                          id="description_2"
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
                          id="description_3"
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
                          id="description_4"
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
                          Main amenities
                        </label>
                        <Field
                          id="property_surroundings_1"
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
                          Room amenities
                        </label>
                        <Field
                          id="property_surroundings_2"
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
                          Whats around
                        </label>
                        <Field
                          id="property_surroundings_3"
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
                    <h3 className="addhotelsform__h3">Amenities</h3>
                    <div className="addhotelsform__flex">
                      <div>
                        <div className="addhotelsform__checkboxes-1">
                          <label>
                            <Field
                              id="free_wifi"
                              name="free_wifi"
                              type="checkbox"
                            />
                            <span className="addhotelsform__checkbox-span">
                              Free WiFi
                            </span>
                          </label>
                          <label>
                            <Field
                              id="queen_size_bed"
                              name="queen_size_bed"
                              type="checkbox"
                            />
                            <span className="addhotelsform__checkbox-span">
                              Queen size bed
                            </span>
                          </label>
                          <label>
                            <Field
                              id="non_smoking_rooms"
                              name="non_smoking_rooms"
                              type="checkbox"
                            />
                            <span className="addhotelsform__checkbox-span">
                              Non smoking rooms
                            </span>
                          </label>
                          <label>
                            <Field
                              id="parking"
                              name="parking"
                              type="checkbox"
                            />
                            <span className="addhotelsform__checkbox-span">
                              Parking
                            </span>
                          </label>
                          <label>
                            <Field id="bar" name="bar" type="checkbox" />
                            <span className="addhotelsform__checkbox-span">
                              Bar
                            </span>
                          </label>
                        </div>
                        <div className="addhotelsform__checkboxes-2">
                          <label>
                            <Field
                              id="pets_allowed"
                              name="pets_allowed"
                              type="checkbox"
                            />
                            <span className="addhotelsform__checkbox-span">
                              Pets allowed
                            </span>
                          </label>
                          <label>
                            <Field
                              id="swimming_pool"
                              name="swimming_pool"
                              type="checkbox"
                            />
                            <span className="addhotelsform__checkbox-span">
                              Swimming pool
                            </span>
                          </label>
                          <label>
                            <Field
                              id="shower_only"
                              name="shower_only"
                              type="checkbox"
                            />
                            <span className="addhotelsform__checkbox-span">
                              Shower only
                            </span>
                          </label>
                          <label>
                            <Field
                              id="free_parking"
                              name="free_parking"
                              type="checkbox"
                            />
                            <span className="addhotelsform__checkbox-span">
                              Free parking
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="addhotelsform__h3">Add slider images</h3>

                    <div>
                      <FieldArray
                        id="slider"
                        name="slider"
                        render={(arrayHelpers) => (
                          <div>
                            {values.slider && values.slider.length > 0 ? (
                              values.slider.map((value, index) => (
                                <div key={index}>
                                  <Field
                                    name={`slider.${index}.image`}
                                    className="addhotelsform__input"
                                    type="text"
                                    alt="Image of hotelrooms"
                                  />
                                  <ErrorMessage
                                    item={`slider.[${index}].image`}
                                    alt="Images of hotelrooms and amenities"
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
                          </div>
                        )}
                      />

                      <FieldArray
                        id="reviews"
                        name="reviews"
                        render={(arrayReviews) => (
                          <div>
                            {values.reviews && values.reviews.length > 0 ? (
                              values.reviews.map((value, index) => (
                                <div key={index}>
                                  <div className="addhotelsform__flex">
                                    <div>
                                      <label
                                        htmlFor="title"
                                        className="contactform__label"
                                      >
                                        Title
                                      </label>
                                      <Field
                                        id={`reviews.${index}.title`}
                                        name={`reviews.${index}.title`}
                                        className="addhotelsform__input"
                                        type="text"
                                      />

                                      <ErrorMessage
                                        item={`reviews.[${index}].title`}
                                      />
                                    </div>
                                    <div>
                                      <label
                                        htmlFor="headline"
                                        className="contactform__label"
                                      >
                                        Headline
                                      </label>
                                      <Field
                                        name={`reviews.${index}.headline`}
                                        className="addhotelsform__input"
                                        type="text"
                                      />
                                      <ErrorMessage
                                        item={`reviews.[${index}].headline`}
                                      />
                                    </div>
                                  </div>
                                  <div className="addhotelsform__flex">
                                    <div>
                                      <label
                                        htmlFor="date"
                                        className="contactform__label"
                                      >
                                        Date
                                      </label>
                                      <Field
                                        name={`reviews.${index}.date`}
                                        className="addhotelsform__input"
                                        type="date"
                                      />
                                      <ErrorMessage
                                        item={`reviews.[${index}].date`}
                                      />
                                    </div>
                                    <div>
                                      <label
                                        htmlFor="image"
                                        className="contactform__label"
                                      >
                                        Image
                                      </label>
                                      <Field
                                        name={`reviews.${index}.image`}
                                        className="addhotelsform__input"
                                        type="text"
                                        alt="Image of avatar"
                                      />
                                      <ErrorMessage
                                        item={`reviews.[${index}].image`}
                                      />
                                    </div>
                                  </div>

                                  <div>
                                    <div>
                                      <label
                                        htmlFor="description"
                                        className="contactform__label"
                                      >
                                        Description
                                      </label>
                                      <Field
                                        name={`reviews.${index}.description`}
                                        className="addhotelsform__input addhotelsform__input-height"
                                        type="text"
                                        component="textarea"
                                      />
                                      <ErrorMessage
                                        item={`reviews.[${index}].description`}
                                      />
                                    </div>
                                    {/* <div>
                                          <label
                                            htmlFor="alt"
                                            className="contactform__label"
                                          >
                                            Alt
                                          </label>
                                          <Field
                                            name={`reviews.${index}.alt`}
                                            className="addhotelsform__input"
                                            type="text"
                                            alt="Image of avatar"
                                          />
                                          <ErrorMessage
                                            item={`reviews.[${index}].alt`}
                                          />
                                        </div> */}
                                  </div>

                                  <div className="addhotelsform__btn-wrapper">
                                    <div>
                                      <button
                                        type="button"
                                        className="addhotelsform__btn"
                                        onClick={() =>
                                          arrayReviews.insert(index, "")
                                        }
                                      >
                                        Add another review
                                      </button>
                                    </div>
                                    <div>
                                      <button
                                        type="button"
                                        className="addhotelsform__btn addhotelsform__btn-remove"
                                        onClick={() =>
                                          arrayReviews.remove(index)
                                        }
                                      >
                                        Remove review
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              ))
                            ) : (
                              <button
                                type="button"
                                onClick={() => arrayReviews.push("")}
                                className="addhotelsform__btn"
                              >
                                Add review
                              </button>
                            )}
                          </div>
                        )}
                      />

                      {/* <div>
                        {errors.slider && touched.slider ? (
                          <div className="input__error">
                            {errors.slider === "string" ? (
                              <div>{errors.slider}</div>
                            ) : null}
                          </div>
                        ) : null}
                      </div> */}
                    </div>

                    <div className="addhotelsform__checkbox-wrapper">
                      <h3>Add reviews</h3>

                      <div></div>
                      {/* <div>
                          {errors.reviews && touched.reviews ? (
                            <div className="input__error">
                              {errors.reviews === "string" ? (
                                <div>{errors.reviews}</div>
                              ) : null}
                            </div>
                          ) : null}
                        </div> */}

                      <div>
                        <h3>Does the hotel have free cancellation?</h3>
                        <div className="addhotelsform__label-freecancellation">
                          <label>
                            <Field
                              id="free_cancellation"
                              name="free_cancellation"
                              type="checkbox"
                            />
                            <span className="addhotelsform__checkbox-span">
                              Free cancellation
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="formBtn addhotelsform__submit-btn"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default AddHotelsModal;
