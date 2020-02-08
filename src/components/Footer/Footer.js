import React from 'react';
import styled from 'styled-components';
import { Github, LinkedinSquare } from 'styled-icons/boxicons-logos';
import { Email } from 'styled-icons/material';
import { Link } from 'react-router-dom';
import * as colors from '../../UI/colors/colors';

const Section = styled.footer`
  padding: 2rem 0;
  padding-bottom: 1rem;
  background-color: ${colors.greyMed};
`;

const Icons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
`;

const NavBar = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin: 1rem;
  padding: 1rem;
  text-align: center;
`;

const NavItem = styled(Link)`
  color: white;
  padding: 0;
  margin: 0 1rem;
  font-size: 1.8rem;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 545px) {
    font-size: 1.5rem;
  }
`;

const Copyright = styled.div`
  margin: 0.5rem 0;
  text-align: center;
`;

const CopyrightText = styled.p`
  font-size: 1.2rem;
  color: white;
  padding: 0;
  margin: 0;
`;

const Footer = () => {
  const navClickHandler = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Section>
      <Icons>
        <a
          href="http://www.linkedin.com/in/alex-russian-ajr111/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinSquare size="45" style={{ color: 'white', margin: '0 0.5rem' }} />
        </a>
        <a href="http://www.github.com/russ430/" target="_blank" rel="noopener noreferrer">
          <Github size="45" style={{ color: 'white', margin: '0 0.5rem' }} />
        </a>
        <Link to="/contactme">
          <Email size="45" style={{ color: 'white', margin: '0 0.5rem' }} />
        </Link>
      </Icons>
      <NavBar>
        <NavItem to="/" onClick={navClickHandler}>
          Home
        </NavItem>
        <NavItem to="/about" onClick={navClickHandler}>
          About
        </NavItem>
        <NavItem to="/portfolio" onClick={navClickHandler}>
          Portfolio
        </NavItem>
        <NavItem to="/contact" onClick={navClickHandler}>
          Contact Me
        </NavItem>
      </NavBar>
      <Copyright>
        <CopyrightText>Copyright © 2020 Alex Russian</CopyrightText>
      </Copyright>
    </Section>
  );
};

export default Footer;