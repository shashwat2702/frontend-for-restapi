import React, { useState } from 'react';
import Input from '../Shared/Input/Input';
import Button from '../Shared/Button/Button';
import styled from 'styled-components';
import { postCall } from '../../utils/apiCaller';
import { LOGIN_URL } from '../../utils/apiURL';
import { setApiAccessToken } from '../../utils/tokenHelper';

const ButtonContainer = styled.div`
  margin: 0 auto;
  max-width: 300px;
  width: 80%;
`;
ButtonContainer.displayName = 'ButtonContainer';

const FormTitle = styled.p`
  @import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans&display=swap');
  font-family: 'Kumbh Sans', sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  text-align: center;
`;
FormTitle.displayName = 'FormTitle';

const LoginContainer = styled.div`
  background-color: white;
  border: 1px solid black;
  border-radius: 3px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5rem;
  max-width: 400px;
  min-height: 250px;
  min-width: 360px;
  padding: 1rem;
  padding-right: 2rem;
  width: 30%;
`;
LoginContainer.displayName = 'LoginContainer';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    postCall(LOGIN_URL, {email, password}).then((response) => {
      setApiAccessToken(response.token);
    });
  };

  return(
    <LoginContainer>
      <FormTitle>Login</FormTitle>
      <Input label='Email address' onBlur={setEmail} uniqueId='email-address'/>
      <Input label='Password' onBlur={setPassword} type='password' uniqueId='password'/>
      <ButtonContainer>
      <Button label='Login' onClick={onSubmit} />
      </ButtonContainer>
    </LoginContainer>
  )
};

export default Login;