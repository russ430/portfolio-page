import React from 'react';
import styled from 'styled-components';
import * as colors from '../../UI/colors/colors';

const Btn = styled.button`
  background-color: ${colors.white};
  border: 1px solid transparent;
  cursor: pointer;
  padding: 1rem 2rem;
  border-radius: 5rem;
  color: ${colors.primary};
  font-size: 2rem;
  transition: all 0.2s ease;

  &:hover {
    background-color: transparent;
    transform: scale(1.1);
    border: 1px solid ${colors.white};
    color: ${colors.white};
  }

  @media screen and (max-width: 545px) {
    margin: 2rem 0;
  }
`;

const Button = props => <Btn type="button">{props.children}</Btn>;

export default Button;
