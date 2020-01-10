import React from 'react';
import styled from 'styled-components';
import alex from '../../img/me-cut-half.png';
import NavBar from './NavBar/NavBar';
import * as colors from '../../UI/colors/colors';

const Section = styled.div`
  width: 100%;
  background-color: ${colors.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 13rem;
`;

const HeaderBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 6rem 0;
  text-align: center;
`;

const HeaderText = styled.div`
  width: 45rem;
`;

const Title = styled.h1`
  color: white;
  font-size: 7rem;
  letter-spacing: 0.1rem;
  margin: 2rem 0;
`;

const Tagline = styled.h2`
  color: white;
  font-weight: 400;
  font-size: 2rem;
  margin: 0;
`;

const Picture = styled.div`
  background-image: url(${alex}), linear-gradient(${colors.primary}, ${colors.primaryDark});
  height: 15rem;
  width: 15rem;
  border-radius: 100rem;
  border: 2px solid white;
  background-position: 53% 0%;
  background-repeat: no-repeat;
`;

const Header = () => (
  <Section>
    <NavBar />
    <HeaderBox>
      <Picture />
      <HeaderText>
        <Title>Hi, I'm Alex.</Title>
        <Tagline>I'm a Front End Developer and Programmer based near Boston, Massachusetts</Tagline>
      </HeaderText>
    </HeaderBox>
  </Section>
);

export default Header;
