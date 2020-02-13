import React from 'react';
import styled from 'styled-components';
import { Npm, ReactLogo, Sass, Wordpress } from 'styled-icons/fa-brands';
import { Redux, Git, Github, Nodejs, LinkedinSquare } from 'styled-icons/boxicons-logos';
import { Phonelink as Responsive } from 'styled-icons/material/Phonelink';
import { Email } from 'styled-icons/material';

const SVGs = {
  npm: Npm,
  github: Github,
  react: ReactLogo,
  sass: Sass,
  redux: Redux,
  git: Git,
  wordpress: Wordpress,
  responsive: Responsive,
  nodejs: Nodejs,
  linkedIn: LinkedinSquare,
  email: Email,
};

const SVG = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 1.5rem;

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
    <SVG>
      <Styled color={props.color} size={props.size} hover={props.hover} />
      {props.name && <Name>{props.name}</Name>}
    </SVG>
  );
};

export default StyledSVG;
