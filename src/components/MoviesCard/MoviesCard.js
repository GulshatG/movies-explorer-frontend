import React from 'react';

function MoviesCard({ movie }) {
  return (
    <div className="movies-card">
      <img className="movies-card__image" src={movie.image.url} alt="movie image"/>
      <div className="movie-card__name-group">
        <p className="movies-card__name">{movie.nameRU}</p>
        <button className="movies-card__like"/>
      </div>
      <p className="movies-card__duration">
        {
          `${Math.floor(movie.duration / 60)}ч${movie.duration % 60}м`
        }
      </p>
    </div>
  );
}

export default MoviesCard;
