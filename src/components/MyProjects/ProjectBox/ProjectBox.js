import React from 'react';
import styled from 'styled-components';
import project from '../../../img/fake-proj-img.png';
import { boxShadowSmall } from '../../../UI/boxShadow/boxShadow';
import * as colors from '../../../UI/colors/colors';
import alex from '../../../img/me-cut-half.png';

const Container = styled.div`
  display: flex;
  border-radius: 0.3rem;
  flex-direction: column;
  width: 40rem;
  background-color: white;
  box-shadow: ${boxShadowSmall};
  border: 1px solid #e3e3e3;
  overflow: hidden;
`;

const ProjTitle = styled.h2`
  font-size: 2rem;
  margin: 0;
  padding: 0.5rem;
`;

const ProjViewBtn = styled.button`
  font-size: 2rem;
  border: none;
  background-color: #1372cc;
  padding: 0.5rem 1rem;
  color: white;
  border-radius: 0.3rem;
  cursor: pointer;
  margin: 0.5rem 0 1rem 0;
`;

const ProjImg = styled.img`
  width: 100%;
`;

const ProjDescription = styled.p`
  font-size: 1.8rem;
  padding: 0.5rem;
  margin: 0;
  text-align: center;
`;

const ProjHeader = styled.div`
  width: 100%;
  padding: 0.5rem;
  font-size: 1.5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const ProjHeaderName = styled.p`
  margin-left: 2rem;
  padding: 0;
`;

const Picture = styled.div`
  background-image: url(${alex}), linear-gradient(${colors.primary}, ${colors.primaryDark});
  height: 3rem;
  width: 3rem;
  margin-left: 2rem;
  border-radius: 100rem;
  border: 1px solid ${colors.primaryLight};
  background-position: 53% 0%;
  background-repeat: no-repeat;
  background-size: cover;
`;

const ProjButtons = styled.div`
  display: flex;
  padding: 0.5rem;
  font-size: 1.5rem;
`;

const ProjectBox = () => (
  <Container>
    <ProjHeader>
      <Picture />
      <ProjHeaderName>alexRussian</ProjHeaderName>
    </ProjHeader>
    <ProjImg src={project} alt="Project A" />
    <ProjButtons>
      <p>Heart</p>
      <p>Comment</p>
      <p>Share</p>
    </ProjButtons>
    <ProjTitle>alexRussian</ProjTitle>
    <ProjDescription>
      A functional calculator emulator identical to the native iPhone calculator. Flip it to
      landscape mode to see the additional functions!
    </ProjDescription>
    <ProjViewBtn>View</ProjViewBtn>
  </Container>
);

export default ProjectBox;
