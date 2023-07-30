import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import { CurrentUserContext } from '../../context/CurrentUserContext';

function App() {

  let testUser = {
    'name': 'Виталий',
    'email': 'pochta@yandex.ru',
  };
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  React.useEffect(() => setCurrentUser(testUser), [currentUser]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <>
        <Header/>
        <Main/>
        <Footer/>
      </>
    </CurrentUserContext.Provider>
  );
}

export default App;
