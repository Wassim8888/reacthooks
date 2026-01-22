// src/MovieList.js
import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ movies }) {
  return (
    <div>
      {movies.length === 0 ? (
        <p>No movies found!</p>
      ) : (
        movies.map((movie, index) => <MovieCard key={index} {...movie} />)
      )}
    </div>
  );
}

export default MovieList;
