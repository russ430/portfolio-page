import React from 'react';
import styled from 'styled-components';
import * as colors from '../../../UI/colors/colors';
import projectsArr from './projectsArr/projectsArr';
import StyledSVG from '../../../utils/StyledSVG/StyledSVG';

const Container = styled.div`
  max-width: 120rem;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 5rem 0;
`;

const Project = styled.div`
  display: flex;
  padding: 2rem 0;
  margin-bottom: 2rem 0;

  &:not(:last-child) {
    border-bottom: 2px solid #eee;
  }
`;

const Left = styled.div`
  flex: 2;
`;

const Figure = styled.figure`
  padding: 2rem;
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
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  font-weight: 500;
  color: ${colors.primary};
`;

const Description = styled.p`
  font-size: 1.5rem;
  color: ${colors.black};
`;

const SkillsList = styled.ul`
  list-style: none;
`;

const Skill = styled.li`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin: 1.5rem 0;
`;

const Button = styled.button`
  font-size: 1.5rem;
  background-color: ${colors.primary};
  border: 1px solid ${colors.primary};
  border-radius: 3rem;
  color: ${colors.white};
  padding: 1rem 2rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${colors.white};
    transform: scale(1.1);
    color: ${colors.primary};
  }
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
            </SkillsList>
            <a href={p.link} target="_blank" rel="noreferrer noopener">
              <Button>See it live</Button>
            </a>
          </Right>
        </Project>
      );
    })}
  </Container>
);

export default Projects;
