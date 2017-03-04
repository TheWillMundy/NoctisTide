import React, { Component } from 'react';
import {} from 'materialize-css';
import { findDOMNode } from 'react-dom';
import $ from 'jquery';
import AboutUs from './AboutUs';

var classnames = require('classnames');

class Viewer2 extends Component {
  constructor() {
    super();
    this.state = {
      carouselRef: {}
    }
  }
  carouselInitialization = () => {
    const el = findDOMNode(this.refs.carousel);
    this.setState({carouselRef: el});
    $(el).carousel({fullWidth: true});
  };

  handleClick() {
    console.log(this.state.carouselRef);
    $(this.state.carouselRef).carousel('next');
    console.log("Ran");
  }

  componentDidMount() {
    this.carouselInitialization();
  }

  render() {
    var carouselClass = classnames('carousel', 'carousel-slider');
    return (
      <div>
        <div className='carousel carousel-slider' data-indicators={true} ref="carousel">
          <a className="carousel-item" href="#one!">
            <AboutUs />
          </a>
          <a className="carousel-item" href="#two!">
            <h1>Nyeah</h1>
          </a>
        </div>
      </div>
    );
  }
}

export default Viewer2;
