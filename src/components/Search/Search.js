import React from 'react';

function Search({
  searchText,
  isShortMovies,
  onSubmit,
}) {

  const [movieName, setMovieName] = React.useState('');
  const [isShortFilm, setIsShortFilm] = React.useState(false);
  React.useEffect(() => {
    setMovieName(searchText);
    setIsShortFilm(isShortMovies);
  }, [searchText, isShortMovies]);

  function handleNameChange(e) {
    setMovieName(e.target.value);
  }

  function handleCheckBox(e) {
    setIsShortFilm(e.target.checked);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(movieName, isShortFilm);
  }

  return (
      <form className="search__form" onSubmit={handleSubmit}>
        <div className="search__input-group">
          <input
              id="movieName-input"
              value={movieName || ''}
              onChange={handleNameChange}
              className="search__input"
              type="text"
              name="movieName"
              placeholder="Фильм"
              required
              minLength="2"
              maxLength="40"
          />
          <button className="search__submit animate-opacity" type="submit"/>
        </div>
        <div className="search__switch-group">
          <label className="search__switch">
            <input className="search__checkbox" type="checkbox"
                   onChange={handleCheckBox}/>
            <input
                id="shortFilm-input"
                checked={isShortFilm}
                onChange={handleCheckBox}
                className="search__checkbox"
                type="checkbox"
                name="shortFilm"
            />
            <span className="search__slider"></span>
          </label>
          <p className="search__switch-text">Короткометражки</p>
        </div>
      </form>
  );
}

export default Search;
