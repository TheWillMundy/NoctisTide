import React, { Component } from 'react';
import {Button, Icons} from 'react-materialize';

class Navbar extends Component {
  render() {
    return (
      <Button floating fab='vertical' icon='reorder' className='red' large style={{bottom: '45px', right: '24px'}}>
        <Button floating icon='insert_chart' className='red'/>
        <Button floating icon='format_quote' className='yellow darken-1'/>
        <Button floating icon='publish' className='green'/>
        <Button floating icon='attach_file' className='blue'/>
      </Button>
    );
  }
}

export default Navbar;
