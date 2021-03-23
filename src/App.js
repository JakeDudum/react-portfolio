import React from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Projects from './components/projects';
import AboutMe from './components/aboutMe';
import "./reset.css";
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div>
        <div className="container">
          <Navbar />
          <AboutMe />
          <Projects />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
