import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSass,
  faHtml5,
  faCss3Alt,
  faReact,
  faGithub,
  faJs,
} from '@fortawesome/free-brands-svg-icons';

const Icon = styled(FontAwesomeIcon)`
  &:not(:last-child) {
    margin-right: 2rem;
  }
`;

const skills = [
  {
    skill: 'html',
    icon: faHtml5,
    color: '#f16528',
  },
  {
    skill: 'css',
    icon: faCss3Alt,
    color: '#3e9bd4',
  },
  {
    skill: 'javascript',
    icon: faJs,
    color: '#feda3e',
  },
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
    skill: 'github',
    icon: faGithub,
    color: '#000',
  },
];

const SkillsIcons = () => (
  <>
    {skills.map(s => (
      <Icon icon={s.icon} size="5x" color={s.color} key={s.skill} />
    ))}
  </>
);

export default SkillsIcons;
