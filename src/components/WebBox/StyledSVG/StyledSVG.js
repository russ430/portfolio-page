import React from 'react';
import styled from 'styled-components';
import { Npm, ReactLogo, Sass } from 'styled-icons/fa-brands';
import { Redux, Git, Github } from 'styled-icons/boxicons-logos';

const SVGs = {
  npm: Npm,
  github: Github,
  react: ReactLogo,
  sass: Sass,
  redux: Redux,
  git: Git,
};

const SVG = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1.5rem;
`;

const Name = styled.p`
  font-size: 1.8rem;
  margin: 0.5rem 0;
`;

const StyledSVG = props => {
  const Styled = styled(SVGs[props.svg])`
    padding: 0;
    color: ${p => p.color};
  `;
  return (
    <SVG>
      <Styled color={props.color} size="70" />
      <Name>{props.name}</Name>
    </SVG>
  );
};

export default StyledSVG;
