import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../Shared/Input/Input';
import Button from '../Shared/Button/Button';
import { postCall } from '../../utils/apiCaller';
import { SIGNUP_URL } from '../../utils/apiURL';
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

const SignupContainer = styled.div`
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
SignupContainer.displayName = 'SignupContainer';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    postCall(SIGNUP_URL, {email, firstName, lastName, password}).then((response) => {
      setApiAccessToken(response.token);
    });
  };

  return(
    <SignupContainer>
      <FormTitle>Signup</FormTitle>
      <Input label='First name' onBlur={setFirstName} uniqueId='first-name'/>
      <Input label='Last name' onBlur={setLastName} uniqueId='last-name'/>
      <Input label='Email address' onBlur={setEmail} uniqueId='email-address'/>
      <Input label='Password' onBlur={setPassword} type='password' uniqueId='password'/>
      <ButtonContainer>
      <Button label='Signup' onClick={onSubmit} />
      </ButtonContainer>
    </SignupContainer>
  )
};

export default Signup;
