import React from 'react';
import styled from 'styled-components';
import * as colors from '../../../UI/colors';

const Nav = styled.div`
  padding: 1rem;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  margin: 1rem;
  padding: 0;
`;

const NavItem = styled.li`
  font-size: 2.5rem;
  margin: 0 1.5rem;
  a {
    text-decoration: none;
    color: #fff;
    cursor: pointer;
    transition: color 0.2s ease;

    &:hover {
      color: ${colors.primaryLight};
    }
  }
`;

const NavBar = () => (
  <Nav>
    <NavList>
      <NavItem>
        <a href="#home">Home</a>
      </NavItem>
      <NavItem>
        <a href="#about">About</a>
      </NavItem>
      <NavItem>
        <a href="#portfolio">Portfolio</a>
      </NavItem>
      <NavItem>
        <a href="#">Contact Me</a>
      </NavItem>
    </NavList>
  </Nav>
);

export default NavBar;
