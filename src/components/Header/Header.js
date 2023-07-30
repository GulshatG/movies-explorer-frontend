import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../../context/CurrentUserContext';

function Header() {
  const currentUser = React.useContext(CurrentUserContext);
  return (
    <header className="header">
      <div className="header__links-group">
        <img src={logo} alt="logo"/>
        {/* {currentUser && ( */}
        {/*   <div> */}
        {/*     <p>Фильмы</p> */}
        {/*     <p>Сохранённые фильмы</p> */}
        {/*   </div> */}
        {/* ) } */}
        <div className="header__links">
          <Link to="./" className="header__link-registration">
            Регистрация
          </Link>
          <button className="header__button-login">Войти</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
