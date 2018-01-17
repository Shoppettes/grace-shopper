import React, {Component} from 'react';
import {connect} from 'react-redux';
import {signup} from '../store';

class CreateAccount extends Component {
  constructor(props) {
    super(props);
    this.onSignupSubmit = this.onSignupSubmit.bind(this);
  }

  render() {
    return (
      <div className="signin-container">
        <div className="buffer local">
          <form onSubmit={this.onSignupSubmit}>
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
            <button type="submit" className="btn btn-block btn-primary">Create account</button>
          </form>
        </div>
      </div>
    );
  }

  onSignupSubmit(event) {
    event.preventDefault();
    this.props.signup({
      email: event.target.email.value,
      password: event.target.password.value
    })
  }
}

const mapState = null;

const mapDispatch = dispatch => {
  return {
    signup (credentials) {
      dispatch(signup(credentials));
    }
  }
};

export default connect(mapState, mapDispatch)(CreateAccount);
