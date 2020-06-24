import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { setLocalStorageCity } from '../../utils/helpers';

const SearchForm = ({ fetchCurrentWeather }) => {
  const [query, setQuery] = useState('');

  const handleChenge = ({ target: { value } }) => {
    setQuery(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const cities = JSON.parse(localStorage.getItem('cities'));
    setLocalStorageCity(query);
    if (!cities.includes(query) && query) {
      fetchCurrentWeather(query);
    }
    setQuery('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="query"
        value={query}
        placeholder="Enter the city"
        onChange={handleChenge}
      />
      <button type="submit">Add city</button>
    </form>
  );
};

SearchForm.propTypes = {
  fetchCurrentWeather: PropTypes.func.isRequired,
};

export default SearchForm;
