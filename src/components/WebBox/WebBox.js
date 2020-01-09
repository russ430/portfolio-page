import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilRuler, faCode } from '@fortawesome/free-solid-svg-icons';
import * as colors from '../../UI/colors';
import StyledSVG from './StyledSVG/StyledSVG';

const Section = styled.div`
  padding: 5rem 0;
  background-color: ${colors.white};
  position: relative;
`;

const DevBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 0 auto;
  background-color: ${colors.white};
  border-radius: 2rem;
  border: 1px solid #eee;
  margin-top: -12rem;
  box-shadow: 0 0.6px 1.6px rgba(0, 0, 0, 0.012), 0 1.3px 3.6px rgba(0, 0, 0, 0.017),
    0 2.3px 6.3px rgba(0, 0, 0, 0.021), 0 3.6px 10px rgba(0, 0, 0, 0.025),
    0 5.6px 15.5px rgba(0, 0, 0, 0.029), 0 8.7px 24.1px rgba(0, 0, 0, 0.033),
    0 14.5px 40px rgba(0, 0, 0, 0.038), 0 29px 80px rgba(0, 0, 0, 0.05);
`;

const DevBoxTop = styled.div`
  display: flex;
  border-bottom: 1px solid #eee;
`;

const DevBoxBottom = styled.div`
  text-align: center;
`;

const Card = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  padding: 4rem;

  &:not(:last-child) {
    border-right: 1px solid #eee;
  }
`;

const Heading = styled.h3`
  font-size: 2.7rem;
  letter-spacing: 0.1rem;
  margin-bottom: 2rem;
`;

const CardBody = styled.p`
  font-size: 1.7rem;
  text-align: center;
  letter-spacing: 0.03rem;
  margin: 1rem 0;
`;

const CardSubHeading = styled.h4`
  font-size: 2.1rem;
  letter-spacing: 0.07rem;
  margin-bottom: 0.5rem;
  color: ${colors.primary};
`;

const Icon = styled(FontAwesomeIcon)`
  color: ${colors.primary};
  margin: 2rem;
`;

const skills = [
  {
    skill: 'git',
    color: '#f54d28',
    name: 'Git',
  },
  {
    skill: 'github',
    color: '#000',
    name: 'Github',
  },
  {
    skill: 'npm',
    color: '#c22127',
    name: 'npm',
  },
  {
    skill: 'react',
    color: '#62dafd',
    name: 'React',
  },
  {
    skill: 'redux',
    color: '#764abd',
    name: 'Redux',
  },
  {
    skill: 'sass',
    color: '#f782ac',
    name: 'Sass',
  },
];

const SkillsIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3rem 0;
`;

const WebBox = () => (
  <Section>
    <DevBox id="about">
      <DevBoxTop>
        <Card>
          <Icon icon={faPencilRuler} size="5x" />
          <Heading>Web Design</Heading>
          <CardBody>
            I enjoy creating unique, responsive layouts custom-tailored to your needs.
          </CardBody>
          <CardSubHeading>Things I design:</CardSubHeading>
          <CardBody>UX, UI, Web, Desktop, Mobile</CardBody>
        </Card>
        <Card>
          <Icon icon={faCode} size="5x" />
          <Heading>Web Development</Heading>
          <CardBody>
            I believe websites must be fast, responsive, and compatible across all devices.
          </CardBody>
          <CardSubHeading>Languages:</CardSubHeading>
          <CardBody>HTML5, CSS3, Javascript (ES6)</CardBody>
        </Card>
      </DevBoxTop>
      <DevBoxBottom>
        <Heading>My Design and Development Skills</Heading>
        <SkillsIcons>
          {skills.map(s => (
            <StyledSVG svg={s.skill} color={s.color} name={s.name} />
          ))}
        </SkillsIcons>
      </DevBoxBottom>
    </DevBox>
  </Section>
);

export default WebBox;
