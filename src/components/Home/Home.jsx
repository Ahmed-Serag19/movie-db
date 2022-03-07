import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
export default function Home(props) {
  const [trendingMovies, setTrendingMovies] = useState([]);
  async function getTrendingMovies() {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=1678a819276e7e59cbbc5082405f88bb&language=en-US&page=1`
    );

    setTrendingMovies(data.results);
    console.log(trendingMovies);
  }

  useEffect(() => getTrendingMovies(), []);
  return (
    <section className="home">
      <h3 className="text-center mt-3">
        Welcome {props.loginUser.first_name} {props.loginUser.last_name}
      </h3>
      <h1 className="text-center my-5">Playing right now</h1>
      <div className="container row">
        {trendingMovies.map((movie, index) => (
          <div key={index} className="col-md-3 my-5 text-center">
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
      </div>
    </section>
  );
}
