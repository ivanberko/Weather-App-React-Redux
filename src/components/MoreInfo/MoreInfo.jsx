import React from 'react';
import PropTypes from 'prop-types';

import { modifyMoreInfo } from '../../utils/formatDataForecast';

const MoreInfo = ({ listForecast, dt }) => {
  const details = listForecast.filter((el) => {
    return el[0].dt === dt;
  });

  const moreInfo = modifyMoreInfo(...details);

  // TODO: отрисовать секцию с погодой по часам
  // FIXME: при перезагрузке страницы с дополнительной информацией падает приложение, прилетает undefined, при перезегрузке нужно возвращаться на HomePage

  return (
    <ul>
      <li>
        <p>{{ time }}</p>
        <img src={{ icon }} alt="icon" />
        <p>{{ temp }}</p>

        <ul>
          <li>
            <p>{{ pressure }} mm</p>
          </li>
          <li>
            <p>{{ humidity }}%</p>
          </li>
          <li>
            <p>{{ wind }} m/s</p>
          </li>
        </ul>
      </li>
    </ul>
  );
};

MoreInfo.propTypes = {
  dt: PropTypes.number.isRequired,
  listForecast: PropTypes.arrayOf(PropTypes.array.isRequired).isRequired,
};

export default MoreInfo;
