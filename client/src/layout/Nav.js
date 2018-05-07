import React, { Component } from 'react';
import Logout from '../auth/Logout.js';
import { Link } from 'react-router-dom';


class Nav extends Component {
  render(){
    let links = <span />;
    if(this.props.user){
      links = (
        <span>
          <Link to="/profile">Profile</Link>
          <Logout updateUser={this.props.updateUser} />
        </span>);
    }
    else {
      links = (
        <span>
          <li className="default-nav-item"><Link to="/login">Login</Link></li>
          <li className="default-nav-item"><Link to="/signup">Sign Up</Link></li>
        </span>);
    }
    return(
        <div>
          <nav className="default-nav">
            <ul className="default-nav-item-wrapper">
              <li className="default-nav-item"><a href="/">Home</a></li>
              {links}
            </ul>
          </nav>
        </div>
      );
  }
}

export default Nav;