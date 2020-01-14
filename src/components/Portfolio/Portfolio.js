import React from 'react';
import styled from 'styled-components';
import PageHeader from '../../utils/PageHeader/PageHeader';
import * as colors from '../../UI/colors/colors';

const Content = styled.div`
  background-color: ${colors.white};
  overflow: hidden;
  padding: 5rem 0;
`;

const ProjectsBox = styled.div`
  max-width: 105rem;
  margin: 0 auto;
`;

const Project = styled.div`
  display: flex;
  margin-bottom: 2rem;
  border-bottom: 1px solid #ddd;
`;

const ProjectImg = styled.div`
  flex: 1;
  background-color: lightblue;
`;

const ProjectDescrip = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: lightgreen;
  padding: 1rem;
`;

const ProjectHeading = styled.h2`
  font-size: 3rem;
  color: ${colors.primary};
  margin: 1rem 0;
`;

const ProjectText = styled.p`
  font-size: 2rem;
  margin: 0;
  padding: 0;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Portfolio = () => (
  <>
    <PageHeader subHeading="Check out some of my completed projects below.">Portfolio</PageHeader>
    <Content>
      <ProjectsBox>
        <Project>
          <ProjectImg>This is an image</ProjectImg>
          <ProjectDescrip>
            <ProjectHeading>Vanderveer Motors</ProjectHeading>
            <ProjectText>
              A responsive, interactive website created for a local mechanic's repair shop. It is a
              single-page application made to feel like a multi-page website. Includes a custom-made
              appointment scheduler built to send confirmation emails to the mechanic and the
              customer when an appointment has been made.
            </ProjectText>
            <List>
              <ListItem>Responsive</ListItem>
              <ListItem>Mobile-first</ListItem>
              <ListItem>Github Repo</ListItem>
            </List>
          </ProjectDescrip>
        </Project>
        <Project>
          <ProjectImg>This is an image</ProjectImg>
          <ProjectDescrip>
            <ProjectHeading>Project 2</ProjectHeading>
            <ProjectText>This is a description</ProjectText>
          </ProjectDescrip>
        </Project>
        <Project>
          <ProjectImg>This is an image</ProjectImg>
          <ProjectDescrip>
            <ProjectHeading>Project 2</ProjectHeading>
            <ProjectText>This is a description</ProjectText>
          </ProjectDescrip>
        </Project>
      </ProjectsBox>
    </Content>
  </>
);

export default Portfolio;
