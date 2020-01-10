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
