import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <h2 className="footer__heading">
        Учебный проект Яндекс.Практикум x BeatFilm.
      </h2>
      <div className="footer__copyright-container">
        <p className="footer__copyright">© 2023</p>
        <ul className="footer__links">
          <li className="footer__link-component">
            <Link
              className="footer__link"
              to="https://practicum.yandex.ru"
              target="_blank"
              rel="noreferrer"
            >
              Яндекс.Практикум
            </Link>
          </li>
          <li className="footer__link-component">
            <Link
              className="footer__link"
              to="https://github.com/tatianatt7/"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
