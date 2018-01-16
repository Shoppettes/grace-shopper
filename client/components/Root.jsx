import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Router, Route, Switch} from 'react-router-dom';
import PropTypes from 'prop-types';
import history from '../history';
import {Navbar, Sidebar, Footer, Home, Products, CreateAccount,Login, SingleProduct, Cart, Checkout, AuthForm, MyStoreCheckout} from '../components';
import {fetchCurrentUser, fetchAllProducts, fetchAllCategories, fetchCurrentOrder, findOrCreateOrder, getCartByOrder} from '../store';



class Root extends Component {
  componentDidMount () {
    this.props.loadInitialData();
    this.props.isLoggedIn && this.props.loadOrder(this.props.currentUser);
  }


  render () {
    const {isLoggedIn} = this.props
    return (
      <div>
        <Router history={history}>
          <div>
            <Navbar />
            <Sidebar />
            <div className="main-content-wrapper">
<<<<<<< HEAD
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/createaccount" component={CreateAccount} />
                <div className="sub-content-wrapper">
                  <Route path="/cart" component={Cart} />
                  <Route exact path="/products" component={Products} />
                  <Route path="/products/:productId" component={SingleProduct} />
                  <Route path="/checkout" component={MyStoreCheckout} />
                </div>
              </Switch>
=======
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/createaccount" component={CreateAccount} />
              <div className="sub-content-wrapper">
                <Route path="/admin-panel" component={AdminPanel} />
                <Route path="/cart" component={Cart} />
                <Route exact path="/products" component={Products} />
                <Route path="/products/:productId" component={SingleProduct} />
                <Route path="/checkout" component={Checkout} />
              </div>
            </Switch>
>>>>>>> 7eb65d57dc71c525e1a4c1fddcc93ae8d67d62cc
            </div>
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
      dispatch(fetchCurrentOrder())
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
