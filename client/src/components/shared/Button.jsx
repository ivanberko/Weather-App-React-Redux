import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background-color: #0c4879;
  border: 0;
  outline: 0;
  padding: 8px 20px;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0px 2px 1px 1px rgba(12, 72, 121, 0.05);
  font-size: 16px;
  text-transform: uppercase;
  user-select: none;
  transition: background-color 200ms ease-in-out;
  &:hover {
    box-shadow: 0px 2px 1px 1px rgba(12, 72, 121, 0.15);
    background-color: #ec6e4c;
  }
`;

const Button = ({ type, label, onClick }) => (
  <StyledButton type={type} onClick={onClick}>
    {label}
  </StyledButton>
);

Button.defaultProps = {
  onClick: () => null,
  type: 'button',
  label: '',
};

Button.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
