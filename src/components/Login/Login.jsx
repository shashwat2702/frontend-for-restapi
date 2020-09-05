import React from 'react';
import Input from '../Shared/Input/Input';
import Button from '../Shared/Button/Button';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  margin: 0 auto;
  max-width: 300px;
  width: 80%;
`;

const FormTitle = styled.p`
  @import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans&display=swap');
  font-family: 'Kumbh Sans', sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  text-align: center;
`;

const LoginContainer = styled.div`
  background-color: white;
  border: 1px solid black;
  border-radius: 3px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5rem;
  max-width: 400px;
  min-height: 250px;
  min-width: 350px;
  padding: 1rem;
  width: 30%;
`;

const Login = () => {
  return(
    <LoginContainer>
      <FormTitle>Login</FormTitle>
      <Input uniqueId='username' label='Email address'/>
      <Input uniqueId='password' label='Password' type='password'/>
      <ButtonContainer>
      <Button/>
      </ButtonContainer>
    </LoginContainer>
  )
};

export default Login;