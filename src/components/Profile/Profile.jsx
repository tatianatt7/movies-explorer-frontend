import './Profile.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = ({ onSignOut, isProfileSaved }) => {
  const navigate = useNavigate();
  const [edit, setStateEdit] = useState(false);
  const [values, setValues] = useState({ email: 'example@mail.net' });

  function is_disabled(v) {
    return !'name' in v || !v.name;
  }

  return (
    <>
      <section className="profile">
        <h1 className="profile__title">Привет, {values.name}!</h1>
        <form className="profile__form form">
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
              value={values.name || ''}
              onChange={e => setValues({ ...values, name: e.target.value })}
            />
          </div>
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
              onChange={e => setValues({ ...values, email: e.target.value })}
            />
          </div>
          <div className="form__error"></div>
          {isProfileSaved ? (
            <div className="profile__success">Профиль успешно обновлен!</div>
          ) : (
            ''
          )}
          <div className="profile__bottom">
            {edit ? (
              <button
                type="submit"
                disabled={is_disabled(values)}
                className="profile__button-save"
              >
                Сохранить
              </button>
            ) : (
              <>
                <button
                  type="button"
                  className="profile__button-edit"
                  onClick={() => setStateEdit(!edit)}
                >
                  Редактировать
                </button>
                <button
                  type="button"
                  onClick={() => navigate('/')}
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
