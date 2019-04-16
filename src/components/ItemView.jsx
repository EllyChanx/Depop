import React, {Component} from 'react';
import { Card, Image, Dimmer } from 'semantic-ui-react';

class ItemView extends Component {

  state = {
    liked: false
  }

  render () {
  let item = this.props.data;
  console.log(this.state)
    return (
      <Card centered fluid> 
        <Dimmer.Dimmable >
          <Image src={item.img} />
          <Dimmer active={item.sold} >
            <p id='dimmer-sold' > SOLD </p>
          </Dimmer>
        </Dimmer.Dimmable>
        <Card.Content>
          <Card.Description> {item.title} </Card.Description>
          <Card.Meta> {item.brand} </Card.Meta>
          <Card.Description> {item.size} </Card.Description>
          <Card.Header> Price: £{item.price} </Card.Header>
        </Card.Content>
      </Card>


    )
  }
}

export default ItemView;