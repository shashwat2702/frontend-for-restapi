import React from 'react';
import PropTypes from 'prop-types';
import { Footer, Header, HeaderTitle, PageContainer } from './HomePageStyles';

const HomePage = (props) => {
  return (
    <PageContainer>
      <Header>
        <HeaderTitle>Library Portal</HeaderTitle>
      </Header>
      {props.children}
      <Footer/>
    </PageContainer>
  )
};

HomePage.propTypes = {
  children: PropTypes.element.isRequired,
};

export default HomePage;
