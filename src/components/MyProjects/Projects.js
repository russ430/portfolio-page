import React from 'react';
import styled from 'styled-components';
import ProjectBox from './ProjectBox/ProjectBox';

const Section = styled.section`
  background-color: #f7f7f7;
  padding: 1rem;
  margin: 0;
`;

const Header = styled.h1`
  font-size: 4rem;
  margin: 3rem;
  text-align: center;
`;

const ProjectsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
`;

const Projects = () => (
  <Section>
    <Header>Projects</Header>
    <ProjectsContainer>
      <ProjectBox />
      <ProjectBox />
      <ProjectBox />
    </ProjectsContainer>
  </Section>
);

export default Projects;
