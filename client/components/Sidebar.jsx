import React from 'react';
import {connect} from 'react-redux';
import {Products} from '../components'
import {Link} from 'react-router-dom'

export const Sidebar = (props) => {
  const {categories} = props
  return (
    <div>
      {categories && categories.map(category => <div key={category.id}><Link to="/products">{category.name}</Link></div>)}
    </div>
  )
};

const mapState = (state) => {
  return {
    categories: state.categories
  }
  
}


export default connect(mapState, null)(Sidebar);
