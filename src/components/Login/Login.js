import React from 'react';
import AuthForm from '../AuthForm/AuthForm';
import { hideFooter, hideHeader, showFooter, showHeader } from '../../utils/deleteElement';

function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleEmailChange(e) {
    console.log(e.target.value);
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    console.log(e.target.value);
    setPassword(e.target.value);
  }

  React.useEffect(() => {
    hideHeader();
    hideFooter();
    return () => {
      showHeader();
      showFooter();
    };
  }, []);

  return (
    <section className="form-section">
      <AuthForm
        title="Рады видеть!"
        buttonText="Войти"
        questionText="Ещё не зарегистрированы?"
        link="/signup"
        linkText="Регистрация">
        <div className="form-section__fields">
          <div className="form-section__input-group">
            <p className="form-section__label">E-mail</p>
            <input
              id="email-input"
              value={email || ''}
              className="form-section__input"
              onChange={handleEmailChange}
              type="email"
              name="email"
              required
              minLength="5"
              maxLength="40"
            />
            <span className="form-section__input-error"></span>
          </div>
          <div className="form-section__input-group">
            <p className="form-section__label">Пароль</p>
            <input
              id="password-input"
              value={password || ''}
              className="form-section__input form-section__input_red"
              onChange={handlePasswordChange}
              type="password"
              name="password"
              required
              minLength="5"
              maxLength="40"
            />
            <span className="form-section__input-error"></span>
          </div>
        </div>
      </AuthForm>
    </section>
  );
}

export default Login;
