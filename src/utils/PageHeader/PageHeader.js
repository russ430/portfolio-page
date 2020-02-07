import React from 'react';
import styled from 'styled-components';
import * as colors from '../../UI/colors/colors';

const Header = styled.header`
  padding: 13rem 0 11rem 0;
  background-color: ${colors.primary};

  @media screen and (min-width: 375px) and (max-width: 1000px) {
    padding: 4rem 1rem;
  }
`;

const Heading = styled.h1`
  padding: 0;
  margin: 0;
  font-size: 7rem;
  color: ${colors.white};
  text-align: center;

  @media screen and (min-width: 375px) and (max-width: 1000px) {
    font-size: 5rem;
  }
`;

const SubHeading = styled.h2`
  font-size: 2.3rem;
  color: ${colors.white};
  font-weight: 400;
  text-align: center;
  font-style: italic;

  @media screen and (max-width: 545px) {
    font-size: 1.8rem;
  }
`;

const PageHeader = props => (
  <Header>
    <Heading>{props.children}</Heading>
    <SubHeading>{props.subHeading}</SubHeading>
  </Header>
);

export default PageHeader;
