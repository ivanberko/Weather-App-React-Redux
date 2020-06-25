import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { searchForm, searchInput, searchBtn } from './SearchForm.module.css';
import { setLocalStorageCity } from '../../utils/helpers';

const SearchForm = ({ fetchCurrentWeather }) => {
  const [query, setQuery] = useState('');

  const handleChenge = ({ target: { value } }) => {
    setQuery(value);
  };
  // FIXME: Перенести добавление города в LS в App, данные нужно брать из store
  const handleSubmit = (e) => {
    e.preventDefault();
    const queryToLowerCase = query.toLowerCase();
    const getCitiesLS = JSON.parse(localStorage.getItem('cities'));
    if (queryToLowerCase) {
      if (getCitiesLS === null) {
        fetchCurrentWeather(queryToLowerCase);
      } else if (!getCitiesLS.includes(queryToLowerCase)) {
        fetchCurrentWeather(queryToLowerCase);
      }
      setLocalStorageCity(queryToLowerCase);
      setQuery('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={searchForm}>
      <input
        type="text"
        name="query"
        value={query}
        placeholder="Enter the city"
        onChange={handleChenge}
        className={searchInput}
      />
      <button type="submit" className={searchBtn}></button>
    </form>
  );
};

SearchForm.propTypes = {
  fetchCurrentWeather: PropTypes.func.isRequired,
};

export default SearchForm;
