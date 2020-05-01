import React from 'react';
import styled from 'styled-components';
import * as colors from '../../UI/colors/colors';
import PageHeader from '../../utils/PageHeader/PageHeader';
import swing from '../../assets/img/swing.png';
import trophy from '../../assets/img/trophy.png';

const Section = styled.section`
  padding: 3rem 1rem;
  background-color: ${colors.white};
`;

const Box = styled.div`
  max-width: 70rem;
  margin: 0 auto;
`;

const Heading = styled.h2`
  font-size: 3rem;
  color: ${colors.primary};
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
  justify-content: center;
  margin: 1rem auto;
  max-width: 50rem;

  @media screen and (max-width: 545px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Img = styled.img`
  margin: 1rem;
  padding: 0.5rem;
  width: 60%;

  @media screen and (max-width: 545px) {
    width: 90%;
  }
`;

const About = () => (
  <>
    <PageHeader subHeading="A quick bit about me.">About Me</PageHeader>
    <Section>
      <Box>
        <Heading>Who I am</Heading>
        <Text>
          My name is Alex. I am a freelance Software Developer based in the Greater Boston Area. I
          work primarily with JavaScript but am familiar with many different libraries and
          frameworks, most notably being React.
        </Text>
        <Heading>Why Work With Me</Heading>
        <Text>
          There isn't much more I enjoy than using my creativity to develop and build fast,
          responsive, user-friendly websites. If come across something I'm unfamiliar with I will
          turn the internet upside down until I feel comfortable implementing it into my work. I'm
          always challenging myself to learn and hone my craft so that all of my work is up to
          today's standards.
        </Text>
        <Heading>Beyond Development</Heading>
        <Text>
          Outside of software development I'm incredibly passionate about all things Boston sports.
          I'm also a very competitive golfer and enjoy competing in local amateur tournaments around
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
