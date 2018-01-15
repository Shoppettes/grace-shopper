import React from 'react';
import {connect} from 'react-redux';
import {Products} from '../components'
import {Link} from 'react-router-dom'
const ListGroup = require('react-bootstrap').ListGroup;
const ListGroupItem = require('react-bootstrap').ListGroupItem;

export const Sidebar = (props) => {
  const {categories} = props
  return (
      <div id="sidebar-wrapper">
        <ListGroup>
          <Link to="/">
          <img id="sidebar-logo" src="./dino-logo.jpg" alt="modern dino" />
          </Link>
            {categories && categories.map(category => <ListGroupItem className="sidebar-brand" key={category.id}><Link to="/products">{category.name}</Link></ListGroupItem>)}
        </ListGroup>
      </div>
  )
};


const mapState = (state) => {
  return {
    categories: state.categories
  }

}


export default connect(mapState, null)(Sidebar);
