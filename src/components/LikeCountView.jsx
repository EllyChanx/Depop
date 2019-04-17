import React from 'react';
import { Dropdown, Menu } from 'semantic-ui-react'

function LikeCountView(props) {
  let likeStatus = props.likeStatus;
  let likeCount = Object.values(likeStatus).filter(i => i === true).length
  let itemsAry = Object.keys(likeStatus)
  return (
    <div>
      <Dropdown text={likeCount? likeCount.toString() :'0'} 
                icon='thumbs up outline'
                pointing='top right' 
                floating labeled button 
                className='icon'
                id='like-dropdown' >
        <Dropdown.Menu>
          {itemsAry.map(item => {
            if (likeStatus[item]) { 
              return <Dropdown.Item key={itemsAry.indexOf(item)}> {item} </Dropdown.Item> 
            }
          })}
        </Dropdown.Menu>
      </Dropdown>

    </div>
  )
}

export default LikeCountView;