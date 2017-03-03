import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import StartPage from './components/startPage';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <StartPage />
      </div>
    );
  }
}

export default App;
