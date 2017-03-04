import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import StartPage from './components/startPage';
import Viewer from './components/Viewer';
import Viewer2 from './components/Viewer2';

class App extends Component {
  constructor() {
    super();
    this.state = {
      landingPage: true
    }
  }

  changePage() {
    this.setState({landingPage: false});
  }

  render() {
    return (
      <div>
        <Navbar />
        {this.state.landingPage ? (<StartPage pageChanged={this.changePage.bind(this)} />) : <Viewer2 /> }
      </div>
    );
  }
}

export default App;
