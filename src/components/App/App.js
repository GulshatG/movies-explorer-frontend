import React from 'react';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import BurgerPopup from '../BurgerPopup/BurgerPopup';
import testCard from '../../utils/testCard';
import { Route, Routes } from 'react-router-dom';
import Movies from '../Movies/Movies';
import Header from '../Header/Header';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

function App() {

  let testUser = {
    'name': 'Виталий',
    'email': 'pochta@yandex.ru',
  };
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [movies, setMovies] = React.useState([{}]);
  const [savedMovies, setSavedMovies] = React.useState([{}]);
  const [isBurgerPopup, setIsBurgerPopup] = React.useState(false);
  const [isShowNavigationLinks, setIsShowNavigationLinks] = React.useState(false);
  const [isShowAccountButton, setIsShowAccountButton] = React.useState(false);
  const [isSetHigh, setIsSetHigh] = React.useState(false);
  React.useEffect(() => {
    setCurrentUser(testUser);
    setMovies(testCard);
    setSavedMovies(testCard.slice(0, 3));
    setLoggedIn(true);
  }, []);

  function handleHamburgerButtonClicked() {
    setIsBurgerPopup(!isBurgerPopup);
    setIsShowNavigationLinks(!isShowNavigationLinks);
    setIsShowAccountButton(!isShowAccountButton);
    setIsSetHigh(!isSetHigh);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className={`app ${isSetHigh && 'app__fix-height'}`}>
        <BurgerPopup
          isOpen={isBurgerPopup}
          onClose={handleHamburgerButtonClicked}
        />
        <Header
          onHamburgerButtonClick={handleHamburgerButtonClicked}
          isShowNavigationLinks={isShowNavigationLinks}
          isShowAccountButton={isShowAccountButton}
        />
        <Routes>
          <Route
            path="/"
            element=
              {
                <>
                  <Main/>
                </>
              }
          />
          <Route
            path="/movies"
            element={
              <Movies
                movies={movies}
                isOpenPopup={isBurgerPopup}
                closePopup={handleHamburgerButtonClicked}
              />
            }
          />
          <Route
            path="/saved-movies"
            element={
              <Movies
                movies={savedMovies}
                isOpenPopup={isBurgerPopup}
                closePopup={handleHamburgerButtonClicked}
              />
            }
          />
          <Route
            path="/profile"
            element={<Profile/>}
          />
          <Route
            path="/signup"
            element={<Register/>}
          />
          <Route
            path="/signin"
            element={<Login/>}
          />
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
        <Footer/>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
