import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams, useHistory } from 'react-router-dom';

import ListCitiesDetails from '../../components/ListCitiesDetails/ListCitiesDetailsContainer';

const DetailsPage = ({ fetchForecastWeather }) => {
  const { city } = useParams();
  const history = useHistory();

  useEffect(() => {
    fetchForecastWeather(city);
  }, [city, fetchForecastWeather]);

  const handleGoBack = () => {
    history.push('/');
  };

  return (
    <section>
      <ListCitiesDetails handleGoBack={handleGoBack} />
    </section>
  );
};

DetailsPage.propTypes = {
  fetchForecastWeather: PropTypes.func.isRequired,
};

export default DetailsPage;
