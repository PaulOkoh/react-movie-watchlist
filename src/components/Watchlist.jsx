import React from "react";
import MovieCard from "./MovieCard";
import MovieScreen from "./MovieScreen";

function Watchlist({ list, removeMovie }) {
  const movieDisplay = list.map((movie) => {
    return <MovieCard list={list} removeMovie={removeMovie} />;
  });
  return (
    <div className="watchlist">
      <h1>My Watchlist</h1>
      <div class="movie-container">{movieDisplay}</div>
    </div>
  );
}

export default Watchlist;
