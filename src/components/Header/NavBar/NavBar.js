import React from 'react';
import styled from 'styled-components';

const Nav = styled.div`
  padding: 1rem;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
`;

const NavItem = styled.li`
  color: white;
  font-size: 2.5rem;
  margin: 0 1.5rem;
`;

const NavBar = () => (
  <Nav>
    <NavList>
      <NavItem>Home</NavItem>
      <NavItem>About</NavItem>
      <NavItem>Portfolio</NavItem>
      <NavItem>Contact Me</NavItem>
    </NavList>
  </Nav>
);

export default NavBar;
