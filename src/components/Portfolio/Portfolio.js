import React from 'react';
import styled from 'styled-components';
import PageHeader from '../../utils/PageHeader/PageHeader';
import * as colors from '../../UI/colors/colors';
import Projects from './Projects/Projects';

const Content = styled.div`
  background-color: ${colors.white};
  overflow: hidden;
`;

const Portfolio = () => (
  <>
    <PageHeader subHeading="See some of my work below">My Portfolio</PageHeader>
    <Content>
      <Projects />
    </Content>
  </>
);

export default Portfolio;
