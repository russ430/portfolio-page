import React from 'react';
import styled from 'styled-components';
import * as colors from '../../UI/colors/colors';

const Section = styled.section`
  padding: 1rem 0;
`;

const MainHeading = styled.h1`
  padding: 0;
  margin: 0;
  font-size: 7rem;
`;

const About = () => (
  <Section>
    <MainHeading>About Me</MainHeading>
  </Section>
);

export default About;
