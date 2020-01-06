import React from 'react';
import styled from 'styled-components';
import project from '../../../img/fake-proj-img.png';

const Container = styled.div`
  display: flex;
  border-radius: 0.3rem;
  flex-direction: column;
  align-items: center;
  width: 40rem;
  background-color: white;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02), 0 6.7px 5.3px rgba(0, 0, 0, 0.028),
    0 12.5px 10px rgba(0, 0, 0, 0.035), 0 22.3px 17.9px rgba(0, 0, 0, 0.042),
    0 41.8px 33.4px rgba(0, 0, 0, 0.05), 0 100px 80px rgba(0, 0, 0, 0.07);
  border: 1px solid #e3e3e3;
  overflow: hidden;
`;

const ProjTitle = styled.h2`
  font-size: 2.5rem;
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

const ProjectBox = () => (
  <Container>
    <ProjImg src={project} alt="Project A" />
    <ProjTitle>Calculator</ProjTitle>
    <ProjDescription>
      A functional calculator emulator identical to the native iPhone calculator. Flip it to
      landscape mode to see the additional functions!
    </ProjDescription>
    <ProjViewBtn>View</ProjViewBtn>
  </Container>
);

export default ProjectBox;
