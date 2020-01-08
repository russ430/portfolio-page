import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilRuler, faCode, faComments } from '@fortawesome/free-solid-svg-icons';
import Header from './components/Header/Header';
import Projects from './components/MyProjects/Projects';
import * as colors from './UI/colors';

const Section = styled.div`
  padding: 5rem 0;
  background-color: ${colors.white};
  position: relative;
`;

const BoxHolder = styled.div`
  display: flex;
  justify-content: center;
  width: 70%;
  margin: 0 auto;
  background-color: ${colors.white};
  border-radius: 2rem;
  border: 1px solid #eee;
  margin-top: -12rem;
  box-shadow: 0 0.6px 1.6px rgba(0, 0, 0, 0.012), 0 1.3px 3.6px rgba(0, 0, 0, 0.017),
    0 2.3px 6.3px rgba(0, 0, 0, 0.021), 0 3.6px 10px rgba(0, 0, 0, 0.025),
    0 5.6px 15.5px rgba(0, 0, 0, 0.029), 0 8.7px 24.1px rgba(0, 0, 0, 0.033),
    0 14.5px 40px rgba(0, 0, 0, 0.038), 0 29px 80px rgba(0, 0, 0, 0.05);
`;

const Card = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  padding: 4rem;

  &:not(:last-child) {
    border-right: 1px solid #eee;
  }
`;

const CardHeading = styled.h3`
  font-size: 2.7rem;
  letter-spacing: 0.1rem;
  margin-bottom: 2rem;
`;

const CardBody = styled.p`
  font-size: 1.7rem;
  text-align: center;
  letter-spacing: 0.03rem;
  margin: 1rem 0;
`;

const CardSubHeading = styled.h4`
  font-size: 2.1rem;
  letter-spacing: 0.07rem;
  margin-bottom: 0.5rem;
  color: ${colors.primary};
`;

const List = styled.ul`
  list-style: none;
  text-align: center;
  margin: 1rem 0;
  padding: 0;
`;

const ListItem = styled.li`
  font-size: 1.7rem;
  letter-spacing: 0.03rem;
  margin: 0.5rem 0;
`;

const Icon = styled(FontAwesomeIcon)`
  color: ${colors.primary};
  margin: 2rem;
`;

function App() {
  return (
    <div id="home">
      <Header />
      <Section>
        <BoxHolder id="about">
          <Card>
            <Icon icon={faPencilRuler} size="5x" />
            <CardHeading>Web Design</CardHeading>
            <CardBody>
              I enjoy creating unique, responsive layouts custom-tailored for your user's needs.
            </CardBody>
            <CardSubHeading>Things I design:</CardSubHeading>
            <CardBody>UX, UI, Web, Desktop, Mobile</CardBody>
            <CardSubHeading>Design Tools:</CardSubHeading>
            <List>
              <ListItem>Inkscape</ListItem>
              <ListItem>Paper & Pencil</ListItem>
              <ListItem>Photoshop</ListItem>
            </List>
          </Card>
          <Card>
            <Icon icon={faCode} size="5x" />
            <CardHeading>Web Development</CardHeading>
            <CardBody>
              I believe websites must be fast, responsive, and compatible across all devices.
            </CardBody>
            <CardSubHeading>Languages:</CardSubHeading>
            <CardBody>HTML, CSS, Sass, Javascript</CardBody>
            <CardSubHeading>Dev Tools:</CardSubHeading>
            <List>
              <ListItem>CodePen</ListItem>
              <ListItem>Git</ListItem>
              <ListItem>Github</ListItem>
              <ListItem>React</ListItem>
              <ListItem>Redux</ListItem>
              <ListItem>styled-components</ListItem>
              <ListItem>Visual Studio Code</ListItem>
            </List>
          </Card>
          <Card>
            <Icon icon={faComments} size="5x" />
            <CardHeading>Communication</CardHeading>
            <CardBody>
              I value working closely with you to develop a product that exceeds expectations.
            </CardBody>
            <CardSubHeading>When I'm Available:</CardSubHeading>
            <CardBody>Monday-Saturday, 9am-7pm</CardBody>
            <CardSubHeading>How to Reach Me:</CardSubHeading>
            <List>
              <ListItem>Call</ListItem>
              <ListItem>Text</ListItem>
              <ListItem>FaceTime</ListItem>
              <ListItem>Email</ListItem>
            </List>
          </Card>
        </BoxHolder>
      </Section>
      <Projects />
    </div>
  );
}

export default App;
