import React from 'react';
import styled from 'styled-components';
import { MdEmail as Email } from 'react-icons/md';
import {
  FaFigma as Figma,
  FaNodeJs as Nodejs,
  FaReact as ReactLogo,
  FaSass as Sass,
} from 'react-icons/fa';
import {
  DiGitBranch as Git,
  DiJavascript1 as Javascript,
  DiNpm as Npm,
  DiResponsive as Responsive,
} from 'react-icons/di';
import { AiFillGithub as Github, AiFillLinkedin as LinkedIn } from 'react-icons/ai';

const SVGs = {
  email: Email,
  figma: Figma,
  git: Git,
  github: Github,
  javascript: Javascript,
  linkedIn: LinkedIn,
  nodejs: Nodejs,
  npm: Npm,
  react: ReactLogo,
  // redux: Redux,
  responsive: Responsive,
  sass: Sass,
};

const SVG = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${p => (p.margin ? p.margin : '0 1.5rem')};

  @media screen and (max-width: 545px) {
    margin: 0.5rem 1.5rem;
  }
`;

const Name = styled.p`
  font-size: 1.8rem;
  margin: 0.5rem 0;
`;

const StyledSVG = ({ svg, color, margin, size, hover, name }) => {
  const Styled = styled(SVGs[svg])`
    padding: 0;
    color: ${color};
    transition: 0.2s ease;

    &:hover {
      color: ${p => (p.hover ? '#fff' : null)};
    }
  `;
  return (
    <SVG margin={margin}>
      <Styled color={color} size={size} hover={hover} />
      {name && <Name>{name}</Name>}
    </SVG>
  );
};

export default StyledSVG;
