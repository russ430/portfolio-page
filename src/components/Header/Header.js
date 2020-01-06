import React from 'react';
import styled from 'styled-components';
import alex from '../../img/me-cut-half.png';
import NavBar from './NavBar/NavBar';

const HeaderContainer = styled.div`
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
  margin-top: 3rem;
`;

const HeaderText = styled.div`
  margin-right: 4rem;
  width: 40rem;
`;

const Title = styled.h1`
  color: white;
  font-size: 7rem;
  letter-spacing: 0.1rem;
`;

const Tagline = styled.h2`
  color: white;
  font-weight: 400;
  font-size: 2rem;
`;

const Header = () => (
  <HeaderContainer>
    <NavBar />
    <HeaderBox>
      <HeaderText>
        <Title>Hi, I'm Alex.</Title>
        <Tagline>
          A Front End Web Developer and Programmer living just outside of Boston, Massachusetts
        </Tagline>
      </HeaderText>
      <img src={alex} alt="Alex Russian" />
    </HeaderBox>
  </HeaderContainer>
);

export default Header;
