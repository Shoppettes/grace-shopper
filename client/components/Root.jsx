import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Router, Route, Switch} from 'react-router-dom';
import PropTypes from 'prop-types';
import history from '../history';
import {Navbar, Sidebar, Footer, Home, Products, CreateAccount,Login, SingleProduct, Cart, Checkout, AuthForm, MyStoreCheckout} from '../components';
import {fetchCurrentUser, fetchAllProducts, fetchAllCategories, findOrCreateOrder, getCartByOrder} from '../store';



class Root extends Component {
  componentDidMount () {
    this.props.loadInitialData();
    this.props.isLoggedIn ? this.props.loadOrder(this.props.currentUser) : this.props.loadOrder({})
  }


  render () {
    const {isLoggedIn} = this.props
    return (
      <div>
        <Router history={history}>
          <div id="content">
            <Navbar />
            <Sidebar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/createaccount" component={CreateAccount} />
              <Route path="/cart" component={Cart} />
              <Route exact path="/products" component={Products} />
              <Route path="/products/:productId" component={SingleProduct} />
              <Route path="/checkout" component={Checkout} />
            </Switch>
            <Footer />
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
    currentUser: state.user,
    currentOrder: state.currentOrder,
    products: state.products,
    categories: state.categories
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadInitialData (user) {
      dispatch(fetchCurrentUser())
      dispatch(fetchAllProducts())
      dispatch(fetchAllCategories())
    },
    loadOrder (user) {
      dispatch(findOrCreateOrder(user))
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
