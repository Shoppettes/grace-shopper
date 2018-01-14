import React from 'react';
import {connect} from 'react-redux';
import {Products} from '../components'
import {Link} from 'react-router-dom'

export const Sidebar = (props) => {
  const {categories} = props
  return (
    <div>
      <Link to="/products">All Products</Link>
      <h6>Product Categories</h6>
      <div>
        {categories && categories.map(category => <div key={category.id}><Link to="/products">{category.name}</Link></div>)}
      </div>
    </div>
  )
};

const mapState = (state) => {
  return {
    categories: state.categories
  }
  
}


export default connect(mapState, null)(Sidebar);
