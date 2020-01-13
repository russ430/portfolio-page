import React from 'react';
import styled from 'styled-components';
import * as colors from '../../UI/colors/colors';
import { boxShadowSmall } from '../../UI/boxShadow/boxShadow';
import PageHeader from '../utils/PageHeader/PageHeader';

const AboutMe = styled.section`
  padding: 2rem 0 4rem 0;
  background-color: ${colors.white};
`;

const AboutBox = styled.div`
  max-width: 70rem;
  margin: 0 auto;
`;

const AboutHeading = styled.h2`
  font-size: 5rem;
  color: ${colors.primary};
  text-shadow: ${boxShadowSmall};
  margin: 2rem 0;
`;

const AboutMeText = styled.p`
  font-size: 1.8rem;
  color: ${colors.black};
  margin: 0 auto;
`;

const AboutSubHeading = styled.h3`
  font-size: 3rem;
  margin: 3rem 0 1rem 0;
  padding: 0;
  color: ${colors.primary};
`;

const About = () => (
  <>
    <PageHeader>About Me</PageHeader>
    <AboutMe>
      <AboutBox>
        <AboutHeading>Who I am</AboutHeading>
        <AboutMeText>
          My name is Alex. I am a freelance Web Designer and Developer based in the Greater Boston
          Area. I work primarily with JavaScript (ES6) and the front-end framework, React, but am
          well versed in HTML5 and CSS3.
        </AboutMeText>
        <AboutSubHeading>Why Work With Me</AboutSubHeading>
        <AboutMeText>
          There isn't much more I enjoy than using my creativity to create and build fast,
          responsive, user-friendly websites. If come across something I'm unfamiliar with I will
          turn the internet upside down until I feel comfortable implementing it into my work. Every
          day I set the goal to be better than I was yesterday. I look forward to exceeding your
          expectations.
        </AboutMeText>
        <AboutSubHeading>Beyond Development</AboutSubHeading>
        <AboutMeText>
          Outside of web development I'm incredibly passionate about all things Boston sports. I
          also enjoy competing in regional amateur golf tournaments around Massachusetts.
          Occasionally you can find me ambulating for an extended period of time on vast oceanfronts
          of tiny pieces of sediment.
        </AboutMeText>
      </AboutBox>
    </AboutMe>
  </>
);

export default About;
