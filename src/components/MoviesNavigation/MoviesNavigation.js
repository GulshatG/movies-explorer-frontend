import { Link } from 'react-router-dom';

function MoviesNavigation({ isShowNavigationLinks }) {
  return (
    <div className={`movies-navigation ${isShowNavigationLinks && 'movies-navigation_show'}`}>
      <Link to="/"
            className="movies-navigation__link movies-navigation__link_hidden animate-opacity">Главная</Link>
      <Link to="/movies"
            className="movies-navigation__link movies-navigation__link_active animate-opacity">Фильмы</Link>
      <Link to="/saved-movies" className="movies-navigation__link animate-opacity">Сохранённые
        фильмы</Link>
    </div>
  );
}

export default MoviesNavigation;
