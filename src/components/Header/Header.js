import React from 'react';
import styled from 'styled-components';
import alex from '../../img/me-cut-half.png';
import NavBar from './NavBar/NavBar';
import Skills from './Skills/Skills';

const Section = styled.div`
  width: 100%;
  background-color: #0288d1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 5rem;
`;

const HeaderText = styled.div`
  margin-right: 8rem;
  width: 45rem;
`;

const Title = styled.h1`
  color: white;
  font-size: 7rem;
  letter-spacing: 0.1rem;
  margin: 4rem 0 4rem 0;
`;

const Tagline = styled.h2`
  color: white;
  font-weight: 400;
  font-size: 2rem;
  margin: 0;
`;

const Header = () => (
  <Section>
    <NavBar />
    <HeaderBox>
      <HeaderText>
        <Title>Hi, I'm Alex.</Title>
        <Tagline>
          I'm a Front End Web Developer and Programmer living just outside of Boston, Massachusetts
        </Tagline>
        <Skills />
      </HeaderText>
      <img src={alex} alt="Alex Russian" />
    </HeaderBox>
  </Section>
);

export default Header;
