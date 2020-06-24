export const setLocalStorageCity = (cityName) => {
  const cities = JSON.parse(localStorage.getItem('cities'));
  if (cities === null && cityName) {
    localStorage.setItem('cities', JSON.stringify([cityName]));
  } else if (!cities.includes(cityName) && cityName) {
    localStorage.setItem('cities', JSON.stringify([...cities, cityName]));
  }
};

export const forecastSlice = (listForecast) => {
  return listForecast.length <= 5 ? listForecast : listForecast.slice(1);
};
