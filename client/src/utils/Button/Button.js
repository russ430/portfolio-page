import React from 'react';
import styled from 'styled-components';
import * as colors from '../../UI/colors/colors';

const Btn = styled.button`
  background-color: ${p => (p.color === 'primary' ? colors.primary : colors.white)};
  border: 1px solid transparent;
  cursor: pointer;
  padding: 1rem 2rem;
  border-radius: 5rem;
  color: ${p => (p.color === 'primary' ? 'white' : colors.primary)};
  font-size: ${p => (p.size === 'small' ? '1.5rem' : '2rem')};
  transition: all 0.2s ease;

  &:hover {
    background-color: transparent;
    transform: scale(1.1);
    border: 1px solid ${p => (p.color === 'primary' ? colors.primary : colors.white)};
    color: ${p => (p.color === 'primary' ? colors.primary : colors.white)};
  }

  @media screen and (max-width: 545px) {
    margin: 2rem 0;
  }
`;

const Button = props => (
  <Btn type="button" size={props.size} color={props.color}>
    {props.children}
  </Btn>
);

export default Button;
