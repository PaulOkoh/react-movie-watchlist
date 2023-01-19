import React from "react";
import MovieCard from "./MovieCard";

const Watchlist = ({ list, removeMovie }) => {

  const movieDisplay = list.map((movie, index) => {

    return (
      <MovieCard list={list} removeMovie={removeMovie} movie={movie} />  
    ); 
  })
  return (
    <div className="watchlist">
      <h1>My Watchlist</h1>
      <div class="movie-container">{movieDisplay}</div>
    </div>
  );
};

export default Watchlist;
