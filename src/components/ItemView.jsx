import React, {Component} from 'react';
import { Card, Image } from 'semantic-ui-react';

class ItemView extends Component {

  state = {
    liked: false
  }

  renderShadow (item) {
    let itemImage;
    if (item.sold) {
      itemImage = <Image src={item.img} dimmer />
    } else {
      itemImage = <Image src={item.img} />
    }
    return itemImage
  }

  render () {
  let item = this.props.data;

    return (
      <Card centered fluid>
        {this.renderShadow(item)}
        
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