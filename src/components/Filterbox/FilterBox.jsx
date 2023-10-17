import React from 'react';
import './FilterBox.css';

function FilterBox({ onFilter, isShortFilm }) {
  return (
    <>
      <div className="filter">
        <input
          className="filter__box"
          type="checkbox"
          id="checkbox"
          onChange={onFilter}
          checked={isShortFilm}
        ></input>
        <label htmlFor="checkbox" className="filter__label">
          Короткометражки
        </label>
      </div>
    </>
  );
}

export default FilterBox;
