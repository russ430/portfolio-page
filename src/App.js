import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import ContactMe from './components/ContactMe/ContactMe';
import Portfolio from './components/Portfolio/Portfolio';

function App() {
  return (
    <div style={{ position: 'relative' }}>
      <NavBar />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contactme" component={ContactMe} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
