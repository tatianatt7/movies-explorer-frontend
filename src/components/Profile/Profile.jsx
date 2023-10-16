import { useContext, useEffect, useState } from "react";
import "./Profile.css";

import Header from '../Header/Header';
import validator from "validator";
import UserContext from "../../context/userContext";
import {useFormValidate  } from "../../hooks/useFormValidation";

const validateName = (name) => {
  const pattern = /^[A-Za-zА-Яа-я\s-]+$/;
  return pattern.test(name);
};

const validateEmail = (email) => {
  return validator.isEmail(email);
};

const Profile = ({ loggedIn, api }) => {
  const [isSubmited, setSubmited] = useState(false);
  const [change, setChange] = useState(false);
  const { currentUser: user, setCurrentUser } = useContext(UserContext);
  const { values, handleChange, errors, setErrors, isValid, setValues } =
    useFormValidate();
  const [error, setError] = useState();

  useEffect(() => {
    if (user.name) {
      setValues({ ...user });
    }
  }, [user]);

  const handleSignOut = async () => await api.signout();

  const isChanged = (key, val) => val[key] === values[key];

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setSubmited(true);
    setError("");

    try {
      const resp = await api.updateProfile(values);
      if (Object.keys(resp).length) {
        setCurrentUser(resp);
        setChange(false);
      }
    } catch (error) {
      if (error.message) {
        if (error.message === "Validation failed") {
          error.validation.body.keys.map((key) => {
            setErrors((e) => ({ ...e, [key]: error.validation.body.message }));
          });
        }

        setError(error.message);
      }
    } finally {
      setSubmited(false);
    }
  };

  return (
    <>
    <Header loggedIn={loggedIn} />
      <section className="profile">
        <h1 className="profile__title">Привет, {values.name}!</h1>
        <form className="profile__form form" onSubmit={handleUpdateProfile}>
          <div className="profile__value profile__value-name">
            <label className="profile__label">Имя</label>
            <input
              type="text"
              name="name"
              placeholder="Имя"
              className="profile__input"
              minLength={2}
              maxLength={40}
              required
              disabled={!change}
              value={values.name || ''}
              onChange={(e) => {
                if (!validateName(e.target.value)) {
                  e.target.setCustomValidity(
                    "Имя может содержать только латиницу, кириллицу, пробел или дефис."
                  );
                } else {
                  e.target.setCustomValidity("");
                }
                handleChange(e);
              }}
            />
          </div>
          <div className="form__error">{errors.name}</div>
          <hr></hr>
          <div className="profile__value profile__value-password">
            <label className="profile__label">E-mail</label>
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              className="profile__input"
              required
              value={values.email || ''}
              onChange={(e) => {
                if (!validateEmail(e.target.value)) {
                  e.target.setCustomValidity("Введите корректный email.");
                } else {
                  e.target.setCustomValidity("");
                }
                handleChange(e);
              }}
              disabled={!change}
            />
          </div>
          <div className="form__error">{errors.email}</div>
          <div className="form__error">{error}</div>
          <div className="profile__bottom">
            {change ? (
              <button
                type="submit"
                disabled={
                  !isValid ||
                  isSubmited ||
                  (isChanged("name", user) && isChanged("email", user))
                }
                className="profile__button-save"
              >
                Сохранить
              </button>
            ) : (
              <>
                <button
                  type="button"
                  className="profile__button-edit"
                onClick={(e) => {
                  e.preventDefault();
                  setChange(true);
                }}
                >
                  Редактировать
                </button>
                <button
                  type="button"
                  onClick={handleSignOut}
                  className="profile__logout"
                >
                  Выйти из аккаунта
                </button>
              </>
            )}
          </div>
        </form>
      </section>
    </>
  );
};

export default Profile;
