import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as colors from '../../UI/colors/colors';

const Nav = styled.div`
  padding: 1rem;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
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
        <Link to="/">Home</Link>
      </NavItem>
      <NavItem>
        <Link to="/about">About</Link>
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
