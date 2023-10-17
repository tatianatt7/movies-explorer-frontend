import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { KEY_JWT } from '../../utils/constants';
import validator from 'validator';
import { useFormValidate } from '../../hooks/useFormValidation';
import './Register.css';
import logo from '../../images/logo.svg';

const Register = ({ loggedIn, setLoggedIn, api }) => {
  const [isSended, setIsSended] = useState(false);
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
      setIsSended(true);
      const signupResponse = await api.signup(values);

      // После регистрации авторизуем пользователя
      if (Object.keys(signupResponse).length) {
        const signinResponse = await api.signin({
          email: values.email,
          password: values.password,
        });

        if (Object.keys(signinResponse).length && 'token' in signinResponse) {
          // Если есть токен в ответе, сохраняем его в localStorage
          localStorage.setItem(KEY_JWT, signinResponse.token);
          setLoggedIn(true);
        }
      }
    } catch (error) {
      setResponseError(error.message || 'Произошла ошибка');
    } finally {
      setIsSended(false);
    }
  };

  const validateName = name => {
    const pattern = /^[A-Za-zА-Яа-я\s-]+$/;
    return pattern.test(name);
  };
  return (
    <section className="register">
      <div className="register__header">
        <Link to="/">
          <img src={logo} alt="Логотип" className="register__logo" />
        </Link>

        <h1 className="register__title">Добро пожаловать!</h1>
      </div>

      <form className="register__form form" onSubmit={handleSubmit}>
        <label className="register__label" htmlFor="name">
          Имя
        </label>
        <input
          className="register__input"
          type="text"
          id="name"
          name="name"
          value={values.name || ''}
          onChange={e => {
            handleChange(e);
            if (!validateName(e.target.value)) {
              e.target.setCustomValidity(
                'Имя может содержать только латиницу, кириллицу, пробел или дефис.',
              );
            } else {
              e.target.setCustomValidity('');
            }
          }}
          maxLength={40}
          minLength={6}
          placeholder="Имя"
          required
        />
        <div className="form__error">{errors.name}</div>
        <label className="register__label" htmlFor="email">
          E-mail
        </label>
        <input
          className="register__input"
          type="email"
          id="email"
          name="email"
          value={values.email || ''}
          onChange={e => {
            handleChange(e);
            if (!validator.isEmail(e.target.value)) {
              e.target.setCustomValidity('Введите корректный email.');
            } else {
              e.target.setCustomValidity('');
            }
          }}
          placeholder="email"
          required
        />
        <div className="form__error">{errors.email}</div>
        <label className="register__label" htmlFor="password">
          Пароль
        </label>
        <input
          className="register__input"
          type="password"
          id="password"
          name="password"
          value={values.password || ''}
          onChange={handleChange}
          placeholder="password"
          minLength={6}
          maxLength={200}
          required
        />
        <div className="form__error">{errors.password}</div>
        <button className="register__button" type="submit" disabled={!isValid || isSended}>
          Зарегистрироваться
        </button>
      </form>
      <div className="form__error">{responseError}</div>
      <div className="register__bottom">
        <span>Уже зарегистрированы?</span>
        <Link to="/signin" className="register__link">
          Войти
        </Link>
      </div>
    </section>
  );
};

export default Register;
