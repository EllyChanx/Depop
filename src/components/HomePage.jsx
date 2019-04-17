import React, {Component} from 'react';
import ItemView from './ItemView';
import { Button, Grid, Dropdown, Menu } from 'semantic-ui-react'

class HomePage extends Component {

  state = { 
    products: [],
    unsold: [],
    showAll: true,
    liked: []
  }

  componentDidMount = () => {
    var unsoldProducts = [];
    fetch('https://5c78274f6810ec00148d0ff1.mockapi.io/api/v1/products')
    .then(response => response.json())
    .then(data => {
      this.setState({ products: data});
      data.map(item => { if (!item.sold) {unsoldProducts.push(item)}})
    })
    this.setState({ unsold: unsoldProducts} )
  }

  handleOnClick = () => {
    this.state.showAll ? this.setState({ showAll: false }) : this.setState({ showAll: true })
  }

  updateLikedItems = (itemTitle, like) => {
    if (like) {
      var addedItems = this.state.liked.concat(itemTitle)
      this.setState({ liked: addedItems })
    } else {
      var likedItems = this.state.liked
      likedItems.splice(likedItems.indexOf(itemTitle), 1)
      this.setState({ liked: likedItems })
    }
  }

  render() {
    let shownItems;
    this.state.showAll? shownItems = this.state.products : shownItems = this.state.unsold;
    let {liked}  = this.state
    console.log(liked)
    return (
      <div>
        <h2> A Random Store! </h2>
        
        <Dropdown text={liked.length? liked.length.toString() :'0'} 
                  icon='thumbs up outline'
                  pointing='top right' 
                  floating labeled button 
                  className='icon' 
                  id='like-dropdown'>
          <Dropdown.Menu>
            {liked.map(item => {
              return ( <Dropdown.Item key={liked.indexOf(item)}>{item}</Dropdown.Item> )
            })}

          </Dropdown.Menu>
        </Dropdown>

        <Button toggle active={!this.state.showAll} onClick={this.handleOnClick} id='button-hide-sold'> Hide Sold Items </Button>
        <br />
        <Grid doubling divided columns={4} id='items-grid'>
        {shownItems.map(item => {
          return (
            <Grid.Column key={item.id}>
              <ItemView data={item} likeStorage={this.updateLikedItems} />
            </Grid.Column>
          )
        })}
        </Grid>
      </div>
    );
  }
}

export default HomePage;