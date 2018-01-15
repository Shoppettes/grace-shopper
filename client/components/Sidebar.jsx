import React from 'react';
import {connect} from 'react-redux';
import {Products} from '../components'
import {Link} from 'react-router-dom'

export const Sidebar = (props) => {
  const {categories} = props
  return (
      <div id="sidebar-wrapper">
        <div className="sidebar-header">
          <Link to="/">
          <img id="sidebar-logo" src="./dino-logo.jpg" alt="modern dino" />
          </Link>
        </div>
        <ul className="sidebar-nav">
          <div>
            {categories && categories.map(category => <li className="sidebar-brand" key={category.id}><Link to="/products">{category.name}</Link></li>)}
          </div>
        </ul>
      </div>
  )
};


const mapState = (state) => {
  return {
    categories: state.categories
  }

}


export default connect(mapState, null)(Sidebar);
