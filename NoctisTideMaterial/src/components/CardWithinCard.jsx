import React, { Component } from 'react';
import {Card, CardTitle} from 'react-materialize';

class CardWithinCard extends Component {
  render() {
    return (
      <div>
        <Card header={<CardTitle reveal image={require('../assets/startImage.jpg')} waves='light'/>}
            title="About Us"
            reveal={<p>Nyeah</p>}>
        </Card>
        <Card header={<CardTitle reveal image={require('../assets/startImage.jpg')} waves='light'/>}
            title="What We Do"
            reveal={<p>Nyeah2</p>}>
        </Card>
      </div>
    );
  }
}

export default CardWithinCard;
