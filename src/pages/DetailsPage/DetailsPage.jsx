import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import ListCitiesDetails from '../../components/ListCitiesDetails/ListCitiesDetailsContainer';

const DetailsPage = ({ fetchForecastWeather }) => {
  const { city } = useParams();

  useEffect(() => {
    fetchForecastWeather(city);
  }, [city, fetchForecastWeather]);

  return <ListCitiesDetails />;
};

DetailsPage.propTypes = {
  fetchForecastWeather: PropTypes.func.isRequired,
};

export default DetailsPage;
