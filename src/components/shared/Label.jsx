import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
  display: inline-block;
  font-size: 20px;
  color: #171718;
  cursor: pointer;
  margin-bottom: 20px;
`;

// eslint-disable-next-line react/prop-types
const Label = ({ children }) => <StyledLabel>{children}</StyledLabel>;

export default Label;
