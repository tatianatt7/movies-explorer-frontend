import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.css';
import ProfileButton from '../ProfileButton/ProfileButton';

const Menu = ({ onClose }) => {
  return (
    <div className="navigation__mobile-wrap">
      <div className="navigation__mobile-backdrop">
        <div className="navigation__mobile-container">
          <button
            type="button"
            className="navigation__mobile-close-btn"
            onClick={() => onClose()}
          />
          <nav>
            <ul className="navigation__mobile-ul">
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
