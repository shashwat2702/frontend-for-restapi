import React from 'react';
import PropTypes from 'prop-types';
import { Footer, Header, HeaderTitle, PageContainer } from './PageLayoutStyles';

const PageLayout = (props) => {
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

PageLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PageLayout;
