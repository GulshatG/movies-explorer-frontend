import React from 'react';
import MoviesNavigation from '../MoviesNavigation/MoviesNavigation';
import accLogo from '../../images/acc-logo.svg';
import iconHamburger from '../../images/icon_hamburger.svg';

function HeaderAuth({
  onHamburgerButtonClick,
  isShowNavigationLinks,
  isShowAccountButton,
}) {
  return (
    <>
      <MoviesNavigation
        isShowNavigationLinks={isShowNavigationLinks}
      />
      <button className={`header-auth__account-button ${isShowAccountButton &&
      'header-auth__account-button_show'}`}>
        <img src={accLogo} alt="Account logo" className="header-auth__button-img"/>
        <p className="header-auth__button-text">Аккаунт</p>
      </button>
      <button className="header-auth__hamburger-button" onClick={onHamburgerButtonClick}>
        <img src={iconHamburger} alt="hamburger logo" className="header-auth__hamburger-icon"/>
      </button>
    </>
  );
}

export default HeaderAuth;
