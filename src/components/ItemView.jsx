import React, {Component} from 'react';
import { Card, Image } from 'semantic-ui-react';

class ItemView extends Component {

  render () {
  const item = this.props.data;
  console.log(item)

    return (

      <p> ItemView </p>
    )
  }
}

export default ItemView;