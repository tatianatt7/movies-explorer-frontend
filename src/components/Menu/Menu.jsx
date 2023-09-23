import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.css';
import ProfileButton from '../ProfileButton/ProfileButton';

const Menu = ({ onClose }) => {
  return (
    <div className="mobile__menu">
      <div className="menu__backdrop">
        <div className="menu__container">
          <button
            type="button"
            className="menu__close-btn"
            onClick={() => onClose()}
          />
          <nav>
            <ul className="menu__ul">
              <li>
                <NavLink
                  exact="true"
                  to="/"
                  className={({ isActive }) =>
                    isActive ? 'menu-link menu-link_active' : 'menu-link'
                  }
                >
                  Главная
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/movies"
                  className={({ isActive }) =>
                    isActive ? 'menu-link menu-link_active' : 'menu-link'
                  }
                >
                  Фильмы
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/saved-movies"
                  className={({ isActive }) =>
                    isActive ? 'menu-link menu-link_active' : 'menu-link'
                  }
                >
                  Сохранённые фильмы
                </NavLink>
              </li>
            </ul>
          </nav>
          <ProfileButton />
        </div>
      </div>
    </div>
  );
};

export default Menu;
