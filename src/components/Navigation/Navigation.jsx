import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';
import Menu from '../Menu/Menu';
import ProfileButton from '../ProfileButton/ProfileButton';


const Navigation = ({ loggedIn }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation().pathname;
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navigation">
      {loggedIn ? (
        <>
          <ul className={'navigation__movies'}>
            <li>
              <Link
                to="/movies"
                className={
                  location === '/movies'
                    ? 'navigation__movies-link-active'
                    : 'navigation__movies-link'
                }
              >
                Фильмы
              </Link>
            </li>
            <li>
              <Link
                to="/saved-movies"
                className={
                  location === '/saved-movies'
                    ? 'navigation__movies-link-active'
                    : 'navigation__movies-link'
                }
              >
                Сохранённые фильмы
              </Link>
            </li>
          </ul>
          <ul>
            <ProfileButton />
          </ul>
          {!isMenuOpen ? (
            <ul className="menu">
              <li>
                <button
                  className={'menu__btn'}
                  onClick={toggleMenu}
                  type="button"
                />
              </li>
            </ul>
          ) : (
            <Menu onClose={toggleMenu} />
          )}
        </>
      ) : (
        <>
          <ul>{/* left navigation links */}</ul>
          <ul className="navigation__auth">
            <li>
              <Link to="/register" className="navigation__link">
                Регистрация
              </Link>
            </li>
            <li>
              <Link to="/login" className="navigation__button">
                Войти
              </Link>
            </li>
          </ul>
        </>
      )}
    </nav>
  );
};

export default Navigation;
