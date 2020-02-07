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

  @media screen and (max-width: 545px) {
    padding: 0;
  }
`;

const DevBox = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 105rem;
  margin: 0 auto;
  background-color: ${colors.white};
  border-radius: 2rem;
  border: 1px solid #eee;
  margin-top: -12rem;
  box-shadow: ${boxShadowSmall};

  @media screen and (max-width: 545px) {
    margin-top: 0;
    box-shadow: none;
    border-radius: 0;
    border: none;
  }
`;

const DevBoxTop = styled.div`
  display: flex;
  border-bottom: 1px solid #eee;

  @media screen and (max-width: 545px) {
    flex-direction: column;
  }
`;

const DevBoxBottom = styled.div`
  text-align: center;
  padding: 4rem 1rem;

  @media screen and (max-width: 545px) {
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

  @media screen and (max-width: 545px) {
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

  @media screen and (max-width: 545px) {
    font-size: 2.5rem;
  }
`;

const CardBody = styled.p`
  font-size: 1.7rem;
  text-align: center;
  letter-spacing: 0.03rem;
  margin: 1rem 0;

  @media screen and (max-width: 545px) {
    font-size: 1.5rem;
  }
`;

const CardSubHeading = styled.h4`
  font-size: 2.1rem;
  letter-spacing: 0.07rem;
  margin-bottom: 0.5rem;
  color: ${colors.primary};

  @media screen and (max-width: 545px) {
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
        <Skills />
      </DevBoxBottom>
    </DevBox>
  </Section>
);

export default WebBox;
