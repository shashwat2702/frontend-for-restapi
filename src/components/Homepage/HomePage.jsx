import React from 'react';
import Login from '../Login/Login';
import { Footer, Header, HeaderTitle, LoginContainer, PageContainer } from './HomePageStyles';

const HomePage = () => {
  return (
    <PageContainer>
      <Header>
        <HeaderTitle>Library Portal</HeaderTitle>
      </Header>
      <LoginContainer>
      <Login/>
      </LoginContainer>
      <Footer/>
    </PageContainer>
  )
};

export default HomePage;
