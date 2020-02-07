import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import * as colors from '../../UI/colors/colors';

const Nav = styled.div`
  padding: 1rem;
  background-color: ${colors.primary};
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
    border-bottom: 1px solid transparent;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      border-bottom: 1px solid white;
    }
  }

  @media screen and (max-width: 545px) {
    font-size: 1.5rem;
  }
`;

const NavBar = () => (
  <Nav>
    <NavList>
      <NavItem>
        <NavLink exact to="/" activeStyle={{ borderBottom: '1px solid white' }}>
          Home
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/about" activeStyle={{ borderBottom: '1px solid white' }}>
          About
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/portfolio" activeStyle={{ borderBottom: '1px solid white' }}>
          Portfolio
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/contactme" activeStyle={{ borderBottom: '1px solid white' }}>
          Contact Me
        </NavLink>
      </NavItem>
    </NavList>
  </Nav>
);

export default NavBar;
