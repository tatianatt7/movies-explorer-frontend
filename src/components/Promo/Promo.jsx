import React from 'react';
import './Promo.css';
import promo from '../../images/promo-bg.svg';

const Promo = () => {
  return (
    <>
      <section className="promo">
        <div className="promo__container">
          <img className="landing-logo" src={promo} alt="Лого" />
          <h1 className="promo__title">
            Учебный проект студента факультета Веб-разработки.
          </h1>
        </div>
        <nav>
          <ul className="promo__list">
            <li className="promo__icon">
              <a className="promo__link" href="#project">
                О проекте
              </a>
            </li>
            <li className="promo__icon">
              <a className="promo__link" href="#techs">
                Технологии
              </a>
            </li>
            <li className="promo__icon">
              <a className="promo__link" href="#student">
                Студент
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
};

export default Promo;
