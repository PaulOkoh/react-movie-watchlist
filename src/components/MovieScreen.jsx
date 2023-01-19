import React from "react";
import MovieCard from "./MovieCard";
function MovieScreen({ movieList, page, setPage, list, addMovie, removeMovie }) {
  const movieDisplay = movieList.map((movie, index) => {
    return <MovieCard movie={movie} addMovie={addMovie} removeMovie={removeMovie} list={list} />;
  });

  const decrement = () => {

  };

  const increment = () => {

  };

  return (
    <div className="page">
      <h1>Best Movie Theatre</h1>
      <h3>Add a movie to your watchlist!</h3>
      <div className="btn-container">
        <button>Previous</button>
        <button>Next</button>
      </div>
      <div className="movie-container">{movieDisplay}</div>
    </div>
  );
}

export default MovieScreen;
