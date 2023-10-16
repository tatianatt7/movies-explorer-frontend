import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../images/logo.svg';
import { useFormValidate } from '../../hooks/useFormValidation';
import { KEY_JWT } from '../../utils/constants';
import validator from 'validator';
import './Login.css';

const Login = ({ loggedIn, setLoggedIn, api }) => {
  const { values, handleChange, errors, isValid } = useFormValidate();
  const [responseError, setResponseError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedIn) {
      navigate('/movies');
    }
  }, [loggedIn]);

  const handleSubmit = async e => {
    e.preventDefault();

    if (!isValid) return;

    try {
      const response = await api.signin(values);

      if (response.token) {
        localStorage.setItem(KEY_JWT, response.token);
        setLoggedIn(true);
      } else {
        setResponseError(response.message || 'Что-то пошло не так!');
      }
    } catch (error) {
      setResponseError(error.message || 'Произошла ошибка');
    }
  };

  return (
    <section className="login">
      <div className="login__header">
        <a href="/">
          <img src={logo} alt="Лого" className="login__logo" />
        </a>
        <h1 className="login__heading">Рады видеть!</h1>
      </div>
      <form className="login__form form" onSubmit={handleSubmit}>
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
          value={values.email || ''}
          onChange={e => {
            handleChange(e);
            if (!validator.isEmail(e.target.value)) {
              e.target.setCustomValidity('Введите корректный email.');
            } else {
              e.target.setCustomValidity('');
            }
          }}
        />
        <span className="form__error">{errors.email}</span>
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
          value={values.password || ''}
          onChange={handleChange}
        />
        <span className="form__error">{errors.password}</span>
        <button className="login__btn" type="submit" disabled={!isValid}>
          Войти
        </button>
      </form>
      <span className="form__error">{responseError}</span>
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
