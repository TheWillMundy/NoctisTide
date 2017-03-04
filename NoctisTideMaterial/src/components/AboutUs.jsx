import React, { Component } from 'react';
import {Collapsible, CollapsibleItem} from 'react-materialize';
import {} from 'materialize-css';
import { findDOMNode } from 'react-dom';
import $ from 'jquery';

class AboutUs extends Component {
  enableAccordion = () => {
    const el = findDOMNode(this.refs.accordion);
    $(el).collapsible();
  };

  componentDidMount() {
    this.enableAccordion();
  }

  render() {
    return (
      <div>
        <ul className="collapsible" data-collapsible="accordion" style={{color: '#039be5', fontFamily: 'cinzel', textAlign: 'center', zDepth: 100}} ref="accordion">
         <li>
           <div className="collapsible-header"><i className="material-icons">filter_drama</i><h3>About Us</h3></div>
           <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
         </li>
         <li>
           <div className="collapsible-header"><i className="material-icons">place</i><h3>What We Do</h3></div>
           <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
         </li>
       </ul>
      </div>
    );
  }
}

export default AboutUs;
