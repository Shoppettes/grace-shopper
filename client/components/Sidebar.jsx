import React from 'react';
import {connect} from 'react-redux';
import {Products} from '../components'
import {Link} from 'react-router-dom'
import {setChosenCategory} from '../store'

const ListGroup = require('react-bootstrap').ListGroup
const ListGroupItem = require('react-bootstrap').ListGroupItem


export const Sidebar = (props) => {
  const {categories, clickHandler} = props
  return (

    <div id="sidebar-wrapper">
    <ListGroup bsClass="list-group">
      <div className="container-logo">
        <Link to="/">
          <img className="logo-img" src="./dino-logo.jpg" />
        </Link>
      </div>

      {categories && categories.map(category => <ListGroupItem bsClass="list-group-item" key={category.id}><Link to="/products" onClick={(event) => clickHandler(event, category)} >{category.name}</Link></ListGroupItem>)}
      </ListGroup>
    </div>


  )
};


const mapState = (state) => {
  return {
    categories: state.categories
  }

}

const mapDispatch = (dispatch) => {
  return {
    clickHandler(event, category) {
      dispatch(setChosenCategory(category))
    }
  }
}


export default connect(mapState, mapDispatch)(Sidebar);

