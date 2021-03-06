import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilRuler, faCode } from '@fortawesome/free-solid-svg-icons';
import * as colors from '../../UI/colors/colors';
import Skills from './Skills/Skills';
import { boxShadowSmall } from '../../UI/boxShadow/boxShadow';

const Section = styled.div`
  padding: 5rem 0;
  background-color: ${colors.white};
  position: relative;

  @media screen and (max-width: 750px) {
    padding: 0;
  }
`;

const DevBox = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 95rem;
  margin: 0 auto;
  background-color: ${colors.white};
  border-radius: 2rem;
  border: 1px solid #eee;
  margin-top: -12rem;
  box-shadow: ${boxShadowSmall};

  @media screen and (max-width: 750px) {
    margin-top: 0;
    box-shadow: none;
    border-radius: 0;
    border: none;
  }
`;

const DevBoxTop = styled.div`
  display: flex;
  border-bottom: 1px solid #eee;

  @media screen and (max-width: 750px) {
    flex-direction: column;
  }
`;

const DevBoxBottom = styled.div`
  text-align: center;
  padding: 4rem 1rem;

  @media screen and (max-width: 750px) {
    border-bottom: 1px solid #eee;
  }
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

  @media screen and (max-width: 750px) {
    padding: 2rem;

    &:not(:last-child) {
      border-bottom: 1px solid #eee;
      border-right: none;
    }
  }
`;

const Heading = styled.h3`
  font-size: 2.7rem;
  letter-spacing: 0.1rem;
  margin-bottom: 2rem;

  @media screen and (max-width: 750px) {
    font-size: 2.5rem;
  }
`;

const CardBody = styled.p`
  font-size: 1.7rem;
  text-align: center;
  letter-spacing: 0.03rem;
  margin: 1rem 0;

  @media screen and (max-width: 750px) {
    font-size: 1.5rem;
  }
`;

const CardSubHeading = styled.h4`
  font-size: 2.1rem;
  letter-spacing: 0.07rem;
  margin: 1.5rem 0 0.5rem 0;
  color: ${colors.primary};

  @media screen and (max-width: 750px) {
    font-size: 1.9rem;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  color: ${colors.primary};
  margin: 2rem;
`;

const WebBox = () => (
  <Section>
    <DevBox id="about">
      <DevBoxTop>
        <Card>
          <Icon icon={faPencilRuler} size="5x" />
          <Heading>Design</Heading>
          <CardBody>
            I aim to design software with computer science fundamentals and best practices always in
            mind.
          </CardBody>
          <CardSubHeading>Things I design:</CardSubHeading>
          <CardBody>Web and Mobile Sites, Web Apps</CardBody>
        </Card>
        <Card>
          <Icon icon={faCode} size="5x" />
          <Heading>Development</Heading>
          <CardBody>
            As a programmer I'm always striving to write clean, modular, maintainable code.
          </CardBody>
          <CardSubHeading>Languages:</CardSubHeading>
          <CardBody>HTML5, CSS, Javascript</CardBody>
        </Card>
      </DevBoxTop>
      <DevBoxBottom>
        <Heading>My Design and Development Skills</Heading>
        <Skills />
      </DevBoxBottom>
    </DevBox>
  </Section>
);

export default WebBox;
