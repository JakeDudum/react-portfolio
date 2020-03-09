import React from 'react';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import './App.css';

class App extends React.Component {
  state = {
    currentPage: "AboutMe"
  };

  render() {
    return (
      <Navbar></Navbar>
    );
  }
}

export default App;
