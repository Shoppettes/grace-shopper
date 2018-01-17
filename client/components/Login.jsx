import React, {Component} from 'react';
import {connect} from 'react-redux';
import {login} from '../store';
import notification from 'toastr'

class Login extends Component {
  constructor(props) {
    super(props);
    this.onLoginSubmit = this.onLoginSubmit.bind(this);
  }

  render() {
    return (
      <div className="signin-container">
        <div className="buffer local">
          <form onSubmit={this.onLoginSubmit}>
            <div className="form-group">
              <label>email</label>
              <input
                name="email"
                type="email"
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
                <label>password</label>
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  required
                />
            </div>
            <button type="submit" className="btn btn-block btn-primary">Login</button>
          </form>
        </div>
        <div className="or buffer">
          <div className="back-line">
            <span>OR</span>
          </div>
        </div>
        <div className="buffer oauth">
          <p>
            <a
              target="_self"
              href="/auth/google"
              className="btn btn-social btn-google">
              <i className="fa fa-google" />
              <span>Login with Google</span>
            </a>
          </p>
        </div>
      </div>
    );
  }

  onLoginSubmit() {
    event.preventDefault()
          this.props.login({
          email: event.target.email.value,
          password: event.target.password.value
        })

  }
}

/* -----------------    CONTAINER     ------------------ */

const mapState = function({user}) {
  return {

  }
}

const mapDispatch = function(dispatch) {
  return {
    login (credentials) {
      dispatch(login(credentials))
    }
  }
}

export default connect(mapState, mapDispatch)(Login)


