import React from 'react';
import styled from 'styled-components';
import { MdEmail as Email } from 'react-icons/md';
import { FaFigma as Figma, FaNodeJs as Nodejs, FaReact as ReactLogo } from 'react-icons/fa';
import {
  DiGitBranch as Git,
  DiJavascript1 as Javascript,
  DiNpm as Npm,
  DiResponsive as Responsive,
} from 'react-icons/di';
import { AiFillGithub as Github, AiFillLinkedin as LinkedIn } from 'react-icons/ai';
import { ReactComponent as Redux } from '../../assets/svg/bxl-redux.svg';
import { ReactComponent as D3 } from '../../assets/svg/d3.svg';
import { ReactComponent as Jest } from '../../assets/svg/jest.svg';

const SVGs = {
  d3: D3,
  email: Email,
  figma: Figma,
  git: Git,
  github: Github,
  javascript: Javascript,
  jest: Jest,
  linkedIn: LinkedIn,
  nodejs: Nodejs,
  npm: Npm,
  react: ReactLogo,
  redux: Redux,
  responsive: Responsive,
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
    transition: 0.2s ease;
    fill: ${color};

    &:hover {
      fill: ${p => (p.hover ? '#fff' : null)};
    }
  `;

  let svgIcon = <Styled color={color} hover={hover} size={size} />;

  if (svg === 'redux') {
    svgIcon = <Redux width={size} height={size} fill={color} />;
  } else if (svg === 'd3') {
    svgIcon = (
      <D3
        width={size}
        height={size}
        fill={color}
        style={{ margin: '0.3rem 0.2rem 0.4rem 0.2rem' }}
      />
    );
  } else if (svg === 'jest') {
    svgIcon = <Jest width={size} height={size} fill={color} />;
  }
  return (
    <SVG margin={margin}>
      {svgIcon}
      {name && <Name>{name}</Name>}
    </SVG>
  );
};

export default StyledSVG;
