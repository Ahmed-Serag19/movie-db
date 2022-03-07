import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Movies.css";
export default function Movies() {
  const [topRatedMovies, getTopRatedMovies] = useState([]);

  async function getMovies(category, callback, page) {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${category}?api_key=1678a819276e7e59cbbc5082405f88bb&language=en-US&page=${page}`
    );
    callback(data.results);
  }
  useEffect(() => getMovies("top_rated", getTopRatedMovies, 1), []);
  return (
    <section className="movies">
      <h1 className="text-center my-5">Top rated movies</h1>
      <div className="container row">
        {topRatedMovies.map((movie, index) => (
          <div key={index} className="col-lg-3 col-md-4 my-5 text-center">
            <div className="movie">
              <h3 className="my-2 h5">{movie.original_title}</h3>
              <div className="image-container ">
                <img
                  className="my-3"
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  alt={movie.title}
                />
                <div className="info-slide ">
                  <p className=" p-3">{movie.overview}</p>
                  <p className="h5 mt-4 p-3">
                    Imdb Rating : {movie.vote_average}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="page">
          <ul className="list-unstyled d-flex justify-content-center">
            <li
              onClick={() => getMovies("top_rated", getTopRatedMovies, 1)}
              className="mx-2"
            >
              1
            </li>
            <li
              onClick={() => getMovies("top_rated", getTopRatedMovies, 2)}
              className="mx-2"
            >
              2
            </li>
            <li
              onClick={() => getMovies("top_rated", getTopRatedMovies, 3)}
              className="mx-2"
            >
              3
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
