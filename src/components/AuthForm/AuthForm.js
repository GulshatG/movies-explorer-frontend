import React from 'react';
import logo from '../../images/logo.svg';
import HelloTitle from '../Hello-title/Hello-title';
import { Link } from 'react-router-dom';

function AuthForm({
  title,
  children,
  buttonText,
  questionText,
  link,
  linkText,
}) {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  return (
    <div className="auth-form">
      <Link to="/">
        <img className="auth-form__logo" src={logo} alt="logo"/>
      </Link>
      <HelloTitle text={title}/>
      <form className="auth-form__form">
        {children}
        <div className="auth-form__button-group">
          <button className="auth-form__button" type="submit">{buttonText}</button>
          <div className="auth-form__question-group">
            <p className="auth-form__question">{questionText}</p>
            <Link className="auth-form__link" to={link}>{linkText}</Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AuthForm;
