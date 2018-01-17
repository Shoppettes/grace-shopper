import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavLink, withRouter, Link} from 'react-router-dom';
import {logout} from '../store';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.renderWelcome = this.renderWelcome.bind(this);
    this.renderLoginSignup = this.renderLoginSignup.bind(this);
    this.renderLoggedInUser = this.renderLoggedInUser.bind(this);
    this.renderNumberCartItems = this.renderNumberCartItems.bind(this);
  }

  render () {
    return (
      <div id="nav-bar-wrapper">
        <div className="nav-container">
          <div className="nav-item">
            <NavLink to="/products">All Products</NavLink>
          </div>
          <div className="nav-item">
            { this.props.currentUser.id ? this.renderLoggedInUser() : this.renderLoginSignup() }
          </div>
          <div className="nav-item">
            <NavLink to="/cart" activeClassName="active">view cart</NavLink><br/>
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
      </ul>
    );
  }

  renderLoggedInUser () {
    return (
      <ul className="nav navbar-nav">
        <ul className="nav navbar-nav">
          <li>Welcome {this.props.currentUser.firstName}</li>
        </ul>
        <li>
          <Link to='/past-orders'>View past orders</Link>
        </li>
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
