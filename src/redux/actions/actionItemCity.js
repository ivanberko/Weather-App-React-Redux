export const TypeCity = {
  DELETE_CITY: 'DELETE_CITY',
  UPDATE_CITY: 'UPDATE_CITY',
};

export const deleteCity = (dt) => ({
  type: TypeCity.DELETE_CITY,
  payload: dt,
});
