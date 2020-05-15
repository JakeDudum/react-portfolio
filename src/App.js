import React from 'react';
import "./reset.css";
import Navbar from './components/navbar';
import Footer from './components/footer';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className="container">
        <Navbar></Navbar>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
