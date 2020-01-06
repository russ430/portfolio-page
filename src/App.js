import React from 'react';
import styled from 'styled-components';
import alex from './img/me-cut-half.png';
import Projects from './components/MyProjects/Projects';

const Header = styled.div`
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

const NavBar = styled.div`
  padding: 1rem;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
`;

const NavItem = styled.li`
  color: white;
  font-size: 2.5rem;
  margin: 0 1rem;
`;

function App() {
  return (
    <div>
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
      <Projects />
    </div>
  );
}

export default App;
