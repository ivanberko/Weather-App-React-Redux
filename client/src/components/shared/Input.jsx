import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const StyledInput = styled.input`
  color: #171718;
  font-size: 18px;
  padding: 4px;
  border-radius: 4px;
  border: 1px solid #bdbdbd;
  width: 100%;
  outline: 0;
  &:focus {
    border: 1px solid #313131;
  }
`;

const Input = ({ type, value = '', onChange = () => null, name = '' }) => (
  <StyledInput type={type} value={value} onChange={onChange} name={name} />
);

Input.defaultProps = {
  type: 'text',
};

Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
