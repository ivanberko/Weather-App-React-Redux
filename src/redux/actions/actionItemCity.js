export const TypeCity = {
  DELETE_CITY: 'DELETE_CITY',
};

export const deleteCity = (dt) => ({
  type: TypeCity.DELETE_CITY,
  payload: dt,
});
