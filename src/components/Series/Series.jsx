import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaArrowCircleDown } from "react-icons/fa";
import "./Series.css";

const Series = () => {
  const [popularSeries, getPopularSeries] = useState([]);
  const [topRatedSeries, getTopRatedSeries] = useState([]);

  async function getSeriesApi(category, callback) {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/tv/${category}?api_key=1678a819276e7e59cbbc5082405f88bb&language=en-US&page=1`
    );
    callback(data.results);
  }
  useEffect(() => {
    getSeriesApi("popular", getPopularSeries);
    getSeriesApi("top_rated", getTopRatedSeries);
  }, []);
  return (
    <section className="series my-5">
      <div className="container">
        <a id="top-rated-link" href="#top-rated">
          Top Rated Series <FaArrowCircleDown />
        </a>
        <section className="popular-series">
          <h1 className="text-center my-5">Popular tv Series right now!!</h1>
          <div className="row">
            {popularSeries.map((series, index) => (
              <div key={index} className="col-md-3 my-5 text-center">
                <div className="movie">
                  <h3 className="my-2 h5">{series.name}</h3>
                  <div className="image-container ">
                    <img
                      className="my-3"
                      src={`https://image.tmdb.org/t/p/original${series.poster_path}`}
                      alt={series.name}
                    />
                    <div className="info-slide ">
                      <p className=" p-3">{series.overview}</p>
                      <p className="h5 mt-4 p-3">
                        Imdb Rating : {series.vote_average}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section id="top-rated" className="top-series border-top">
          <h1 className="text-center my-5 ">
            Top Rated tv Series of all time{" "}
          </h1>
          <div className="row">
            {topRatedSeries.map((series, index) => (
              <div key={index} className="col-md-3 my-5 text-center">
                <div className="movie">
                  <h3 className="my-2 h5">{series.name}</h3>
                  <div className="image-container ">
                    <img
                      className="my-3"
                      src={`https://image.tmdb.org/t/p/original${series.poster_path}`}
                      alt={series.name}
                    />
                    <div className="info-slide ">
                      <p className=" p-3">{series.overview}</p>
                      <p className="h5 mt-4 p-3">
                        Imdb Rating : {series.vote_average}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Series;
