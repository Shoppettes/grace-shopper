import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavLink, withRouter, Link} from 'react-router-dom';
import {logout} from '../store';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.renderLoginSignup = this.renderLoginSignup.bind(this);
    this.renderLogout = this.renderLogout.bind(this);
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
            { this.props.currentUser.id ? this.renderLogout() : this.renderLoginSignup() }
          </div>
          <div className="nav-item">
            <NavLink to="/cart" activeClassName="active">view cart</NavLink>
          </div>
        </div>
      </div>
      // <Switch>
        //   {/* Routes placed here are available to all visitors */}
        //   <Route path="/login" component={Login} />
        //   <Route path="/signup" component={Signup} />
        //   {
        //     isLoggedIn &&
        //       <Switch>
        //         {/* Routes placed here are only available after logging in */}
        //         <Route path="/home" component={UserHome} />
        //       </Switch>
        //   }
        //   {/* Displays our Login component as a fallback */}
        //   <Route component={Login} />
        // </Switch>

    )
  };

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
          <NavLink to="/cart" activeClassName="active"><img src="/images/cart-icon.jpg" /></NavLink>
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
        <li>
          <NavLink to="/cart" activeClassName="active"><img src="/images/cart-icon.jpg" /></NavLink>
        </li>
      </ul>
    );
  }
}


const mapState = (state, props) => {
  return {
    currentUser: state.user
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
