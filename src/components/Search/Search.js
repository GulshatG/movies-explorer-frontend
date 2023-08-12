import React from 'react';

function Search() {
  return (
    <form className="search__form">
      <div className="search__input-group">
        <input className="search__input" placeholder="Фильм" required/>
        <button className="search__submit animate-opacity" type="submit"/>
      </div>
      <div className="search__switch-group">
        <label className="search__switch">
          <input className="search__checkbox" type="checkbox"/>
          <span className="search__slider"></span>
        </label>
        <p className="search__switch-text">Короткометражки</p>
      </div>
    </form>
  );
}

export default Search;
