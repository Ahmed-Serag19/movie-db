import React, { useState } from "react";
import axios from "axios";
import Joi from "joi";
import { FaSpinner } from "react-icons/fa";
import "./Login.css";

export default function Login(props) {
  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);

  const [errorList, setErrorList] = useState([]);

  const [userData, getUserData] = useState({
    email: "",
    password: "",
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

  async function formSubmit(e) {
    e.preventDefault();
    setLoading(true);
    let validationResponse = validateRegisterForm();
    if (validationResponse.error) {
      setErrorList(validationResponse.error.details);
      setLoading(false);
    } else {
      let { data } = await axios.post(
        "https://route-egypt-api.herokuapp.com/signin",
        userData
      );
      if (data.message === "success") {
        localStorage.setItem("userToken", data.token);
        setTimeout(() => props.history.push("/home"), 1000);
        setLoading(true);
        props.getUserInfo();
      } else {
        setLoading(false);
        setError(data.message);
      }
    }
  }

  function validateRegisterForm() {
    const schema = Joi.object({
      email: Joi.string()
        .email({ tlds: { allow: ["com", "net", "eg"] } })
        .required(),
      password: Joi.string().required(),
    });
    return schema.validate(userData, { abortEarly: false });
  }

  return (
    <section className="login-page w-75 mx-auto my-5 col-lg-8 col-md-8 col-sm-12 col-xs-12">
      <div className="pt-4 w-75 m-auto">
        {error && <div className="alert alert-danger">{error}</div>}
        {errorList.map((error) => (
          <div className="alert alert-danger">{error.message}</div>
        ))}
        <h1>Login</h1>
        <form onSubmit={formSubmit} className="py-4">
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

          <button type="submit" className="my-3 btn btn-outline-danger">
            {loading ? <FaSpinner className="spinner" /> : "Login"}
          </button>
        </form>
      </div>
    </section>
  );
}
