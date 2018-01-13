import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Router, Route, Switch} from 'react-router-dom';
import PropTypes from 'prop-types';
import history from '../history';
import {Navbar, Sidebar, Footer, Home, Login, CreateAccount, Cart, Products, SingleProduct, Checkout} from '../components';
import {fetchCurrentUser, getProductsFromDb, getAllCategoriesFromDb, findOrCreateOrder, getCartByOrder} from '../store';


class Root extends Component {
  componentDidMount () {
    this.props.loadInitialData()
    // this.props.loadCartData(1)
  }


  render () {
    const {isLoggedIn} = this.props
    return (
      <div>
        <Router history={history}>
          <div>
          <Navbar />
            <Sidebar />
            <Footer />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/createaccount" component={CreateAccount} />
              <Route path="/cart" component={Cart} />
              <Route exact path="/products" component={Products} />
              <Route path="/products/:productId" component={SingleProduct} />
              <Route path="/checkout" component={Checkout} />
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
    isLoggedIn: !!state.user.id,
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
