import React from 'react';
import styled from 'styled-components';
import { BsHeart as Heart } from 'react-icons/bs';
import { RiSendPlaneLine as Plane } from 'react-icons/ri';

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
  font-size: 1.5rem;
  margin-top: 1rem;
`;

const SocialButtons = () => (
  <Container>
    <Heart size="25" style={{ marginRight: '0.5rem' }} />
    <Plane size="27" />
  </Container>
);

export default SocialButtons;
