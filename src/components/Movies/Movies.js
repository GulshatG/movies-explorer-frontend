import React from 'react';
import Search from '../Search/Search';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Main from '../Main/Main';

function Movies({
  movies,
}) {
  return (
    <section className="movies">
      <Search/>
      <MoviesCardList movies={movies}/>
    </section>
  );
}

export default Movies;
