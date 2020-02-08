import React from 'react';
import styled from 'styled-components';
import { boxShadowSmall } from '../../../UI/boxShadow/boxShadow';
import TopHeader from './TopHeader/TopHeader';
import SocialButtons from './SocialButtons/SocialButtons';

const Box = styled.div`
  display: flex;
  border-radius: 0.3rem;
  flex-direction: column;
  width: 40rem;
  background-color: white;
  box-shadow: ${boxShadowSmall};
  border: 1px solid #e3e3e3;
  overflow: hidden;
  margin: 1rem;
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
  padding: 0 1.5rem 1.5rem 1.5rem;
  margin: 0.5rem 0 0 0;
  text-align: left;
  display: inline-block;
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
  </Box>
);

export default ProjectBox;
