import React from 'react';
import styled from 'styled-components';
import { Npm, ReactLogo, Sass, Wordpress } from 'styled-icons/fa-brands';
import {
  Figma,
  Redux,
  Git,
  Github,
  Nodejs,
  Javascript,
  LinkedinSquare,
} from 'styled-icons/boxicons-logos';
import { Phonelink as Responsive } from 'styled-icons/material/Phonelink';
import { Email } from 'styled-icons/material';

const SVGs = {
  email: Email,
  figma: Figma,
  git: Git,
  github: Github,
  javascript: Javascript,
  linkedIn: LinkedinSquare,
  nodejs: Nodejs,
  npm: Npm,
  react: ReactLogo,
  redux: Redux,
  responsive: Responsive,
  sass: Sass,
  wordpress: Wordpress,
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

const StyledSVG = props => {
  const Styled = styled(SVGs[props.svg])`
    padding: 0;
    color: ${p => p.color};
    transition: 0.2s ease;

    &:hover {
      color: ${p => (p.hover ? '#fff' : null)};
    }
  `;
  return (
    <SVG margin={props.margin}>
      <Styled color={props.color} size={props.size} hover={props.hover} />
      {props.name && <Name>{props.name}</Name>}
    </SVG>
  );
};

export default StyledSVG;
