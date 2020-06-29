export const TypeCity = {
  DELETE_CITY: 'DELETE_CITY',
};

export const deleteCity = (name) => ({
  type: TypeCity.DELETE_CITY,
  payload: name,
});
