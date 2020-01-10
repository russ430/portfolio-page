import React from 'react';
import styled from 'styled-components';
import { Heart } from 'styled-icons/feather';
import { ReactComponent as Plane } from '../../../img/plane.svg';
import project from '../../../img/fake-proj-img.png';
import { boxShadowSmall } from '../../../UI/boxShadow/boxShadow';
import * as colors from '../../../UI/colors/colors';
import alex from '../../../img/me-cut-half.png';

const Container = styled.div`
  display: flex;
  border-radius: 0.3rem;
  flex-direction: column;
  width: 40rem;
  background-color: white;
  box-shadow: ${boxShadowSmall};
  border: 1px solid #e3e3e3;
  overflow: hidden;
`;

const CaptionUsername = styled.span`
  font-size: 1.5rem;
  margin: 0 0.5rem 0 0;
  font-weight: 600;
`;

const ViewBtn = styled.button`
  font-size: 1.5rem;
  border: none;
  background-color: #1372cc;
  padding: 0.5rem 1rem;
  color: white;
  border-radius: 0.3rem;
  cursor: pointer;
`;

const Img = styled.img`
  width: 100%;
`;

const Caption = styled.p`
  font-size: 1.5rem;
  padding: 0 1.5rem 1.5rem 1.5rem;
  margin: 0.5rem 0 0 0;
  text-align: left;
  display: inline-block;
`;

const TopHeader = styled.div`
  padding: 1.5rem;
  font-size: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderUsername = styled.h2`
  margin: 0;
  padding: 0;
  font-weight: 600;
  font-size: 1.5rem;
`;

const Picture = styled.div`
  background-image: url(${alex}), linear-gradient(${colors.primary}, ${colors.primaryDark});
  height: 3rem;
  width: 3rem;
  border-radius: 100rem;
  border: 1px solid ${colors.primaryLight};
  background-position: 53% 0%;
  background-repeat: no-repeat;
  background-size: cover;
`;

const SocialButtons = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
  font-size: 1.5rem;
  margin-top: 0.5rem;
`;

const TopHeaderLeftBox = styled.div`
  display: flex;
`;

const TopHeaderTitlesBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;
  line-height: 1.7rem;
`;

const ProjectTitle = styled.p`
  font-size: 1.3rem;
  padding: 0;
  margin: 0;
  color: ${colors.greyMed};
`;

const PlaneBtn = styled(Plane)`
  width: 2.8rem;
  transform: rotate(23deg);
  margin: 0 0 0.5rem 1rem;
`;

const ProjectBox = () => (
  <Container>
    <TopHeader>
      <TopHeaderLeftBox>
        <Picture />
        <TopHeaderTitlesBox>
          <HeaderUsername>alexRussian</HeaderUsername>
          <ProjectTitle>Calculator</ProjectTitle>
        </TopHeaderTitlesBox>
      </TopHeaderLeftBox>
      <ViewBtn>View Project</ViewBtn>
    </TopHeader>
    <Img src={project} alt="Project A" />
    <SocialButtons>
      <Heart size="28" />
      <PlaneBtn />
    </SocialButtons>
    <Caption>
      <CaptionUsername>alexRussian</CaptionUsername>A functional calculator emulator identical to
      the native iPhone calculator. Flip it to landscape mode to see the additional functions!
    </Caption>
  </Container>
);

export default ProjectBox;
