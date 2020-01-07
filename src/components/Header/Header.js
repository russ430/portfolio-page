import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSass,
  faHtml5,
  faCss3Alt,
  faReact,
  faGithub,
  faJs,
} from '@fortawesome/free-brands-svg-icons';
import alex from '../../img/me-cut-half.png';
import NavBar from './NavBar/NavBar';
import * as colors from '../../UI/colors';

const Section = styled.div`
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
  margin-top: 5rem;
`;

const HeaderText = styled.div`
  margin-right: 8rem;
  width: 45rem;
`;

const Title = styled.h1`
  color: white;
  font-size: 7rem;
  letter-spacing: 0.1rem;
  margin: 4rem 0 4rem 0;
`;

const Tagline = styled.h2`
  color: white;
  font-weight: 400;
  font-size: 2rem;
  margin: 0;
`;

const SkillsHeader = styled.h2`
  font-size: 2.5rem;
  color: white;
  margin: 4rem 0 2rem 0;
`;

const SkillsSvgs = styled.div`
  display: inline-block;
  background-color: ${colors.white};
  padding: 0.5rem;
  border-radius: 0.3rem;
`;

const Icon = styled(FontAwesomeIcon)`
  &:not(:last-child) {
    margin-right: 2rem;
  }
`;

const Header = () => (
  <Section>
    <NavBar />
    <HeaderBox>
      <HeaderText>
        <Title>Hi, I'm Alex.</Title>
        <Tagline>
          I'm a Front End Web Developer and Programmer living just outside of Boston, Massachusetts
        </Tagline>
        <SkillsHeader>My Skills</SkillsHeader>
        <SkillsSvgs>
          <Icon icon={faHtml5} size="5x" style={{ color: '#f16528' }} />
          <Icon icon={faCss3Alt} size="5x" style={{ color: '#3e9bd4' }} />
          <Icon icon={faJs} size="5x" style={{ color: '#feda3e' }} />
          <Icon icon={faSass} size="5x" style={{ color: '#f782ac' }} />
          <Icon icon={faReact} size="5x" style={{ color: '#62dafd' }} />
          <Icon icon={faGithub} size="5x" />
        </SkillsSvgs>
      </HeaderText>
      <img src={alex} alt="Alex Russian" />
    </HeaderBox>
  </Section>
);

export default Header;
