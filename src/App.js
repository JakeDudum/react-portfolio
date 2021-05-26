import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Projects from './components/projects';
import Footer from './components/footer';
import "./reset.css";
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div>
        <div className="container">
          <Navbar />
          <Hero />
          <Projects />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;