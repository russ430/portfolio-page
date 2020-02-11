import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import * as colors from '../../UI/colors/colors';

const Nav = styled.div`
  padding: 1rem;
  background-color: ${colors.primary};
  text-align: center;
  margin: 0 auto;
`;

const NavList = styled.div`
  display: flex;
  margin: 1rem;
  padding: 0;
  justify-content: center;
`;

const NavItem = styled(NavLink)`
  font-size: 2rem;
  margin: 0 1.5rem;
  text-decoration: none;
  color: #fff;
  border-bottom: 1px solid transparent;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-bottom: 1px solid white;
  }

  @media screen and (max-width: 545px) {
    font-size: 1.5rem;
  }
`;

const NavBar = () => (
  <Nav>
    <NavList>
      <NavItem exact to="/" activeStyle={{ borderBottom: '1px solid #fff' }}>
        Home
      </NavItem>
      <NavItem to="/about" activeStyle={{ borderBottom: '1px solid #fff' }}>
        About
      </NavItem>
      <NavItem to="/portfolio" activeStyle={{ borderBottom: '1px solid #fff' }}>
        Portfolio
      </NavItem>
      <NavItem to="/contact" activeStyle={{ borderBottom: '1px solid #fff' }}>
        Contact
      </NavItem>
    </NavList>
  </Nav>
);

export default NavBar;
