import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Router, Route, Switch} from 'react-router-dom';
import PropTypes from 'prop-types';
import history from '../history';
import {Navbar, Sidebar, Footer, Home, Products, SingleProduct, Checkout} from '../components';
import {fetchCurrentUser, getProductsFromDb, getAllCategoriesFromDb, findOrCreateOrder, setCart} from '../store';


class Root extends Component {
  componentDidMount () {
    let user = {id: 1, name: 'John'}
    this.props.loadInitialData()
    this.props.initializeOrder(user)
    //this.props.initializeCart([]);
  }

  render () {
    const {isLoggedIn} = this.props
    return (
      <div>
        <span>This is the Root component.</span>
        <span>{this.props.products.map(product => product.name)}</span>
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
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}


const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.currentUser,
    products: state.products
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadInitialData () {
      dispatch(fetchCurrentUser())
      dispatch(getProductsFromDb())
      dispatch(getAllCategoriesFromDb())
    },
    initializeOrder (user) {
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
