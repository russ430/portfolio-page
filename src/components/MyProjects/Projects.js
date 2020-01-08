import React from 'react';
import styled from 'styled-components';
import ProjectBox from './ProjectBox/ProjectBox';
import * as colors from '../../UI/colors';

const Section = styled.section`
  background-color: ${colors.white};
  padding: 1rem;
  margin: 0;
`;

const Header = styled.h1`
  font-size: 4rem;
  margin: 3rem;
  text-align: center;
  color: ${colors.primary};
`;

const ProjectsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
`;

const Projects = () => (
  <Section>
    <Header id="portfolio">Portfolio</Header>
    <ProjectsContainer>
      <ProjectBox />
      <ProjectBox />
      <ProjectBox />
    </ProjectsContainer>
  </Section>
);

export default Projects;
