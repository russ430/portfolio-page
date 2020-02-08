import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import alex from '../../../assets/img/me-cut-half.png';
import * as colors from '../../../UI/colors/colors';
import Button from '../../../utils/Button/Button';

const Section = styled.div`
  background-color: ${colors.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 0 13rem 0;

  @media screen and (max-width: 545px) {
    padding: 4rem 0 6rem 0;
  }
`;

const HeaderBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 6rem 0;
  text-align: center;

  @media screen and (max-width: 545px) {
    margin: 2rem 0;
  }
`;

const HeaderText = styled.div`
  max-width: 45rem;
`;

const Title = styled.h1`
  color: white;
  font-size: 7rem;
  letter-spacing: 0.1rem;
  margin: 2rem 0;

  @media screen and (max-width: 545px) {
    font-size: 5rem;
  }
`;

const Tagline = styled.h2`
  color: white;
  font-weight: 400;
  font-size: 2rem;
  margin: 0;
`;

const Picture = styled.div`
  background-image: url(${alex}), linear-gradient(${colors.primary}, ${colors.primaryDark});
  height: 15rem;
  width: 15rem;
  border-radius: 100rem;
  border: 2px solid white;
  background-position: 53% 0%;
  background-repeat: no-repeat;
`;

const Header = () => (
  <Section>
    <HeaderBox>
      <Picture />
      <HeaderText>
        <Title>Hi, I'm Alex.</Title>
        <Tagline>
          I'm a Front End Developer and Programmer based outside Boston, Massachusetts
        </Tagline>
      </HeaderText>
    </HeaderBox>
    <Link to="/contact">
      <Button>Work With Me</Button>
    </Link>
  </Section>
);

export default Header;
