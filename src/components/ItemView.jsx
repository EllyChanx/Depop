import React, {Component} from 'react';
import { Card, Image, Dimmer, Button } from 'semantic-ui-react';

class ItemView extends Component {

  handleOnClick = (itemTitle, itemLiked) => {
    if (itemLiked) {
      this.props.likeStorage(itemTitle, false)
    } else {
      this.props.likeStorage(itemTitle, true)
    }
  }

  render () {
    let item = this.props.data;
    let itemLiked = this.props.liked;
    return (
      <div>
        <Card centered fluid>
          <Button 
            id='button-like'
            icon='thumbs up outline'
            inverted={!itemLiked} 
            color={itemLiked? 'red': null}
            onClick={() => this.handleOnClick(item.title, itemLiked)} />
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

      </div>
    )
  }
}

export default ItemView;