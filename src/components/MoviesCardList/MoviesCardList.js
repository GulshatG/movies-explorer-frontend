import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import Load from '../Load/Load';

function MoviesCardList({ movies }) {

  const [cardLength, setCardLength] = React.useState(0);

  React.useEffect(() => {
    let length = getCardLength(window.innerWidth);
    setCardLength(length);
  }, []);

  React.useEffect(() => {
    function handleResize() {
      let length = getCardLength(window.innerWidth);
      if (cardLength.length !== length) setCardLength(length);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  function getCardLength(width) {
    let cardLength;
    if (width <= 320) {
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
        {
          movies.slice(0, cardLength)
            .map((m, i) => (
              <MoviesCard key={i} movie={m}/>
            ))
        }
      </div>
      {
        cardLength < movies.length && <Load/>
      }
    </>
  );

}

export default MoviesCardList;
