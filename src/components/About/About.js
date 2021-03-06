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
          work primarily on the front end side of development but have experience working on full
          stack applications.
        </Text>
        <Heading>Why Work With Me</Heading>
        <Text>
          As a self-taught developer I've had the opportunity to learn everything on my own. As much
          as this could be viewed as a daunting task I see it as a chance to test my determination
          and perserverance especially when I hit a roadblock. Through these daily challenges I've
          been able to hone my ability to overcome obstacles and turn the internet upside down in
          order learn and solve problems. I'm proud of how far I've come and am excited every day I
          get to code because I know I'm going to learn something new.
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
