import moment from "moment";

export function createCurrentWeatherObject(res) {
  const {
    dt,
    main: { temp, temp_min, temp_max },
    name,
    weather: [{ icon }],
    sys: { sunrise, sunset },
    timezone,
  } = res;

  const newObj = {
    dt,
    currentTime: getLocalTime().format('HH:mm:ss'),
    month: getLocalTime().format('MMMM'),
    date: getLocalTime().format('DD'),
    dayOfWeek: getLocalTime().format('ddd'),
    temp: Math.floor(temp),
    temp_max: Math.floor(temp_max),
    temp_min: Math.floor(temp_min),
    icon: `http://openweathermap.org/img/wn/${icon}@2x.png`,
    name,
    sunrise,
    sunriseTime: {
      hours: moment(sunrise * 1000).format('HH'),
      mins: moment(sunrise * 1000).format('mm'),
    },
    sunset,
    sunsetTime: {
      hours: moment(sunset * 1000).format('HH'),
      mins: moment(sunset * 1000).format('mm'),
    },
    timezone,
  };

  function getLocalTime() {
    return moment.utc(new Date().getTime()).utcOffset(timezone / 60 / 60);
  }

  return newObj;
}
