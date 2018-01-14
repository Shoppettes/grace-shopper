import React from 'react';
import {connect} from 'react-redux';
import {Products} from '../components'
import {Link} from 'react-router-dom'

export const Sidebar = (props) => {
  const {categories} = props
  return (
    <div className="wrapper">
      <nav id="sidebar">
        <div className="sidebar-header">
          <h3>Sidebar Header</h3>
        </div>
        <Link className="active" to="/products">All Products</Link>
        <ul className="list-unstyled components">
          <div>
            {categories && categories.map(category => <li key={category.id}><Link to="/products">{category.name}</Link></li>)}
          </div>
        </ul>
      </nav>
    </div>
  )
};

const mapState = (state) => {
  return {
    categories: state.categories
  }
  
}


export default connect(mapState, null)(Sidebar);
