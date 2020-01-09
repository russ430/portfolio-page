import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSass, faReact, faGithub } from '@fortawesome/free-brands-svg-icons';
import { ReactComponent as Git } from '../../../../img/bxl-git.svg';
import { ReactComponent as Redux } from '../../../../img/bxl-redux.svg';

const Icon = styled(FontAwesomeIcon)`
  &:not(:last-child) {
    margin-right: 2rem;
  }
`;

const skills = [
  {
    skill: 'sass',
    icon: faSass,
    color: '#f782ac',
  },
  {
    skill: 'react',
    icon: faReact,
    color: '#62dafd',
  },
  {
    skill: 'git',
    type: 'react',
    icon: 0,
    color: '#f54d28',
  },
  {
    skill: 'github',
    icon: faGithub,
    color: '#000',
  },
  {
    skill: 'redux',
    type: 'react',
    icon: 1,
    color: '#764abd',
  },
];

const SkillsIcons = () => (
  <>
    {skills.map(s => {
      if (s.type === 'react') {
        return null;
      }
      return <Icon icon={s.icon} size="5x" color={s.color} key={s.skill} />;
    })}
  </>
);

export default SkillsIcons;
