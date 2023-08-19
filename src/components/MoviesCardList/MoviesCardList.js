import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import Load from '../Load/Load';

function MoviesCardList({
  movies,
  onLikeClicked,
  showSavedMovies,
}) {

  const [cardLength, setCardLength] = React.useState(0);

  React.useEffect(() => {
    if (!showSavedMovies) {
      let length = getCardLength(window.innerWidth);
      setCardLength(length);
    }
  }, [showSavedMovies]);

  React.useEffect(() => {
    if (!showSavedMovies) {
      function handleResize() {
        let length = getCardLength(window.innerWidth);
        if (cardLength.length !== length) setCardLength(length);
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  });

  function loadClicked() {
    setCardLength(cardLength + (window.innerWidth <= 768 ? 2 : 4));
  }

  function getCardLength(width) {
    let cardLength;
    if (width <= 480) {
      cardLength = 5;
    } else if (width <= 768) {
      cardLength = 8;
    } else {
      cardLength = 16;
    }
    return cardLength;
  }

  return (
      <>
        <div className="movies-card-list">
          {showSavedMovies ? (
              (movies.length !== 0 && movies[0].movieId) &&
              movies.map((m) => (
                  <MoviesCard key={m.movieId} showSavedMovies={showSavedMovies}
                              onLikeClicked={onLikeClicked} movie={m}/>
              ))
          ) : (
              (movies.length !== 0 && movies[0].movieId) &&
              movies.slice(0, cardLength).map((m) => (

                  <MoviesCard key={m.movieId} onLikeClicked={onLikeClicked} movie={m}/>
              ))
          )}

        </div>
        {(!showSavedMovies && cardLength < movies.length) &&
            <Load onClick={loadClicked}/>
        }

      </>
  );

}

export default MoviesCardList;
