import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import {Row} from 'react-materialize';

import AboutUs from './AboutUs';

let imageURL = require('../assets/moonOverWater.jpg');
let backgroundStyle = {
  backgroundColor: '#2c3e50',
  height: window.innerHeight,
  overflowY: 'hidden',
  overflow: 'hidden',
  fontFamily: 'cinzel',
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center'
}

class Viewer extends Component {
  constructor() {
    super();
    this.state = {
      currentSlide: (<AboutUs />),

    }
  }
  render() {
    return (
      <MuiThemeProvider>
        <Row>
          <div style={backgroundStyle}>
            <Paper style={{height: 500, width: 750, marginTop: 25}} zDepth={2}>
              {this.state.currentSlide}
            </Paper>
          </div>
        </Row>
      </MuiThemeProvider>
    );
  }
}

export default Viewer;
