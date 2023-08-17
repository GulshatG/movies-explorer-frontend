import React from 'react';
import {CurrentUserContext} from '../../context/CurrentUserContext';
import HelloTitle from '../Hello-title/Hello-title';
import {hideFooter, showFooter} from '../../utils/deleteElement';

function Profile({
  onUpdate,
  onSignOut,
}) {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const currentUser = React.useContext(CurrentUserContext);
  React.useEffect(() => {
    hideFooter();
    return () => {
      showFooter();
    };
  }, []);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdate(name, email);
  }

  React.useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  return (
      <section className="profile">
        <HelloTitle text={`Привет, ${currentUser.name}!`}/>
        <form className="profile__form" onSubmit={handleSubmit}>
          <div className="profile__input-group">
            <p className="profile__input-info">Имя</p>
            <input
                id="name-input"
                value={name || ''}
                className="profile__input-value"
                onChange={handleNameChange}
                type="text"
                name="name"
                placeholder="Имя"
                required
                minLength="2"
                maxLength="40"
            />
          </div>
          <div className="profile__input-group">
            <p className="profile__input-info">E-mail</p>
            <input
                id="email-input"
                value={email || ''}
                className="profile__input-value"
                onChange={handleEmailChange}
                type="text"
                name="email"
                placeholder="Email"
                required
                minLength="5"
                maxLength="40"
            />
          </div>
          <button className="profile__edite animate-opacity"
                  type="submit">Редактировать
          </button>
        </form>
        <button className="profile__logout animate-opacity"
                onClick={onSignOut}>Выйти из аккаунта
        </button>
      </section>
  );
}

export default Profile;
