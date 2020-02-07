import React from 'react';
import styled from 'styled-components';
import ProjectBox from './ProjectBox/ProjectBox';
import * as colors from '../../UI/colors/colors';

const Section = styled.section`
  background-color: ${colors.white};
  padding: 4rem 0;
  padding-bottom: 8rem;
  margin: 0;

  @media screen and (max-width: 545px) {
    background-color: ${colors.greyLight};
  }
`;

const Header = styled.h1`
  font-size: 4rem;
  margin: 3rem 0 5rem 0;
  text-align: center;
  color: ${colors.primary};
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 150rem;
  justify-content: space-around;
  margin: 0 auto;
`;

const Projects = () => (
  <Section>
    <Header id="portfolio">My Recent Work</Header>
    <ProjectsContainer>
      <ProjectBox />
      <ProjectBox />
      <ProjectBox />
    </ProjectsContainer>
  </Section>
);

export default Projects;
