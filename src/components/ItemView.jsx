import React, {Component} from 'react';
import { Card, Image, Dimmer, Button } from 'semantic-ui-react';

class ItemView extends Component {

  state = {
    liked: false
  }

  handleOnClick = () => {
    this.state.liked ? this.setState({ liked: false }) : this.setState({ liked: true })
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
          onClick={() => this.handleOnClick()} />
        

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