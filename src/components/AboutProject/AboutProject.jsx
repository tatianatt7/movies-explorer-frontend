import React from 'react';
import './AboutProject.css';

const AboutProject = () => {
  return (
    <section className="about-project" id="about">
      <div className="about-project__container">
        <h2 className="about-project__heading">О проекте</h2>
        <ul className="about-project__description">
          <li className="about-project__component">
            <h3 className="about-project__component-heading">
              Дипломный проект включал 5 этапов
            </h3>
            <p className="about-project__component-text">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </li>
          <li className="about-project__component">
            <h3 className="about-project__component-heading">
              На выполнение диплома ушло 5 недель
            </h3>
            <p className="about-project__component-text">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </li>
        </ul>
        <div className="about-project__duration">
          <h3 className="about-project__duration-heading about-project__duration-heading-green">
            1 неделя{' '}
          </h3>
          <h3 className="about-project__duration-heading">4 недели</h3>
          <p className="about-project__title">Back-end</p>
          <p className="about-project__title">Front-end</p>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
