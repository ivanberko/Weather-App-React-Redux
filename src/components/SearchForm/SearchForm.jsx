import React, { useState } from 'react';

const SearchForm = ({fetchCurrentWeather}) => {
  const [query, setQuery] = useState('');

  const handleChenge = ({ target: { value } }) => {
    setQuery(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchCurrentWeather(query);
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

export default SearchForm;
