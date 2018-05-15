import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  handleEmailChange = (e) => {
    this.setState({email: e.target.value});
  }

  handlePasswordChange = (e) => {
    this.setState({password: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/auth/login', {
      email: this.state.email,
      password: this.state.password
    }).then((result) => {
      localStorage.setItem('mernToken', result.data.token);
      this.setState({ success: true });
      this.props.updateUser();
    }).catch((error) => {
      console.log('error returned', error.response.data);
      this.props.setFlash('error', error.response.status + ': ' + (error.response.data && error.response.data.error ? error.response.data.message : error.response.statusText));
    });
  }

  render() {
    let form = '';
    if(this.props.user){
      return (<Redirect to="/" />);
    }
    else {
      form = (<form onSubmit={this.handleSubmit}>
                <div className="form-input">
                  <label for="email">Email:</label>
                  <input id="email" name="Email"
                       placeholder="Enter your email"
                       value={this.state.email}
                       onChange={this.handleEmailChange}
                  />
                </div>
                <div className="form-input">
                  <label for="password">Password:</label>
                  <input id="password" name="Password"
                       placeholder="Enter your password"
                       type="password"
                       value={this.state.password}
                       onChange={this.handlePasswordChange}
                  />
                </div>
                <button type="submit" className="btn-primary">Login</button>
              </form>);
    }
    return (
      <div>
        {form}
      </div>
    );
  }
}

export default Login;