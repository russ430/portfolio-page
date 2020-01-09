import React from 'react';
import Header from './components/Header/Header';
import WebBox from './components/WebBox/WebBox';
import Projects from './components/MyProjects/Projects';

function App() {
  return (
    <div id="home">
      <Header />
      <WebBox />
      <Projects />
    </div>
  );
}

export default App;

// <Card>
// <Icon icon={faToolbox} size="5x" />
// <CardHeading>My Dev Tools</CardHeading>
// <List>
//   <ListItem>CodePen</ListItem>
//   <ListItem>Git</ListItem>
//   <ListItem>Github</ListItem>
//   <ListItem>Inkscape</ListItem>
//   <ListItem>Photoshop</ListItem>
//   <ListItem>React</ListItem>
//   <ListItem>Redux</ListItem>
//   <ListItem>Visual Studio Code</ListItem>
// </List>
// </Card>
