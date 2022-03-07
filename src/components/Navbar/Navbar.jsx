import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { GoGrabber } from "react-icons/go";

export default function Navbar(props) {
  function showLinks() {
    document.querySelector(".burger-links").classList.toggle("show-opacity");
  }
  return (
    <nav id="nav" className="d-flex justify-content-between pt-3">
      <div className="burger-container d-flex flex-row ">
        <ul id="main-nav-links" className="list-unstyled">
          <li>
            <NavLink className="nav-logo ps-4 pe-2 " to="/home">
              Noxus
            </NavLink>
          </li>
          {props.loginUser ? (
            <ul className=" burger-links list-unstyled d-flex">
              <li>
                <NavLink className="nav-link" to="/home">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link px-3  " to="/movies">
                  Movies
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link px-3  " to="/series">
                  Series
                </NavLink>
              </li>
            </ul>
          ) : (
            ""
          )}
        </ul>
        <button
          id="burger-icon"
          className="btn btn-lg text-white fs-1 display-none"
          onClick={showLinks}
        >
          <GoGrabber />
        </button>
      </div>
      <ul className="list-unstyled d-flex">
        {props.loginUser ? (
          <li className="nav-link px-3 cursor-pointer" onClick={props.logout}>
            Logout
          </li>
        ) : (
          <>
            <li>
              <NavLink className="nav-link px-3  " to="/login">
                Login
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link px-3  " to="/register">
                Register
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
