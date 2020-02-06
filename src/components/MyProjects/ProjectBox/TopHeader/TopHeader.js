import React from 'react';
import styled from 'styled-components';
import alex from '../../../../assets/img/me-cut-half.png';
import * as colors from '../../../../UI/colors/colors';

const Container = styled.div`
  padding: 1.5rem;
  font-size: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Avatar = styled.div`
  background-image: url(${alex}), linear-gradient(${colors.primary}, ${colors.primaryDark});
  height: 3rem;
  width: 3rem;
  border-radius: 100rem;
  border: 1px solid ${colors.primaryLight};
  background-position: 53% 0%;
  background-repeat: no-repeat;
  background-size: cover;
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

const HeaderUsername = styled.h2`
  margin: 0;
  padding: 0;
  font-weight: 600;
  font-size: 1.5rem;
`;
const ProjectTitle = styled.p`
  font-size: 1.3rem;
  padding: 0;
  margin: 0;
  color: ${colors.greyMed};
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

const TopHeader = () => (
  <Container>
    <TopHeaderLeftBox>
      <Avatar />
      <TopHeaderTitlesBox>
        <HeaderUsername>alexRussian</HeaderUsername>
        <ProjectTitle>Calculator</ProjectTitle>
      </TopHeaderTitlesBox>
    </TopHeaderLeftBox>
    <ViewBtn>View Project</ViewBtn>
  </Container>
);

export default TopHeader;
