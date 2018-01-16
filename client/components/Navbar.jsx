import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavLink, withRouter, Link} from 'react-router-dom';
import {logout} from '../store';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.renderWelcome = this.renderWelcome.bind(this);
    this.renderLoginSignup = this.renderLoginSignup.bind(this);
    this.renderLogout = this.renderLogout.bind(this);
    this.renderNumberCartItems = this.renderNumberCartItems.bind(this);
  }

  render () {
    return (
      <div id="nav-bar-wrapper">
        <div className="nav-container">
        <div className="nav-item"></div>
          <div className="nav-item">
          <NavLink to="/products">All Products</NavLink>
          </div>
          <div className="nav-item">
            { this.props.currentUser.id && this.renderWelcome() }
          </div>
          <div className="nav-item">
            { this.props.currentUser.id ? this.renderLogout() : this.renderLoginSignup() }
          </div>
          <div className="nav-item">
            <NavLink to="/cart" activeClassName="active">view cart</NavLink>
            {(this.props.currentOrder.products && this.props.currentOrder.products.length) && this.renderNumberCartItems()}
          </div>
        </div>
      </div>
    )
  };

  renderWelcome () {
    return (
      <ul className="nav navbar-nav">
        <li>Welcome {this.props.currentUser.firstName}</li>
      </ul>
    )
  }

  renderLoginSignup () {
    return (
      <ul className="nav navbar-nav">
        <li>
          <NavLink to="/createaccount" activeClassName="active">CREATE AN ACCOUNT</NavLink>
        </li>
        <li>
          <NavLink to="/login" activeClassName="active">SIGN IN</NavLink>
        </li>
        <li>
          <NavLink to="/cart" activeClassName="active"><img src="images/cart-icon.png" /></NavLink>
        </li>
      </ul>
    );
  }

  renderLogout() {
    return (
      <ul className="nav navbar-nav navbar-right">
        <li>
          <button className="navbar-btn btn btn-default" onClick={this.props.logout}>logout</button>
        </li>
      </ul>
    );
  }

  renderNumberCartItems () {
    return (
      <ul className="nav navbar-nav navbar-right">
        <li>{this.props.currentOrder.products.length}</li>
      </ul>
    );
  }
}

const mapState = (state, props) => {
  return {
    currentUser: state.user,
    currentOrder: state.currentOrder
  }
}

const mapDispatch = (dispatch, ownProps) => {
  return {
    logout () {
      dispatch(logout());
      ownProps.history.push('/')
    }
  }
}

export default withRouter(connect(mapState, mapDispatch)(Navbar));
