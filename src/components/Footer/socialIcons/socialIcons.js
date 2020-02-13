import React from 'react';
import { Link } from 'react-router-dom';

import iconsArr from './iconsArr/iconsArr';
import StyledSVG from '../../../utils/StyledSVG/StyledSVG';

const socialIcons = () => (
  <>
    {iconsArr.map(icon => {
      if (icon.link) {
        return (
          <a key={icon.svg} href={icon.link} target="_blank" rel="noopener noreferrer">
            <StyledSVG svg={icon.svg} color="grey" hover size="45" />
          </a>
        );
      }
      if (icon.to) {
        return (
          <Link key={icon.svg} to={icon.to}>
            <StyledSVG svg={icon.svg} color="grey" hover size="45" />
          </Link>
        );
      }
    })}
  </>
);

export default socialIcons;
