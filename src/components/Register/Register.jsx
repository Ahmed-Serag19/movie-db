import React, { useState } from "react";
import axios from "axios";
import { FaSpinner } from "react-icons/fa";
import Joi from "joi";

import "./Register.css";

export default function Register(props) {
  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);

  const [errorList, setErrorList] = useState([]);

  const [userData, getUserData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    age: "",
  });

  function handleUserData(event) {
    const { name, value } = event.target;
    getUserData((prevUserData) => {
      return {
        ...prevUserData,
        [name]: value,
      };
    });
  }

  function validateRegisterForm() {
    const schema = Joi.object({
      first_name: Joi.string().min(3).max(10).required(),
      last_name: Joi.string().min(3).max(10).required(),
      email: Joi.string()
        .email({ tlds: { allow: ["com", "net", "eg"] } })
        .required(),
      password: Joi.string()
        .pattern(new RegExp("^[A-Z][a-z0-9]{3,20}$"))
        .required(),
      age: Joi.number().min(12).max(80).required(),
    });
    return schema.validate(userData, { abortEarly: false });
  }

  async function formSubmit(e) {
    e.preventDefault();
    setLoading(true);
    let validationResponse = validateRegisterForm();
    if (validationResponse.error) {
      setErrorList(validationResponse.error.details);
      setLoading(false);
    } else {
      let { data } = await axios.post(
        "https://route-egypt-api.herokuapp.com/signup",
        userData
      );
      if (data.message === "success") {
        document
          .querySelector(".register-success")
          .classList.remove("display-none");
        setTimeout(() => props.history.push("/login"), 2000);
        setLoading(false);
      } else {
        setLoading(false);
        setError(data.message);
      }
    }
  }

  const showErrors = errorList.map((error) =>
    error.message.includes(`"password" with value`) ? (
      <div className="alert alert-danger">
        Password must start with capital letter and minimum is 4
      </div>
    ) : (
      <div className="alert alert-danger">{error.message}</div>
    )
  );

  return (
    <div className="row">
      <section className="register-page w-75 mx-auto my-5 col-lg-8 col-md-8 col-sm-12 col-xs-12">
        <div className="register-success alert alert-primary text-center display-none">
          <h1>Register Success</h1>
        </div>
        <div className="pt-4 w-75 m-auto">
          <h1>Register now</h1>
          <form onSubmit={formSubmit} className="py-4">
            {showErrors}
            <div className="my-2 ">
              <label className="my-2" htmlFor="first_name">
                First name:
              </label>
              <input
                onChange={handleUserData}
                type="text"
                className="form-control"
                name="first_name"
                value={userData.first_name}
              />
            </div>
            <div className="my-2 ">
              <label className="my-2" htmlFor="last_name">
                Last name:
              </label>
              <input
                onChange={handleUserData}
                type="text"
                className="form-control"
                name="last_name"
                value={userData.last_name}
              />
            </div>
            <div className="my-2 ">
              <label className="my-2" htmlFor="email">
                Email Address:
              </label>
              <input
                onChange={handleUserData}
                type="email"
                className="form-control"
                name="email"
                value={userData.email}
              />
              {error && (
                <div className="alert alert-danger mt-2">
                  Email already exists
                </div>
              )}
            </div>
            <div className="my-2 ">
              <label className="my-2" htmlFor="password">
                Password:
              </label>
              <input
                onChange={handleUserData}
                type="password"
                className="form-control"
                name="password"
                value={userData.password}
              />
            </div>
            <div className="my-2 ">
              <label className="my-2" htmlFor="age">
                Age:
              </label>
              <input
                onChange={handleUserData}
                type="number"
                className="form-control"
                name="age"
                value={userData.age}
              />
            </div>
            <button type="submit" className="my-3 btn btn-outline-danger">
              {loading ? <FaSpinner className="spinner" /> : "Sign up"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
