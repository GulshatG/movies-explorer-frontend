import React from 'react';
import Search from '../Search/Search';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies({
  movies,
  isOpenPopup,
  closePopup,
}) {
  React.useEffect(() => {
    return () => {
      if (isOpenPopup) closePopup();
    };
  }, [isOpenPopup]);

  return (
    <div className="movies">
      <Search/>
      <MoviesCardList movies={movies}/>
    </div>
  );
}

export default Movies;
