import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const StyledLabel = styled.label`
  display: inline-block;
  font-size: 20px;
  color: #171718;
  cursor: pointer;
  margin-bottom: 20px;
`;

const Label = ({ children }) => <StyledLabel>{children}</StyledLabel>;

Label.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Label;
