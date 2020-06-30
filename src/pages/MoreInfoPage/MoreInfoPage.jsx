import React from 'react';

import { useParams } from 'react-router-dom';
import MoreInfo from '../../components/MoreInfo/MoreInfoContainer';

const MoreInfoPage = () => {
  const { dt } = useParams();

  return <MoreInfo dt={+dt} />;
};
export default MoreInfoPage;
