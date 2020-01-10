import React from 'react';
import styled from 'styled-components';
import StyledSVG from '../StyledSVG/StyledSVG';
import skillsArr from './SkillsArr/SkillsArr';

const SkillsIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3rem 0;
`;

const Skills = () => (
  <SkillsIcons>
    {skillsArr.map(s => (
      <StyledSVG svg={s.skill} color={s.color} name={s.name} key={s.name} />
    ))}
  </SkillsIcons>
);

export default Skills;
