import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  function showEmail() {
    document.querySelector(".email-address").classList.toggle("show-email");
  }
  return (
    <footer>
      <div className="footer-container mt-5">
        <div className="text-center pt-3">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            impedit earum quaerat sed, dolore voluptate? 2021-2022
          </p>

          <p className="icon email-icon px-2" onClick={showEmail}>
            <FaEnvelope />
          </p>
          <p className="email-address main-color">
            Contact @: ahmedmohamed.amin@hotmail.com
          </p>
        </div>
        <div className="icons-container d-flex justify-content-center align-items-center">
          <a
            href="https://www.facebook.com/A7med.Serag/"
            target="_blank"
            rel="noreferrer"
            className="icon facebook-icon px-2"
          >
            <FaFacebookSquare />
          </a>

          <a
            href="https://www.facebook.com/A7med.Serag/"
            target="_blank"
            rel="noreferrer"
            className="icon linkedIn-icon px-2"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}
