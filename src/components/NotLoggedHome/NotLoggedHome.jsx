import React from "react";
import kids from "../../images/kids.png";
import tv from "../../images/tv.png";
import video1 from "../../images/video-tv.m4v";
import video2 from "../../images/video-devices.m4v";
import mobile from "../../images/mobile.jpg";
import device from "../../images/device.png";
import "./NotLoggedHome.css";
export default function NotLoggedHome() {
  return (
    <section className="home-not-logged pt-5">
      <div className="container">
        <div className="home-page-sections py-5 my-5 d-flex row justify-content-around align-items-center">
          <div className="col-lg-6 col-md-12">
            <h3 className="h2">Enjoy on your TV.</h3>
            <p>
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
              Blu-ray players, and more.
            </p>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="position-relative">
              <img className="position-relative w-100" src={tv} alt="tv" />
              <video
                className="position-absolute w-75"
                autoPlay
                muted
                loop
                src={video1}
              ></video>
            </div>
          </div>
        </div>
        <div className="home-page-sections py-5 my-5 d-flex row justify-content-around align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="position-relative">
              <img className="position-relative w-100" src={mobile} alt="tv" />
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <h3>Download your shows to watch offline.</h3>
            <p>
              Save your favorites easily and always have something to watch.
            </p>
          </div>
        </div>
        <div className="home-page-sections py-5 my-5 d-flex row justify-content-around align-items-center">
          <div className="col-lg-6 col-md-12">
            <h3>Watch everywhere.</h3>
            <p>
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV without paying more.
            </p>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="position-relative">
              <img className="position-relative w-100" src={device} alt="tv" />
              <video
                className=" video2 position-absolute"
                autoPlay
                muted
                loop
                src={video2}
              ></video>
            </div>
          </div>
        </div>

        <div className="d-flex py-3 justify-content-around align-items-center">
          <div>
            <img className="w-100" src={kids} alt="kids" />
          </div>
          <div>
            <h3 className="h2">Create profiles for kids.</h3>
            <p>
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV without paying more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
