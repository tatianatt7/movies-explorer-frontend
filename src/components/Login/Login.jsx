import React from 'react';
import './Login.css';
import logo from '../../images/logo.svg';

const Login = () => {
  return (
    <section className="login">
      <div className="login__header">
        <a href="/">
          <img src={logo} alt="Лого" className="login__logo" />
        </a>
        <h1 className="login__heading">Рады видеть!</h1>
      </div>
      <form className="login__form form">
        <label className="login__label" htmlFor="email">
          E-mail
        </label>
        <input
          required
          className="login__input"
          type="email"
          name="email"
          id="email"
          placeholder="email"
        />
        <label className="login__label" htmlFor="password">
          Пароль
        </label>
        <input
          required
          className="login__input"
          type="password"
          name="password"
          id="password"
          placeholder="Пароль"
          minLength={6}
          maxLength={200}
        />
        <span className="form__error"></span>
        <button className="login__btn" type="submit">
          Войти
        </button>
      </form>
      <div className="login__bottom">
        <span>Ещё не зарегистрированы?</span>
        <a href="/signup" className="login__link">
          Регистрация
        </a>
      </div>
    </section>
  );
};

export default Login;
