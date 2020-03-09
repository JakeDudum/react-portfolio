import React from 'react';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import './App.css';

class App extends React.Component {
  state = {
    currentComponent: "AboutMe"
  };

  loadComponent() {
    let component;
    switch (this.state.currentComponent) {
      case 'AboutMe':
        component = <AboutMe />;
        break;
      case 'Projects':
        component = <Projects />;
        break;
      case 'Contact':
        component = <Contact />;
        break;
    }
    return component;
  }

  render() {
    return (
      <div className="container">
        <Navbar></Navbar>
        {this.loadComponent()}
      </div>
    );
  }
}

export default App;
