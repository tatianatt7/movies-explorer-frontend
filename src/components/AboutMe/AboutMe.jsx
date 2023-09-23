import React from 'react';
import photo from '../../images/iam.jpg';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <section className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__container">
        <div className="about-me__description">
          <h3 className="about-me__name">Татьяна</h3>
          <h4 className="about-me__job">Фронтенд-разработчик</h4>
          <p className="about-me__text">
            Я родилась и живу в Санкт-Петербурге. Работала в компании DHL, после
            частичного ухода компании из РФ, я вспонила о своей мечте и
            поступила на курсы Фронтенд-разработчика.
          </p>
          <a
            href="https://github.com/tatianatt7"
            className="about-me__githublink"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
        <img src={photo} alt="Фотография" className="about-me__photo" />
      </div>
      <div className="portfolio">
        <h3 className="portfolio__title">Портфолио</h3>
        <ul className="portfolio__projects">
          <li className="portfolio__list">
            <a
              className="portfolio__link"
              rel="noreferrer"
              href="https://github.com/tatianatt7/how-to-learn"
              target="_blank"
            >
              Статичный сайт
            </a>
            <span>↗️</span>
          </li>
          <li className="portfolio__list">
            <a
              className="portfolio__link"
              rel="noreferrer"
              href="https://github.com/tatianatt7/russian-travel"
              target="_blank"
            >
              Адаптивный сайт
            </a>
            <span>↗️</span>
          </li>
          <li className="portfolio__list">
            <a
              className="portfolio__link"
              rel="noreferrer"
              href="https://github.com/tatianatt7/react-mesto-api-full-gha"
              target="_blank"
            >
              Одностраничное приложение
            </a>
            <span>↗️</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutMe;
