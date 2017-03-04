import React, { Component } from 'react';
import {Row, Button} from 'react-materialize';

let imageURL = require('../assets/moonOverWater.jpg');
var backgroundStyle = {
  backgroundImage: `url(${imageURL})`,
  height: 705,
  overflowY: 'hidden',
  overflow: 'hidden',
  fontFamily: 'cinzel',
  textAlign: 'center',
}

class StartPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: props.width,
    }
  }

  componentDidMount() {
    this.setState({width:window.innerWidth + 'px'});
    var windowHeight = window.innerHeight;
    backgroundStyle.height = windowHeight;
  }

  changePage() {
    this.props.pageChanged();
  }

  render() {
    return (
      <Row>
        <div style={ backgroundStyle }>
          <h1 style={{color: 'white', paddingTop: 400, paddingLeft: 80}}>Noctis Tide</h1>
          <Button waves='light' style={{marginLeft: 80}} onClick={this.changePage.bind(this)}>button</Button>
        </div>
      </Row>
    );
  }
}

StartPage.propTypes = {
 width:React.PropTypes.string,
 height:React.PropTypes.string
};

StartPage.defaultProps = {
 width:'650px',
 height: '0px'
};

export default StartPage;
