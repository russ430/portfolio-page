import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ProjectBox from './ProjectBox/ProjectBox';
import * as colors from '../../UI/colors/colors';
import projectsArr from '../Portfolio/Projects/projectsArr/projectsArr';
import Button from '../../utils/Button/Button';

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

const Projects = () => {
  const recent = projectsArr.slice(0, 3);

  const navClickHandler = () => {
    // eslint-disable-next-line no-undef
    window.scrollTo(0, 0);
  };
  return (
    <Section>
      <Header id="portfolio">My Recent Work</Header>
      <ProjectsContainer>
        {recent.map(p => {
          return (
            <ProjectBox
              title={p.project}
              link={p.link}
              img={p.img.src}
              alt={p.img.alt}
              caption={p.caption}
              key={p.instaKey}
              github={p.github}
              svgs={p.svgs}
            />
          );
        })}
      </ProjectsContainer>
      <div style={{ textAlign: 'center', marginTop: '5rem' }}>
        <Link to="/portfolio" onClick={navClickHandler}>
          <Button color="primary">My Portfolio</Button>
        </Link>
      </div>
    </Section>
  );
};

export default Projects;
