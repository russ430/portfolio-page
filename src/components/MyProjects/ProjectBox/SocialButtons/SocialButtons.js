import React from 'react';
import styled from 'styled-components';
import { AiOutlineHeart as Heart } from 'react-icons/ai';
import { RiSendPlane2Line as Plane } from 'react-icons/ri';

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
  font-size: 1.5rem;
  margin-top: 0.5rem;
`;

const SocialButtons = () => (
  <Container>
    <Heart />
    <Plane />
  </Container>
);

export default SocialButtons;
