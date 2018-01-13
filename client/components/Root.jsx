import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Router, Route, Switch} from 'react-router-dom';
import PropTypes from 'prop-types';
import history from '../history';
import {Navbar, Sidebar, Footer, Home, Products, SingleProduct, Checkout, Cart} from '../components';
import {fetchCurrentUser, getProductsFromDb, getAllCategoriesFromDb, findOrCreateOrder, getCartByOrder} from '../store';


class Root extends Component {
  componentDidMount () {
    let user = {id: 1, name: 'John'}
    this.props.loadInitialData(user)
    this.props.loadCartData(1)
  }


  render () {
    const {isLoggedIn} = this.props
    return (
      <div>
        <span>This is the Root component.</span>
        <Router history={history}>
          <div>
          <Navbar />
            <Sidebar />
            <Footer />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/products" component={Products} />
              <Route path="/products/:productId" component={SingleProduct} />
              <Route path="/checkout" component={Checkout} />
              <Route path="/cart" component={Cart} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}


const mapState = (state) => {
  return {
    // Being 'logged in' means state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.currentUser,
    currentOrder: state.currentOrder,
    products: state.products,
    categories: state.categories
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadInitialData (user) {
      dispatch(fetchCurrentUser())
      dispatch(getProductsFromDb())
      dispatch(getAllCategoriesFromDb())
      // dispatch(findOrCreateOrder(user))
    },
    loadCartData (orderId) {
      // dispatch(getCartByOrder(orderId))
    }
  }
}

export default connect(mapState, mapDispatch)(Root)

/**
 * PROP TYPES
 */
Root.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  // isLoggedIn: PropTypes.bool.isRequired
}
