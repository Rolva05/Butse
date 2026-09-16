import { useState } from "react";

import { useNavigate } from "react-router-dom";

import ProfilePreview
  from "./ProfilePreview";

import {
  useAppContext
} from "../context/AppContext";


const campuses = [

  "Johannesburg",

  "Pretoria",

  "Cape Town",

  "Durban",

  "Bloemfontein"

];


const interests = [

  "Programming",

  "Design",

  "Data Science",

  "Networking",

  "Cybersecurity"

];


const initialForm = {

  fullName: "",

  studentNumber: "",

  campus: "",

  email: "",

  password: "",

  confirmPassword: "",

  interests: [],

  bio: "",

  terms: false

};


function validateField(
  name,
  value,
  form
) {

  switch (name) {

    case "fullName":

      return value.trim()
        ? ""
        : "Full Name is required.";


    case "studentNumber":

      if (!value) {

        return "Student Number is required.";

      }

      if (!/^\d+$/.test(value)) {

        return "Student Number must contain numbers only.";

      }

      if (value.length < 6) {

        return "Student Number must contain at least 6 digits.";

      }

      return "";


    case "campus":

      return value
        ? ""
        : "Please select a campus.";


    case "email":

      return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
        .test(value)

        ? ""

        : "Enter a valid email address.";


    case "password":

      return value.length >= 8

        ? ""

        : "Password must be at least 8 characters.";


    case "confirmPassword":

      return value === form.password

        ? ""

        : "Passwords must match.";


    case "interests":

      return value.length > 0

        ? ""

        : "Select at least one interest.";


    case "bio":

      if (!value.trim()) {

        return "Short Bio is required.";

      }

      return value.trim().length >= 20

        ? ""

        : "Short Bio must contain at least 20 characters.";


    case "terms":

      return value

        ? ""

        : "You must accept the Terms and Conditions.";


    default:

      return "";

  }

}


