import React, {Component} from 'react';
import ItemView from './ItemView';
import { Grid } from 'semantic-ui-react'

class HomePage extends Component {

  state = { products: [] }

  componentDidMount = () => {
    fetch('https://5c78274f6810ec00148d0ff1.mockapi.io/api/v1/products')
    .then(response => response.json())
    .then(data => this.setState({ products: data}))
  }

  render() {
    const { products } = this.state;
    console.log(products)
    return (
      <div>
        <p> HomePage </p>

        <Grid relaxed doubling columns={4}>
        {products.map(item => {
          return (
            <Grid.Column>
            <ItemView data={item} key={item.id} />
            </Grid.Column>
          )
        })}
        </Grid>
      </div>
    );
  }
}

export default HomePage;