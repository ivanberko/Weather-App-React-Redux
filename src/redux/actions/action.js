export const Type = {
  FEACH_WEATHER_START: 'FEACH_WEATHER_START',
  FEACH_WEATHER_SUCCESS: 'FEACH_WEATHER_SUCCESS',
  FEACH_WEATHER_ERROR: 'FEACH_WEATHER_ERROR',
};

export const feachWeatherStart = () => ({
  type: Type.FEACH_WEATHER_START,
});

export const feachWeatherSuccsess = (data) => ({
  type: Type.FEACH_WEATHER_SUCCESS,
  payload: { data },
});

export const feachWeatherError = (error) => ({
  type: Type.FEACH_WEATHER_ERROR,
  payload: { error },
});