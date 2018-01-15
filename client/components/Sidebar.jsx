import React from 'react';
import {connect} from 'react-redux';
import {Products} from '../components'
import {Link} from 'react-router-dom'
const ListGroup = require('react-bootstrap').ListGroup
const ListGroupItem = require('react-bootstrap').ListGroupItem

export const Sidebar = (props) => {
  const {categories} = props
  return (

    <div id="sidebar-wrapper">
    <ListGroup bsClass="list-group">
      <div className="container-logo">
        <Link to="/">
          <img className="logo-img" src="./dino-logo.jpg" />
        </Link>
      </div>

      {categories && categories.map(category => <ListGroupItem bsClass="list-group-item" key={category.id}><Link to="/products">{category.name}</Link></ListGroupItem>)}
      </ListGroup>
    </div>

      /*<div id="sidebar-wrapper">
        <div id="sidebar-header">
          <Link to="/" >
          <img src="./dino-logo.jpg" alt="modern dino" height="200" width="200" />
          </Link>
        </div>
        <ul className="sidebar-nav">
          <div>
            {categories && categories.map(category => <li className="sidebar-brand" key={category.id}><Link to="/products">{category.name}</Link></li>)}
          </div>
        </ul>
      </div>*/
  )
};


const mapState = (state) => {
  return {
    categories: state.categories
  }

}


export default connect(mapState, null)(Sidebar);
