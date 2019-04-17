import React, {Component} from 'react';
import { Card, Image, Dimmer, Button } from 'semantic-ui-react';

class ItemView extends Component {

  constructor() {
    super();
    this.state = {
      liked: false
    }
  }

  handleOnClick = (itemTitle) => {
    if (this.state.liked) {
      this.setState({ liked: false })
      this.props.likeStorage(itemTitle, false)
    } else {
      this.setState({ liked: true })
      this.props.likeStorage(itemTitle, true)
    }
  }

  render () {
  let item = this.props.data;

    return (

      <Card centered fluid>
        <Button 
          id='button-like'
          icon='thumbs up outline'
          inverted={!this.state.liked} 
          color={this.state.liked? 'red': null}
          onClick={() => this.handleOnClick(item.title)} />
        

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