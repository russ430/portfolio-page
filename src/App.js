import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div style={{ position: 'relative' }}>
      <NavBar />
      <Switch>
        <Route to="/" component={Home} />
        <Route to="/about" component={About} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
