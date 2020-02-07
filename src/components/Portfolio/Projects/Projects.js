import React from 'react';
import styled from 'styled-components';
import * as colors from '../../../UI/colors/colors';
import projectsArr from './projectsArr/projectsArr';
import StyledSVG from '../../../utils/StyledSVG/StyledSVG';
import Button from '../../../utils/Button/Button';

const Container = styled.div`
  max-width: 120rem;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 5rem 0;

  @media screen and (max-width: 800px) {
    padding: 2rem 0;
  }
`;

const Project = styled.div`
  display: flex;
  padding: 2rem 0;
  margin-bottom: 2rem 0;

  &:not(:last-child) {
    border-bottom: 2px solid #eee;
  }

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 2;
`;

const Figure = styled.figure`
  padding: 2rem;

  @media screen and (max-width: 800px) {
    padding: 1rem 2rem;
  }
`;

const Img = styled.img`
  width: 100%;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 2rem;

  @media screen and (max-width: 800px) {
    padding: 1rem 2rem;
  }
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  font-weight: 500;
  color: ${colors.primary};

  @media screen and (max-width: 800px) {
    margin-bottom: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1.5rem;
  color: ${colors.black};

  @media screen and (max-width: 800px) {
    margin-bottom: 2rem;
  }
`;

const SkillsList = styled.ul`
  list-style: none;

  @media screen and (max-width: 800px) {
    margin-bottom: 2rem;
  }
`;

const Skill = styled.li`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin: 1.5rem 0;
`;

const Projects = () => (
  <Container>
    {projectsArr.map(p => {
      return (
        <Project>
          <Left>
            <Figure>
              <Img src={p.img.src} alt={p.img.alt} />
            </Figure>
          </Left>
          <Right>
            <Heading>{p.project}</Heading>
            <Description>{p.description}</Description>
            <SkillsList>
              {p.svgs.map(s => {
                return (
                  <Skill>
                    <StyledSVG svg={s.svg} color={s.color} size={s.size} />
                    {s.name}
                  </Skill>
                );
              })}
              {p.github && (
                <Skill>
                  <StyledSVG svg="github" color="#000" size="30" />
                  <a href={p.github} rel="noreferrer noopener">
                    Github Repo
                  </a>
                </Skill>
              )}
            </SkillsList>
            <a href={p.link} target="_blank" rel="noreferrer noopener">
              <Button color="primary" size="small">
                See it live
              </Button>
            </a>
          </Right>
        </Project>
      );
    })}
  </Container>
);

export default Projects;