export default function SignUpForm() {

  const navigate = useNavigate();

  const { dispatch } =
    useAppContext();


  const [form, setForm] =
    useState(initialForm);


  const [errors, setErrors] =
    useState({});


  function updateField(
    name,
    value
  ) {

    const next = {
      ...form,
      [name]: value
    };


    setForm(next);


    if (errors[name]) {

      setErrors(
        (current) => ({

          ...current,

          [name]:
            validateField(
              name,
              value,
              next
            )

        })
      );

    }

  }


  function handleBlur(event) {

    const {
      name,
      value,
      type,
      checked
    } = event.target;


    const fieldValue =
      type === "checkbox"
        ? checked
        : value;


    setErrors(
      (current) => ({

        ...current,

        [name]:
          validateField(
            name,
            fieldValue,
            form
          )

      })
    );

  }


  function toggleInterest(
    interest
  ) {

    const nextInterests =
      form.interests.includes(
        interest
      )

        ? form.interests.filter(
            (item) =>
              item !== interest
          )

        : [
            ...form.interests,
            interest
          ];


    const next = {

      ...form,

      interests:
        nextInterests

    };


    setForm(next);


    setErrors(
      (current) => ({

        ...current,

        interests:
          validateField(
            "interests",
            nextInterests,
            next
          )

      })
    );

  }


  function validateAll() {

    const nextErrors = {};


    Object.keys(form).forEach(
      (field) => {

        const message =
          validateField(
            field,
            form[field],
            form
          );


        if (message) {

          nextErrors[field] =
            message;

        }

      }
    );


    setErrors(nextErrors);


    return (
      Object.keys(nextErrors)
        .length === 0
    );

  }


  function handleSubmit(event) {

    event.preventDefault();


    if (!validateAll()) {

      return;

    }


    const user = {

      fullName:
        form.fullName.trim(),

      studentNumber:
        form.studentNumber,

      campus:
        form.campus,

      email:
        form.email.trim(),

      password:
        form.password,

      interests:
        form.interests,

      bio:
        form.bio.trim(),

      termsAccepted:
        form.terms,

      registeredAt:
        new Date().toISOString()

    };


    dispatch({

      type: "REGISTER_USER",

      payload: user

    });


    navigate("/profile");

  }


  return (

    <section className="page-section container">

      <div className="section-heading">

        <span className="eyebrow">
          JOIN THE COMMUNITY
        </span>

        <h1>
          Create your Richfield Connect profile
        </h1>

        <p>
          Complete the form and see your
          academic profile update live.
        </p>

      </div>


      <div className="signup-layout">

        <form
          className="card form-card"
          onSubmit={handleSubmit}
          noValidate
        >

          <div className="form-grid">


            <Field
              label="Full Name"
              name="fullName"
              value={form.fullName}
              onChange={(e) =>
                updateField(
                  "fullName",
                  e.target.value
                )
              }
              onBlur={handleBlur}
              error={errors.fullName}
            />


            <Field
              label="Student Number"
              name="studentNumber"
              value={form.studentNumber}
              onChange={(e) =>
                updateField(
                  "studentNumber",
                  e.target.value
                )
              }
              onBlur={handleBlur}
              error={errors.studentNumber}
              inputMode="numeric"
            />


            <div className="field">

              <label htmlFor="campus">
                Campus
              </label>

              <select
                id="campus"
                name="campus"
                value={form.campus}
                onChange={(e) =>
                  updateField(
                    "campus",
                    e.target.value
                  )
                }
                onBlur={handleBlur}
              >

                <option value="">
                  Select campus
                </option>

                {campuses.map(
                  (campus) => (

                    <option
                      key={campus}
                      value={campus}
                    >
                      {campus}
                    </option>

                  )
                )}

              </select>


              {errors.campus && (

                <span className="field-error">
                  {errors.campus}
                </span>

              )}

            </div>


            <Field
              label="Email Address"
              name="email"
              type="email"
              value={form.email}
              onChange={(e) =>
                updateField(
                  "email",
                  e.target.value
                )
              }
              onBlur={handleBlur}
              error={errors.email}
            />


            <Field
              label="Password"
              name="password"
              type="password"
              value={form.password}
              onChange={(e) =>
                updateField(
                  "password",
                  e.target.value
                )
              }
              onBlur={handleBlur}
              error={errors.password}
            />


            <Field
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              value={
                form.confirmPassword
              }
              onChange={(e) =>
                updateField(
                  "confirmPassword",
                  e.target.value
                )
              }
              onBlur={handleBlur}
              error={
                errors.confirmPassword
              }
            />

          </div>


          <fieldset className="field-group">

            <legend>
              Interests
            </legend>


            <div className="checkbox-grid">

              {interests.map(
                (interest) => (

                  <label
                    className="check-option"
                    key={interest}
                  >

                    <input
                      type="checkbox"
                      checked={
                        form.interests.includes(
                          interest
                        )
                      }
                      onChange={() =>
                        toggleInterest(
                          interest
                        )
                      }
                    />

                    <span>
                      {interest}
                    </span>

                  </label>

                )
              )}

            </div>


            {errors.interests && (

              <span className="field-error">
                {errors.interests}
              </span>

            )}

          </fieldset>


          <div className="field">

            <label htmlFor="bio">
              Short Bio
            </label>


            <textarea
              id="bio"
              name="bio"
              rows="5"
              value={form.bio}
              onChange={(e) =>
                updateField(
                  "bio",
                  e.target.value
                )
              }
              onBlur={handleBlur}
              placeholder="Tell the Richfield community a little about your academic interests..."
            />


            <div className="field-meta">
              {form.bio.length} characters
            </div>


            {errors.bio && (

              <span className="field-error">
                {errors.bio}
              </span>

            )}

          </div>


          <label className="terms-option">

            <input
              type="checkbox"
              name="terms"
              checked={form.terms}
              onChange={(e) =>
                updateField(
                  "terms",
                  e.target.checked
                )
              }
              onBlur={handleBlur}
            />

            <span>
              I accept the Terms and Conditions.
            </span>

          </label>


          {errors.terms && (

            <span className="field-error terms-error">
              {errors.terms}
            </span>

          )}


          <button
            className="btn btn-primary full-width"
            type="submit"
          >
            Register & View Profile
          </button>

        </form>


        <ProfilePreview
          formData={form}
        />

      </div>

    </section>

  );

}


function Field({

  label,

  name,

  value,

  onChange,

  onBlur,

  error,

  type = "text",

  inputMode

}) {

  return (

    <div className="field">

      <label htmlFor={name}>
        {label}
      </label>


      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        inputMode={inputMode}
      />


      {error && (

        <span className="field-error">
          {error}
        </span>

      )}

    </div>

  );

}