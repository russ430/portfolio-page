import React, { useState } from 'react';
import styled from 'styled-components';
import { BsHeart as Heart, BsHeartFill as HeartFill } from 'react-icons/bs';
import { RiSendPlaneLine as Plane } from 'react-icons/ri';

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
  font-size: 1.5rem;
  margin-top: 1rem;
`;

const SocialButtons = () => {
  const [heartFilled, setHeartFilled] = useState(false);

  return (
    <Container>
      {heartFilled ? (
        <HeartFill
          onClick={() => setHeartFilled(false)}
          size="25"
          style={{ marginRight: '0.5rem', fill: 'red', cursor: 'pointer' }}
        />
      ) : (
        <Heart
          onClick={() => setHeartFilled(true)}
          size="25"
          style={{ marginRight: '0.5rem', cursor: 'pointer' }}
        />
      )}
      <Plane size="27" />
    </Container>
  );
};

export default SocialButtons;
