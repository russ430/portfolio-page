import React from 'react';
import styled from 'styled-components';
import PageHeader from '../../utils/PageHeader/PageHeader';
import * as colors from '../../UI/colors/colors';
import Vanderveer from '../../assets/img/vm-desktop.png';
import StyledSVG from '../../utils/StyledSVG/StyledSVG';

const Content = styled.div`
  background-color: ${colors.white};
  overflow: hidden;
  padding: 5rem 0;
`;

const Projects = styled.div`
  max-width: 120rem;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const Project = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 2;
`;

const Figure = styled.figure`
  padding: 2rem;
`;

const Img = styled.img`
  width: 100%;
`;

const Right = styled.div`
  flex: 1;
  padding: 2rem;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  font-weight: 500;
  color: ${colors.primary};
`;

const Description = styled.p`
  font-size: 1.5rem;
  color: ${colors.black};
  margin: 4rem 0;
`;

const SkillsList = styled.ul`
  list-style: none;
  margin: 3rem 0;
`;

const Skill = styled.li`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin: 1.5rem 0;
`;

const Button = styled.button`
  font-size: 1.5rem;
  background-color: ${colors.primary};
  border: 1px solid ${colors.primary};
  border-radius: 3rem;
  color: ${colors.white};
  padding: 1rem 2rem;
  margin-top: 4rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${colors.white};
    transform: scale(1.1);
    color: ${colors.primary};
  }
`;

const Portfolio = () => (
  <>
    <PageHeader subHeading="See some of my work below">Portfolio</PageHeader>
    <Content>
      <Projects>
        <Project>
          <Left>
            <Figure>
              <Img src={Vanderveer} alt="Vanderveer Motors Home Page" />
            </Figure>
          </Left>
          <Right>
            <Heading>Vanderveer Motors</Heading>
            <Description>
              A multi-page website created and hosted on WordPress. Fully responsive across all
              devices and cross-browser compatible. Includes email-based contact/message form and
              Google Maps integration.
            </Description>
            <SkillsList>
              <Skill>
                <StyledSVG svg="wordpress" size="30" color="#21759a" />
                Wordpress
              </Skill>
              <Skill>
                <StyledSVG svg="responsive" size="30" color="#000" />
                Responsive
              </Skill>
              <a href="http://www.vanderveermotors.com">
                <Button>See it live</Button>
              </a>
            </SkillsList>
          </Right>
        </Project>
      </Projects>
    </Content>
  </>
);

export default Portfolio;
