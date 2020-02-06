import React from 'react';
import styled from 'styled-components';
import project from '../../../assets/img/fake-proj-img.png';
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

const ProjectBox = () => (
  <Box>
    <TopHeader />
    <Img src={project} alt="Project A" />
    <SocialButtons />
    <Caption>
      <CaptionUsername>alexRussian</CaptionUsername>A functional calculator emulator identical to
      the native iPhone calculator. Flip it to landscape mode to see the additional functions!
    </Caption>
  </Box>
);

export default ProjectBox;
