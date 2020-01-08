import React from 'react';
import styled from 'styled-components';
import * as colors from '../../../UI/colors';
import SkillsIcons from './SkillsIcons/SkillsIcons';

const SkillsHeader = styled.h2`
  font-size: 2.5rem;
  color: white;
  margin: 4rem 0 2rem 0;
`;

const SkillsSvgs = styled.div`
  display: inline-block;
  background-color: ${colors.white};
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
`;

const Skills = () => (
  <>
    <SkillsHeader>My Skills</SkillsHeader>
    <SkillsSvgs>
      <SkillsIcons />
    </SkillsSvgs>
  </>
);

export default Skills;
