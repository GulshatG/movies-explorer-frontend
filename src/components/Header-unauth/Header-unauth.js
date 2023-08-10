import React from 'react';
import { Link } from 'react-router-dom';

function HeaderUnauth() {
  return (
    <div className="header-unauth__links">
      <Link to="/signup" className="header-unauth__link-registration">
        Регистрация
      </Link>
      <Link to="/signin">
        <button className="header-unauth__button-login">Войти</button>
      </Link>
    </div>
  );
}

export default HeaderUnauth;
