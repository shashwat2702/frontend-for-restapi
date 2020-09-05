import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #4db8ff;
  border-radius: 3px;
  border-width: 0;
  font-weight: 700;
  height: 2.5rem;
  margin: 16px 0 16px 8px;
  width: 100%;
`;

const Button = (props) => {
  return (
    <StyledButton onClick={props.onClick}>{props.label}</StyledButton>
  )
};

Button.propTypes = {
  label: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
