import React, {Component} from 'react';
import ItemView from './ItemView';
import LikeCountView from './LikeCountView';
import { Button, Grid } from 'semantic-ui-react'

class HomePage extends Component {

  state = { 
    products: [],
    unsold: [],
    showAll: true,
    likeStatus: {}
  }

  componentDidMount = () => {
    var unsoldProducts = [];
    fetch('https://5c78274f6810ec00148d0ff1.mockapi.io/api/v1/products')
    .then(response => response.json())
    .then(data => {
      this.setState({ products: data});
      data.forEach(item => { if (!item.sold) { unsoldProducts.push(item) } });
      data.forEach(item => { let likeStatus = {...this.state.likeStatus};
      likeStatus[item.title] = false;
      this.setState({likeStatus})
      })
    })
    this.setState({ unsold: unsoldProducts } )
  }

  handleOnClick = () => {
    this.state.showAll ? this.setState({ showAll: false }) : this.setState({ showAll: true })
  }

  updateLikedItems = (itemTitle, like) => {
    let likeStatus = {...this.state.likeStatus};
    if (like) {
      likeStatus[itemTitle] = true;
    } else {
      likeStatus[itemTitle] = false;
    }
    this.setState({likeStatus})
  }

  render() {
    let shownItems;
    this.state.showAll? shownItems = this.state.products : shownItems = this.state.unsold;
    let {likeStatus} = this.state
    return (
      <div>
        <h1> A Random Store! </h1>
        <LikeCountView likeStatus={likeStatus}/>
        <Button toggle active={!this.state.showAll} 
                onClick={this.handleOnClick} 
                id='button-hide-sold'> Hide Sold Items </Button>

        <Grid doubling divided columns={4} id='items-grid'>
        {shownItems.map(item => {
          return (
            <Grid.Column key={item.id}>
              <ItemView data={item} liked={likeStatus[item.title]} likeStorage={this.updateLikedItems} />
            </Grid.Column>
          )
        })}
        </Grid>

      </div>
    );
  }
}

export default HomePage;