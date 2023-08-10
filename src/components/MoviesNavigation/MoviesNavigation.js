import { Link } from 'react-router-dom';

function MoviesNavigation({isShowNavigationLinks}) {
  return (
    <div className={`movies-navigation ${isShowNavigationLinks && 'movies-navigation_show'}`}>
      <Link to="./" className="movies-navigation__link movies-navigation__link_hidden">Главная</Link>
      <Link to="./" className="movies-navigation__link movies-navigation__link_active">Фильмы</Link>
      <Link to="./" className="movies-navigation__link">Сохранённые фильмы</Link>
    </div>
  );
}

export default MoviesNavigation;
