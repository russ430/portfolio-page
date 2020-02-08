import React from 'react';
import styled from 'styled-components';
import * as colors from '../../UI/colors/colors';
import { boxShadowSmall } from '../../UI/boxShadow/boxShadow';
import PageHeader from '../../utils/PageHeader/PageHeader';
import swing from '../../assets/img/swing.png';
import trophy from '../../assets/img/trophy.png';

const Section = styled.section`
  padding: 2rem 1.5rem 4rem 1.5rem;
  background-color: ${colors.white};
`;

const Box = styled.div`
  max-width: 70rem;
  margin: 0 auto;
`;

const Heading = styled.h2`
  font-size: 5rem;
  color: ${colors.primary};
  text-shadow: ${boxShadowSmall};
  margin: 2rem 0;

  @media screen and (max-width: 545px) {
    font-size: 3rem;
  }
`;

const Text = styled.p`
  font-size: 1.8rem;
  color: ${colors.black};
  margin: 0 auto;
`;

const Pictures = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 1rem 0;
`;

const Img = styled.img`
  margin: 1rem;
  padding: 0.5rem;
  height: auto;
  max-width: 30rem;
`;

const About = () => (
  <>
    <PageHeader subHeading="A quick bit about who I am and why you should work with me.">
      About Me
    </PageHeader>
    <Section>
      <Box>
        <Heading>Who I am</Heading>
        <Text>
          My name is Alex. I am a freelance Web Designer and Developer based in the Greater Boston
          Area. I work primarily with JavaScript (ES6) and the front-end framework, React, but am
          comfortable with the CMS WordPress.
        </Text>
        <Heading>Why Work With Me</Heading>
        <Text>
          There isn't much more I enjoy than using my creativity to create and build fast,
          responsive, user-friendly websites. If come across something I'm unfamiliar with I will
          turn the internet upside down until I feel comfortable implementing it into my work. Every
          day I set the goal to be better than I was yesterday. I look forward to exceeding your
          expectations.
        </Text>
        <Heading>Beyond Development</Heading>
        <Text>
          Outside of web development I'm incredibly passionate about all things Boston sports. I'm
          also a very competitive golfer and enjoy competing in local amateur tournaments around
          Massachusetts. If I'm not behind a computer screen I'm probably on a golf course!
        </Text>
      </Box>
      <Pictures>
        <Img src={swing} alt="Alex swinging a golf club" />
        <Img src={trophy} alt="Alex holding a trophy with his friend" />
      </Pictures>
    </Section>
  </>
);

export default About;
