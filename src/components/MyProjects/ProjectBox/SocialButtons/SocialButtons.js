import React from 'react';
import styled from 'styled-components';
import { Heart } from 'styled-icons/feather';
import { ReactComponent as Plane } from '../../../../assets/svg/plane.svg';

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
  font-size: 1.5rem;
  margin-top: 0.5rem;
`;

const PlaneBtn = styled(Plane)`
  width: 2.8rem;
  transform: rotate(23deg);
  margin: 0 0 0.5rem 1rem;
`;

const SocialButtons = () => (
  <Container>
    <Heart size="28" />
    <PlaneBtn />
  </Container>
);

export default SocialButtons;
