import React from 'react';
import logo from '../../images/logo.svg';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import HeaderAuth from '../Header-auth/Header-auth';
import HeaderUnauth from '../Header-unauth/Header-unauth';
import { Link, useLocation } from 'react-router-dom';

function Header(props) {
  const currentUser = React.useContext(CurrentUserContext);
  //На время проверки 3 этапа спринта
  const location = useLocation();

  return (
    <header className="header header_black">
      <div className="header__links-group">
        <Link to="/" className="header__link-icon">
          <img src={logo} alt="logo"/>
        </Link>
        {
          //На время проверки 3 этапа спринта
          location.pathname === '/' ? <HeaderUnauth/> :
            currentUser.email ?
              <HeaderAuth {...props}/> : <HeaderUnauth/>}
      </div>
    </header>
  );
}

export default Header;
