import React from 'react';
import styled from 'styled-components';
import { boxShadowSmall } from '../../../UI/boxShadow/boxShadow';
import TopHeader from './TopHeader/TopHeader';
import SocialButtons from './SocialButtons/SocialButtons';
import StyledSVG from '../../../utils/StyledSVG/StyledSVG';

const Box = styled.div`
  display: flex;
  padding: 1rem 0;
  border-radius: 0.3rem;
  flex-direction: column;
  width: 40rem;
  background-color: white;
  box-shadow: ${boxShadowSmall};
  border: 1px solid #e3e3e3;
  overflow: hidden;
  margin: 1rem;
  align-self: flex-start;
`;

const CaptionUsername = styled.span`
  font-size: 1.5rem;
  margin: 0 0.5rem 0 0;
  font-weight: 600;
`;

const Img = styled.img`
  width: 100%;
`;

const Caption = styled.p`
  font-size: 1.5rem;
  padding: 0 1.5rem;
  margin: 0.5rem 0 0 0;
  text-align: left;
  display: inline-block;
  margin: 1rem 0;
`;

const SVGs = styled.div`
  display: flex;
  padding: 0 1.5rem;
  justify-content: center;
`;

const Icon = styled.div`
  font-size: 1.5rem;
  text-align: center;
  margin: 0 0.5rem;

  a {
    text-align: center;
    color: #000;
  }
`;

const ProjectBox = props => (
  <Box>
    <TopHeader title={props.title} link={props.link} />
    <Img src={props.img} alt={props.alt} />
    <SocialButtons />
    <Caption>
      <CaptionUsername>alexRussian</CaptionUsername>
      {props.caption}
    </Caption>
    <SVGs>
      {props.svgs.map(s => (
        <Icon key={s.key}>
          <StyledSVG svg={s.svg} margin="null" color={s.color} size={s.size} />
          {s.name}
        </Icon>
      ))}
      {props.github && (
        <Icon>
          <a href={props.github} rel="noreferrer noopener">
            <StyledSVG svg="github" margin="null" size="30" />
            Github
          </a>
        </Icon>
      )}
    </SVGs>
  </Box>
);

export default ProjectBox;
