import React from 'react';
import "./reset.css";
import Navbar from './components/navbar';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className="container">
        <Navbar></Navbar>
      </div>
    );
  }
}

export default App;
