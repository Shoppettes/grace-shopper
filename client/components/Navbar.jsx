import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavLink, withRouter} from 'react-router-dom';
import {logout} from '../store/auth';

// This component is currently throwing an error that id is undefined because there is no current user on state

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.renderLoginSignup = this.renderLoginSignup.bind(this);
    this.renderLogout = this.renderLogout.bind(this);
  }

  render () {
    return (
      <div>
        <span>This is the NavBar component.</span>
        { this.props.currentUser.id ? this.renderLogout() : this.renderLoginSignup() }
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
      <ul className="nav navbar-nav navbar-right">
        <li>
          <NavLink to="/signup" activeClassName="active">signup</NavLink>
        </li>
        <li>
          <NavLink to="/login" activeClassName="active">login</NavLink>
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
}


const mapState = (state, props) => {
  return {
    currentUser: state.auth
  }
}

const mapDispatch = (dispatch) => {
  return {
    logout () {
      const action = logout();
      dispatch(action);
      ownProps.history.push('/')
    }
  }
}

export default withRouter(connect(mapState, mapDispatch)(Navbar));
