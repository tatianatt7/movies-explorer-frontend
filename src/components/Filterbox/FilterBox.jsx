import React from 'react';
import './FilterBox.css';

function FilterBox({ onFilterMovies, isshortMovies }) {
  return (
    <>
    <div className='filter'>
      <input
        className="filter__box"
        type="checkbox"
        id="checkbox"
        onChange={onFilterMovies}
        checked={isshortMovies}
        ></input>
      <label htmlFor="checkbox" className="filter__label">
        Короткометажки
      </label>
        </div>
    </>
  );
}
export default FilterBox;
