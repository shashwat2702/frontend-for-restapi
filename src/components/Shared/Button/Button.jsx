import React from 'react';
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

const Button = () => {
  return (
    <StyledButton>Login</StyledButton>
  )
};

export default Button;
