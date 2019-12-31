import React from 'react';
import styled from 'styled-components';
import alex from './img/me-cut-half.png';

const Header = styled.div`
  width: 100%;
  background-color: #039be5;
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
  width: 30rem;
`;

const Title = styled.h1`
  color: white;
  font-size: 5rem;
  letter-spacing: 0.1rem;
`;

const Tagline = styled.h2`
  color: white;
  font-weight: 400;
`;

const NavBar = styled.div`
  padding: 1rem;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
`;

const NavItem = styled.li`
  color: white;
  font-size: 1.5rem;
  margin: 0 1rem;
`;

function App() {
  return (
    <Header>
      <NavBar>
        <NavList>
          <NavItem>Home</NavItem>
          <NavItem>About</NavItem>
          <NavItem>Portfolio</NavItem>
          <NavItem>Contact Me</NavItem>
        </NavList>
      </NavBar>
      <HeaderBox>
        <HeaderText>
          <Title>Hi, I'm Alex.</Title>
          <Tagline>
            A Front End Web Developer and Programmer living just outside of Boston, Massachusetts
          </Tagline>
        </HeaderText>
        <img src={alex} alt="Alex Russian" />
      </HeaderBox>
    </Header>
  );
}

export default App;
