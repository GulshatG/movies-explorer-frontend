import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="header__links-group">
        <img src={logo} alt="logo"/>
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
